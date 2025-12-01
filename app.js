/**
 *  Cartas
 *  @author Gustavo Vieira de Souto
 */

function sortear() {
    let nipes = ["♥", "♦", "♣", "♠"]
    let faces = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"]


//apoio a lógica
//console.log(faces[10])
//console.log(nipes[3])

//sorteio de uma carta
let nipe = nipes[Math.floor(Math.random() * 4)]
let face = faces[Math.floor(Math.random() *13)]

//apoio a lógica
//console.clear()
//console.log(nipe)
//console.log(face)

//Renderização do canto superior esquerdo da carta
//.innerHTML insere uma tag no documento html
document.getElementById('supESQ').innerHTML = `<div>${face}</div> <div>${nipe}</div>`


//Renderização do centro da carta
document.getElementById('centroCarta').innerHTML = `<div>${nipe}</div>`

//Renderização do canto Inferior da carta
document.getElementById('infDIR').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
}