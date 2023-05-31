import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import './NotesItems.css'
import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import noteContext from '../../Context/Notes/noteContext';

function NotesItems(props) {
    const notesContext = useContext(noteContext)
    const { notes , deleteNote, editNote } = notesContext; 

    const { title, description, tag , _id} = props.notes;

    return (
        <>
            <div className="notesItems ">
                <Card >
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <div className="cardIcon">
                            <AiFillDelete className='deleteBtn'  onClick={()=>deleteNote(_id)} />
                            <FaEdit className='deleteBtn' onClick={editNote}/>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default NotesItems