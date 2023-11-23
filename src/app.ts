import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// appliction routes
app.use('/api/v1/students', StudentRoute);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  const b = 100;
  res.send({ a, b });
});

export default app;
