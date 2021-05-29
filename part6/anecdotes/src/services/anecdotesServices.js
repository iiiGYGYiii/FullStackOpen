// MODULES
import axios from "axios";

const DB_URI = "http://localhost:3001/anecdotes";

export const getAnecdotes = async() =>{
  const anecdotes = await axios.get(DB_URI);
  return anecdotes.data;
};
/**
 * POST anecdote to server.
 * @param {string} anecdote to POST to server.
 * @returns {Promise} Promise with JSON response from server, the anecdote Object.
 */
export const createAnecdote = async anecdote =>{
  const newAnecdote = {
    content: anecdote,
    votes: 0
  };
  const response = await axios.post(DB_URI, newAnecdote);
  return response.data;
}

export const deleteAnecdoteService = async id=>{
  await axios.delete(DB_URI+"/"+id);
}

export const voteAnecdoteService = async id =>{
  const anecdoteURI = `${DB_URI}/${id}`;
  const anecdote = await axios.get(anecdoteURI);
  const response =  await axios.patch(anecdoteURI, {
    votes: anecdote.data.votes+1
  });
  return response.data;
}
