const userDb = require('../schemas/schema')


module.exports = {
    checkDomain: (req, res) => {
        console.log(req.body)
        let user = new userDb
        console.log(user)
        user.name = req.body
        console.log(user.name)
        user.save().then(() => {
            res.send({error: false})
        }).catch(e => {
            res.send({error: true, message: e})
        })

    },

}
