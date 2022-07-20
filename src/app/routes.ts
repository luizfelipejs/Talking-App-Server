import { Router } from "express"
import chatRoutes from "./routes/chatRoutes";
import userRoutes from "./routes/userRoutes";

const routes = Router();

routes.use(userRoutes)
routes.use(chatRoutes)

export default routes