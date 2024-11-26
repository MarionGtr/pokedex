import axios from "axios";

function getAllVersion(){
    return axios.get("https://pokeapi.co/api/v2/version?limit=100")
}


function getVersionByName(version){
    return axios.get("https://pokeapi.co/api/v2/version/"+version)
}

function getVersionGroupByName(version){
    return axios.get("https://pokeapi.co/api/v2/version-group/"+version)
}

export default {
    getAllVersion, getVersionByName, getVersionGroupByName 

}