import { Router } from 'express';
import { Document } from 'langchain/document';
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { pinecone } from "../lib/pinecone.js";

const router = Router();

router.get('/', async (req, res) => {

      const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);

      const docs = [
            new Document({
                  metadata: { foo: "bar" },
                  pageContent: "pinecone is a vector db",
            })
      ];

      try {
            await PineconeStore.fromDocuments(docs, new OpenAIEmbeddings(), {
                  pineconeIndex,
                  maxConcurrency: 5, // Maximum number of batch requests to allow at once. Each batch is 1000 vectors.
            }).then((store) => {
                  console.log(store);
                  return res.status(200).json(store);
            });
      }
      catch (error) {
            console.log(error);
            return res.status(500).json({ error: error });
      }

});

export default router;




