export interface UserProps {
  id?: string;
  email?: string;
  password?: string;
  username?: string;
  role?: string;
  blocked?: boolean;
  verified?: boolean;
  image?: string;
  description?: string;
}

export enum UserTypeEnum {
  User = "user",
  Admin = "admin",
}
