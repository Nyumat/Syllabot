import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";

// Routes
import indexDocs from "./routes/indexDocs.js";
import queryDocs from "./routes/queryDocs.js";
import users from "./routes/users.js";

// Middleware
import tracker from "./middleware/tracker.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.MONGODB_URI;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: true,
});

app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(tracker);

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("[Backend ⚡️]: Database connected!");
    app.listen(PORT, () => {
      console.log(`[Backend ⚡️]: Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(
      "[Backend ⚡️]: Server is not running due to error: ",
      error
    );
  })

// Routes
// app.use('/api', limiter);
app.use("/api/index", indexDocs);
app.use("/api/query", queryDocs);
app.use("/api/users", users);


// Default Route
app.get("/", (req, res) => {
  res.send("Hello Syllabot!");
})


app.use("*", function (req, res, next) {
  res.status(404).json({
    error:
      "Requested resource " + req.originalUrl + " does not exist",
  });
});
