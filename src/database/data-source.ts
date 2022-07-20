import "reflect-metadata"
import { DataSource } from "typeorm"
import { Chat } from "./entities/chat"
import { Message } from "./entities/message"
import { User } from "./entities/user"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "database_server",
    synchronize: true,
    logging: false,
    entities: [Chat, User, Message],
})
