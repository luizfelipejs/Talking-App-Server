import { IUser } from "../domain/core/IUser";
import { IChatRepository } from "../domain/repositories/IChatRepository";

export class CreateChatCase {
  constructor (
    private ChatRepository: IChatRepository
  ) {}

  async execute (data: IUser[]) {
    await this.ChatRepository.createChat(data);
  }
}