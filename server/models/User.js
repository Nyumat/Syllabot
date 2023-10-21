import mongoose from "mongoose";
import Course from "./Course";

const userSchema = mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      courses: {
            type: [Course],
            required: false,
      }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;