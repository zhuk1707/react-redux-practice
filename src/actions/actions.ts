export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});