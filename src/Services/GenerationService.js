import axios from "axios";

function getAllGen(){
return axios.get("https://pokeapi.co/api/v2/generation/")
}

function getGenByID(id){
return axios.get("https://pokeapi.co/api/v2/generation/" + id)
}
export default {
    getAllGen, getGenByID
}