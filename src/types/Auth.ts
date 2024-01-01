export interface User {
  id: number | string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
}

export type UserData = Pick<
  User,
  "firstName" | "lastName" | "email" | "phoneNumber" | "address"
>;

export type UserLogin = Pick<User, "email" | "password">;

export type UserRegister = Pick<
  User,
  "email" | "password" | "firstName" | "lastName"
>;

export type UserFullName = Pick<User, "firstName" | "lastName">;

export interface AuthenticationToken {
  token: string | null;
  refreshToken: string | null;
}
