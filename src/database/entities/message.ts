import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Chat } from "./chat";
import { User } from "./user";

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => User, user => user.messages_sended)
  user_sender: User

  @ManyToOne(type => Chat, chat => chat.messages)
  chat: Chat

  @Column()
  text: string
};
