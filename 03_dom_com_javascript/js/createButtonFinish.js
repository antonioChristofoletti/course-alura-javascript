const createButtonFinish = () => {
    const button = document.createElement('button')

    button.innerText = "Finalizar"
    button.classList.add('check-button')

    button.addEventListener("click", (evento) => {
        evento.target.parentNode.classList.toggle("done")
    })

    return button
}

export default createButtonFinish