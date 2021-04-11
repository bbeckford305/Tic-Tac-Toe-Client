'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('.././store')

const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const gamePlay = getFormFields(form)
  api.newGame(gamePlay)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onTicTacToeGame = function (event) {
  event.preventDefault()
  const form = event.target
  const gamePlay = getFormFields(form)
  api.startGame(gamePlay)
    .then(ui.onTicTacToeSuccess)
    .catch(ui.onTicTacToeFailure)
}

// const onBoxClick = function (event) {
//   event.preventDefault()
//   const box = event.target
//   const text = ''
//   const firstPlayer = text(box)
//   // api.selectBox(firstPlayer)
//   if (box === 'X' || box === 'O') {
//     $('.box').on('disabled', true)
//   }

// .then(ui.emptyBox)
// .catch(ui.occupiedBox)
// }

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
  // const form = event.target
  // const cell = getFormFields(form)
  const box = store.user.box
  box.css('background', 'transparent').text()
  store.user.box = $(event.target).attr('box')
  //   if (store.user.complete === true && $(event.target).text() === '') {
  api.selectBox(box)
    .then(ui.onBoxSelectSuccess)
    .catch(ui.onBoxSelectFailure)
//   } else if (($(event.target).text() === '')) {
//     $('#message').text('Box unavailable')
//   }
}

//
// // Do not allow spaces on the board to be selected twice.
//
// selectBox.addEventListener('click', function(){
//
//   if (onBoxClick = true) {
//     $('#message').text('Moved not allowed')
//   }
// }
//
// .selectBox()

module.exports = {
  onNewGame,
  onTicTacToeGame,
  // onBoxClick,
  onBoxSelect,
  onCreateNewGame
}
