export class DataHelper {

    constructor() {
        throw new Error("A classe DataHelper não pode ser instanciada")
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    }

    static textoParaData(texto) {

        if(!/([0-3]?\d)\/([0-1]?[0-2])\/(\d)+/.test(texto)) {
            throw new Error("Deve estar no formato aaaa-mm-dd")
        }

        return new Date(...texto.split('/').map((item, indice) => item - indice % 2).reverse())
    }
}