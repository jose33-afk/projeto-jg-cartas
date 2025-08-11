import { Personagems } from "./modules/personagens.js";
import { mostrarPersonagens } from "./modules/personageView.js";

const Luffy = new Personagems('Luffy', 7000, 420000, 125000, 'Concentra energia elástica em um dos punhos, expandindo-o até 3x o tamanho normal por alguns segundos. O golpe ganha força devastadora e pode atravessar defesas sólidas, mas consome bastante stamina e deixa o braço temporariamente mais lento após o uso.', 'Chapeus de palha', 'fruta', 'url(./assets/img/cartasbanner/later.png)')

const Zoro = new Personagems('Zoro', 5000, 44000, 50000, 'Zoro concentra toda sua força em seus três sabres, criando um tornado devastador que corta através de múltiplas dimensões. Esta técnica lendária ignora defesas convencionais e causa dano massivo em área.', 'chapeus de palha', 'espada', 'url(./assets/img/cartasbanner/download.jfif)') //3 linhas no maximo.

const personagens = [Luffy, Zoro]
mostrarPersonagens(personagens);




