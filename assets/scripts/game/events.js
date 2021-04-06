'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

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
module.exports = {
  onNewGame,
  onTicTacToeGame,
  // onBoxClick,
  onCreateNewGame

}
