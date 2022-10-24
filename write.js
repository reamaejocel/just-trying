const fs = require ('fs')
const write = function (data = "Hello"){

fs.writeFileSync('./notes.txt', data);

}
module.exports = write