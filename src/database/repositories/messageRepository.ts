import { AppDataSource } from "../data-source";
import { IMessage } from "../../domain/core/IMessage";
import { IMessageRepository } from "../../domain/repositories/IMessageRepository";
import { Message } from '../entities/message'

export class MessageRepository implements IMessageRepository{
  private messageRepository = AppDataSource.getRepository(Message);

  async create(data: IMessage) {
    const message = this.messageRepository.create(data);

    await this.messageRepository.save(message);
  }
}