const initialTodos: any[] = [];

const todosReducer = (state = initialTodos, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, {id: Date.now(), text: action.payload}];
    case "REMOVE_TODO":
      return [];
    default:
      return state;
  }
};

export default todosReducer;
