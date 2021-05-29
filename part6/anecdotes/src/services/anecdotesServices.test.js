import { deleteAnecdoteService, getAnecdotes, createAnecdote, voteAnecdoteService } from "./anecdotesServices";
import { anecdotes } from "../../db.json";
import deepFreeze from "deep-freeze";
deepFreeze(anecdotes);

const delay =  ms =>{
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve(2);
    }, ms);
  });
};

describe("Anecdotes API", () =>{
  beforeEach(async ()=>{
    await delay(300);
  })
  test("Getting all anecdotes", async()=>{
    const response = await getAnecdotes();
    expect(response).toEqual(anecdotes);
  }); 

  test("Creating a new anecdote", async() =>{
    const state = await getAnecdotes();
    const response = await createAnecdote("This an new anecdote, going to delete soon.");
    const newState = await getAnecdotes();
    expect(newState).toHaveLength(state.length+1);
    expect(newState).toContainEqual(response);
    await deleteAnecdoteService(response.id);
  });

  test("Deleting an anecdote", async()=>{
    const state = await getAnecdotes();
    const response = await createAnecdote("This an new anecdote, going to delete soon.");
    await deleteAnecdoteService(response.id);
    const newState = await getAnecdotes();
    expect(newState).toHaveLength(state.length);
  });

  test("Voting for an anecdote", async()=>{
    const state = await getAnecdotes();
    const response = await createAnecdote("This an new anecdote, going to delete soon.");
    const votedAnecdote = await voteAnecdoteService(response.id);
    expect(votedAnecdote.votes).toBe(response.votes+1);
    await deleteAnecdoteService(response.id);
    const newState = await getAnecdotes();
    expect(newState).toHaveLength(state.length);
  });
});
