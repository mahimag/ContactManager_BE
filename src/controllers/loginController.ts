import { NextFunction, Request, Response } from "express";

import * as userService from "../services/userService";

export const signin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  userService
    .signin(email, password)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
