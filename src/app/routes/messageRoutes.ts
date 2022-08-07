import { Router } from "express";
import { ChatRepository } from "../../database/repositories/chatRepository";
import { MessageRepository } from "../../database/repositories/messageRepository";
import { UserRepository } from "../../database/repositories/userRepository";
import { CreateMessageCase } from "../../useCases/CreateMessageCase";
import { CreateMessageController } from "../adapters/controllers/message/CreateMessageController";

const messageRoutes = Router();

messageRoutes.post('/message', (request, response) => {
  const userRepository = new UserRepository();
  const messageRepository = new MessageRepository()
  const chatRepository = new ChatRepository()
  const createMessageCase = new CreateMessageCase(messageRepository, chatRepository, userRepository);
  new CreateMessageController(createMessageCase).execute(request, response);
})

export default messageRoutes;
