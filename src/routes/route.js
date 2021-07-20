import { addNewProduct } from "../controllers/controller";
import { getProducts } from "../controllers/controller";
import { getProductWithID } from "../controllers/controller";

const routes = (app) => {
  app
    .route("/products")
    //get multiple products

    .get(getProducts);

  app
    .route("/products/:ProductID")
    //get a specific product with the id,  ProductId should be the same as in the controllers
    .get(getProductWithID);
};
// module.exports = routes;

export default routes;
