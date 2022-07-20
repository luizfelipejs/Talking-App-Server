import { CreateChatCase } from "../../../../useCases/CreateChatCase";
import { FindArrayUserCase } from "../../../../useCases/FindArrayUserCase";
import { Irequest } from "../../http/Irequest";
import { Iresponse } from "../../http/Iresponse";

export default class CreateChatController {
  constructor (
    private CreateChatCase: CreateChatCase,
    private FindArrayUserCase: FindArrayUserCase
  ) {}

  async execute (request: Irequest, response: Iresponse) {
    const { usersIds } = request.body
    
    const users = await this.FindArrayUserCase.execute(usersIds)
    await this.CreateChatCase.execute(users)

    return response.json({ message: 'Chat Created' })
  }
}