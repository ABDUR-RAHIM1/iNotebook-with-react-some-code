import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const host = `http://localhost:5000`;

    const iniShialNotes = []
    const [notes, setNotes] = useState(iniShialNotes)


    // get all notes 
    const getAllNotes =async () => {
        // call api 
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3MmM0YmExMjZmZDY2MzI3M2VjOTNlIn0sImlhdCI6MTY4NTI3MTg5NX0.MAsopq30xui8ZgG2USKKS5aYoNUNsrZtgXIeb4yGr8E"
            },
            
        });
        const data = await response.json();
        setNotes(data) 

    }



    // ADD notes 
    const addNote =async (title, description, tag) => {
        // call api 
        const response = await fetch(`${host}/api/notes/addNote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3MmM0YmExMjZmZDY2MzI3M2VjOTNlIn0sImlhdCI6MTY4NTI3MTg5NX0.MAsopq30xui8ZgG2USKKS5aYoNUNsrZtgXIeb4yGr8E"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const data =await response.json();


    }
    // EDIT Note 
    const editNote = async (id, title, description, tag) => {

        // call api 
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3MmM0YmExMjZmZDY2MzI3M2VjOTNlIn0sImlhdCI6MTY4NTI3MTg5NX0.MAsopq30xui8ZgG2USKKS5aYoNUNsrZtgXIeb4yGr8E"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const data = await response.json();

        // logic for updated notes 
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i]
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag
            }
        }
    }

    /// delete Note 
    const deleteNote = (id) => {
        const deleteNote = notes.filter(note => note._id !== id)
        setNotes(deleteNote)
    }


    return (
        <noteContext.Provider value={{ notes, addNote, editNote, deleteNote , getAllNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;