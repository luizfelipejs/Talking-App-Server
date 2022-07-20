import { IChat } from "../core/IChat";
import { IUser } from "../core/IUser";

export interface IChatRepository {
  createChat(users: IUser[]): Promise<void>
  findChatById(id: string): Promise<IChat>
}