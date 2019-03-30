const { User } = require('../models/user')

module.exports = {
    GetAllUsers: GetAllUsers
}

function GetAllUsers(req, res) {
    getAll(req, res);
}

async function getAll(req, res) {
    res.header('Content-Type', 'application/json')
    const users = await User.find();
    res.send(users);
}
