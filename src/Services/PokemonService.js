import axios from "axios";

function getAllPokemon(){
    return axios.get("https://pokeapi.co/api/v2/pokemon/?language=fr-FR",{

    })
}

export default{
    getAllPokemon
}