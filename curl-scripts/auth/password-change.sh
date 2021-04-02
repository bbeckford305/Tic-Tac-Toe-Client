curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
     "credentials": {
       "passwords[old]": "'"${PASSWORD}"'",
       "passwords[new]": "'"${PASSWORD}"'"
     }
   }'
