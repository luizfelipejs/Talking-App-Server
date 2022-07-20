import CreateUserCase from "../../../../useCases/CreateUserCase";
import { Irequest } from "../../http/Irequest";
import { Iresponse } from "../../http/Iresponse";

export class CreateUserController {
  constructor (
    private CreateUserCase: CreateUserCase    
  ) {}

  async execute (request: Irequest, response: Iresponse) {
    const { username, email, password, photo } = request.body;

    await this.CreateUserCase.execute({ username, email, password, photo })
    return response.json({
      message: 'UserCreated'
    })
  }
}