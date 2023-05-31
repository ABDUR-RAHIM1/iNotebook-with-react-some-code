import React, { useContext } from 'react'
import noteContext from '../../Context/Notes/noteContext'
 
function About() {
    const x = useContext(noteContext)
    return (
        <div>About name {x.name}</div>
    )
}

export default About