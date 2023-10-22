import { Router } from 'express';
import { Document } from 'langchain/document';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { CharacterTextSplitter } from 'langchain/text_splitter';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import mongodb from 'mongodb';
import multer from 'multer';
import { Readable } from 'stream';
import { getCourseDetails } from '../lib/getter.js';
import { processPdf } from '../lib/langchain.js';
import { pinecone } from '../lib/pinecone.js';
import Course from '../models/Course.js';
import { createCourseDetails } from '../models/CourseDetails.js';
import File from '../models/File.js';
import { addCourse, createUser, readUserById } from '../models/User.js';


const router = Router();

const uri = process.env.MONGODB_URI;

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
      const { userId } = req.body;
      const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);

      const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();

      const db = client.db()
      const bucket = new mongodb.GridFSBucket(db);

      const pdfData = req.file.buffer;
      const pageContent = await processPdf(pdfData);

      // non-alpha
      let content = pageContent.replace(/[^a-zA-Z0-9 ]/g, '');
      // leading spaces
      content = content.replace(/^[ ]+/g, '');

      let data = new File({
            fileName: req.file.originalname,
            contentType: req.file.mimetype,
            userId,
            pageContent: content,
      });

      try {
            const courseDetails = await getCourseDetails(content);

            if (courseDetails) {
                  const details = JSON.parse(courseDetails);

                  const courseDetailsId = await createCourseDetails(details);

                  data.details = courseDetailsId;

                  console.log(`Course details is successfully saved: ${courseDetailsId}`)

            } else {
                  console.log(`Course details is not found`);
            }
      } catch (error) {
            console.log(error);
            client.close();
            return res.status(500).json({ error: error });
      }

      try {
            const user = await readUserById(userId);

            const course = new Course({
                  files: [new mongodb.ObjectId(data._id)],
                  chats: [],
                  courseDetails: data.details,
                  userId: new mongodb.ObjectId(user._id),
            });

            await course.save();

            await addCourse(user._id, course._id);

            data.courseId = new mongodb.ObjectId(course._id);

      } catch (error) {
            console.log(error);
            client.close();
            return res.status(500).json({ error: error });
      }


      try {
            await data.save();
      } catch (error) {
            console.log(error);
            client.close();
            return res.status(500).json({ error: error });
      }

      const splitter = new CharacterTextSplitter({
            chunkSize: 1536,
            chunkOverlap: 200,
      });

      const docs = await splitter.splitDocuments([
            new Document({
                  metadata: { userId, courseId: data.courseId, fileName: req.file.originalname },
                  pageContent,
            })
      ])

      try {
            await PineconeStore.fromDocuments(docs, new OpenAIEmbeddings(), {
                  pineconeIndex,
                  maxConcurrency: 5,
            }).then(async (store) => {
                  const uploadStream = bucket.openUploadStream(req.file.originalname);
                  const bufferStream = new Readable();
                  bufferStream.push(req.file.buffer);
                  bufferStream.push(null);
                  bufferStream.pipe(uploadStream);

                  uploadStream.on('error', function (error) {
                        console.log(error);
                        client.close();
                        return res.status(500).json({ error: error });
                  });

                  uploadStream.on('finish', function () {
                        console.log('File uploaded successfully');
                        client.close();
                        return res.status(200).json(store);
                  });
            });
      } catch (error) {
            console.log(error);
            client.close();
            return res.status(500).json({ error: error });
      }
});

router.patch('/', async (req, res) => {
      const { name } = req.body;
      try {
            const user = createUser({ name });
            res.status(201).send({ _id: user._id });
      } catch (err) {
            res.status(404).send({ ERROR: "error creating new user" });
      }
});

export default router;
