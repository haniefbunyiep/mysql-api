import express, { Express, Request, Response } from 'express';
import router from './routes';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send(`<h1>😃 Welcome to Express</h1>`);
});

app.use(router);

app.listen(port, () => {
  console.log(
    `😃 🥶 ⚡️[server]: Server is running at http://localhost:${port}`
  );
});
