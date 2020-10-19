import { Request, Response } from "express";
import { normalize } from "../../utils";
import Comment, { IComment } from "../model/comment";

export default class CommentsController {
    async getComments(req: Request, res: Response) {
        try {
            const comments = await Comment.find({postId: 1}).sort({createdAt: 1}).lean().exec();
            let threads: any = {};
            for (let i = 0; i< comments.length; i++) {
                const comment: any = comments[i];
                comment.children = {};
                const parentId = comment.parentId;
                if (!parentId) {
                    threads[comment._id] = comment;
                    continue;
                }
                normalize(comment, threads);
            }
            res.json({
                count: comments.length,
                comments: threads
            });
        } catch (error) {
            res.status(400).json({error});
        }
    }

    async addComments(req: Request, res: Response) {
        try {
            const { username, message, parentId, depth } = req.body;
            let data: IComment = { username, message };
            if (parentId) {
                data.parentId = parentId;
            }
            if (depth) {
                data.depth = depth;
            }
            const comment = new Comment(data);
            const newComment = await comment.save();
            res.status(201).json(newComment);
        } catch (error) {
            res.status(400).json({error});
        }
    }

    async updateComments(req: Request, res: Response) {
        try {
            let {id, message} = req.body;
            await Comment.updateOne({_id: id}, {$set: {message}})
            .exec();
            res.status(200).json({id, message});
        } catch (error) {
            res.status(500).json({error});
        }
    }
}