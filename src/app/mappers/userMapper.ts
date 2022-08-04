import { IUser } from "../../domain/core/IUser";

export const userMapper = (user: IUser) => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    photo: user.photo,
  }
};
