'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const authGames = require('./game/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#passwordChangeForm').hide()
  $('#signoutButton').hide()
  $('#newGameButton').hide()
  $('#tictactoeButton').hide()
  $('.container').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#newGameButton').on('click', authGames.onCreateNewGame)
  $('#signoutButton').on('click', authEvents.onSignOut)
  $('#tictactoeButton').on('click', authGames.onTicTacToeGame)
})

let player = 'X'
const onBoxClick = (event) => {
  const box = $(event.target)
  box.css('background', 'transparent').text(player)
  player = player === 'O' ? 'X' : 'O'
}

$('.box').on('click', onBoxClick)
