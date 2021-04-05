'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $(() => {
    $('#change-password').hide()
    $('#passwordChangeForm').hide()
    $('#signoutButton').hide()
    $('#sign-up').on('submit', authEvents.onSignUp)
    $('#sign-in').on('submit', authEvents.onSignIn)
    $('#change-password').on('submit', authEvents.onChangePassword)
    $('#signoutButton').on('click', authEvents.onSignOut)
  })
})
