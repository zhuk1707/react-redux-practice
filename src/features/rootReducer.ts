import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import todosReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export default rootReducer;
