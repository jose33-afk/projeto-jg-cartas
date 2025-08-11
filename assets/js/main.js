import { Personagems } from "./modules/personagens.js";
import { mostrarPersonagens } from "./modules/personageView.js";
import { molduras, fotos } from "./modules/listas.js";

const Luffy = new Personagems('Luffy', 7000, 420000, 125000, 'Concentra energia elástica em um dos punhos, expandindo-o até 3x o tamanho normal por alguns segundos. O golpe ganha força devastadora e pode atravessar defesas sólidas, mas consome bastante stamina e deixa o braço temporariamente mais lento após o uso.', 'Chapeus de palha', 'fruta', fotos.luffy, molduras.azulesverdiado)

const Zoro = new Personagems('Zoro', 5000, 44000, 50000, 'Zoro concentra toda sua força em seus três sabres, criando um tornado devastador que corta através de múltiplas dimensões. Esta técnica lendária ignora defesas convencionais e causa dano massivo em área.', 'chapeus de palha', 'espada', fotos.zoro, molduras.verde) //Habilidade descriçao, 3 linhas no maximo.

const personagens = [Luffy, Zoro]
mostrarPersonagens(personagens);




