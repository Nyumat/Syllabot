import mongoose from "mongoose";
import File from "./File.js";

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



export { createCourse, getCourseFiles };

export default Course;