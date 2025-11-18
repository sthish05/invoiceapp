const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sathish:yourpassword@cluster0.mongodb.net/invoiceDB");
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
  }
};

module.exports = connectDB;