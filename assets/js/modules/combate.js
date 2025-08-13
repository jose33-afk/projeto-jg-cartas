class combate {
    personagem1 
    lutadorDois 

    constructor(lutadorUm, lutadorDois) {
        this.lutadorUm = lutadorUm
        this.lutadorDois = lutadorDois
    }

    duelo (ListaDeLutadores) { //1, array personagensSelect
        if (this.lutadorUm.power > this.lutadorDois.power){ 
            console.log(`${lutadorUm} ganhou`)
            //indexOF == pegar indice, continuar amnh
            //return ListaDeLutadores.splice(indice, 1); 
        }
        else console(`Lutador ${LutadorDois} ganhou`)
    }

    teste() {
        console.log('eruheruie')
    }

}

export { combate };

/*
    1 - É uma clss para ficar organizado, com todos os metodos de combate

*/