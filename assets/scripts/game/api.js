'use strict'

const config = require('./../config')
const store = require('./../store')

const newGame = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const startGame = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + id,
    data: {},
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createGame = function (gamePlay) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    data: gamePlay,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const selectBox = function (id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + id,
    data: {
      game: {
        cell: {
          index: 0,
          value: 'X'
        },
        over: false
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  startGame,
  selectBox,
  createGame

}
