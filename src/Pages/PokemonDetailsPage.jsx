import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokemonService from "../Services/PokemonService"
import { Container } from "react-bootstrap";


const PokemonDetailsPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState ([])

    const fetchPokemonByID = async () => {
        try {
            const response = await PokemonService.getPokemonByID(id)
            const res = response.data
            console.log(res)
            setPokemon(res)


        } catch (error) {
            console.log(error)
        }

    }
    const fetchPokemonDetails = async () => {
        try {
            const response = await PokemonService.getPokemonDetails(id)
            const resbis = response.data
            console.log(resbis)
            setPokemonDetails(resbis)


        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchPokemonByID(), fetchPokemonDetails()
    }, [])


    return <Container className="d-flex flex-column align-items-center mt-3 gap-2">

        <h2>N°{pokemon.id}</h2>
        <img src={"https://img.pokemondb.net/artwork/" + pokemon.name + ".jpg"} />
        <p>{pokemon.name}</p>
        <h2>Types</h2>
            <ul>
                {pokemon.types && pokemon.types.map((type, index) => {
                    return <li key={index}>{type.type.name}</li>
                })}
            </ul>
            <h2>Stats</h2>
            <ul>
                {pokemon.stats && pokemon.stats.map((stat, index) => {
                    return <li key={index}>{stat.stat.name} : {stat.base_stat}</li>
                })}
            </ul>
    </Container>

}

export default PokemonDetailsPage;