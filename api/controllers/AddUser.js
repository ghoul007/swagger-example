const {User} = require('..//models/user')

module.exports = {
    AddUser
}

function AddUser(req, res) {
    const user = User(
        req.swagger.params.user.value
     );

    user.save(function (err) {
        res.set('Content-Type', 'application/json');
        if (err) {
           res.status(500).json(err).end();
        } else {
                res.json({success: req.swagger.params.user.value}).end();
        }
    }) 
}