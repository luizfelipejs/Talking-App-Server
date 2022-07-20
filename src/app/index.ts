import express from 'express';
import http from 'http';
import { AppDataSource } from '../database/data-source';
import routes from './routes';

const app = express();
const server = http.createServer(app);
const port = 8080 || process.env.PORT;

app.use(express.json());
app.use(routes);

AppDataSource.initialize()
  .then(async () => {
    console.log('> DATABASE: On')
  })
  .catch((error) => console.warn(error))

server.listen(port, () => console.log(`> running on ${port}`));
