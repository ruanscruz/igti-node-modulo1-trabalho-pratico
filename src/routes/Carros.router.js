import express from 'express';
import CarrosController from '../controllers/Carros.controller.js';

class CarrosRouter {
    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
        this.router.get('/', CarrosController.veiculos);
        this.router.get('/marcas/maisModelos', CarrosController.marcasComMaisModelos);
        this.router.get('/marcas/menosModelos', CarrosController.marcasComMenosModelos);
        this.router.get('/marcas/listaMaisModelos/:qtd', CarrosController.listaMaisModelos);
        this.router.get('/marcas/listaMenosModelos/:qtd', CarrosController.listaMenosModelos);
        this.router.get('/marcas/listaModelos/:marca', CarrosController.modelosPorMarca);
    }
}

export default new CarrosRouter().router;