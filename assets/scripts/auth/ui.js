'use strict'

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Thank You For Registering')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Registration Failure')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Signed In')
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#signupForm').hide()
  $('#signinForm').hide()
  $('#passwordChangeForm').show()
  $('#signoutButton').show()
}

const onSignInFailure = function () {
  $('#message').text('Email/Password Combination Incorrect')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Your Password Has Been Changed')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message').text('Password Change Failed')
}

const onSignOutSuccess = function () {
  $('#message').text('You Have Been Signed Out')
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#signupForm').show()
  $('#signinForm').show()
  $('#passwordChangeForm').hide()
  $('#signoutButton').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess
}
