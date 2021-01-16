class MensagemView extends View {
    constructor() {
        super(document.querySelector("#mensagemView"))
    }

    model(mensagem) {
        return `<p>${mensagem.texto}</p>`
    }

    update(mensagem) {
        if(mensagem.texto === "") {
            this._negociacaoViewElement.innerHTML = ""
        } else {
            this._negociacaoViewElement.innerHTML = this.model(mensagem)
        }
    }
}