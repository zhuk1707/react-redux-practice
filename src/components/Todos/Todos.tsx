import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, removeTodo} from "../../actions/actions.ts";
import styles from "./Todos.module.css";


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
    <div className={styles.container}>
      <h2>Список задач</h2>
      <input
        className={styles.input}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Добавить задачу..."
      />
      <button className={styles.button} onClick={handleAddTodo}>
        Добавить
      </button>

      <ul className={styles.list}>
        {todos.map((todo: any) => (
          <li className={styles.listItem} key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
