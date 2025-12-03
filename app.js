function sortear() {
    let nipes = ["♥", "♦", "♣", "♠"];
    let faces = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];

    let nipe = nipes[Math.floor(Math.random() * 4)];
    let face = faces[Math.floor(Math.random() * 10)];

    //apoio a lógica
    //console.clear()
    //console.log(nipe)
    //console.log(face)

    // Definir cor do naipe
    let corClasse;

    if (nipe === "♥" || nipe === "♦") { 
        corClasse = "vermelho";
    } else {
        corClasse = "preto";
    }
    console.log("Cor aplicada:", corClasse);
    //Se o naipe for copas (♥) ou ouros (♦) → a cor é vermelho caso ao contrário é preto

    // Canto superior esquerdo
    document.getElementById("supESQ").innerHTML = `
        <div class="${corClasse}">${face}</div>
        <div class="${corClasse}">${nipe}</div>
    `;

    // Canto inferior direito
    document.getElementById("infDIR").innerHTML = `
        <div class="${corClasse}">${face}</div>
        <div class="${corClasse}">${nipe}</div>
    `;

    // Centro da carta
    if (face === "J") {
        document.getElementById('centroCarta').innerHTML = `<img src="img/valete.png" class="figura">`;
    } // Se a carta sorteada for J ela troca o meio pela imagem do valete
    else if (face === "Q") {
        document.getElementById('centroCarta').innerHTML = `<img src="img/dama.png" class="figura">`;
    } // Se a carta sorteada for Q ela troca o meio pela imagem do dama
    else if (face === "K") {
        document.getElementById('centroCarta').innerHTML = `<img src="img/rei.png" class="figura">`;
    } // Se a carta sorteada for K ela troca o meio pela imagem do rei
    else {
        document.getElementById("centroCarta").innerHTML = `<div class="${corClasse}" style="font-size:6rem">${nipe}</div>`;
    } //Se a carta não for J, Q ou K, o centro mostra somente o símbolo do naipe.
}
