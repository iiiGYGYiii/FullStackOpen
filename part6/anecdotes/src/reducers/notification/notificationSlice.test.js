import notificationReducer from "./notificationSlice";
import deepFreeze from "deep-freeze";

describe("notifications", ()=>{
  const initialState = "";
  test("An undefined test returns empty string", () =>{
    const state = undefined;
    const newState = notificationReducer(state, {
      type: "NOTHING"
    });
    expect(newState).toBeDefined();
    expect(newState).toBe(initialState);
  });

  describe("actions", ()=>{
    const state="";
    deepFreeze(state);
    test("message/NEW_VOTE action returns message as a new state", () =>{
      const message = "Hello World!";
      const template = `You've voted for ${message}!`
      const newState = notificationReducer(state, {
        type: "message/NEW_VOTE",
        data: message
      });
      expect(newState).toBe(template);
    });
    test("message/NEW_ANECDOTE action returns message as new state", ()=>{
      const anecdote = "This is a new anecdote!";
      const template = `You've created ${anecdote}`;
      const newState = notificationReducer(state, {
        type: "message/NEW_ANECDOTE",
        data: anecdote
      });
      expect(newState).toBeDefined();
      expect(newState).toBe(template);
    });
    test("message/CLEAR action returns initial state", () =>{
      const newState = notificationReducer("abcdef", {
        type: "message/CLEAR"
      });
      expect(newState).toBe(initialState);
    });
  });
});
