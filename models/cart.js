import { Schema, model, models } from "mongoose";

const CartSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId, 
		ref: "User"
	}, 
	items: {
		type: [{title: String, desc: String, price: Number, subscription: Boolean}]
	}
});

const Cart = models.Cart || model("Cart", CartSchema);

export default Cart;
