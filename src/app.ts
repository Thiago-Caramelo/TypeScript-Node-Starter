import express from "express";
import bodyParser from "body-parser";

import { checkKeyUsage } from "./middleware/keys";

// Controllers (route handlers)
import * as orderController from "./controllers/orders";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkKeyUsage);

/**
 * Primary app routes.
 */
app.get("/orders", orderController.getOrders);

export default app;
