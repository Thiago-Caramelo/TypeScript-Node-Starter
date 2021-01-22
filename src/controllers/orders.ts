"use strict";

import { Response, Request } from "express";
import { Order } from "../models/Order";

/**
 * Get Orders
 * @route GET /orders
 */
export const getOrders = (req: Request, res: Response) => {
    const order = new Order(10);
    res.json([order]);
};
