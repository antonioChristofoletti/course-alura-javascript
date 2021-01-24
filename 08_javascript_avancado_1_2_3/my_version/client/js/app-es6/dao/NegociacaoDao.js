import { Negociacao } from "../models/Negociacao"

export class NegociacaoDao {
    constructor(connection) {
        this._connection = connection
    }

    add(negociacao) {
        return new Promise((resolve, reject) => {
            const request = this._connection
                .transaction(["negociacoes"], "readwrite")
                .objectStore("negociacoes")
                .add(negociacao)

            request.onsuccess = e => resolve(negociacao)

            request.onerror = e => { reject(`Negociacao não includa. Erro: ${e}`) }
        })
    }

    findAll() {
        return new Promise((resolve, reject) => {
            const cursor = this._connection
                .transaction(["negociacoes"], "readonly")
                .objectStore("negociacoes")
                .openCursor()

            let negociacoes = []

            cursor.onsuccess = e => {
                let currentResult = e.target.result

                if (currentResult) {
                    var dado = currentResult.value
                    negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor))

                    currentResult.continue()
                } else {
                    resolve(negociacoes)
                }
            }

            cursor.onerror = e => {
                reject(`Não foi possível encontrar a lista de negociacoes. Erro: ${e}`)
            }
        })
    }

    removeAll() {
        return new Promise((resolve, reject) => {
            const request = this._connection
                .transaction(["negociacoes"], "readwrite")
                .objectStore("negociacoes")
                .clear()

            request.onsuccess = _ => resolve()

            request.onerror = e => { reject(`Negociações não foram removidas. Erro: ${e}`) }
        })
    }
}