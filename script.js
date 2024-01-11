// 1 recupero gli elementi dal DOM
// 2 creo delle variabili con per ottenere il numero di celle in questione
// 3 creo la variabile che mi moltiplica i dati ottenuti dal punto 2
// 4 creo una funziona per creare le celle
// 4b creo l'elemento
// 4c creo la sua classe (manipolata sul css)
// 4d recupero, tramite il parametro content, il contatore del ciclo 
// per inserire l'indice del suddetto contatore
// 4e recupero la funzione
// 5 ascolto la lista degli eventi
// 5b evito che mi si carichi all'infinito la mia grigia
// 6 creo il contatore che a sua volta mi permettere di creare automaticamente 
// le celle
// 6b importo la funzione di creazione cella con l'argomento per collegarmi
// al punto 4c
// 7 ovviamente creo all'interno del for un'altra lista degli eventi perchè mi
// deve ripetere tot volte il toggle della classe clicca (manipolata su css)
//    e stampo in console la cella cliccata
// 8 stampo in pagina il numero cliccato dall'utente

// 1
const button = document.getElementById('pulsante')
const grid = document.getElementById('grid')
const points = document.getElementById('punteggio')
// 2
const rows = 10
const cols = 10
// 3
const totCells = rows * cols
const bombs = 16
const maxPoints = totCells - bombs
let score = 0
points.innerText = score
// non mi resetta la score
let isGameHover = false 
const maxBombs = createBombs(totCells, bombs)
console.log(maxBombs)
function createBombs (maxBombs, bombs){
    const totalBombs = []
    while (totalBombs.length < bombs) {
        const randomBombs = Math.floor(Math.random() * maxBombs) + 1
        if(!totalBombs.includes(randomBombs)) totalBombs.push(randomBombs)   
    }
    return totalBombs
}
// 4
const createCells = content => {
    // 4b
    const cells = document.createElement('div')
    // 4c
    cells.className = 'cells'
    // 4d
    cells.innerText = content
    // 4e
    return cells
}
// 5
button.addEventListener('click', function(){
    // 5b
    button.innerText = 'ricomincia'
    grid.innerText = ''
    // 6
    for (let i = 1; i <= totCells; i++){
        // 6b
        const newCells = createCells(i)      
        
        // 7
        newCells.addEventListener('click', () => {
            if (isGameHover || newCells.classList.contains('clicca')){
                return
            }
           newCells.classList.add('clicca')
           const hasHitBomb = maxBombs.includes(parseInt(newCells.innerText))
        //    chiedere il perchè di questa Cosa, se si usa al posto della i ok l'ho capito, ma perchè bisogna mettere la i o in questo caso specifico la newcell?
        // cioè come faccio cosi facendo a vedere le celle?
           if(hasHitBomb){
            isGameHover = true
            newCells.classList.add('bomba')
            // non mi aggiunge la classe.....
            console.log('hai pestato una bomba, il tuo punteggio è ' + score)
           } else {
                score++
                points.innerText = score
                console.log('score: ', score)
                if (score === maxPoints){
                    console.log('complimenti hai vinto')
                    isGameHover = true
                    // questo controllo lo faccio dentro l'else perchè, prima mi deve aumentare il punteggio con lo score++ e poi se quest'ultimo
                    // // è uguale al maxPoints allora la flag diventa true e interrompo il gioco
                }
           }           
        })
        // 8
        grid.appendChild(newCells)        
    }
})
