import axios from "axios";

function getAllPokemon(){
    return axios.get("https://pokeapi.co/api/v2/pokemon/",{

    })
}
function getPokemonByID(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon/" + id)
}

function getPokemonDetails(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/" + id)
}


export default{
    getAllPokemon, getPokemonByID, getPokemonDetails

}