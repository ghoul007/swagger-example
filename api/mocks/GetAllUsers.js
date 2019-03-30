module.exports = {
    GetAllUsers: GetAllUsers
}

function GetAllUsers(req, res, next) {
    res.json([
        { _id: 0, name: "ahmed", email: "ahmed@gmail.com", password:"123" },
        { _id: 1, name: "ali", email: "ahmed2@gmail.com", password:"1234" }
    ])
}