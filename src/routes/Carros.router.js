import express from 'express';
import CarrosController from '../controllers/Carros.controller.js';

class CarrosRouter {
    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.get('/', CarrosController.veiculos);
        this.router.get('/marcaPorQuantidadeModelos', CarrosController.marcaPorQuantidadeModelos);
    }
}

export default new CarrosRouter().router;