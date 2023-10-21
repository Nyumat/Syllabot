import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';

// Middleware
import tracker from './middleware/tracker.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.MONGODB_URI;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: true,
});

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(tracker)

mongoose
.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then((status) => {
  app.listen(PORT, () => {
    console.log(`[Backend ⚡️]: Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.log("[Backend ⚡️]: Server is not running due to error: ", error);
})
.finally(() => {
  mongoose.connection.useDb("Syllabot");
  app.listen(PORT, () => {
    console.log("== Server is running on port ", PORT);
  });
});

// Routes
// app.use('/api', limiter);

// Default Route
app.get('/', (req, res) => {
  res.send('Hello Syllabot!');
});

app.use("*", function (req, res, next) {
  res.status(404).json({
    error: "Requested resource " + req.originalUrl + " does not exist",
  });
});


