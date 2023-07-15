
# put.sh
echo "Enter user id: "
read userId
echo "Enter new user name: "
read userName
echo "Enter new user phone: "
read userPhone
echo "Enter new user obs: "
read userObs
curl -X PUT -H "Content-Type: application/json" -d '{"name": "'"$userName"'", "phone": "'"$userPhone"'", "obs": "'"$userObs"'"}' http://localhost:3000/users/$userId
echo ''
