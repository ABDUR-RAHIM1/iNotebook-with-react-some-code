import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import noteContext from '../../Context/Notes/noteContext';

function AddNote() {
    const notesContext = useContext(noteContext)
    const { addNote } = notesContext;
    /// costom state 
    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: ""
    })

    const handelClick = (e) => {
        addNote(note.title, note.description, note.tag)

        e.preventDefault()
    }

    //  habdle change
    const handelChange = (e) => {
        console.log(e.target.value)
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="NotesForm my-4">
                <h1>Add your Notes</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" name='title' onChange={handelChange} />
                        <Form.Text className="text-muted">
                            Enter A title
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" name='description' onChange={handelChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handelClick}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddNote