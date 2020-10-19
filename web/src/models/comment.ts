export interface Comment {
  _id: string;
  postId?: number;
  parentId?: string;
  depth?: number;
  username: string;
  message: string;
  createdAt: string;
  children: Map<string, Comment>;
}

export interface CommentResponse {
  count: number;
  comments: Map<string, Comment>;
}

export interface AddComment {
  username: string;
  message: string;
  parentId?: string;
}

export interface EditComment {
  id: string;
  message: string;
}
