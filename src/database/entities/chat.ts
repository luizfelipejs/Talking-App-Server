import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "./message";
import { User } from "./user";

@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToMany(type => User, user => user.chats)
  @JoinTable()
  users: User[]

  @OneToMany(type => Message, message => message.chat)
  messages: Message[]
};
