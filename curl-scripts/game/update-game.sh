#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": 0,
        "value": "x"
      },
      "over": false
    }
  }'

echo
