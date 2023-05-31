import React, { useContext } from 'react'
import { useEffect } from 'react';
import noteContext from '../../Context/Notes/noteContext';
import AddNote from '../AddNote/AddNote';
import NotesItems from '../NotesItems/NotesItems';
import './Notes.css'

function Notes() {
    const notesContext = useContext(noteContext)
    const { notes, addNote, getAllNotes } = notesContext;

    console.log(notes)
    useEffect(() => {
        getAllNotes()
    }, [])
    return (
        <>

            <AddNote />
            <div className="notesContainer">
               {
                   notes.map(note => <NotesItems notes={note} />)
               }
            </div>
        </>
    )
}

export default Notes