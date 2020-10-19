import { Document, model, Schema } from "mongoose";

export interface IComment {
    postId?: number;
    parentId?: string;
    depth?: number;
    username: string;
    message: string;
}

export interface ICommentDoc extends Document, IComment {}

export const CommentSchema = new Schema({
    postId: {
        type: Number,
        default: 1
    },
    parentId: {
        type: Schema.Types.ObjectId,
        default: null
    },
    depth: {
        type: Number,
        default: 1
    },
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default model<ICommentDoc>("Comment", CommentSchema);