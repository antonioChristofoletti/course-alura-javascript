export class View {
    constructor(negociacaoViewElement) {
        this._negociacaoViewElement = negociacaoViewElement
    }

    model(data) {
        throw new Exception("The method 'model' from the 'NegociacaoView' class was not implemented")
    }

    update(data) {
        this._negociacaoViewElement.innerHTML = this.model(data)
    }
}