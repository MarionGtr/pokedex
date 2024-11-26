import { useParams } from "react-router-dom"
import VersionService from "../Services/VersionService"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import GenerationService from "../Services/GenerationService"
import PokemonCard from "../Components/PokemonCard"

const VersionPage = () => {
    const {version } = useParams()
    const [versionName, setVersionName] = useState("")
    const [pokemons, setPokemons] = useState([])


    const fetchPokemonByVersion = async () => {
        try {
            const response = await VersionService.getVersionByName(version)
            setVersionName(response.data.names[3].name)
            const responseVersionGroup = await VersionService.getVersionGroupByName(response.data.version_group.name)
            const responseGeneration = await GenerationService.getGenByID(responseVersionGroup.data.generation.name)
            setPokemons(responseGeneration.data.pokemon_species)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemonByVersion()
    }, [version])

    return <Container className="d-flex flex-column align-items-center mt-3 col-12">
        <h1>{versionName}</h1>
        <div className="d-flex flex-column align-items-center mt-3 col-12">
            {pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.name} PokemonCard={pokemon}></PokemonCard>
            })}


        </div>





    </Container>

}

export default VersionPage;