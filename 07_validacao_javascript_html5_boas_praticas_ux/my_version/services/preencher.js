import { preencherEndereco } from "./preencherEndereco.js"
import { preencherMascara } from "./preencherMascara.js"

export const preencher = (input) => {
    const preenchedores = {
        cep: (input) => preencherEndereco(input),
        monetario: (input) => preencherMascara(input)
    }

    console.log(input)

    const tipoInput = input.dataset.tipo
    if (preenchedores[tipoInput]) {
        preenchedores[tipoInput](input)
    }
}