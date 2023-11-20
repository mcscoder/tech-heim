export interface User {
  id: number | string;
  fullName: string;
  email: string;
  password: string;
}

export type UserLogin = Pick<User, "email" | "password">;

export const userLoginFilter = (user: UserLogin): string => {
  const filter = `email=${user.email}&password=${user.password}`;
  return filter;
};

export type UserRegister = Pick<User, "email" | "password" | "fullName">;
