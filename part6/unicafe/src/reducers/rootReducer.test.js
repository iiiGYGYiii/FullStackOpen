import deepFreeze from "deep-freeze";
import rootReducer from "./rootReducer";

describe("rootReducer", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      good: 0,
      ok: 0,
      bad: 0
    };
    deepFreeze(initialState);
  });
  test("Return a proper state when undefined", () => {
    const state = rootReducer(undefined, { action: "NOTHING" });
    expect(state).toEqual(initialState);
  });
  describe("GOOD, BAD, OK actions", () => {
    test("a new state is returned with action GOOD", () => {
      const state = rootReducer(undefined, { type: "GOOD" });
      expect(state).toEqual({
        ...initialState,
        good: 1
      });
    });
    test("a new state is returned with action BAD", () => {
      const state = rootReducer(undefined, { type: "BAD" });
      expect(state).toEqual({
        ...initialState,
        bad: 1
      });
    });
    test("a new state is returned with action OK", () => {
      const state = rootReducer(undefined, { type: "OK" });
      expect(state).toEqual({
        ...initialState,
        ok: 1
      });
    });
  });
});
