"use strict";

import { Response, Request, NextFunction } from "express";
import { UserDocument } from "../models/User";


/**
 * Facebook API example.
 * @route GET /api/facebook
 */
export const getOrder = (req: Request, res: Response) => {
    const user = req.user as UserDocument;
    const token = user.tokens.find((token: any) => token.kind === "facebook");
    res.json(user);
};
