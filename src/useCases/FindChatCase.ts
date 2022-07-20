import { IChatRepository } from "../domain/repositories/IChatRepository";

export class FindChatCase {
  constructor (
    private ChatRepository: IChatRepository
  ) {}

  async execute (id: string) {
    const chat = await this.ChatRepository.findChatById(id);

    return chat;
  }
}