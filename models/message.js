import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  sent: {
    type: Date,
    required: true,
  },
});

const Message = models.Message || model("Message", MessageSchema);

export default Message;
