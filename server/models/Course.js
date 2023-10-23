import mongoose from "mongoose";
import File from "./File.js";
import CourseDetails from "./CourseDetails.js";

const courseSchema = mongoose.Schema({
      files: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "File",
            }
      ],
      chats: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "Message", 
            }
      ],
      courseDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CourseDetails",
      },
      userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
      },
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);

const createCourse = async (body) => {
      try {
            const newCourse = new Course({
                  name: body.name,
                  files: body.files,
            });
            await newCourse.save();
            console.log(`New course is successfully saved: ${newCourse._id}`);
            return newCourse._id;
      } catch (err) {
            return null;
      }
};

const getCourseFiles = async (id) => {
      try {
            const course = await Course.findById(id);
            return course.files;
      } catch (err) {
            return null;
      }
};

const getCourseDetail = async (id) => {
      try {
            const course = await Course.findById(id);
            const courseDetailsId = course.courseDetails;
            const details = await CourseDetails.findById(courseDetailsId);
            return details;
      } catch (err) {
            return null;
      }
};



export { createCourse, getCourseFiles, getCourseDetail };

export default Course;