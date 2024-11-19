import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokemonService from "../Services/PokemonService"
import { Container } from "react-bootstrap";


const PokemonDetailsPage = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [weakness, setWeakness] = useState([])

    const fetchPokemonByID = async () => {
        try {
            const response = await PokemonService.getPokemonByID(id)
            const res = response.data
            const resbisbis = await PokemonService.getPokemonWeakness(res.types[0].type.name)
            console.log(res)
            setPokemon(res)
            setWeakness(resbisbis.data)


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

        <p>{pokemonDetails.flavor_text_entries && pokemonDetails.flavor_text_entries[16].flavor_text}</p>

        <h2>Types</h2>
        <ul>
            {pokemon.types && pokemon.types.map((type, index) => {
                return <button> <div key={index}>{type.type.name}</div></button>
            })}
        </ul>
        <h2>Stats</h2>
        <ul>
            {pokemon.stats && pokemon.stats.map((stat, index) => {
                return <li key={index}>{stat.stat.name} : {stat.base_stat}</li>
            })}
        </ul>
        <h2>Game Versions</h2>
                <ul>
                    {pokemon.game_indices &&
                        pokemon.game_indices.map((game, index) => (
                            <div key={index}>
                             <button>{game.version.name}</button>
                            </div>
                        ))}
                </ul>
            <h2>Weakness</h2>
            <ul>

    {weakness.damage_relations?.double_damage_from && (
        <li>
            <strong>Double damage from:</strong>
            <ul>
                {weakness.damage_relations.double_damage_from.map((relation, index) => (
                    <li key={index}>{relation.name}</li>
                ))}
            </ul>
        </li>
    )}

    {weakness.damage_relations?.double_damage_to && (
        <li>
            <strong>Double damage to:</strong>
            <ul>
                {weakness.damage_relations.double_damage_to.map((relation, index) => (
                    <li key={index}>{relation.name}</li>
                ))}
            </ul>
        </li>
    )}
</ul>

    </Container>

}

export default PokemonDetailsPage;