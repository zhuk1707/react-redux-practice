import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer.ts";
import todosReducer from "./todos/todosReducer.ts";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export default rootReducer;
