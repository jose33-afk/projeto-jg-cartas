import { carregarFuncoes } from "../main.js";
import { mostrarPersonagens} from "./personageView.js";
import { pegaElemento } from "./ultils.js";

const ativo = () => {
    const cartas = pegaElemento('.contain-crts__carta', 2);
    cartas.forEach(element => {
        element.classList.add('carta-hover')
    })
}

class Combate {
    static duelo (lutadorUm, lutadorDois, listaLutadores) { //2
        const cartList = pegaElemento('.contain-crts');
        const bntEnd = pegaElemento('.bnt-combat.end');
       
        cartList.innerHTML = ''
        mostrarPersonagens(listaLutadores)
        ativo()
        bntEnd.setAttribute('data-bnt-combate-end', 'on');

        //aqui todos os botoes de combate
        bntEnd.addEventListener('click', () => {
            listaLutadores.splice(0, 2);
            cartList.innerHTML = '' 
            bntEnd.setAttribute('data-bnt-combate-end', 'off');
            carregarFuncoes()
        })
    }
}



export { Combate };


/*
    1 - É  uma clss para ficar organizado, com todos os metodos de combate
    2 - static pra usar os metodos sem instancia
*/
