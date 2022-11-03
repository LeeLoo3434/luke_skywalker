import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const People = () => {
    const [person, setPerson] = useState(null)

    // grabbing path vriable 
    const { people_id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${people_id}`)
            .then(res => setPerson(res.data))
            .catch(error => console.log(error))
    }, [people_id])

    useEffect(() => {

    }, [])
    return (
        <fieldset>
            <legend> PeopleView.jsx</legend>
            {/* Ternary operator- this one lets you leave a message 
        */}
            
            {
                (person) ? <>
                    <h1> {person?.name}</h1>
                    <h6> Height:{person.height}</h6>
                    <h6> Mass:{person.mass}</h6>
                    <h6> Hair Color:{person.hair_color}</h6>
                    <h6> Skin Color:{person.skin_color}</h6>
                    </> : <h1> Loading...</h1>
            }
        </fieldset>
    )
}

export default People