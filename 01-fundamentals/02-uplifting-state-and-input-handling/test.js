const gameBoard = [
    ['O' , 'X', 'X'],
    [null, null, null],
    [null, null, null]
]

console.log('Array original gameBoard:')
console.log(gameBoard)

// Dessa forma eu só aninho o array gameBoard dentro desse novo array. Isso não funciona como uma cópia, se eu altero algo em gameBoard, altero aqui também.

// const updatedGameBoard = [gameBoard]
// console.log(updatedGameBoard)

// Dessa forma utilizando o spread operator eu crio uma 'hollow copy' ou cópia rasa, o que significa que eu apenas copio a estrutura, mas os dados ainda pertencem à gameBoard.
// Isto é, se eu altero gameBoard, também altero updatedGameBoard. A única coisa é que se eu alterar a estrutura de updateGameBoard, (como adcionar uma nova linha), eu não alteraria
// a estrutura de gameBoard. Resumindo, ao utilizar o spread operator a estrutura desse novo array é única, mas seus valores são apenas referências aos valores de gameBoard, ou seja, são
// os mesmos.

// const updatedGameBoard = [...gameBoard]
// console.log(updatedGameBoard)
// updatedGameBoard[0][0] = 'X'
// console.log(gameBoard)

// Criação de uma cópia profunda (imutável, totalmente independente do array copiado)

const deepCopyGameBoard = gameBoard.map((arrayInterno) => [...arrayInterno])
console.log('Cópia profunda do array gameBoard:')
console.log(deepCopyGameBoard)
// Teste

gameBoard[1][1] = 'O'
console.log('Alterei gameboard, e deepCopyGameBoard segue inalterado:')
console.log(gameBoard)
console.log(deepCopyGameBoard)

