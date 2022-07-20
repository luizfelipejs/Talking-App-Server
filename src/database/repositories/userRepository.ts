import { IUser } from "../../domain/core/IUser";
import { IUserData } from "../../domain/core/IUserData";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user";

export class UserRepository implements IUserRepository {
  private userRepository = AppDataSource.getRepository(User);

  async createUser (user: IUserData): Promise<void> {
    const userCreated = this.userRepository.create(user);

    await this.userRepository.save(userCreated);

    console.log(`> user: ${userCreated.id} saved on database`);
    return;
  }

  async findUserById (id: string): Promise<User> {
    const user = await this.userRepository.findOne({ 
      where: { id },
      relations: {
        chats: true
      }
    })

    return user;
  }

  async findUsersByIds(ids: string[]): Promise<User[]> {
    const ArrayIdsObject = ids.map((id) => {
      return { id }
    })

    return await this.userRepository.find({ where: ArrayIdsObject })
  }
}
