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
//
// const onTicTacToeSuccess = function (response) {
//   store.player = response.player
//   $('#message').text('New Game Started')
//   $('.container').show()
// }
//
// const onTicTacToeFailure = function () {
//   $('#message').text('Not Able To Start Game')
// }
//
// const emptyBox = function (response) {
//   store.player = response.player
// }
//
// const occupiedBox = function () {
//   $('#message').text('Choose Another Box')
// }

const onCreateGameSuccess = function (response) {
  store.user = response.user
  // player = 'X'
  $('#message').text('Player Games Started')
  $('.container').show()
  $('.box').text('')
  $('.box').on('click')
}

const onCreateGameFailure = function () {
  $('#message').text('Game Create Fail')
}

// const onBoxSelectSuccess = function (response, player) {
//   store.user = response.user
//   const box = $(event.target)
//   box.css('background', 'transparent')
//   if (box.text() === '') {
//     box.text(player)
//     player = player === 'O' ? 'X' : 'O'
//   } else if (box.text() === 'O' || box.text() === 'X') {
//     $('#message').text('Please pick a empty cell')
//   }
//   $('.box').on('click', onBoxSelectSuccess)
// }
// $('#message').text('Player Games Started')
// $('.container').show()

// let player = 'X'
//
// const onBoxSelectSuccess = function (playerMove) {
//   store.user.game = playerMove.game
//   const box = $(event.target)
//   box.css('background', 'transparent').text()
//   // box.css('background', 'transparent')
//   if (box.text() === 'X') {
//     box.text(player)
//     player = player === 'O' ? 'X' : 'O'
//   // //     return player
//   } else if (box.text() === 'O' || box.text() === 'X') {
//     $('#message').text('Select A New Cell')
//   // // //     return player
//   // }
//   }
// }
// const boxCell = $(event.target).data('cell-index')
// const user = (box.text())
//   if (playerMove === null) {
//     $('[id=${store.user.cell}]').text('X')
//   } else {
//     $('[id=${store.user.cell}]').text('O')
//   }
// }
// const a1 = document.getElementById('1').id
// const a2 = document.getElementById('2').id
// const a3 = document.getElementById('3').id
// const b1 = document.getElementById('4').id
// const b2 = document.getElementById('5').id
// const b3 = document.getElementById('6').id
// const c1 = document.getElementById('7').id
// const c2 = document.getElementById('8').id
// const c3 = document.getElementById('9').id
//
// const win1 = (a1, a2, a3)
// const win2 = (b1, b2, b3)
// const win3 = (c1, c2, c3)
// const win4 = (a1, b2, c2)
// const win5 = (a3, b2, c1)
// const win6 = (a1, b1, c1)
// const win7 = (a2, b2, c2)
// const win8 = (a3, b3, c3)
//
// const player = 'X'
// // let player2 = 'O'
// const onBoxClick = (event) => {
//   const box = $(event.target)
//   box.css('background', 'transparent').text()
//
//   if (player === 'X') {
//     const player = 'O'
//     return player
//   } else if (player === 'O') {
//     const player = 'X'
//     return player
//   }
//   // player = player === 'O' ? 'X' : 'O'
//   // const gameCheck = function () {
// while (player1 = 'X') {
//  player2 = 'O'
// }
//   if (win1 === 'X' || win1 === 'O') {
//     store.move.complete = true
//   } else if (win2 === 'X' || win2 === 'O') {
//     store.move.complete = true
//   } else if (win3 === 'X' || win3 === 'O') {
//     store.move.complete = true
//   } else if (win4 === 'X' || win4 === 'O') {
//     store.move.complete = true
//   } else if (win5 === 'X' || win5 === 'O') {
//     store.move.complete = true
//   } else if (win6 === 'X' || win6 === 'O') {
//     store.move.complete = true
//   } else if (win7 === 'X' || win7 === 'O') {
//     store.move.complete = true
//   } else if (win8 === 'X' || win8 === 'O') {
//     store.move.complete = true
//   } else if (win1 === '' && win2 === '' && win3 === '') {
//     store.move.complete = false
// }
// // }
// // // }
// //
// $('.box').on('click', onBoxClick)
//
module.exports = {
  // onNewGameSuccess,
  // onNewGameFailure,
  // onTicTacToeSuccess,
  // onTicTacToeFailure,
  // occupiedBox,
  // emptyBox,
  onCreateGameSuccess,
  onCreateGameFailure
  // onBoxClick
  // onBoxSelectSuccess
}
