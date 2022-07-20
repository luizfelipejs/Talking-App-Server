import { IUser } from "../core/IUser";
import { IUserData } from "../core/IUserData";

export interface IUserRepository {
  createUser (user: IUserData): Promise<void>;
  findUserById (id: string): Promise<IUser>;
  findUsersByIds (ids: string[]): Promise<IUser[]>
}