import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  name: String,
  date: String,
  price: Number,
});

export const Stock = mongoose.model("Stock", stockSchema);
