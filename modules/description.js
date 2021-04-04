const description = require('project-name-generator')

module.exports = () => {
    return description.generate({words: 9,}).spaced
}
