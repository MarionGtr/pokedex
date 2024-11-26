import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";
import { Container } from "react-bootstrap";
import GenerationService from "../Services/GenerationService";



const GenPage = () => {
    const { gen } = useParams()
    const [genByID, setGenByID] = useState([])


    const fetchPokemonByGen = async () => {
        try {
            const response = await GenerationService.getGenByID(gen)

            console.log(response.data)

            setGenByID(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemonByGen();
    }, [gen])


    return <Container className="d-flex flex-column align-items-center mt-3 col-12">

        <div className="d-flex justify-content-center flex-wrap gap-3 mt-3 col-12">

            <h1>page gen</h1>

            {genByID.pokemon_species && genByID.pokemon_species.map((gen, index) => (
                // return <PokemonCard PokemonCard={gen.pokemon_species} key={gen.id}></PokemonCard>
                <p>{gen.name}</p>
            ))}
        </div>
    </Container>
}

export default GenPage;