const fs = require ('fs')
const del = function(id, oldNote){
    const note = JSON.parse(oldNote)

    const newNote = note.filter(function(n,index)
{
return n.id !==id
})
fs.writeFileSync('./notes.txt', JSON.stringify(newNote))
}
module.exports = del
