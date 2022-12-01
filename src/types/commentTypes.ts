export type CommentType = {
  postId: number;
  comment: string;
};

export type InitialStateType = {
  comments: CommentType[];
};
