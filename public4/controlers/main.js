const userDb = require('../schemas/userSchema')

module.exports = {
    createUser: (req, res) => {

        let user = new userDb
        user.name = req.body.name
        user.age = Number(req.body.age)
        user.city = req.body.city
        user.gender =  req.body.gender
        user.skinColor =  req.body.skinColor
        user.save().then(() => {
            res.send({error: false})
        }).catch(e => {
            res.send({error: true, message: e})
        })

    },
    findUser: async (req, res) => {
        let user = await userDb.find({name: req.params.username})
        console.log(user)
        res.send(user)
    },
    updateUserName: async (req, res) => {
        console.log(req.body)
        userDb.findByIdAndUpdate(
            {_id: req.body.id},
            {$set: {name: req.body.name}},
                   {returnOriginal: false})
                       .then(user => {
                           console.log(user)
                       }).catch(e => {
                       console.log(e)
                   }
        )
    }
}
