import { Router } from "express";
import { UserRepository } from "../../database/repositories/userRepository";
import CreateUserCase from "../../useCases/CreateUserCase";
import { FindUserCase } from "../../useCases/FindUserCase";
import { CreateFindUserController } from "../adapters/controllers/user/CreateFindUserController";
import { CreateUserController } from "../adapters/controllers/user/CreateUserController";

const userRoutes = Router();

userRoutes.post('/user', (req, res) => {
  const userRepository = new UserRepository()
  const createUserCase = new CreateUserCase(userRepository)
  new CreateUserController(createUserCase).execute(req, res);
})

userRoutes.get('/user/:id', (request, response) => {
  const userRepository = new UserRepository();
  const findUserCase = new FindUserCase(userRepository);

  new CreateFindUserController(findUserCase).execute(request, response);
});


export default userRoutes