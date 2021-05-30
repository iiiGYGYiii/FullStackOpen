import { voteMessageCaller, anecdoteMessageCaller } from "../../reducers/notification/notificationSlice";
import { getAnecdotes,
  voteAnecdoteService,
  createAnecdote,
  deleteAnecdoteService
} from "../../services/anecdotesServices";

const anecdotesReducer = (state=[], action)=>{
  switch (action.type) {
    case "ADD_ANECDOTE":
      return [...state, action.data];
    case "VOTE_ANECDOTE":
      return state.map(anecdote=>anecdote.id===action.data?
        {
          ...anecdote,
          votes: anecdote.votes+1
        }:
        anecdote);
    case "anecdotes/DELETE_ANECDOTE":
      return state.filter(val=> val.id!==action.data);
    case "anecdotes/INIT_ANECDOTES":
      return action.data
    default:
      return state;
  }
};

export const addAnecdote = (content) => {
  return{
    type: "ADD_ANECDOTE",
    data: content
  };
};

export const deleteAnecdote = id => {
  return{
    type: "anecdotes/DELETE_ANECDOTE",
    data: id
  };
};

export const voteAnecdote = (id) =>{
  return{
    type: "VOTE_ANECDOTE",
    data: id
  };
};

export const initAnecdotes = data =>{
  return{
    type: "anecdotes/INIT_ANECDOTES",
    data
  };
};

export const initializeAnecdotes = async (dispatch, getState) =>{
  const data = await getAnecdotes();
  dispatch(initAnecdotes(data));
};

export const voteAnecdoteCall = id => async(dispatch, getState)=>{
  await voteAnecdoteService(id);
  const state = getState();
  const anecdote = state.anecdotes.find(val => val.id === id);
  dispatch(voteAnecdote(id));
  dispatch(voteMessageCaller(anecdote.content));
};

export const addAnecdoteCall = content => async(dispatch, getState)=>{
  const response = await createAnecdote(content);
  dispatch(addAnecdote(response));
  dispatch(anecdoteMessageCaller(content));
}

export const deleteAnecdoteCall = id => async(dispatch, getState)=>{
  await deleteAnecdoteService(id);
  dispatch(deleteAnecdote(id));
}

export default anecdotesReducer;
