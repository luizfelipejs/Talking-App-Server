import { IChat } from "../core/IChat";
import { IUser } from "../core/IUser";

export interface IMessageRepository {
  create(data: { user_sender: IUser, chat: IChat, text: string }): Promise<void>;
};

