import { connectDB } from "@/utils/db.js";
import Cart from "@/models/cart";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const cart = await Cart.find({ user: params.id }).populate("user");
    return new Response(JSON.stringify(cart[0].items), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to fetch all Cart data", { status: 500 });
  }
};
