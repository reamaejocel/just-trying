const fs = require ('fs')

const read = function(){

    return fs.readFileSync('./notes.txt', 'utf8')

}

module.exports = read