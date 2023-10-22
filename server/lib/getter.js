import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
});

export async function getCourseDetails(content) {
      const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                  {
                        "role": "system",
                        "content": "You are syllabus bot, a bot that reads and parses college class syllabi. You need to return info for the syllabus in a json object with the following format:\n{\ncourseTitle: title of the course, string format\ninstructorName?: the name of the instructor as a string, if given in the syllabus\nclassTimes?:   a string of when the class meets if it is in the syllabus. It may look something like \"T/R 12:00 - 1:20 pm in person at LINC 228\"\nimportantNotes: An array of important notes about the class following this structure: {title: name of the important note, description: a description of the important note}\n}\nImportant notes may include:  needing over a 93% in class to get an A in the class, mandatory attendance, or regular weekly assignments\n\nOnly respond with the json object. Do not output any additional text"
                  },
                  {
                        "role": "user",
                        "content": `${content}`
                  },
            ],
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
      });

      const message = response.choices[0].message.content;
      return message;
}

