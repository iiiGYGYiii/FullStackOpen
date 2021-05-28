import filterReducer, { changeFilter, resetFilter } from "./filterSlice";
import deepFreeze from "deep-freeze";

describe("Filter Reducer", () =>{
  const initialState = "";
  deepFreeze(initialState);

  test("Returns state when set to undefined", () =>{
    const state = undefined;
    const newState = filterReducer(state, { type: "NOTHING" });
    expect(newState).toBeDefined();
    expect(newState).toBe(initialState);
  });

  test("filter/CHANGE action returns a new changed state", () =>{
    const change = "new text";
    const newState = filterReducer(initialState, changeFilter(change));

    expect(newState).toBe(change);
  });

  test("filter/RESET returns initial state", ()=>{
    const state = "this is the state";
    const newState = filterReducer(state, resetFilter());
    expect(newState).not.toBe(state);
    expect(newState).toBe(initialState);
  });

});
