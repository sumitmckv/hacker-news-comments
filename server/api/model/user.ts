import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
    username: string;
    password: string;
};

export const UserSchema = new Schema({
    username : {
        type: String,
        unique: true,
        required: true,
    },
    password : {
        type: String,
        required: true
    }
}, {timestamps: true});

export default model<IUser>("User", UserSchema);