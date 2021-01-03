const createButtonRemove = () => {
    const button = document.createElement('button')

    button.innerText = "Remover"
    button.classList.add('check-button')

    button.addEventListener("click", (evento) => {
        evento.target.parentNode.remove()
    })

    return button
}

export default createButtonRemove