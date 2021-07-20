import mongoose from "mongoose";
import { productSchema } from "../models/model";
const Product = mongoose.model("Product", productSchema);

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

export getProducts = (req, res) => {
    if(Product){
        res.send(Product.find());
    }else{
        res.send(err);
    }
}

export getProductWithID = (req, res) => {

    if(err) {
        res.send (err)

    }else{

    }
}
