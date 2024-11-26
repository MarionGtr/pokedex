import { useLocation, useParams } from "react-router-dom";
import TypeService from "../Services/TypeService"
import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";
import { Container } from "react-bootstrap";



    const TypePage = () => {
        const {type}  = useParams()
        const [typeByID, setTypeByID] = useState([])
    

    const fetchPokemonByType = async () => {
        try {
            const response = await TypeService.getTypeByID(type)

            console.log(response.data)
            
            setTypeByID(response.data)
     
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemonByType();
    },[type])


    return <Container className="d-flex flex-column align-items-center mt-3 col-12">
        <h2 className="type-txt">{type.name && type.name[3].name}</h2>
        
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-3 col-12">

            {typeByID.pokemon && typeByID.pokemon.map((type) => {
                return  <PokemonCard PokemonCard={type.pokemon} key={type.id}></PokemonCard>

            })}
        </div>
    </Container>
    }

export default TypePage;