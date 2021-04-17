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
  store.game.value = ['X']
  $('#message').text('Player Games Started')
  $('.container').show()
  // $('.box').text('')
  // $('.box').on('click')
}

const onCreateGameFailure = function () {
  $('#message').text('Game Create Fail')
}

// const onMoveSuccess = function (response) {
//   store.game = response.game
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
const move = []
const x = []
const o = []
for (let i = 0; i < move.length; i++) {
  if (move[i] === 'X') {
    x.push(i)
  } else if (move[i] === 'O') {
    o.push(i)
  }
}
// index[0] = document.getElementById('1').innerHTML
// index[1] = document.getElementById('2').innerHTML
// index[2] = document.getElementById('3').innerHTML
// index[3] = document.getElementById('4').innerHTML
// index[4] = document.getElementById('5').innerHTML
// index[5] = document.getElementById('6').innerHTML
// index[6] = document.getElementById('7').innerHTML
// index[7] = document.getElementById('8').innerHTML
// index[8] = document.getElementById('9').innerHTML
//
// const onMoveSuccess = function (index) {
//   for (let i = 0; i < index.length; i++) {
//   }
// }

const win1 = ([0], [1], [2])
const win2 = ([3], [4], [5])
const win3 = ([6], [7], [8])
const win4 = ([0], [4], [7])
const win5 = ([2], [4], [6])
const win6 = ([0], [3], [6])
const win7 = ([1], [4], [7])
const win8 = ([2], [5], [8])

// const onMoveSuccess = function (response) {
//   store.user.game = response.game
//   if (store.user.value[0] === true) {
//     $(`[data-cell-index=${store.user.index}]`).text('X')
//     store.user.value[1] = 'o'
//   } else {
//     $(`[data-cell-index=${store.user.index}]`).text('O')
//     store.user.value[1] = 'x'
//   }
//   store.user.value[0] = !(store.user.value[0])
//
//   const move = store.user.game.move
//   const X = []
//   const O = []
//   for (let i = 0; i < move.length; i++) {
//     if (move[i] === 'X') {
//       X.push(i)
//     } else if (move[i] === 'O') {
//       O.push(i)
//     }
//   }
const checkForWinner = function (response) {
  if (win1 === 'X' || win1 === 'O') {
    $('#message').text((win1('')))
    store.game.move = true
  } else if (win2 === 'X' || win2 === 'O') {
    $('#message').text((win2('')))
    store.game.move = false
  } else if (win3 === 'X' || win3 === 'O') {
    $('#message').text((win3('')))
    store.game.move = false
  } else if (win4 === 'X' || win4 === 'O') {
    $('#message').text((win4('')))
    store.game.move = false
  } else if (win5 === 'X' || win5 === 'O') {
    $('#message').text((win5('')))
    store.game.move = false
  } else if (win6 === 'X' || win6 === 'O') {
    $('#message').text((win6('')))
    store.game.move = false
  } else if (win7 === 'X' || win7 === 'O') {
    $('#message').text((win7('')))
    store.game.move = false
  } else if (win8 === 'X' || win8 === 'O') {
    $('#message').text((win8('')))
    store.game.move = false
  } else if (!(move.includes(''))) {
    $('#message').text('The Game Has Tied')
  }
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
  onCreateGameSuccess,
  onCreateGameFailure,
  checkForWinner
  // onBoxSelectSuccess
}
