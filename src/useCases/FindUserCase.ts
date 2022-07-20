import { IUserRepository } from "../domain/repositories/IUserRepository";

export class FindUserCase {
  constructor (
    private UserRepository: IUserRepository
  ) {}

  async execute(id: string) {
    const user = await this.UserRepository.findUserById(id);

    return user;
  }
}