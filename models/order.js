import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
  	user: {
  		type: Schema.Types.ObjectId, 
  		ref: "User", 
  		required: true
  	}, 
    productType: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subscription: {
      type: Boolean,
      required: true,
    },
    fulfilled: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: [true, "Please add a message about your order."],
    },
  },
  { timestamps: true }
);

const Order = models.Order || model("Order", OrderSchema);

export default Order;
