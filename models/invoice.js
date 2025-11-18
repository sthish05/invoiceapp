const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  tax: Number,
});

const InvoiceSchema = new mongoose.Schema({
  company: {
    name: String,
    address: String,
    email: String,
  },
  customer: {
    name: String,
    address: String,
    phone: String,
  },
  items: [ItemSchema],
  subtotal: Number,
  tax: Number,
  total: Number,
});

module.exports = mongoose.model("Invoice", InvoiceSchema);