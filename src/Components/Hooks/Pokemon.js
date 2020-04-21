import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(res =>
        setPokemon(res.data.results))

        // cleanup function will trigger a componentWillUnmount()
        // return () => {}
        // use an empty array as a second argument that says don't watch for changes ie componentDidMount
    }, [])

    return <div> {JSON.stringify(pokemon)} </div>
}

export default Pokemon