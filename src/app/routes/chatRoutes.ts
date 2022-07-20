import { Router } from "express";
import { ChatRepository } from "../../database/repositories/chatRepository";
import { UserRepository } from "../../database/repositories/userRepository";
import { CreateChatCase } from "../../useCases/CreateChatCase";
import { FindArrayUserCase } from "../../useCases/FindArrayUserCase";
import CreateChatController from "../adapters/controllers/channel/CreateChannelController";

const chatRoutes = Router();

chatRoutes.post('/chat', (request, response) => {
  const userRepository = new UserRepository
  const chatRepository = new ChatRepository()
  const createChatCase = new CreateChatCase(chatRepository)
  const findArrayUserCase = new FindArrayUserCase(userRepository)
  
  new CreateChatController(createChatCase, findArrayUserCase).execute(request, response)
})

export default chatRoutes;
