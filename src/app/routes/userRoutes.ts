import { Router } from "express";
import { UserRepository } from "../../database/repositories/userRepository";
import CreateUserCase from "../../useCases/CreateUserCase";
import { CreateUserController } from "../adapters/controllers/user/createUserController";

const userRoutes = Router();

userRoutes.post('/user', (req, res) => {
  const userRepository = new UserRepository()
  const createUserCase = new CreateUserCase(userRepository)
  new CreateUserController(createUserCase).execute(req, res);
})

export default userRoutes