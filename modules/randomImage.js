const loremPicsum = require("lorem-picsum");

module.exports = () => {
    let rnd = Math.ceil(Math.random()* 200)
    return loremPicsum({

        width: rnd,
        height: 300,

    });
}