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
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#newGameButton').on('click', authGames.onCreateNewGame)
  $('#signoutButton').on('click', authEvents.onSignOut)
  $('.box').on('click', authGames.onBoxSelect)
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

const onSignInButton2 = (event) => {
  $('#message').text('Please Sign In To Play')
  $('#sign-in').show()
  $('#signinForm').show()
  $('#signinButton2').hide()
}

$('#signinButton2').on('click', onSignInButton2)
// const onBoxClick = (event) => {
//   const box = $(event.target)
//   box.css('background', 'transparent').text(player)
//   player = player === 'O' ? 'X' : 'O'
// }
//
// $('.box').on('click', onBoxClick)

// const player = 'X'
// // let player2 = 'O'
// const onBoxClick = (event) => {
//   const box = $(event.target)
//   box.css('background', 'transparent').text()
//
//   if (player === 'X') {
//     const player = 'O'
//     return player
//   } else if (player === 'O') {
//     const player = 'X'
//     return player
//   }
// }
//
// $('.box').on('click', onBoxClick)
