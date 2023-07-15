
# post.sh
echo "Enter user name: "
read userName
echo "Enter user phone: "
read userPhone
echo "Enter user obs: "
read userObs
curl -X POST -H "Content-Type: application/json" -d '{"name": "'"$userName"'", "phone": "'"$userPhone"'", "obs": "'"$userObs"'"}' http://localhost:3000/users
echo ''
