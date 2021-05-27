const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const toObject = (anecdote, id)=>{
  return{
    content: anecdote,
    id: id,
    votes: 0
  };
};

const initialState = anecdotes.map((anecdote, id)=>toObject(anecdote, id));

const anecdotesReducer = (state=initialState, action)=>{
  switch (action.type) {
    case "ADD_ANECDOTE":
      return [...state, toObject(action.data, state.length+1)];
    case "VOTE_ANECDOTE":
      return state.map(anecdote=>anecdote.id===action.data?
        {
          ...anecdote,
          votes: anecdote.votes+1
        }:
        anecdote);
    default:
      return state;
  }
};

export default anecdotesReducer;
