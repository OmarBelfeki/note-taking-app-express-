const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4} = require("uuid");


const router = express.Router();
const dataPath = path.join(__dirname, "../data/notes.json")

function getNotes() {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

function saveNotes(notes) {
    fs.writeFileSync(dataPath, JSON.stringify(notes, null, 2));
}

router.get("/", (req, res) => {
    const notes = getNotes();
    res.json(notes);
})

router.post("/", (req, res) => {
    const { title, content } = req.body;
    const notes = getNotes();
    
    const newNote = {
        id: uuidv4(),
        title,
        content,
        createAl: new Date().toISOString()
    };
    notes.push(newNote);
    saveNotes(notes);
    res.status(201).json(newNote);
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const notes = getNotes();
    const noteIndex = notes.findIndex((note) => note.id === id);

    if(noteIndex === -1){
        return res.status(404).json({message: "Note not found"});
    }

    notes[noteIndex] = {...notes[noteIndex], title, content};
    saveNotes(notes);
    res.json(notes[noteIndex]);
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    let notes = getNotes();

    const noteExists = notes.find((note) => note.id === id);

    if(!noteExists){
        return res.status(404).json({ message: "Note not found"});
    }

    notes = notes.filter((note) => note.id === id);
    saveNotes(notes);
    res.json({message: "Note delete"});
})

module.exports = router;