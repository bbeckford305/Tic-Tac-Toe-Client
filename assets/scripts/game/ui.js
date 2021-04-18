'use strict'

const store = require('./../store')

// const onNewGameSuccess = function (response) {
//   store.player = response.player
//   $('#message').text('Player Games')
//   $('.container').show()
//   $('#tictactoeButton').show()
// }
//
// const onNewGameFailure = function () {
//   $('#message').text('Not Able To Start Game')
// }

const onCreateGameSuccess = function (response) {
  store.game = response.game
  store.game.move = true
  store.game.over = false
  $('#message').text('Player Games Started')
  $('.container').show()
  $('.box').on('click')
}

const onCreateGameFailure = function () {
  $('#message').text('Game Create Fail')
}

const checkForWinner = function (cell) {
  const moves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < moves.length; i++) {
    const [a, b, c] = moves[i]
    const winner = [i]
    if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
      ('#message').text(`${winner} Has Won`)
      store.game.over = true
      return cell[a]
    } else if (cell[0] && cell[1] && cell[2] && cell[3] && cell[4] && cell[5] && cell[6] && cell[7] && cell[8] === '') {
      ('#message').text('Game Is Tied')
      store.game.over = true
    }
  }
}

// checkForWinner(gameOver)
//
// if (gameIsOver === true) {
//   $('#newGameButton2').show()
// }

//     // const gameOver = store.game.move
//   }
// }

// const onMoveSuccess = function (response, cell) {
//   store.game = response.game
//   // if (store.game.value === true) {
//   // const checkForWinner = function (cell) {
//   const moves = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]
//   for (let i = 0; i < moves.length; i++) {
//     const [a, b, c] = moves[i]
//     const winner = [i]
//     if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
//       ('#message').text(`${winner} Has Won`)
//       store.game.over = true
//       return cell[a]
//     } else if (cell[0] && cell[1] && cell[2] && cell[3] && cell[4] && cell[5] && cell[6] && cell[7] && cell[8] === '') {
//       ('#message').text('Game Is Tied')
//       store.game.over = true
//     }
//   }
// }

//   if (store.user.value[0] === true) {
//     $(`[data-cell-index=${store.user.index}]`).text('X')
//     store.user.value[1] = 'O'
//   } else {
//     $(`[data-cell-index=${store.user.index}]`).text('O')
//     store.user.value[1] = 'X'
//   }
//   store.user.value[0] = !(store.user.value[0])
// }
// //
// const move = []
// const x = []
// const o = []
// for (let i = 0; i < move.length; i++) {
//   if (move[i] === 'X') {
//     x.push(i)
//   } else if (move[i] === 'O') {
//     o.push(i)
//   }
// }

module.exports = {
  // onNewGameSuccess,
  // onNewGameFailure,
  onCreateGameSuccess,
  onCreateGameFailure
  // onMoveSuccess
  // onBoxSelectSuccess
}
