import createButtonFinish from "./createButtonFinish.js"
import createButtonRemove from "./createButtonRemove.js"

const criarTarefa = (evento) => {
    evento.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const newLi = document.createElement('li')
    newLi.classList.add('task')
    newLi.innerHTML = `<p class="content">${valor}</p>`

    newLi.appendChild(createButtonFinish())
    newLi.appendChild(createButtonRemove())

    const list = document.querySelector('[data-list]')
    list.appendChild(newLi)
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)