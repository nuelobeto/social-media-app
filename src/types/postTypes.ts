export type PostType = {
  created_at: string;
  userId: number;
  userAvi: string;
  username: string;
  id: number;
  caption: string;
  media: string;
  likes: number;
};

export type InitialStateType = {
  posts: PostType[];
};
