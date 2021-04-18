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
  const index = $(event.target).attr('data-cell-index')
  const gameOver = store.game.over
  if (box.text() === '') {
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
  const value = $(event.target).text()
  api.playerMove(index, value, gameOver)
    .then(ui.onMoveSuccess)
    .catch(ui.onMoveError)
}

//   api.playerMove(index)
//     .then(ui.onMoveSuccess)
//     .catch(ui.onMoveError)
// }
module.exports = {

  onBoxSelect,
  onCreateNewGame
}
