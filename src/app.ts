import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Controllers (route handlers)
import * as orderController from "./controllers/orders";

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = process.env.MONGODB_URI;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).catch(err => {
    console.log(`MongoDB connection error. ${err}`);
    process.exit(-1);
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get("/orders", orderController.getApi);
app.post("/orders/:id", orderController.getApi);


export default app;
