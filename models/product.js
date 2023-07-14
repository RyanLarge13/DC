import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
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

const Product = models.Product || model("Product", ProductSchema);

export default Product;
