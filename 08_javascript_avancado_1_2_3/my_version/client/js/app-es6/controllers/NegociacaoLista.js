export class NegociacaoLista {
    constructor() {
        this._negociacaoLista = []
    }

    get negociacaoLista() {
        return [].concat(this._negociacaoLista)
    }

    get valorTotal() {
        return this._negociacaoLista.reduce((total, negociacao) => total + negociacao.valor, 0.0)
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

    ordena(criterio) {
        this._negociacaoLista.sort(criterio);
    }

    ordenaReversa() {
        this._negociacaoLista.reverse();
    }
}