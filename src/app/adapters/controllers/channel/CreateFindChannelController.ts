import { FindChatCase } from "../../../../useCases/FindChatCase";
import { chatMapper } from "../../../mappers/chatMapper";
import { Irequest } from "../../http/Irequest";
import { Iresponse } from "../../http/Iresponse";

export default class CreateFindChannelController {
  constructor (
    private FindChatCase: FindChatCase
  ) {}

  async execute (request: Irequest, response: Iresponse) {
    const { id } = request.params;
    const chat = await this.FindChatCase.execute(id);
    return response.json({ chat: chatMapper(chat) }).status(200);
  }
};
