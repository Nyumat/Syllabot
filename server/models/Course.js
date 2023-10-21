import mongoose from "mongoose";
import File from "./File";

const courseSchema = mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      files: {
            type: [File],
            required: false,
      },
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);

export default Course;