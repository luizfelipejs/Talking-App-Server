import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Chat } from "./chat";
import { Message } from "./message";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  username: string

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  photo: string;

  @OneToMany(type => Message, message => message.user_sender)
  messages_sended: Message[]

  @ManyToMany(type => Chat, chat => chat.users)
  chats: Chat[]
};
