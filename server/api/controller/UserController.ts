import { Request, Response } from "express";
import {compare, genSalt, hash} from "bcrypt";
import {sign} from "jsonwebtoken";
import User, { IUser } from "../model/user";

export default class UserController {
    async register(req: Request, res: Response) {
        try {
            const {username, password} = req.body;
            const fUser = await User.find({username});
            if (Array.isArray(fUser) && fUser.length > 0) {
                return res.status(400).json({
                    message: "User exists"
                });
            }

            const saltKey = process.env.PASSWORD_SALT as string;
            const salt = await genSalt(Number(saltKey));
            const passwordHashed = await hash(password, salt);
            const user = new User({username, password: passwordHashed});
            const newUser: IUser = await user.save();
            const token = sign({
                username: newUser.username,
            }, process.env.JWT_SECRET as string, {expiresIn: "2h"});
            res.status(201).json({
                id: newUser._id,
                username: newUser.username,
                token
            });
        } catch (error) {
            res.status(400).json({error});
        }
    }

    async login(req: Request, res: Response) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username}).exec();
            if (!user) {
                return res.status(401).json({message: "User doesn't exists"});
            }
            const isPasswordSame: boolean = await compare(password, user.password);
            if (!isPasswordSame) {
                return res.status(401).json({message: "Unauthorized"});
            }
            const token = sign({
                username: user.username,
            }, process.env.JWT_SECRET as string, {expiresIn: "2h"});
            res.json({username, token});
        } catch (error) {
            res.status(400).json({error}); 
        }
    }
}