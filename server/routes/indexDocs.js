import { Router } from 'express';
import { Document } from 'langchain/document';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import mongodb from 'mongodb';
import multer from 'multer';
import { processPdf } from '../lib/langchain.js';
import { pinecone } from '../lib/pinecone.js';
import { Readable } from 'stream';

const router = Router();

const uri = process.env.MONGODB_URI;

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
      const { userId, courseId } = req.body;
      const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);

      const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();

      const db = client.db()
      const bucket = new mongodb.GridFSBucket(db);

      const pdfData = req.file.buffer;
      console.log(pdfData);
      const pageContent = await processPdf(pdfData);

      const docs = [
            new Document({
                  metadata: { userId, courseId },
                  pageContent,
            }),
      ];

      try {
            await PineconeStore.fromDocuments(docs, new OpenAIEmbeddings(), {
                  pineconeIndex,
                  maxConcurrency: 5,
            }).then(async (store) => {
                  console.log(store);

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

export default router;
