import { IMessage } from "../../domain/core/IMessage";
import { userMapper } from "./userMapper";

export const messageMapper = (message: IMessage) => {
  return {
    id: message.id,
    text: message.text,
    user: userMapper(message.user_sender),
    chat: message.chat
  }
}