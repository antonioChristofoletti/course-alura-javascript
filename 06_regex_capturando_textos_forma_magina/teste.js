const csvLine = "Antonio 11.222.333-55 Lucas 55.662.777-00"

const regex = /([\w\s]+)(\d{2}\.\d{3}\.\d{3}-\d{2})/g

const regexName = "([\\w\\s]+)"
const regexCEP = "........"
const regexCPF = "(\\d{2}\\.\\d{3}\\.\\d{3}-\\d{2})"

const oldWayRegex = new RegExp(`${regexName}${regexCPF}${regexCEP}`, "g")

let result = null
while (result = oldWayRegex.exec(csvLine)) {
    console.log(`Nome: ${result[1]} CPF: ${result[2]}`)
}