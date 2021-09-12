// Improting express cause that will be the middleWare
import express from "express";
// Mongoose for using the Mongo Atlas our database
import mongoose from "mongoose";
//Cors is another express middleware used for routing
import cors from "cors";

import templateRoutes from "./Routes/templates.js";
import dotenv from "dotenv";
dotenv.config();
var CONNECTION_URL = process.env.URL;
console.log(CONNECTION_URL)
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
//cors gives a protective layer to the HTTP request
app.use(cors());
app.use("/templates", templateRoutes);
// Why a PORT definiton? To specify for Heroku on what port to listen to
const PORT = process.env.PORT || 5000;

//Setting the Mongoose Connection
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
