import express, { Application, Request, Response } from 'express';
import Config from './utils/Configuration';
const app: Application = express();

try {
  app.listen(Config.port, (): void => {
    console.log(`Connected successfully on port ${Config.port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
