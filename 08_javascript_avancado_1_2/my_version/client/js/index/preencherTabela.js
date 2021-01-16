window.onload = _ => {
    const button = document.querySelector("form").querySelector("button")

    button.addEventListener("click", (evento) => preencherTabelaEvent(evento))
}

const preencherTabelaEvent = (evento) => {
    evento.preventDefault()

    const inputsValues = [
        document.querySelector("#data").value,
        document.querySelector("#quantidade").value,
        document.querySelector("#valor").value
    ]

    const newTr = document.createElement("tr")

    inputsValues.forEach((inputValue) => { adicionarColuna(inputValue, newTr) })

    adicionarColuna(inputsValues[1] * inputsValues[2], newTr)

    const tbody = document.querySelector("table").querySelector("tbody")

    tbody.appendChild(newTr)
}

const adicionarColuna = (value, tr) => {
    const newTd = document.createElement("td")

    newTd.textContent = value

    tr.appendChild(newTd)
}