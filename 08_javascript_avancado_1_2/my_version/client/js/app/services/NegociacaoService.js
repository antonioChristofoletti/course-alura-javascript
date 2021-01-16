class NegociacaoService {

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
}