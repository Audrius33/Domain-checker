
const valid = require('is-valid-domain')

module.exports = {
    checkIfValid: async (req, res, next) => {
        const err = {error: "Domain name is not valid"}
        return valid(req.body.value) ? next() : res.send(err)
    }
}

