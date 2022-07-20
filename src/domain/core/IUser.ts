import { IChat } from "./IChat";
import { IMessage } from "./IMessage";

export interface IUser {
  id: string;
  username: string
  email: string;
  password: string;
  photo: string;
  messages_sended: IMessage[]
  chats: IChat[]
}