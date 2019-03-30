const { User } = require('../models/user')

module.exports = {
    FindUserById: FindUserById
}

function FindUserById(req, res) {
    getOne(req, res);
}

async function getOne(req, res) {
    const id = req.swagger.params.id.value
    res.header('Content-Type', 'application/json')
    try {
        const users = await User.findOne({ _id: id });
        if (!users) return res.status(404).send('Not found')
        res.end(users);
    } catch (err) {
        res.status(500).send(err)
    }
}
