import { Router } from "express";
import mongoose from "mongoose";
import multer from 'multer';
import Course, { getCourseDetail } from "../models/Course.js";
import CourseDetails from '../models/CourseDetails.js';
import User, { createUser, readUserById } from "../models/User.js";
const { ObjectId } = mongoose.Types;
const upload = multer({ dest: "uploads/" });
const router = Router();

/*
TEST API
*/
router.get("/test", async (req, res, next) => {
  try {
    res.status(200).send({
      message: "This is the test message from the server",
    });
  } catch (err) {
    res.status(404).send({
      ERROR: "Error: the page does not exist",
    });
    next();
  }
});

/*
Create a new file entry 
  Name
  Courses
*/
router.post(
  "/newFile",
  upload.single("file"),
  async (req, res, next) => {
    try {
      const filePath = req.file.path;

      res.status(201).send({
        message: "File uploaded successfully",
      });
    } catch (err) {
      res.status(404).send({ ERROR: "Error getting the file" });
      next();
    }
  }
);

/*
Create a new user entry 
  Name
  Courses
*/
router.post("/", async (req, res, next) => {
  var body = null;
  try {
    const id = await createUser(body);
    res.status(201).send({ _id: id });
  } catch (err) {
    res.status(404).send({ ERROR: "error creating new user" });
    next();
  }
});

/*
Fetch user data by user id gotten from clerk
*/

router.post("/getCourses", async (req, res, next) => { // ClerkExpressWithAuth(),
  const userId = req.body.userId; //req.auth.userId;
  try {
    const user = await User.findOne({ name: userId });

    if (!user) {
      return res.status(404).send({ ERROR: "Cannot find user" });
    }

    const courses = await Course.find({ userId: user._id });
    let details = []
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      const courseDetail = await CourseDetails.findById(course.courseDetails);
      details.push(courseDetail);
    }
    return res.status(200).json({ courses, details });
  } catch (err) {
    return res.status(404).send({ ERROR: "Cannot find user" });
  }
});

/*
Creates a new course (and a new file) under a user
  Name
  Files
*/

router.post("/course", async (req, res, next) => {
  var body = null;
  try {
    body = await integrationValidSchema.validateAsync(req.body);
  } catch (err) {
    res.status(400).send({ ERROR: "Invalid body" });
    return;
  }

  // Check if userId's type is ObjectId
  if (!ObjectId.isValid(req.body.userId)) {
    res.status(400).send({ ERROR: "Invalid body" });
    return;
  }

  try {
    const id = await createIntegration(body);
    res.status(201).send({ _id: id });
  } catch (err) {
    next();
  }
});

/*
Delete a course 
*/
router.delete("/:userId/:courseId", async (req, res, next) => {
  var body = null;
  try {
    body = await integrationValidSchema.validateAsync(req.body);
  } catch (err) {
    res.status(400).send({ ERROR: "Invalid body" });
    return;
  }

  // Check if userId's type is ObjectId
  if (!ObjectId.isValid(req.body.userId)) {
    res.status(400).send({ ERROR: "Invalid body" });
    return;
  }

  try {
    const id = await createIntegration(body);
    res.status(201).send({ _id: id });
  } catch (err) {
    next();
  }
});

/*
Fetch course data by id
*/
router.get("/:userId/:courseId", async (req, res, next) => {
  const userId = req.params.userId;
  var user = null;
  try {
    user = await readUserById(userId);
  } catch (err) {
    return res.status(404).send({ ERROR: "Cannot found user" });
  }

  if (!user) {
    res.status(404).send({ ERROR: "Cannot found user" });
    return;
  }
});

/*
Create a new file for a course
*/
router.post("/:userId/:courseId/file", async (req, res, next) => {
  var body = null;
  try {
    body = await integrationValidSchema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).send({ ERROR: "Invalid body" });
  }

  // Check if userId's type is ObjectId
  if (!ObjectId.isValid(req.body.userId)) {
    res.status(400).send({ ERROR: "Invalid body" });
    return;
  }

  try {
    const id = await createIntegration(body);
    res.status(201).send({ _id: id });
  } catch (err) {
    next();
  }
});

/*
Delete a file from a course
*/
router.delete("/:userId/:courseId/file", async (req, res, next) => {
  var body = null;
  try {
    body = await integrationValidSchema.validateAsync(req.body);
  } catch (err) {
    res.status(400).send({ ERROR: "Invalid body" });
    return;
  }

  // Check if userId's type is ObjectId
  if (!ObjectId.isValid(req.body.userId)) {
    res.status(400).send({ ERROR: "Invalid body" });
    return;
  }

  try {
    const id = await createIntegration(body);
    res.status(201).send({ _id: id });
  } catch (err) {
    next();
  }
});

router.get('/details', async (req, res, next) => {
  const courseId = req.query.courseId;
  try {
    const courseDetails = await getCourseDetail(courseId);
    return res.status(200).json(courseDetails);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
);

export default router;
