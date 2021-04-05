curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
     "passwords": {
       "password[old]": "'"${PASSWORD}"'",
       "password[new]": "'"${PASSWORD}"'"
     }
   }'
