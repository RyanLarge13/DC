import { Schema, model, models } from "mongoose";
import { MessageSchema } from "@/models/message";
import {OrderSchema} from "@/models/order";
import {ProductSchema} from "@/models/product";
import {ServiceSchema} from "@/models/service";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exsists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  phoneNumber: {
    type: String,
    match: [
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      "Please enter a valid phone number",
    ],
  },
  messages: {
    type: [MessageSchema],
    default: undefined,
  },
  orders: {
    type: [OrderSchema],
    default: undefined,
  },
  products: {
    type: [ProductSchema],
    default: undefined,
  },
  services: {
    type: [ServiceSchema],
    default: undefined,
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
