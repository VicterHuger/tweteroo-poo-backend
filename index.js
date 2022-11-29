import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import router from './routes/router.js';

class Server {
  constructor(app, port) {
    this.app = app;
    this.port = port || 5001;
  }

  configRouter() {
    this.app.use([cors(), json(), router]);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(chalk.bold.blue(`Server is listening in port ${this.port}`));
    });
  }

}

const app = new Server(express(), 5001);
app.configRouter();
app.listen();
