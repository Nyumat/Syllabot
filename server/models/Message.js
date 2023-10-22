import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
      text: {
            type: String,
            required: true,
      },
      bot: {
            type: Boolean,
            required: true,
      },
      course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
      },
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

const createMessage = async (body) => {
      try {
            const newMessage = new Message({
                  text: body.text,
                  bot: body.bot,
                  course: body.course,
            });
            await newMessage.save();
            console.log(`New message is successfully saved: ${newMessage._id}`);
            return newMessage._id;
      } catch (err) {
            return null;
      }
}

const getMessages = async (id) => {
      try {
            const messages = await Message.find({ course: id });
            return messages;
      } catch (err) {
            return null;
      }
}

export { createMessage, getMessages };

export default Message;

