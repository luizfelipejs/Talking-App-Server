import { IChatRepository } from "../../domain/repositories/IChatRepository";
import { AppDataSource } from "../data-source";
import { Chat } from "../entities/chat";
import { User } from "../entities/user";

export class ChatRepository implements IChatRepository {
  private ChatRepository = AppDataSource.getRepository(Chat);

  async createChat (users: User[]): Promise<void> {
    const chat = this.ChatRepository.create({ users: users });

    await this.ChatRepository.save(chat);
    console.log(`> chat ${chat.id} has been created`);
    return;
  }

  async findChatById (id: string): Promise<Chat> {
    return await this.ChatRepository.findOne({ where: { id } })
  }
}