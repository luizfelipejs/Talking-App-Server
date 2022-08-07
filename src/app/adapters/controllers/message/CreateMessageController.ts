import { CreateMessageCase } from "../../../../useCases/CreateMessageCase";
import { Irequest } from "../../http/Irequest";
import { Iresponse } from "../../http/Iresponse";

export class CreateMessageController {
  constructor (
    private CreateMessageCase: CreateMessageCase
  ) {}

  async execute (request: Irequest, response: Iresponse) {
    const { idUser, idChat, text } = request.body;

    await this.CreateMessageCase.execute({ idUser, idChat, text })

    return response.json({ message: { status: 201, text: 'Message Created' } }).status(201);
  }
};


