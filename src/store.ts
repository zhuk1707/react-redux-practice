import {createStore} from 'redux';
import rootReducer from "./features/rootReducer.ts";

const store = createStore(rootReducer);

export default store;
