import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

const Todos = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      dispatch({type: "ADD_TODO", payload: task});
      setTask("");
    }
  };

  const removeTodo = (id: any) => {
    dispatch({type: "REMOVE_TODO", payload: id}); // Удаляем задачу по `id`
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        borderRadius: '20px',
        backgroundColor: "black",
        padding: "30px",
        margin: "10px"
      }}
    >
      <h2>Список задач</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Добавить задачу..."
      />
      <button onClick={addTodo}>Добавить</button>

      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
