import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const host = process.env.HOST;

let predictionData = 'Express Server'; 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req: Request, res: Response) => {
  res.render('index', { predictionData }); // Render the index.ejs file with the current prediction data
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://${host}:${port}`);
});