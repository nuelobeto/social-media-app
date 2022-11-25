export type PostType = {
  created_at: string;
  userId: number;
  userAvi: string;
  username: string;
  id: number;
  caption: string;
};

export type InitialStateType = {
  posts: PostType[];
};
