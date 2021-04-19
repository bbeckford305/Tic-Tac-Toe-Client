'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('.././store')

let playerTurns = 'X'

const onCreateNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const gamePlay = getFormFields(form)
  api.createGame(gamePlay)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onBoxSelect = function (event) {
  if (gameWin()) return
  const box = $(event.target)
  const index = $(event.target).attr('data-cell-index')
  const gameOver = store.game.over
  if (box.text() === '') {
    box.text(playerTurns)
    box.css('background', 'transparent').text()
    store.game.cells[index] = playerTurns
    playerTurns = playerTurns === 'X' ? 'O' : 'X'
    $('#message').text(`Currently, ${playerTurns} is playing.`)
  }
  const value = $(event.target).text()
  api.playerMove(index, value, gameOver, gameWin())
    .then(ui.onMoveSuccess)
    .catch(ui.onMoveError)
}

const gameWin = function () {
  if (store.game.cells[0] && store.game.cells[1] === store.game.cells[0] && store.game.cells[2] === store.game.cells[0]) {
    ui.onPlayerWin()
    return true
  } else if (store.game.cells[3] && store.game.cells[4] === store.game.cells[3] && store.game.cells[5] === store.game.cells[3]) {
    ui.onPlayerWin()
    return true
  } else if (store.game.cells[6] && store.game.cells[7] === store.game.cells[6] && store.game.cells[8] === store.game.cells[6]) {
    ui.onPlayerWin()
    return true
  } else if (store.game.cells[0] && store.game.cells[3] === store.game.cells[0] && store.game.cells[6] === store.game.cells[0]) {
    ui.onPlayerWin()
    return true
  } else if (store.game.cells[1] && store.game.cells[4] === store.game.cells[1] && store.game.cells[7] === store.game.cells[1]) {
    ui.onPlayerWin()
    return true
  } else if (store.game.cells[2] && store.game.cells[5] === store.game.cells[2] && store.game.cells[8] === store.game.cells[2]) {
    ui.onPlayerWin()
    return true
  } else if (store.game.cells[0] && store.game.cells[4] === store.game.cells[0] && store.game.cells[8] === store.game.cells[0]) {
    ui.onPlayerWin()
    return true
  } else if (store.game.cells[2] && store.game.cells[4] === store.game.cells[2] && store.game.cells[6] === store.game.cells[2]) {
    ui.onPlayerWin()
    return true
  } else if (store.game.cells[0] && store.game.cells[1] && store.game.cells[2] && store.game.cells[3] && store.game.cells[4] && store.game.cells[5] && store.game.cells[6] && store.game.cells[7] && store.game.cells[8]) {
    ui.onPlayerTie()
  } else {
    return false
  }
}

const onPlayAgain = function (event) {
  event.preventDefault()
  const form = event.target
  const gamePlay = getFormFields(form)
  api.createGameAgain(gamePlay)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
module.exports = {
  onBoxSelect,
  onCreateNewGame,
  gameWin,
  onPlayAgain
}
