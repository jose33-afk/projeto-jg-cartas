const personagensSelect = []

function selectPers (lista) {
    const cartas = Array.from(document.querySelectorAll('.contain-crts__carta'));
   
    cartas.forEach(element => {
       
        element.addEventListener('click', () => {
            if (element.dataset.estado == 'off') {
                if (personagensSelect.length < 2) {
                    //Por um while enquanto personagens select <= 1
                    element.dataset.estado = 'on'
                    element.classList.add('carta-hover') /*Nao selecionado*/ 
                    personagensSelect.push(lista[element.value])
                } else { alert('So é possivel selecionar dois personagens')} //fazer alerta personalizado
    
            } else { 
                element.dataset.estado = 'off'
                element.classList.remove('carta-hover')
              
                let indice = personagensSelect.findIndex(perSelect => {
                    return perSelect.nome == element.dataset.nome
                    
                })
        
                personagensSelect.splice(indice, 1); //2
            }

            console.table(personagensSelect)
           
        })      
         
    })


    /*
    1 - ele so retorna a posicao do elemento, ele n exuta funcoes dentro
        dentro so vai o requesito pra pesquisar 

    2 - splice,  o primeiro parâmetro é o índice, o segundo é a             quantidade de elementos que você quer remover a partir desse índice.

    daria pra usar um id, mas n quero mexer nisso, ja que esta funcionando.

    */

    

}
export { selectPers, personagensSelect }; 