import mongoose from "mongoose";
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

// create a new user with no courses
const createUser = async (body) => {
  try {
    const newUser = new User({
      name: body,
      courses: [],
    });
    await newUser.save();
    console.log(`New user is successfully saved: ${newUser.name}`);
    return newUser
  } catch (err) {
    return null;
  }
}

const readUserById = async (id) => {
  try {
    const user = await User.findOne({ name: id });
    if (!user) {
      const newUser = await createUser(id);
      return newUser;
    } else {
      return user
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const addCourse = async (id, courseId) => {
  try {
    const user = await User.findOne({ name: id });
    user.courses.push(courseId);
    await user.save();
    return user;
  } catch (err) {
    return null;
  }
};

export { addCourse, createUser, readUserById };


export default User;