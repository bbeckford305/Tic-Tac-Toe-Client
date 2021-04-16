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

// const onSignInButton2 = (event) => {
//   $('#message').text('Please Sign In To Play')
//   $('#sign-in').show()
//   $('#signinForm').show()
//   $('#signinButton2').hide()
// }
//
// $('#signinButton2').on('click', onSignInButton2)

// const gamestart = function (player) {
//   // store.user.game = playerMove.game
//   if (Math.random() < 0.5) {
//     player = 'X'
//   } else {
//     player = 'O'
//   }
//   player = null
//   $('#message').text('Please make your move')
// }
//
// $('.box').on('click', gamestart)
// const onBoxSelectSuccess = function (playerMove) {
//   store.user.game = playerMove.game
//   const box = $(event.target)
//   box.css('background', 'transparent').text()
//   // box.css('background', 'transparent')
//   if (box.text() === 'X') {
//     box.text(player)
//     player = player === 'O' ? 'X' : 'O'
//   // //     return player
//   } else if (box.text() === 'O' || box.text() === 'X') {
//     $('#message').text('Select A New Cell')
//   // // //     return player
//   // }
//   }
// }
// const boxCell = $(event.target).data('cell-index')
// const user = (box.text())
//   if (playerMove === null) {
//     $('[id=${store.user.cell}]').text('X')
//   } else {
//     $('[id=${store.user.cell}]').text('O')
//   }
// }
// const a1 = document.getElementById('1').id
// const a2 = document.getElementById('2').id
// const a3 = document.getElementById('3').id
// const b1 = document.getElementById('4').id
// const b2 = document.getElementById('5').id
// const b3 = document.getElementById('6').id
// const c1 = document.getElementById('7').id
// const c2 = document.getElementById('8').id
// const c3 = document.getElementById('9').id
//
// const win1 = (a1, a2, a3)
// const win2 = (b1, b2, b3)
// const win3 = (c1, c2, c3)
// const win4 = (a1, b2, c2)
// const win5 = (a3, b2, c1)
// const win6 = (a1, b1, c1)
// const win7 = (a2, b2, c2)
// const win8 = (a3, b3, c3)

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
//   // player = player === 'O' ? 'X' : 'O'
//   // const gameCheck = function () {
// while (player1 = 'X') {
//  player2 = 'O'
// }
// const gameWin = function () {
//   if (win1 === 'X' || win1 === 'O') {
//     store.move.complete = true
//   } else if (win2 === 'X' || win2 === 'O') {
//     store.move.complete = true
//   } else if (win3 === 'X' || win3 === 'O') {
//     store.move.complete = true
//   } else if (win4 === 'X' || win4 === 'O') {
//     store.move.complete = true
//   } else if (win5 === 'X' || win5 === 'O') {
//     store.move.complete = true
//   } else if (win6 === 'X' || win6 === 'O') {
//     store.move.complete = true
//   } else if (win7 === 'X' || win7 === 'O') {
//     store.move.complete = true
//   } else if (win8 === 'X' || win8 === 'O') {
//     store.move.complete = true
//   } else if (win1 === '' && win2 === '' && win3 === '') {
//     store.move.complete = false
//   }
// }
// $('#message').text('Select A New Cell' + gameWin)
// // // }
// //
// $('.box').on('click', onBoxClick)
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
