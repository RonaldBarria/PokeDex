import axios from 'axios'

export const getPokeDataByName = async (nombre) =>{
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+nombre.toLowerCase());
        return response.data
    } catch (error) {
       throw new Error(error.message)
    }
    
}