'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = function (playerInfo) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: playerInfo
  })
}

const signIn = function (playerInfo) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: playerInfo
  })
}

const changePassword = function (playerInfo) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: playerInfo,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
