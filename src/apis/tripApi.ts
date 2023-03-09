import axios from "axios"

export const loadTrip = async() =>{
    try{
        return await axios.get('/src/data/mock_data.json')
        
    }catch(e){
        return e
    }
}