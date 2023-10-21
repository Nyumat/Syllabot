import * as dotenv from "dotenv";
import { Router } from 'express';
import { VectorDBQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { index } from "../lib/pinecone.js";

const router = Router();

dotenv.config();

router.post('/', async (req, res) => {

      const vectorStore = await PineconeStore.fromExistingIndex(new OpenAIEmbeddings(), { pineconeIndex: index });

      const results = await vectorStore.similaritySearch("pinecone", 1, {
            foo: "bar",
      });

      console.log("results:", results);

      const model = new OpenAI();

      const chain = VectorDBQAChain.fromLLM(model, vectorStore, {
            k: 1,
            returnSourceDocuments: true,
      });

      try {
            const response = await chain.call({ query: "What is a pinecone?" });
            return res.status(200).json(response);
      } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error });
      }

});

export default router;




