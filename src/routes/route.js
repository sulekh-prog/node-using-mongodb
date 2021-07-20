import { addNewProduct } from "../controllers/controller";
import { getProducts } from "../controllers/controller";
import { getProductWithID } from "../controllers/controller";

const routes = (app) => {
  app.get("/products", (req, res) => {});
};

app.get("/products/:ProductID", (req, res) => {});

module.exports = routes;

// export default routes;
