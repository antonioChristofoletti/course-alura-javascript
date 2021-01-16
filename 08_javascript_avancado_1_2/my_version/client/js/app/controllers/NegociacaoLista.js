class NegociacaoLista {
    constructor() {
        this._negociacaoLista = []
    }

    add(negociacao) {
        this._negociacaoLista.push(negociacao)
    }

    addAll(listaNegociacao) {
        this._negociacaoLista.push(...listaNegociacao)
    }

    removeAll() {
        this._negociacaoLista.length = 0
    }

    get negociacaoLista() {
        return [].concat(this._negociacaoLista)
    }

    get valorTotal() {
        return this._negociacaoLista.reduce((total, negociacao) => total + negociacao.valor, 0.0)
    }
}