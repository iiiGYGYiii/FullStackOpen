import deepFreeze from "deep-freeze";
import anecdotesReducer from "./anecdotesSlice";

describe("Anecdotes Reducer", () =>{
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
  deepFreeze(initialState);

  test("A proper state is returned when state arg is undefined", () =>{
    const state = undefined;
    const newState = anecdotesReducer(state, { type: "NOTHING"});
    expect(newState).toEqual(initialState);
  });

  test("A new state is returned with action ADD_ANECDOTE", ()=>{
    const anecdote = {
      content: "This is a new anecdote",
      id: initialState.length+1,
      votes: 0
    };
    const newState = anecdotesReducer(initialState, {
      type: "ADD_ANECDOTE", 
      data: anecdote.content
    });
    expect(newState).toHaveLength(initialState.length+1);
    expect(newState).toContainEqual(anecdote);
  });

  test("A new state is returned with action VOTE_ANECDOTE", () =>{
    const id = 3;
    const newState = anecdotesReducer(initialState, {
      type: "VOTE_ANECDOTE",
      data: id
    });
    expect(newState).toHaveLength(initialState.length);
    expect(newState[id]).toEqual({
      ...initialState[id],
      votes: initialState[id].votes+1
    });
  });
});
