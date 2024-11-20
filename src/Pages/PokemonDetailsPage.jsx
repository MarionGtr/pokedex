import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokemonService from "../Services/PokemonService"
import { Container } from "react-bootstrap";
import GraphicStat from "./GraphicStat";


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

//     let flavorText = "";
//   if (pokemon.flavor_text_entries) {
//     const frenchFlavor = pokemon.flavor_text_entries.find(
//       (entry) => entry.language.name === "fr"
//     );
//     flavorText = frenchFlavor
//       ? frenchFlavor.flavor_text
//       : "Aucune description en français disponible.";
//   }


return <Container className="page">

    <div className="partie-gauche">

        <div className="bloc-img">
            <h5>N°{pokemon.id}</h5>
            <h1> {pokemon.name}</h1>
            <img src={"https://img.pokemondb.net/artwork/" + pokemon.name + ".jpg"} />
        </div>

        <div className="bloc-lore">
            <h5>{pokemonDetails.flavor_text_entries && pokemonDetails.flavor_text_entries[16].flavor_text}</h5>
        </div>


        <div className="bloc-type">
            <h2>Types</h2>

            <ul>
                {pokemon.types && pokemon.types.map((type) => {
                    return <button className={type.type.name}>{type.type.name}</button>
                })}
            </ul>
        </div>


        <div className="bloc-weakness">
            <h2>Weakness</h2>
            <ul>

                {weakness.damage_relations?.double_damage_from && (
                    <div className='damage-from'>
                        <strong>Double damage from:</strong>

                        {weakness.damage_relations.double_damage_from.map((relation) => (
                            <button className={relation.name}>{relation.name}</button>
                        ))}
                    </div>

                )}

                {weakness.damage_relations?.double_damage_to && (
                    <div className='damage-to'>
                        <strong>Double damage to:</strong>

                        {weakness.damage_relations.double_damage_to.map((relation) => (
                            <button className={relation.name}>{relation.name}</button>
                        ))}

                    </div>
                )}
            </ul>
        </div>

    </div>
    <div className="partie-droite">


            <div className="bloc-stat">
                <h2>Statistiques :</h2>
                {/* <ul>
                        {pokemon.stats && pokemon.stats.map((stat, index) => {
                            return <li key={index}>{stat.stat.name} : {stat.base_stat}</li>
                        })}
                    </ul> */}
                <GraphicStat pokemon={pokemon} />
            </div>

        <div className="bloc-version">
            <h2>Game Versions</h2>
            <ul>
                {pokemon.game_indices &&
                    pokemon.game_indices.map((game, index) => (
                        <div key={index}>
                            <button className={game.version.name}>{game.version.name}</button>
                        </div>
                    ))}
            </ul>
        </div>
    </div>


</Container>
}
                    



export default PokemonDetailsPage;