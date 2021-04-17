'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('.././store')

let playerTurns = 2

const onCreateNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const gamePlay = getFormFields(form)
  api.createGame(gamePlay)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onBoxSelect = function (event) {
  event.preventDefault()
  const box = $(event.target)
  const value = $(event.target).text()
  const index = $(event.target).attr('data-cell-index')
  if (store.game.move === true && box.text() === '') {
    // api.playerMove(index)
    //   .then(ui.onMoveSuccess)
    //   .catch(ui.onMoveError)
    if (playerTurns % 2 === 0) {
      box.css('background', 'transparent').text('X')
      $('#message').text('It is now O turn')
      playerTurns++
    } else {
      box.css('background', 'transparent').text('O')
      $('#message').text('It is now X turn')
      playerTurns++
    }
  }
  api.playerMove(index, value)
    .then(ui.onMoveSuccess)
    .catch(ui.onMoveError)
}

//   api.playerMove(index)
//     .then(ui.onMoveSuccess)
//     .catch(ui.onMoveError)
// }

// const move = ['', '', '', '', '', '', '', '', '']
// move[0] = document.getElementById('1').innerHTML
// move[1] = document.getElementById('2').innerHTML
// move[2] = document.getElementById('3').innerHTML
// move[3] = document.getElementById('4').innerHTML
// move[4] = document.getElementById('5').innerHTML
// move[5] = document.getElementById('6').innerHTML
// move[6] = document.getElementById('7').innerHTML
// move[7] = document.getElementById('8').innerHTML
// move[8] = document.getElementById('9').innerHTML
//
// const win1 = ([0], [1], [2])
// const win2 = ([3], [4], [5])
// const win3 = ([6], [7], [8])
// const win4 = ([0], [4], [7])
// const win5 = ([2], [4], [6])
// const win6 = ([0], [3], [6])
// const win7 = ([1], [4], [7])
// const win8 = ([2], [5], [8])

// const onPlayerMove = function (event) {
//   store.user.index = $(event.target).attr('data-cell-index')
//   const index = store.user.index
//   if (store.user.move === true && $(event.target).text() === '') {
//     api.playerMove(index)
//       .then(ui.onMoveSuccess)
//       .catch(ui.onMoveError)
//   } else if (!($(event.target).text() === '')) {
//     $('#messages').text('Move Not Allowed')
//   } else {
//     $('#messages').text('Click New Game To Play Again')
//   }
// }
//

// const gameWin = function () {
//   if (win1 === 'X' || win1 === 'O') {
// $('#message').text((win1('')))
//     store.user.move = false
//   } else if (win2 === 'X' || win2 === 'O') {
// $('#message').text((win2('')))
//     store.user.move = false
//   } else if (win3 === 'X' || win3 === 'O') {
// $('#message').text((win3('')))
//     store.user.move = false
//   } else if (win4 === 'X' || win4 === 'O') {
// $('#message').text((win4('')))
//     store.user.move = false
//   } else if (win5 === 'X' || win5 === 'O') {
// $('#message').text((win5('')))
//     store.user.move = false
//   } else if (win6 === 'X' || win6 === 'O') {
// $('#message').text((win6('')))
//     store.user.move = false
//   } else if (win7 === 'X' || win7 === 'O') {
// $('#message').text((win7('')))
//     store.user.move = false
//   } else if (win8 === 'X' || win8 === 'O') {
// $('#message').text((win8('')))
//     store.user.move = false
// } else  if (!(cell.includes(''))) {{
//   $('#message').text('The Game Has Tied')
// }
// }
// }
module.exports = {

  onBoxSelect,
  onCreateNewGame
  // gameStore,
  // gameWin
}
