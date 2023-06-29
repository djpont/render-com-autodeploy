import {startServer} from './server';
import dotenv from 'dotenv';

dotenv.config();

const port = Number(process.env.SERVER_PORT);

startServer(port);
