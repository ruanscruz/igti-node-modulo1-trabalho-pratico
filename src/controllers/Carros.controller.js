import CarrosRepository from "../repositories/Carros.repository.js";

class CarrosController {
  
  async veiculos(req, res) {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        return res.send(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }

  async marcasComMaisModelos(_, res) {
    try {
        const marca = await CarrosRepository.quantidadeModelosMarcas('desc');
        return res.send(marca);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }
  
  async marcasComMenosModelos(_, res) {
    try {
        const marca = await CarrosRepository.quantidadeModelosMarcas()
        return res.send(marca);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }
  async listaMaisModelos(req, res) {
    try {
        const { qtd } = req.params
        const lista = await CarrosRepository.quantidadeModelosMarcas('desc', qtd)
        return res.send(lista);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }

  async listaMenosModelos(req, res) {
    try {
        const { qtd } = req.params
        const lista = await CarrosRepository.quantidadeModelosMarcas('asc', qtd)
        return res.send(lista);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }
  async modelosPorMarca(req, res) {
    try {
        const { marca } = req.params
        const modelos = await CarrosRepository.modelosPorMarca(marca.toLowerCase())
        return res.send(modelos);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }

}

export default new CarrosController();