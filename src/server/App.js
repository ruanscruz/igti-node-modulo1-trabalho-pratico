import express from 'express';
import CarrosRouter from '../routes/Carros.router.js';

class App {
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(express.json());
  }

  routes() {
    this.express.get('/', (req, res) => {
      res.status(200).end('Api com Node.Js');
    });
    this.express.use('/carros', CarrosRouter)
  }
}

export default new App().express;