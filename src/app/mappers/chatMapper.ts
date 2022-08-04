import { IChat } from "../../domain/core/IChat";
import { messageMapper } from "./messageMapper";
import { userMapper } from "./userMapper";

export const chatMapper = (chat: IChat) => {
  return {
    id: chat.id,
    users: chat.users.map(userMapper),
    messages: chat.messages.map(messageMapper)
  }
}