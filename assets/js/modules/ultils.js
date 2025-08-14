function pegaElemento (nomeElement, umOumais=1) {
    
    /*
        nomeElement -- Nome da class ou ID, tem que passar 
        ".", # ou nada se for uma tag.

        umOumais -- Se passado um valor maior que 1 ele 
        retorna uma lista, senão retorna um elemento.
    */
    if (umOumais > 1) {
        return Array.from(document.querySelectorAll(nomeElement));//1
    } else{
         return document.querySelector(nomeElement); 
    }   
}


export { pegaElemento };