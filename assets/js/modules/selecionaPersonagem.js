const personagensSelect = []

function selectPers (lista) {
    const cartas = Array.from(document.querySelectorAll('.contain-crts__carta'));
   
    cartas.forEach(element => {
        //if (personagensSelect.length === 2) {
         //  personagensSelect.forEach(element => {
            //    element.addEventListener('click', () => {
              //      remove(personagensSelect)
               // })
         //  })

       // } else {
             element.addEventListener('click', () => {
                if (element.dataset.estado == 'off') {
                    element.dataset.estado = 'on'
                    element.classList.add('carta-hover') /*Nao selecionado*/ 
                    personagensSelect.push(lista[element.value])
                } else { 
                    remove(lista)
                }

                 function remove (array) {
                element.dataset.estado = 'off'
                element.classList.remove('carta-hover')// 2 click - selecionado
            }

            })

       // }
       
       
    })


    /*Eu tava fazendo um jeito de ter uma funcao pra remover, pra n ter 
    que repetir codigo la em cima, lembra quando tiver duas cartas selecionadas, tenho que pensar em um jeito de ficar alternado entre a array com selecionados e a e uma funcao pra so adicionar. */

    

}
export { selectPers }; 