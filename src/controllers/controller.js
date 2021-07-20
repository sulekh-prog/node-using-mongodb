import mongoose from "mongoose";
import { productSchema } from "../models/model";
const Product = mongoose.model("Product", productSchema);

export const addNewProduct = (req, res) => {
  let newProduct = new Product(req.body);

  newProduct.save((err, Product) => {
    if (err) {
      res.send(err);
    }
      res.json(Product);
    
  });
};

export getProducts = (req, res) => {
   Product.find({},(err, Product) => {  //find all the products wwith the mongoose function find();
       if (err) {
           res.send(err);
       }
       res.json(Product);
   })
}

export getProductWithID = (req, res) => {
    // similar function find product with the mongoose function findById
    Product.findById(req.params.Product.id,(err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    })
    

    
}
