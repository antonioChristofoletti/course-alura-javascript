export const preencherMascara = (input) => {
    const args = {
        allowNegative: false,
        prefix: 'R$ ',
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: ',',
        thousandsSeparator: '.',
        cursor: 'end'
    }

    SimpleMaskMoney.setMask(input, args)

    console.log('eba')
}