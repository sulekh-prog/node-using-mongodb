import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./src/routes/routes";

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
// const uri =
//   "mongodb+srv://sulekh:sulekh123@cluster0.q3yx2.mongodb.net/database1?retryWrites=true&w=majority";
// const client.connect = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// const URL =
//   "mongodb+srv://sulekh:sulekh123@cluster0.q3yx2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect("mongodb://localhost:4000/productsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

routes(app);

app.get("/", (req, res) => res.send(`Store server running on port ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
