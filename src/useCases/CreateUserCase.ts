import { IUserData } from "../domain/core/IUserData";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export default class CreateUserCase {
  constructor (
    private UserRepository: IUserRepository
  ) {}

  async execute (data: IUserData) {
    await this.UserRepository.createUser(data);
  }
}