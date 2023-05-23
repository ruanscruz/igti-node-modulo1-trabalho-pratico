import {promises as fs} from "fs"
const { readFile, writeFile } = fs;

class CarrosRepository {
    async quantidadeModelosMarcas(ordenacao = 'asc', quantidade = 1) {
        const data = JSON.parse(await readFile(global.fileName))

        const listaOrdenada = data.map(({brand, models}) => {
            return {
                'marca': brand,
                'quantidade': models.length
            }
        }).sort((a,b) => {
            let comparacao = (ordenacao === 'asc') ? a.quantidade - b.quantidade : b.quantidade - a.quantidade;
            if(comparacao == 0) {
                comparacao = a.marca.localeCompare(b.marca);
            }

            return comparacao
        })

        return listaOrdenada.slice(0, quantidade)
    }
    async modelosPorMarca(marca = '') {
        const data = JSON.parse(await readFile(global.fileName))
        const modelosMarca = data.filter(({brand, models}) => {
            return brand.toLowerCase() == marca;
        })
        
        return modelosMarca
        
    }
}

export default new CarrosRepository()