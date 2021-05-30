import { combineReducers } from "redux";
import anecdotesReducer from "./reducers/anecdotes/anecdotesSlice";
import notificationReducer from "./reducers/notification/notificationSlice";
import filterReducer from "./reducers/filter/filterSlice";
const rootReducer = combineReducers({
  anecdotes: anecdotesReducer,
  notification: notificationReducer,
  filter: filterReducer
});

export default rootReducer;
