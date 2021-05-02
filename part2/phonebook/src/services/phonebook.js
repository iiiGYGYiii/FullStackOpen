import axios from 'axios';
const apiURL = '/api/persons';

/**
 * Gets all elements from the server.
 * @returns {JSON} Returns all elements saved on the server.
 */
export const getPhonebook = async() =>{
    const response = await axios.get(apiURL);
    return response.data;
}
/**
 * Deletes the entry by a given ID. Makes an HTTP POST request to the server.
 * @param {String} id Object's ID to be deleted.
 * @returns {JSON} Data response from the HTTP request.
 */
export const deletePhone = async(id)=>{
    const response = await axios.delete(`${apiURL}/${id}`);
    return response.data
}
/**
 * Creates a entry from given data to the server.
 * @param {JSON} phone Data to save on the server.
 * @returns {JSON} Data of the response from the HTTP request.
 */
export const createPhone = async (phone) =>{
    
    const response = await axios.post(apiURL, phone);
    return response.data    
    
    
}

/**
 * Updates an element on the server by the given ID
 * making an HTTP PATCH request.
 * @param {JSON} data Data that is going to be sent to server.
 * @param {String} id The ID that is identifying the object to PATCH on the server.
 * @returns {JSON} The data of the response from the HTTP request.
*/
export const updatePhone = async ( data, id ) =>{
    const response = await axios.patch(`${apiURL}/${id}`, data);
    return response.data
}
