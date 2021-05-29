import store from "./store";
import {initializeAnecdotes,
  addAnecdoteCall,
  deleteAnecdoteCall,
  voteAnecdoteCall
} from "./reducers/anecdotes/anecdotesSlice";
import { anecdoteMessageCaller, voteMessageCaller } from "./reducers/notification/notificationSlice";
import { anecdotes } from "../db.json";
import deepFreeze from "deep-freeze";
deepFreeze(anecdotes);

describe("Store", () =>{
  describe("Anecdotes Thunk Action Creators", () =>{
    /**
     * Returns a promise containing the anecdotes state.
     * @returns {Promise} Initial anecdotes State.
     */
    const initState = async()=>{
      await store.dispatch(initializeAnecdotes);
      return store.getState().anecdotes;
    };
    /**
     * Creates an anecdote and returns the anecdote created as object.
     * @param {String} anecdote The Anecdote to add to store.
     * @returns {Promise} Promise that contains the anecdote created as an object.
     */
    const addAnecdote = async(anecdote)=>{
      await store.dispatch(addAnecdoteCall(anecdote));
      return store.getState().anecdotes.filter(val=>val.content===anecdote)[0];
    };
    /**
     * Delete the given anecdote with its ID.
     * @param {JSON} anecdote Anecdote containing an ID.
     */
    const deleteAnecdote = async (anecdote)=>{
      await store.dispatch(deleteAnecdoteCall(anecdote.id));
    };
    test("initializeAnecdotes action creates state provided by DB", async () =>{
      await store.dispatch(initializeAnecdotes);
      const newState = store.getState().anecdotes;
      expect(newState).toEqual(anecdotes);
    });

    test("addAnecdoteCall action post data to server and update store", async () =>{
      const anecdote = "This is an anecdote :)";
      const initialState = await initState();
      const anecdoteAdded = await addAnecdote(anecdote);
      const newState = store.getState().anecdotes;
      await deleteAnecdote(anecdoteAdded);
      expect(newState).toHaveLength(initialState.length+1);
      expect(newState).toContainEqual(anecdoteAdded);
    });

    test("voteAnecdoteCall action update data in server and store", async()=>{
      await initState();
      const anecdote = "Try This Test!";
      const anecdoteAdded = await addAnecdote(anecdote);
      await store.dispatch(voteAnecdoteCall(anecdoteAdded.id));
      const newState = store.getState().anecdotes;
      await deleteAnecdote(anecdoteAdded);
      expect(newState).toContainEqual({
        ...anecdoteAdded,
        votes: anecdoteAdded.votes+1
      });
    });
  });

  describe("Notification Thunk Action Creators", () =>{
    beforeEach(()=>{
      jest.useFakeTimers();
    });
    const initialState = "";
    test("anecdoteMessageCaller restores to initialState after 5s", ()=>{
      const anecdote = "This is an anecdote";
      store.dispatch(anecdoteMessageCaller(anecdote));
      const state = store.getState().notification;
      expect(state).toBe(`You've created ${anecdote}`);
      jest.runAllTimers();
      const newState = store.getState().notification;
      expect(newState).toBe(initialState);
    });

    test("voteMessageCaller restores to initialState after 5s", ()=>{
      const anecdote = "This is an anecdote";
      store.dispatch(voteMessageCaller(anecdote));
      const state = store.getState().notification;
      expect(state).toBe(`You've voted for ${anecdote}!`);
      jest.runAllTimers();
      const newState = store.getState().notification;
      expect(newState).toBe(initialState);
    });
  });
});
