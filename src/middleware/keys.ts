"use strict";

import { checkAndIncrementKeyUsage } from "../services/keys";
import { Response, Request, NextFunction } from "express";

export const checkKeyUsage = (req: Request, res: Response, next: NextFunction) => {
  const key: string = req.query.api_key;
  if (!key) return res.status(403).send("Please provide an API key");
  const isLimited = checkAndIncrementKeyUsage(key);
  if (isLimited) return res.status(429).send("You've reached API key limit");
  next();
};