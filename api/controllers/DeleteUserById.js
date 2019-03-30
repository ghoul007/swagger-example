const { User } = require('../models/user')

module.exports = {
    DeleteUserById: DeleteUserById
}

function DeleteUserById(req, res) {
    deleteOne(req, res)
}

async function deleteOne(req, res) {
    const id = req.swagger.params.id.value
    res.header('Content-Type', 'application/json')
    try {
        const user = await User.findByIdAndDelete(id)
        if (!user) res.status(404).send('Not found')
        res.send(user);
    } catch (err) {
        res.status(500).send(err)
    }
}