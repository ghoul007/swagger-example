const { User } = require('../models/user')

module.exports = {
    UpdateUserById: UpdateUserById
}

function UpdateUserById(req, res) {
    updateOne(req, res)
}

async function updateOne(req, res) {
    const id = req.swagger.params.id.value
    res.header('Content-Type', 'application/json')
    try {
        const user = await User.findByIdAndUpdate( {_id: id },   req.swagger.params.update_user.value  , { new: true });
        if (!user) res.status(404).send('Not found')
       res.json({success: user}).end();
    } catch (err) {
        res.status(500).send(err)
    }
}