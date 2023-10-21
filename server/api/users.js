const { Router } = require("express");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const { createUser, readUserById, userValidSchema} = require("../models/User");
const { createCourse, getCourseFiles, courseValidSchema} = require("../models/Course");
const { createFile, getCourseFiles} = require("../models/File");
const router = Router();

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
Fetch a user data by id
*/
router.get("/:userId", async (req, res, next) => {
    const userId = req.params.userId;
    var user = null;
    try {
      user = await readUserById(userId);
    } catch (err) {
      res.status(404).send({ ERROR: "Cannot find user" });
      return;
    }
  
    if (!user) {
      res.status(404).send({ ERROR: "Cannot find user" });
      return;
    }
  
    res.status(200).send(user);
    return;
  });


/*
Create a new course
  Name
  Files
*/
router.post("/:userId/course", async (req, res, next) => {
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
      res.status(404).send({ ERROR: "Cannot found user" });
      return;
    }
  
    if (!user) {
      res.status(404).send({ ERROR: "Cannot found user" });
      return;
    }
  
    res.status(200).send(user);
    return;
});

/*
Create a new file for a course
*/
router.post("/:userId/:courseId/file", async (req, res, next) => {
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

module.exports = router;
