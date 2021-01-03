export const preencherEndereco = (inputCep) => {
    if (!inputCep.validity.valid) return

    const url = `https://viacep.com.br/ws/${inputCep.value}/json/`

    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8"
        }
    }

    fetch(url, options).then(response => response.json()).then(data => {
        if (data.erro) {
            input.setCustomValidity("Esse não é um CEP válido")
            return
        }

        preencherCampos(inputCep, data)
    })
}

const preencherCampos = (input, data) => {
    const form = input.parentElement.parentElement
    const inputList = Array.from(form.querySelectorAll("input"))

    const tiposInputToJson = [
        {
            tipoInput: "logradouro",
            jsonField: "logradouro"
        },
        {
            tipoInput: "cidade",
            jsonField: "localidade"
        },
        {
            tipoInput: "estado",
            jsonField: "uf"
        }
    ]

    tiposInputToJson.forEach((tipoInputToJson) => {
        const foundInput = findInputByTipo(inputList, tipoInputToJson.tipoInput)

        if (foundInput !== null) {
            console.log(data[tipoInputToJson.jsonField])
            foundInput.value = data[tipoInputToJson.jsonField]
        }
    })
}


const findInputByTipo = (inputList, tipo) => {
    const input = inputList.filter(input => input.getAttribute("data-tipo") === tipo)[0]
    return input === undefined ? null : input
}