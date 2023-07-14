import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema(
  {
    kind: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subscription: {
      type: Boolean,
      required: true,
    },
    colorPallet: {
      type: [String],
    },
    attachments: {
      type: [Buffer],
    },
    notes: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Service = models.Service || model("Service", ServiceSchema);

export default Service;
