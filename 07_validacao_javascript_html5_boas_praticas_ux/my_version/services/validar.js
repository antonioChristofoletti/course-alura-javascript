import { validarCPF } from "./validaCPF.js"
import { validarDataNascimento } from "./validarDataNascimento.js"

function getErrorMessage(tipoInput, validity) {
    const errorsValidate = ["valueMissing", "typeMismatch", "tooShort", "rangeUnderflow", "customError", "patternMismatch"]

    const customMessagesByTipo = {
        email: {
            valueMissing: "O e-mail é necessário.",
            typeMismatch: "O e-mail é inválido."
        },
        password: {
            valueMissing: "A senha é necessária.",
            tooShort: "A senha é muito curta."
        },
        cpf: {
            valueMissing: "O CPF é necessário.",
            customError: "O CPF é inválido."
        },
        cep: {
            valueMissing: "O CEP é necessário.",
            patternMismatch: "O CEP é inválido."
        }
    }

    const customMessage = customMessagesByTipo[tipoInput]

    let errorMessage = ""
    errorsValidate.forEach(errorValidate => {
        if (validity[errorValidate]) {
            errorMessage = customMessage[errorValidate]
        }
    })

    return errorMessage
}

export const validarInput = (input, adicionarErro = true) => {
    const validadores = {
        dataNascimento: (input) => validarDataNascimento(input),
        cpf: (input) => validarCPF(input)
    }

    const tipoInput = input.dataset.tipo
    if (validadores[tipoInput]) {
        validadores[tipoInput](input)
    }

    const validity = input.validity
    const isValid = validity.valid
    const classElementoErro = "possui-erro-validacao"
    const classInputErro = "erro-validacao"
    const parentElement = input.parentElement
    const errorElement = parentElement.querySelector(`.${classInputErro}`) || document.createElement("div")

    if (!isValid) {
        errorElement.className = classInputErro
        errorElement.textContent = getErrorMessage(tipoInput, validity)

        if (adicionarErro) {
            input.after(errorElement)
            input.classList.add(classElementoErro)
        }
    } else {
        errorElement.remove()
        input.classList.remove(classElementoErro)
    }
}