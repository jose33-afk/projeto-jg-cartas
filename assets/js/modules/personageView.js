function mostrarPersonagens (ListaPersonagem) {
    const ElementInserir = document.querySelector('.contain-crts');

    ListaPersonagem.forEach(personagem => {
        let ListaItem = document.createElement('li');
        let item = document.createElement('div');
        let arma = '';
      
        personagem.classe === 'fruta' ? arma = 'fruta' : arma = 'espada'

        ListaItem.classList.add('contain-crts__carta', arma)
        ListaItem.setAttribute('value', ListaPersonagem.indexOf(personagem))//1
        ListaItem.setAttribute('data-estado', 'off');
        ListaItem.setAttribute('data-nome', personagem.nome)
        ListaItem.style.backgroundImage =  personagem.foto;
       
        item.classList.add('carta', arma);
        item.style.backgroundImage =  personagem.corMoldura;

        item.innerHTML = `    
            <h2 class="carta__power">${personagem.power}</h2>
            <div class="carta__dom-descr">
                <p><Strong class="st-dom">Don</Strong>${personagem.habiliDescri}</p>
            </div> 
            
            <div class="carta__contain-inferior">
                <h2 class="contain-inferior__nome">${personagem.nome}</h2>
                <div class="ataque geral">
                    <div class="ataque img-icon ${arma}"></div>
                    <p class="ataque para"><span class="dest">ATK</span> ${personagem.ataque}</p>
                </div>
                <div class="contain-inferior__titolo">
                    <p class="contain-inferior__titolo--tripulacao">${personagem.tripulacao}</p>
                </div>
                <div class="defesa geral">
                    <div class="defesa img-icon"></div>
                    <p class="defesa para"><span class="dest def">DEF</span>${personagem.defesa}</p>
                </div>
            </div>
        `
        ElementInserir.appendChild(ListaItem)
        ListaItem.appendChild(item)
    })
}

function reset(element) {
    element.innerHTML = ''
}

export { mostrarPersonagens, reset};

// 1 - Vou usar no combate, é pra pegar o obj