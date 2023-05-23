import {promises as fs} from "fs"
const { readFile, writeFile } = fs;

class CarrosController {
  
  async veiculos(req, res) {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        return res.send(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }

  async marcaPorQuantidadeModelos(req, res) {
    try {
        const ordem = req.query.ordem
        const data = JSON.parse(await readFile(global.fileName));

        const marca = data.map(({brand, models}) => {
            return {
                'marca': brand,
                'quantidade': models.length
            }
        }).sort((a,b) => {
            return (ordem === 'menor') ? a.quantidade - b.quantidade : b.quantidade - a.quantidade;
        })[0]

        return res.send(marca)
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }
}

export default new CarrosController();