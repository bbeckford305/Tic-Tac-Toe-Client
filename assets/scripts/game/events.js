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

const onPlayerClick = function (event) {
  event.preventDefault()
  const form = event.target
  const gamePlay = getFormFields(form)
  api.selectBox(gamePlay)
    .then(ui.emptyBox)
    .catch(ui.occupiedBox)
}

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
  onPlayerClick,
  onCreateNewGame

}
