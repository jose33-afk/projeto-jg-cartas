import { Personagems } from "./modules/personagens.js";
import { mostrarPersonagens } from "./modules/personageView.js";

const Luffy = new Personagems('Luffy', 7000, 420000, 125000, 'Concentra energia elástica em um dos punhos, expandindo-o até 3x o tamanho normal por alguns segundos. O golpe ganha força devastadora e pode atravessar defesas sólidas, mas consome bastante stamina e deixa o braço temporariamente mais lento após o uso.', 'Chapeus de palha')

const Zoro = new Personagems('Zoro', 5000, 44000, 50000, '', 'chapeus de palha')

const personagens = [Luffy, Zoro]
mostrarPersonagens(personagens);



