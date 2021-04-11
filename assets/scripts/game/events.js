'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const store = require('.././store')

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

  api.selectBox()
    .then(ui.onBoxSelectSuccess)
    .catch(ui.onBoxSelectFailure)
}

module.exports = {
  onNewGame,
  onTicTacToeGame,
  // onBoxClick,
  onBoxSelect,
  onCreateNewGame
}
