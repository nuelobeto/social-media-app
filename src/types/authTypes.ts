export type SavedUserType = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type RegisterUserType = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export type InitialStateType = {
  user: SavedUserType | null;
  users: SavedUserType[];
};
