export interface User {
  id?: number | string;
  fullName: string;
  email: string;
  password: string;
}

export type UserLogin = Pick<User, "email" | "password">;

export type UserRegister = Pick<User, "fullName" | "email" | "password">;
