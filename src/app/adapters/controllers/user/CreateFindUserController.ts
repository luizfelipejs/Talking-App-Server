import { FindUserCase } from "../../../../useCases/FindUserCase";
import { userMapper } from "../../../mappers/userMapper";
import { Irequest } from "../../http/Irequest";
import { Iresponse } from "../../http/Iresponse";

export class CreateFindUserController {
  constructor (
    private FindUserCase: FindUserCase
  ) {}

  async execute (request: Irequest, response: Iresponse) {
    const { id } = request.params;
    const user = await this.FindUserCase.execute(id);

    return response.json({ user: userMapper(user) }).status(200);
  }
}