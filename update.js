const fs = require ('fs')
    const update = function(note, oldNote){
        const newNote = JSON.parse(oldNote).map(function(n,i){

            if (n.id == note.i){
                n.title = note.title
                n.body = note.body
            }
return n

        })
fs.writeFileSync('notes.txt', JSON.stringify(newNote))
    }
module.exports = update
