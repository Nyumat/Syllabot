import mongoose from "mongoose";
import Course from "./Course.js";
import File from "./File.js";
const db = mongoose.connection.useDb("Syllabot");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", 
    },
  ],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

// create a new user with a new course and a new file
const createUser = async (body) => {
  try {
    // Create a new File
    const newFile = new File({
      fileName: body.fileName,
      contentType: body.contentType,
      userId: body.userId,
      path: body.path,
    });
    
    await newFile.save();

    // Create a new Course and associate the File with it
    const firstCourse = new Course({
      files: [newFile._id], // Associate the newFile with the Course
    });
    await firstCourse.save();

    // Create a new User and associate the Course with it
    const newUser = new User({
      name: body.name,
      courses: [firstCourse._id], // Associate the firstCourse with the User
    });
    await newUser.save();

    console.log(`New user is successfully saved: ${newUser._id}`);
    return newUser._id;
  } catch (err) {
    return null;
  }
};

const readUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    return null;
  }
};

const addCourse = async (id, body) => {
  try {
    const user = await User.findById(id);
    const newCourse = new Course({
      files: [],
    });
    await newCourse.save();
    user.courses.push(newCourse._id);
    await user.save();
    return newCourse._id;
  } catch (err) {
    return null;
  }
};

export { createUser, readUserById };
