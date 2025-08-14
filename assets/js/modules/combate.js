import { mostrarPersonagens, reset } from "./personageView.js";
import { pegaElemento } from "./ultils.js";

class Combate {
    static duelo (lutadorUm, lutadorDois, listaLutadores) { //2
        reset(pegaElemento('.contain-crts'))
        mostrarPersonagens(listaLutadores)
        addelement()
        ativo()

        //aqui todos os botoes de combate



        // os metodos ficam fora 
        //if (lutadorUm.power > lutadorDois.power){ //por uma condicao so se a diferenca for muito grande
            //console.log(`${lutadorUm.nome} ganhou`)
            //indexOF == pegar indice, continuar amnh
            //return ListaDeLutadores.splice(indice, 1); 
        //}
        //else console.log(`Lutador ${lutadorDois.nome} ganhou`) por metodos
    }
}


function ativo() {
    const cartas = pegaElemento('.contain-crts__carta', 2);
    cartas.forEach(element => {
        element.classList.add('carta-hover')
    })

}

function addelement() {
    const elementoInserir = pegaElemento('main')
    elementoInserir.innerHTML += `
    <button class="botao-combate encerrar">Encerrar</button>
    `
}

export { Combate };

/*
    1 - É  uma clss para ficar organizado, com todos os metodos de combate
    2 - static pra usar os metodos sem instancia
*/
