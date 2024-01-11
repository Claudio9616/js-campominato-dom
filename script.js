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
// 2
const rows = 10
const cols = 10
// 3
const totCells = rows * cols
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
           newCells.classList.toggle('clicca')
           console.log(newCells)
        })
        // 8
        grid.appendChild(newCells)        
    }
})