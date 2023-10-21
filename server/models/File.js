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

export default File;