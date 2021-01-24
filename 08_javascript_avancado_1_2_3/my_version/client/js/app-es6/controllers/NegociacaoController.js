import { MensagemView } from "../view/MensagemView";
import { NegociacaoView } from "../view/NegociacaoView";
import { NegociacaoLista } from "./NegociacaoLista";
import { Mensagem } from "../models/Mensagem";
import { Bind } from "../models/Bind";
import { Negociacao } from "../models/Negociacao";
import { NegociacaoService } from "../services/NegociacaoService";
import { DataHelper } from "../helpers/DataHelper";

export class NegociacaoController {

    constructor() {
        this._ordemAtual = '';

        const $ = document.querySelector.bind(document)

        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")

        this._mensagemView = new MensagemView($("#mensagemView"))
        this._negociacaoView = new NegociacaoView($("#negociacaoView"))

        this._negociacaoLista = new Bind(new NegociacaoLista(), this._negociacaoView, "addAll", "add", "removeAll", "ordena", "ordenaReversa")

        this._mensagem = new Bind(new Mensagem(), this._mensagemView, "texto")

        this._init()
    }

    _init() {
        setInterval(_ => this._carregarLista(), 3000)
    }

    _carregarLista() {
        const addedNegociacaoLista = this._negociacaoLista.negociacaoLista

        NegociacaoService
            .getNegociacaoList(addedNegociacaoLista)
            .then(negociacaoLista => {
                this._negociacaoLista.addAll(negociacaoLista)
                this._mensagem.texto = "Elementos carregados com sucesso"
            })
            .catch(erro => this._mensagem.texto = erro)
    }

    adicionar(evento) {
        evento.preventDefault()

        const newNegociacao = this._criarNegociacao()

        NegociacaoService
            .adicionar(newNegociacao)
            .then(mensagem => {
                this._negociacaoLista.add(newNegociacao)
                this._limparCampos()

                this._mensagem.texto = mensagem
            })
            .catch(erro => this._mensagem.texto = erro)
    }

    _criarNegociacao() {
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseInt(this._inputValor.value)
        )
    }

    _limparCampos() {
        this._inputData.value = ""
        this._inputQuantidade.value = ""
        this._inputValor.value = ""
        this._inputData.focus()
    }

    carregarNegociacoes() {
        const promise = Promise.all([
            NegociacaoService.getWeeklyNegociacoes(),
            NegociacaoService.getLastWeekNegociacoes(),
            NegociacaoService.getRetreatedWeekNegociacoes()])

        promise
            .then(response => {
                const negociacoeslist = response.reduce((concatList, iterationList) => concatList.concat(iterationList), [])

                this._negociacaoLista.addAll(negociacoeslist)
                this._mensagem.texto = "Lista atualizada com sucesso"
            })
            .catch(rejection => {
                console.error(`Error getting the negociacao list. Error: ${rejection}`)
                this._mensagem.texto = "Erro ao obter a lista de negociacoes"
            })
    }

    ordena(coluna) {
        if (this._ordemAtual === coluna) {
            this._negociacaoLista.ordenaReversa()
        } else {
            this._negociacaoLista.ordena((a, b) => a[coluna] - b[coluna])
            this._ordemAtual = coluna
        }
    }

    removeNegociacaoAll() {
        NegociacaoService
            .removeNegociacaoAll()
            .then(mensagem => {
                this._negociacaoLista.removeAll()
                this._mensagem.texto = mensagem
            })
            .catch(erro => this._mensagem.texto = erro)
    }
}