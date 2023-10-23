<div align="center">
  <img src="https://raw.githubusercontent.com/Nyumat/Syllabot/0d0f9bb1754460546b3707bca64363759e3f9e09/syllabotDark.svg" width="150px" height="25px">
</div>

<br></br>

## Inspiration
The inspiration for our project, Syllabot, comes from our experience as students having to dig through pages of syllabus text only to miss a crucial deadline or grading rule. We saw an opportunity to create a tool that would empower OSU students and help them succeed in their academic journey.

## What it Does
Syllabot is an academic chatbot designed to simplify the academic experience for OSU students. It takes course syllabi and files to answer any questions students have. Whether it's clarifying grading rules, highlighting an unusual due date, or offering guidance on assignments, Syllabot is your academic sidekick, ready to assist 24/7.

## How we built it
We built our application using a multitude of services/frameworks/tools:
- React.js for the client frontend
- Tailwind for styling
- DaisyUI for animations and UI components
- ExpressJS for our REST.API
- MongoDB for the document and course-info storage
- LangChain to parse PDF documents
- Pinecone as the VectorDB for our vectorized document data
- OpenAI's API for the generative chats 
- Render for frontend deployment

## Challenges We Ran Into
- Managing many different services and getting them to work together in fluidity.
- Reading **a lot** of documentation -- this was the first time any of us had use Vector Databases and embeddings. It took a lot of research and heads-down coding to get it working.
- Finding time to work as a team -- we all have busy lives as college students, and finding time to work for 72 hours brought some difficulties.
- Depricated/incompatible packages for our authentication manager in the back end.

## Accomplishments that we're proud of
- Finishing our project and getting it working! We were honestly surprised at the progress we made each day and are super proud of the end product.
- Learning a ton of new technologies

## What we learned
- Used Vector Databases for the first time
- Learned concepts regarding embeddings, 
- Worked together as a team for the first time

## What's next for Syllabot
- Improve AI chat generation using more metadata to query the vector database.
- Add options to remove and edit course files.
- Implement global state management to enhance security.
- Allow users to submit files without logging in.



<div align="center">
  <h2>🚀 Contributors 🚀</h2>
  <table>
    <tbody>
      <tr>
        <td align="center">
          <a href="https://github.com/ImgyeongLee">
            <img src="https://images.weserv.nl/?url=github.com/ImgyeongLee.png&fit=cover&mask=circle" width="80"><br>
            Imgyeong Lee
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/ipoogleduck">
            <img src="https://avatars.githubusercontent.com/u/28883682?v=4" width="80"><br>
            Oliver Elliott
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/Nyumat">
            <img src="https://images.weserv.nl/?url=github.com/Nyumat.png&fit=cover&mask=circle" width="80"><br>
            Tom Nyuma
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/Sankalpsp21">
            <img src="https://images.weserv.nl/?url=github.com/Sankalpsp21.png&fit=cover&mask=circle" width="80"><br>
            Sankalp Patil
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
