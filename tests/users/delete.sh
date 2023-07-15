
# delete.sh
echo "Enter user id: "
read userId
curl -X DELETE http://localhost:3000/users/$userId
echo ''
