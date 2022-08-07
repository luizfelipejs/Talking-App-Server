import { UserRepository } from "../database/repositories/userRepository";
import { IChatRepository } from "../domain/repositories/IChatRepository";
import { IMessageRepository } from "../domain/repositories/IMessageRepository";

interface Data {
  idUser: string,
  idChat: string,
  text: string
}

export class CreateMessageCase {
  constructor (
    private MessageRepository: IMessageRepository,
    private ChatRepository: IChatRepository,
    private UserRepository: UserRepository,
  ) {}

  async execute ({ idUser, idChat, text }: Data) {
    const user = await this.UserRepository.findUserById(idUser);
    const chat = await this.ChatRepository.findChatById(idChat);
    await this.MessageRepository.create({ user_sender: user, chat: chat, text: text })
  }
};
