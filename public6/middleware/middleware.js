

module.exports = {
    checkIfValid: async (req, res, next) => {
        const domain = require('../schemas/searchSchema')
        console.log(domain)
        let domainCheck = req.body
        let domainInfo = await whoiser('delfi.lt')
        console.log(domainInfo)
        console.log(domain)

        next()
    }
}