import axios from "axios";

function getTypeByURL(url){
    return axios.get(url);

}

function getTypeByID(type) {
    return axios.get("https://pokeapi.co/api/v2/type/" + type)
}

function getAllTypes(){
    return axios.get("https://pokeapi.co/api/v2/type?limit=50");
}

export default {   
    getTypeByURL, getAllTypes, getTypeByID
}