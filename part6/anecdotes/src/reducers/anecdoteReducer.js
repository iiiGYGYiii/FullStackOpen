const addAnecdote = (content) => {
  return{
    type: "ADD_ANECDOTE",
    data: content
  };
};

const voteAnecdote = (id) =>{
  return{
    type: "VOTE_ANECDOTE",
    data: id
  };
};

const anecdoteReducer = {
  addAnecdote,
  voteAnecdote
};

export default anecdoteReducer;
