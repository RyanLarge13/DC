import { connectDB } from "@/utils/db.js";
import Order from "@/models/order";
import Product from "@/models/product";
import Service from "@/models/service";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const orders = await Order.find({ user: params.id }).populate("user");
    const products = await Product.find({ user: params.id }).populate("user");
    const services = await Service.find({ user: params.id }).populate("user");
    const data = {
      orders,
      products,
      services,
    };
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to fetch all data", { status: 500 });
  }
};
