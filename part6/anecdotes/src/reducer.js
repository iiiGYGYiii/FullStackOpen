import { combineReducers } from "redux";
import anecdotesReducer from "./features/anecdotes/anecdotesSlice";

const rootReducer = combineReducers({
  anecdotes: anecdotesReducer
});

export default rootReducer;
