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
//
// const onTicTacToeSuccess = function (response) {
//   store.player = response.player
//   $('#message').text('New Game Started')
//   $('.container').show()
// }
//
// const onTicTacToeFailure = function () {
//   $('#message').text('Not Able To Start Game')
// }
//
// const emptyBox = function (response) {
//   store.player = response.player
// }
//
// const occupiedBox = function () {
//   $('#message').text('Choose Another Box')
// }

const onCreateGameSuccess = function (response) {
  store.player = response.player
  $('#message').text('Player Games')
  $('.container').show()
  $('#tictactoeButton').show()
}

const onCreateGameFailure = function () {
  $('#message').text('Game Create Fail')
}

module.exports = {
  // onNewGameSuccess,
  // onNewGameFailure,
  // onTicTacToeSuccess,
  // onTicTacToeFailure,
  // occupiedBox,
  // emptyBox,
  onCreateGameSuccess,
  onCreateGameFailure
}
