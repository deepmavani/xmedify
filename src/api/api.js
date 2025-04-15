import axios from "axios";
export const BACKEND_ENDPOINT="https://meddata-backend.onrender.com";

export const fetchState= async ()=>{
    try{
        const response=await axios.get(`${BACKEND_ENDPOINT}/states`)
        return response.data;
    }catch(e){
        console.error(e)
    }
}
export const fetchCities= async (states)=>{
    if(states.length==0)return;
    try{
        const response=await axios.get(`${BACKEND_ENDPOINT}/cities/${states}`)
        return response.data;
    }catch(e){
        console.error(e)
    }
}
export const fetchMedicalCenters= async (state,city)=>{
    if(!state || !city)
        return
    try{
        const response=await axios.get(`${BACKEND_ENDPOINT}/data?state=${state}&city=${city}`)
        return response.data;
    }catch(e){
        console.error(e)
    }
}