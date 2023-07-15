
# get_by_id.sh
echo "Enter user id: "
read userId
curl -X GET http://localhost:3000/users/$userId
echo ''
