import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
// const URL =
//   "mongodb+srv://sulekh:sulekh123@cluster0.q3yx2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect("mongodb://localhost/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.send(`Store server running on port ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
