import { Negociacao } from "../models/Negociacao"
import { NegociacaoDao } from "../dao/NegociacaoDao"
import { ConnectionFactory } from "../factories/ConnectionFactory"
import { HttpRequest } from "../services/HttpRequest"

export class NegociacaoService {

    constructor() {
        throw new Error(`The class '${this}' can not be instances`)
    }

    static _get(url) {
        return new Promise((resolve, reject) => {
            HttpRequest.get(url)
                .then(response => {
                    const negociacoesList = response.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))

                    resolve(negociacoesList)
                })
                .catch(rejection => {
                    reject(rejection)
                })
        })
    }

    static getWeeklyNegociacoes() { return NegociacaoService._get("negociacoes/semana") }

    static getLastWeekNegociacoes() { return NegociacaoService._get("negociacoes/anterior") }

    static getRetreatedWeekNegociacoes() { return NegociacaoService._get("negociacoes/retrasada") }

    static adicionar(negociacao) {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(negociacaoDao => negociacaoDao.add(negociacao))
            .then(_ => "Elemento inserido com sucesso")
            .catch(erro => {
                throw new Error(erro)
            })
    }

    static removeNegociacaoAll() {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(negociacaoDao => negociacaoDao.removeAll())
            .then(_ => "Negociações removidas com sucesso")
            .catch(erro => {
                throw new Error(erro)
            })
    }

    static getNegociacaoList(filterNegociacaoList) {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(negociacaoDao => negociacaoDao.findAll())
            .then(foundNegociacaoLista => {
                return foundNegociacaoLista.filter(negociacaoFilter => {
                    return !filterNegociacaoList.some(negociacao => negociacao.isEquals(negociacaoFilter))
                })
            })
            .catch(erro => {
                throw new Error(erro)
            })
    }
}