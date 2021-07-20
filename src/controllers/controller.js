import mongoose from "mongoose";
import { productSchema } from "../models/model";
const Product = mongoose.model("product", productSchema);

export const addNewProduct = (req, res) => {
  const newProduct = new Product(req.body);

  newProduct.save((err, Product) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Product);
    }
  });
};
