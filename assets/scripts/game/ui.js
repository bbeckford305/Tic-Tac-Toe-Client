'use strict'

const store = require('./../store')

const onCreateGameSuccess = function (response) {
  store.game = response.game
  store.game.over = true
  $('#message').text('Player Games Started')
  $('.container').show()
  $('.box').on('click')
  $('#newGameButton').hide()
}

const onCreateGameFailure = function () {
  $('#message').text('Game Create Fail')
}

const onPlayerWin = function (response) {
  $('#message').text('The current player has won.')
  $('#newGameButton2').show()
  // $('.box').trigger('reset')
}

const onPlayerTie = function (response) {
  $('#message').text('Both players have tied.')
  $('#newGameButton2').show()
}

const onNewGameSuccess = function (response) {
  store.game = response.game
  store.game.over = true
  $('#message').text('Play Again To Reveal Image')
  $('.container').show()
  $('.box').trigger('reset')
  $('.box').empty()
  $('.box').on('click')
  $('#newGameButton').hide()
}

const onNewGameFailure = function () {
  $('#message').text('Game Create Fail')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onPlayerWin,
  onPlayerTie,
  onNewGameSuccess,
  onNewGameFailure
}
