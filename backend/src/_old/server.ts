
import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import './database';
import { router } from './routes/routes';


const app = express();

// Region for usage settings

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(router);

// Init server
app.listen(3333, () => {
   console.log("servidor rodando na porta 3333!");
});