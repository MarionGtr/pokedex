import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";
import PokemonService from "../Services/PokemonService";


const HomePage = () => {
    const [pokemon, setPokemon] = useState([])


    const fetchPokemon = async () => {
        try {
            const response = await PokemonService.getAllPokemon()

            console.log(response)
            setPokemon(response.data.results)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return <>
        <div className="body">
            <div className="divLogo">
                <img className="logoPokemon" src="src/pngpokemon.png" alt="pokemonimg" />
            </div>
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
                {pokemon.map((pokemon) => {
                    return <PokemonCard PokemonCard={pokemon} key={pokemon.id}></PokemonCard>

                })}

            </div>
        </div>
    </>
}

export default HomePage;