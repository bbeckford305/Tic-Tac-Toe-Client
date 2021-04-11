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
  $('#tictactoeButton').hide()
  $('.container').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#newGameButton').on('click', authGames.onCreateNewGame)
  $('#signoutButton').on('click', authEvents.onSignOut)
  $('#1').on('click', authGames.onBoxSelect)
  $('#2').on('click', authGames.onBoxSelect)
  $('#3').on('click', authGames.onBoxSelect)
  $('#4').on('click', authGames.onBoxSelect)
  $('#5').on('click', authGames.onBoxSelect)
  $('#6').on('click', authGames.onBoxSelect)
  $('#7').on('click', authGames.onBoxSelect)
  $('#8').on('click', authGames.onBoxSelect)
})

// let player = 'X'
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
