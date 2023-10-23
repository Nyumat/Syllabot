import mongoose from "mongoose";

const courseDetailsSchema = mongoose.Schema({
      courseTitle: {
            type: String,
            required: false,
      },
      instructorName: {
            type: String,
            required: false,
      },
      classTimes: {
            type: String,
            required: false,
      },
      importantNotes: [
            {
                  title: {
                        type: String,
                        required: false,
                  },
                  description: {
                        type: String,
                        required: false,
                  }
            }
      ]
}, { timestamps: true });


const CourseDetails = mongoose.model("CourseDetails", courseDetailsSchema);

const createCourseDetails = async (body) => {
      console.log(body)
      console.log("cours", body.courseTitle)
      try {
            const newCourseDetails = new CourseDetails({
                  courseTitle: body.courseTitle,
                  instructorName: body.instructorName,
                  classTimes: body.classTimes,
                  importantNotes: body.importantNotes,
            });
            await newCourseDetails.save();
            console.log(`New course details is successfully saved: ${newCourseDetails._id}`);
            return newCourseDetails._id;
      } catch (err) {
            return null;
      }
}

const getCourseDetailModel = async (id) => {
      try {
            const courseDetails = await CourseDetails.findById(id);
            return courseDetails;
      } catch (err) {
            return null;
      }
}

export { createCourseDetails };

export default CourseDetails;