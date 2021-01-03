export const validarCPF = input => {
    const cpf = input.value.replace(/\D/g, "")

    if (isAllNumbersEqual(cpf)) {
        input.setCustomValidity("O CPF é inválido.")
        return
    }

    const primeiraParteCPF = cpf.substr(0, 9).split("")
    const primeiroDigitoCPF = Number(cpf.charAt(9))
    const primeiroDigitoCalculado = calcularDigito(primeiraParteCPF, 10)

    if(primeiroDigitoCPF !== primeiroDigitoCalculado) {
        input.setCustomValidity("Este não é um CPF válido 1")
        return
    }

    const segundaParteCPF = cpf.substr(0, 10).split("")
    const segundoDigitoCPF = Number(cpf.charAt(10))
    const segundoDigitoCalculado = calcularDigito(segundaParteCPF, 11)

    if(segundoDigitoCPF !== segundoDigitoCalculado) {
        input.setCustomValidity("Este não é um CPF válido 2")
        return
    }

    input.setCustomValidity("")
}

const calcularDigito = (parteCPF, multiplicador) => {
    // total = multiplicacao dos numeros
    // resto = total % 11
    // digito = 11 - resto

    const total = parteCPF.reduce(calcularTotal(multiplicador), 0)
    const resto = total % 11

    return resto > 10 ? 0 : 11 - resto
}

const calcularTotal = multiplicador => (resultado, numeroAtual) => resultado + numeroAtual * multiplicador--

const isAllNumbersEqual = (cpf) => {
    const cpfsInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]

    return cpfsInvalidos.includes(cpf)
}