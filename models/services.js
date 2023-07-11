import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema({
  title: {
    type: String,
  },
  desc: {
  	type: String, 
  }, 
  price: {
  	type: Number
  }, 
  occurance: {
  	type: String
  }, 
  image: {
    type: String,
  },
});

const Service = models.Service || model("Service", ServiceSchema);

export default Service;
