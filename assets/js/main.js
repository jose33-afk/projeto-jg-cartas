import { Personagems } from "./modules/personagens.js";
import { pegaElemento } from "./modules/ultils.js";
import { mostrarPersonagens } from "./modules/personageView.js";
import { molduras, fotos } from "./modules/listas.js";
import { selectPers } from "./modules/selecionaPersonagem.js";
import { Combate } from "./modules/combate.js";
import { personagensSelect } from "./modules/selecionaPersonagem.js";
const botaoPlayCombat = document.querySelector('.botao-combate.play')

const Luffy = new Personagems('Luffy', 7000, 420000, 125000, 'Concentra energia elástica em um dos punhos, expandindo-o até 3x o tamanho normal por alguns segundos. O golpe ganha força devastadora e pode atravessar defesas sólidas, mas consome bastante stamina e deixa o braço temporariamente mais lento após o uso.', 'Chapeus de palha', 'fruta', fotos.luffy, molduras.azulesverdiado)

const Zoro = new Personagems('Zoro', 5000, 44000, 50000, 'Zoro concentra toda sua força em seus três sabres, criando um tornado devastador que corta através de múltiplas dimensões. Esta técnica lendária ignora defesas convencionais e causa dano massivo em área.', 'chapeus de palha', 'espada', fotos.zoro, molduras.verde) //Habilidade descriçao, 44 palavras no maximo.

const Donflamingo = new Personagems('Don Flamingo', 9000, 12000, 4000, 'Birdcage Doflamingo cria uma cúpula gigante de fios transparentes e indestrutíveis que aprisiona uma área inteira. A gaiola mortal se fecha lentamente, forçando todos os prisioneiros dentro dela a lutar desesperadamente entre si para sobreviver.', 'Piratas Donquixote', 'fruta', fotos.donflamingo, molduras.rosa)

const personagens = [Luffy, Zoro, Donflamingo] 

mostrarPersonagens(personagens);
selectPers(personagens)

botaoPlayCombat.addEventListener('click', () => {
    if (personagensSelect.length === 2) Combate.duelo(personagensSelect[0], personagensSelect[1], personagensSelect)
    else alert('Selecione 2 personagens primeiro!!!')
})

/*pegaElemento('.botao-combate.encerrar').addEventListener('click', () => {
    mostrarPersonagens(personagens)
    if (personagensSelect)  personagensSelect.splice(0, 2);

    console.log(personagensSelect)
})*/

//personagensSelect.splice(indice, 1); //2