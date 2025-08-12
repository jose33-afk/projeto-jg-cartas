function selectPers () {
    const cartas = Array.from(document.querySelectorAll('.contain-crts__carta'));
    
    cartas.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('carta-hover')
            console.log(element.value)
        })
    })
}

export { selectPers };