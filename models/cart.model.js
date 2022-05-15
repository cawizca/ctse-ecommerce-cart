const mongoose = require("mongoose");
const uuid = require("uuid");
const Schema = mongoose.Schema;

const uuidv4 = uuid.v4();

const CartSchema = new Schema({
  cart_id: {
    type: String,
    required: true,
    default: uuidv4,
    index: true,
  },

  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: false,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  status: {
    type: String,
  },
  image: {
    type: String,
  },
  measuringUnit: {
    type: String,
  },
  availableQuantity: {
    type: Number,
  },
  minimumQuantity: {
    type: Number,
  },
  productCount: {
    type: Number,
  },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
