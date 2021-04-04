const who = require('whoiser')
const domainDb = require('../schemas/searchSchema')

module.exports = {
    checkDomain: async (req, res) => {
        const domainName = req.body.value
        const info = await who(domainName)
        const firstKey = Object.keys(info)[0]
        const expire = info[firstKey]['Expiry Date']
        const status = {
            name: domainName,
            time: Date.now(),
            status: !!expire ? 'Occupied' : 'Available',
            expire: !!expire ? expire : '-'
        }
        console.log(status)
        const domainInDb = new domainDb

        Object.keys(status).map(key => {
            domainInDb[key] = status[key]
        })
       await domainInDb.save()
       const log = await domainDb.find()
        res.send({status, log, error: false})
    },

}
