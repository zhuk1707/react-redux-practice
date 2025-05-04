import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, removeTodo} from "../../store/actions.ts";


const Todos = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div
      style={{
        width: '500px',
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        borderRadius: '20px',
        backgroundColor: "black",
        padding: "5px 30px",
        margin: "10px"
      }}
    >
      <h2>Список задач</h2>
      <input
        style={{
          padding: '10px',

        }}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Добавить задачу..."
      />
      <button
        style={{
          margin: '0 0 10px',
        }}
        onClick={handleAddTodo}
      >
        Добавить
      </button>

      <ul
        style={{
          listStyle: 'none',
          padding: '0',
          marginBottom: '20px',
          display: "flex",
          flexDirection: 'column',
          gap: "10px",
        }}
      >
        {todos.map((todo: any) => (
          <li
            style={{
              textDecoration: 'none',
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              borderRadius: '20px',
              border: '1px solid grey',
              padding: "10px",
            }}
            key={todo.id}
          >
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
