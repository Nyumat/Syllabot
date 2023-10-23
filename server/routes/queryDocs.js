import * as dotenv from "dotenv";
import { Router } from 'express';
import OpenAI from "openai";
dotenv.config();

const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
});

const router = Router();

dotenv.config();

router.post('/', async (req, res) => {

      const { query, metadata } = req.body

      const PROMPT = `
      You are syllabus bot, a bot that reads and parses college class syllabi.

      here's important information about the class:
      ${JSON.stringify(metadata)}

      consider this when answering the following questions:
      ${query}
      `;

      const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                  {
                        "role": "system",
                        "content": "You are syllabus bot, a bot that reads and parses college class syllabi. "
                  },
                  {
                        "role": "user",
                        "content": `${PROMPT}`
                  },
            ],
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
      });

      try {
            console.log(response)
            return res.status(200).json({
                  message: response.choices[0].message.content
            });
      } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error });
      }
});

export default router;




