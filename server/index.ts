import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import commentsRouter from "./api/routes/comments";
import userRouter from "./api/routes/user";
import DataBase from "./database";

const app = express();

app.use(bodyParser.json());

const db = new DataBase();
db.connect();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:8080"
}));

app.get('/', (req, res) => res.send("Hello from Hacker News comments API"));
app.use('/api/comments', commentsRouter);
app.use("/api/user", userRouter);

const port = process.env.PORT || "8181";
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});