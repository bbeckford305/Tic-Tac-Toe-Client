'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const authGames = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#gameLogo').hide()
  $('#slogan').hide()
  $('#change-password').hide()
  $('#passwordChangeForm').hide()
  $('#signoutButton').hide()
  $('#newGameButton').hide()
  $('#signinButton2').hide()
  $('#tictactoeButton').hide()
  $('.container').hide()
  $('#signupForm').hide()
  $('#sign-up').hide()
  $('#signinForm').hide()
  $('#sign-in').hide()
  $('#newGameButton2').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#newGameButton').on('click', authGames.onCreateNewGame)
  $('#signoutButton').on('click', authEvents.onSignOut)
  $('.box').on('click', authGames.onBoxSelect)
  $('#newGameButton2').on('click', authGames.onPlayAgain)
})

const onEntrySignUp = (event) => {
  $('#entryButton').hide()
  $('#entryMessage').hide()
  $('#entrySignInButton').hide()
  $('#entrySignIn').hide()
  $('#message').text('Please enter email and password')
  $('#sign-up').show()
  $('#signupForm').show()
}

$('#entryButton').on('click', onEntrySignUp)

const onEntrySignIn = (event) => {
  $('#entryButton').hide()
  $('#entryMessage').hide()
  $('#message').text('Welcome Back')
  $('#sign-in').show()
  $('#signinForm').show()
}

$('#entrySignInButton').on('click', onEntrySignIn)

// const onPlayAgain = (event) => {
//   $('#entryButton').hide()
//   $('#entryMessage').hide()
//   $('#message').text('Welcome Back')
//   $('#sign-in').show()
//   $('#signinForm').show()
// }
//
// const onPlayAgain = (event) => {
//   $('#newGameButton2').on('click', authGames.onCreateNewGame)
//   $('.box').trigger('reset')
// }

$('[data-cell-index="0"]').data('click', authGames.onBoxSelect)
$('[data-cell-index="1"]').data('click', authGames.onBoxSelect)
$('[data-cell-index="2"]').data('click', authGames.onBoxSelect)
$('[data-cell-index="3"]').data('click', authGames.onBoxSelect)
$('[data-cell-index="4"]').data('click', authGames.onBoxSelect)
$('[data-cell-index="5"]').data('click', authGames.onBoxSelect)
$('[data-cell-index="6"]').data('click', authGames.onBoxSelect)
$('[data-cell-index="7"]').data('click', authGames.onBoxSelect)
$('[data-cell-index="8"]').data('click', authGames.onBoxSelect)
