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
      name: body.id,
      courses: [],
    });
    await newUser.save();
    console.log(`New user is successfully saved: ${newUser._id}`);
    return newUser._id;
  } catch (err) {
    return null;
  }
}



const readUserById = async (id) => {
  try {
    const user = await User.findOne({ name: id });
    if (!user) {
      const body = { id };
      const newUser = await createUser(body);
      return newUser;
    } else {
      console.log(`User found: ${user._id}`);
      return user;
    }
  } catch (err) {
    return null;
  }
};


const readUserByClerkId = async (name) => {
  try {
    const user = await User.findOne({ name }); 
    return user;
  } catch (err) {
    return null;
  }
};


const addCourse = async (id, body) => {
  try {
    const user = await User.findById(id);
    user.courses.push(courseId);
    await user.save();
    return user;
  } catch (err) {
    return null;
  }
};

export { addCourse, createUser, readUserById };

