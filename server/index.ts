import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import commentsRouter from "./api/routes/comments";
import userRouter from "./api/routes/user";
import DataBase from "./database";
import * as dotevn from "dotenv";
import RedisClient from "./database/redis";
dotevn.config();
const app = express();

app.use(bodyParser.json());

const db = new DataBase();
db.connect();

const redisClient = new RedisClient();
redisClient.connect();

app.use((req: Request, res: Response, next: NextFunction) => {
    if (redisClient.redis) {
        req.redis = redisClient.redis;
    }
    next();
})

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.get('/', (req, res) => res.send("Hello from Hacker News comments API"));
app.use('/api/comments', commentsRouter);
app.use("/api/user", userRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});