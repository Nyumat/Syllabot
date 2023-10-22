import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
      fileName: {
            type: String,
            required: true,
      },
      contentType: {
            enum: ["application/pdf"],
            type: String,
            required: true,
      },
      userId: {
            type: String,
            required: true,
      },
      path: {
            type: String,
            required: true,
      },
}, { timestamps: true });

const File = mongoose.model("File", fileSchema);

const createFile = async (body) => {
      try {
            const newFile = new File({
                  fileName: body.fileName,
                  contentType: body.contentType,
                  userId: body.userId,
                  path: body.path,
            });
            await newFile.save();
            console.log(`New file is successfully saved: ${newFile._id}`);
            return newFile._id;
      } catch (err) {
            return null;
      }
};

export { createFile };
export default File;