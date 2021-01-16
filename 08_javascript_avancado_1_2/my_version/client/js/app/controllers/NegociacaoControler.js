class NegociacaoController {

    constructor() {
        const $ = document.querySelector.bind(document)

        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")

        this._mensagemView = new MensagemView($("#mensagemView"))
        this._negociacaoView = new NegociacaoView($("#negociacaoView"))

        this._negociacaoLista = new Bind(new NegociacaoLista(), this._negociacaoView, "addAll", "add", "removeAll")

        this._mensagem = new Bind(new Mensagem(), this._mensagemView, "texto")
    }

    adicionar(evento) {
        try {
            evento.preventDefault()
            this._negociacaoLista.add(this._criarNegociacao())
            this._limparCampos()
    
            this._mensagem.texto = "Elemento inserido com sucesso"
        }catch(error) {
            this._mensagem.texto = error
        }
    }

    _criarNegociacao() {
            return new Negociacao(
                DataHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value
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
}