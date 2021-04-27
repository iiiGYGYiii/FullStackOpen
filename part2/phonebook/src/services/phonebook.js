import axios from 'axios';
const apiURL = 'http://localhost:3001/phonebook';

export const getPhonebook = async() =>{
    const response = await axios.get(apiURL);
    return response.data;
}

export const deletePhone = async(id)=>{
    const response = await axios.delete(`${apiURL}/${id}`);
    return response.data
}

export const createPhone = async (phone) =>{
    const response = await axios.post(apiURL, phone);
    return response.data
}

export const updatePhone = async ( data,id ) =>{
    const response = await axios.patch(`${apiURL}/${id}`, data);
    return response.data
}
