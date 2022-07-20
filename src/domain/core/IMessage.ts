import { IChat } from "./IChat"
import { IUser } from "./IUser"

export interface IMessage {
  id: string
  user_sender: IUser
  chat: IChat
  text: string
}
