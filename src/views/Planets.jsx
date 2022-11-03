import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


const Planets = () => {
    const [planet, setPlanet] = useState(null)

    // grabbing the path variable 
    const {planet_id}= useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planet_id}`)
        .then(res => setPlanet(res.data))
        .catch(error => console.log(error))
    }, [planet_id])

    useEffect(() => {

    }, [])

    return (
        <fieldset>
            <legend> Planets.jsx</legend>
            {
                (planet)? <>
                <h1> {planet.name}</h1>
                <h6> Climate:{planet.climate}</h6>
                <h6> Terrain:{planet.terrain}</h6>
                <h6> Surface Water:{planet.surface_water}</h6>
                <h6> Population:{planet.population}</h6>
                </> 
                : <h1> Loading...</h1>
            }
        </fieldset>
    )
}

export default Planets