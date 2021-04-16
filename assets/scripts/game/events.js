'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('.././store')

let playerTurns = 2

// const onNewGame = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const gamePlay = getFormFields(form)
//   api.newGame(gamePlay)
//     .then(ui.onNewGameSuccess)
//     .catch(ui.onNewGameFailure)
// }
//
// const onTicTacToeGame = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const gamePlay = getFormFields(form)
//   api.startGame(gamePlay)
//     .then(ui.onTicTacToeSuccess)
//     .catch(ui.onTicTacToeFailure)
// }

const onCreateNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const gamePlay = getFormFields(form)
  api.createGame(gamePlay)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// const onBoxSelect = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const boxSelect = getFormFields(form)
//   api.selectBox(boxSelect)
//     .then(ui.onBoxSelectSuccess)
//     .catch(ui.onBoxSelectFailure)

const move = ['', '', '', '', '', '', '', '', '']
move[0] = document.getElementById('1').innerHTML
move[1] = document.getElementById('2').innerHTML
move[2] = document.getElementById('3').innerHTML
move[3] = document.getElementById('4').innerHTML
move[4] = document.getElementById('5').innerHTML
move[5] = document.getElementById('6').innerHTML
move[6] = document.getElementById('7').innerHTML
move[7] = document.getElementById('8').innerHTML
move[8] = document.getElementById('9').innerHTML

const win1 = ([0], [1], [2])
const win2 = ([3], [4], [5])
const win3 = ([6], [7], [8])
const win4 = ([0], [4], [7])
const win5 = ([2], [4], [6])
const win6 = ([0], [3], [6])
const win7 = ([1], [4], [7])
const win8 = ([2], [5], [8])

const gameStore = function () {
  const move = store.user.game.move
  const X = []
  const O = []
  for (let i = 0; i < move.length; i++) {
    if (move[i] === 'X') {
      X.push(i)
    } else if (move[i] === 'O') {
      O.push(i)
    }
  }
}

// let playerTest = 'X
const onBoxSelect = function (event) {
  event.preventDefault()
  // const gameStorage = event.target.id
  const box = $(event.target)
  if (box.text() === '') {
    if (playerTurns % 2 === 0) {
      box.css('background', 'transparent').text('X')
      $('#message').text('X has selected a space.')
      playerTurns++
    } else {
      box.css('background', 'transparent').text('O')
      $('#message').text('O has selected a space.')
      playerTurns++
    }
  }
}
// if (box.text() === '') {
// box.text(playerTest)
//   store.box[gameStorage] = store.playerTest
//   api.selectBox(playerTest)
//     .then(ui.onBoxSelectSuccess)
//     .catch(ui.onBoxSelectFailure)
// }

// const boxCheck = (val) => val !== ''
// const gameTied = store.game.box.every(boxCheck)

const gameWin = function () {
  if (win1 === 'X' || win1 === 'O') {
    store.move.complete = true
  } else if (win2 === 'X' || win2 === 'O') {
    store.move.complete = true
  } else if (win3 === 'X' || win3 === 'O') {
    store.move.complete = true
  } else if (win4 === 'X' || win4 === 'O') {
    store.move.complete = true
  } else if (win5 === 'X' || win5 === 'O') {
    store.move.complete = true
  } else if (win6 === 'X' || win6 === 'O') {
    store.move.complete = true
  } else if (win7 === 'X' || win7 === 'O') {
    store.move.complete = true
  } else if (win8 === 'X' || win8 === 'O') {
    store.move.complete = true
  } else if (win1 === '' && win2 === '' && win3 === '') {
    store.move.complete = false
    // } else if (gameTied === true) {
    //   $('#message').text('The game has tied')
    // }
  }
}
// $('#message').text('Select A New Cell')

// playerTest = playerTest === 'X' ? 'O' : 'X'
// store.playerTest = playerTest === 'X' ? 'O' : 'X'
// if (playerTurns % 2 === 0) {
//   box.css('background', 'transparent').text('X')
//   playerTurns++
// } else {
//   playerTurns++
// }
// const boxCheck = (val) => val !== ''
// const gameTied = store.game.box.every(boxCheck)

module.exports = {
  // onNewGame,
  // onTicTacToeGame,
  // onBoxClick,
  onBoxSelect,
  onCreateNewGame,
  // playerTest,
  gameStore,
  gameWin
}
