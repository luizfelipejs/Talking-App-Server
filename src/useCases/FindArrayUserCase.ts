import { IUserRepository } from "../domain/repositories/IUserRepository";

export class FindArrayUserCase {
  constructor (
    private IUserRepository: IUserRepository
  ) {}

  async execute (ids: string[]) {
    const users = await this.IUserRepository.findUsersByIds(ids);

    return users
  }
}