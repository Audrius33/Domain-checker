const userEmail = require('project-name-generator')

module.exports = () => {
    return `${userEmail.generate({words: 1}).spaced}@init.lt`
}