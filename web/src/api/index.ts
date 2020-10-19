import {get, post, put} from './base';
import {User, UserResponse} from '@/models/user';
import {AddComment, CommentResponse, EditComment} from '@/models/comment';

export const user = {
  register: (req: User): Promise<UserResponse> =>
    post('user/register', {json: req}).json(),
  login: (req: User): Promise<UserResponse> =>
    post('user/login', {json: req}).json(),
};

export const comment = {
  getComments: (): Promise<CommentResponse> => get('comments').json(),
  addComment: (req: AddComment): Promise<Comment> =>
    post('comments', {json: req}).json(),
  editComment: (req: EditComment): Promise<Comment> =>
    put('comments', {json: req}).json(),
};
