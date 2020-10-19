import { NextFunction, Request, Response } from "express";
import {verify} from "jsonwebtoken";

export function validate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    if (!authHeader) return res.sendStatus(401)
  
    verify(authHeader, process.env.JWT_SECRET as string, (err: any, _user: any) => {
      console.error(err)
      if (err) return res.sendStatus(403)
      next()
    })
  }