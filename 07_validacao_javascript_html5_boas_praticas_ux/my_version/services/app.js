import { preencher } from "./preencher.js"
import { validarInput } from "./validar.js"

window.onload = () => {
    const inputs = document.querySelectorAll("input")

    inputs.forEach(input => {
        input.addEventListener("input", () => preencher(input))

        input.addEventListener("blur", () => {
            preencher(input)
            validarInput(input)
        })
    })
}