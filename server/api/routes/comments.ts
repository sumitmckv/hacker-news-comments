import { Router } from "express";
import { validate } from "../../auth";
import CommentsController  from "../controller/CommentsController";

const commentsRouter = Router();
const controller = new CommentsController();

commentsRouter.get("/", controller.getComments);
commentsRouter.post("/", validate, controller.addComments);
commentsRouter.put("/", validate, controller.updateComments);

export default commentsRouter;