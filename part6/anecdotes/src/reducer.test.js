import rootReducer from "./reducer";

describe("Root Reducer", () =>{
  describe("Anecdotes Reducer", () =>{
    test("anecdotes properties exists inside state", () =>{
      const newState = rootReducer(undefined, { type: "NOTHING" });
      expect(newState.anecdotes).toBeDefined();
    });
  });

  describe("Notification Reducer", () =>{
    test("Notification prop is defined in state", () =>{
      const newState = rootReducer({}, { type: "NOTHING" });
      expect(newState.notification).toBeDefined();
      expect(newState.notification).toBe("");
    });
  });
});
