const add = require ('./add')
const write = require ('./write')
const read = require ('./read')
const del = require ('./del')
const present = require ('./present')
const update = require ('./update')


const data = process.argv

if (data [2]=="add"){
    const note = {
        "id": data[3],
        "title": data [4],
        "body": data [5]
    }
    const oldNote = read()
    add(note, oldNote)
}
if (data [2] == "delete"){
    const id = data[3]
    const oldNote = read()
    const del = require ('./del')
    del (id, oldNote)
    console.log(read ())
}
if (data[2] == "update"){
    const note = {
        id: data[3],
        title: data[4],
        body:[5]

    }
    const oldNote = read()

    update(note, oldNote)
    present(read())
}