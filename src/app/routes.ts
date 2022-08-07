import { Router } from "express"
import chatRoutes from "./routes/chatRoutes";
import messageRoutes from "./routes/messageRoutes";
import userRoutes from "./routes/userRoutes";

const routes = Router();

routes.use(userRoutes)
routes.use(chatRoutes)
routes.use(messageRoutes)

export default routes