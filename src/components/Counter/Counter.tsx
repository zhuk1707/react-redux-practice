import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../actions/actions.ts";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h2>Счетчик:</h2>
      <h1>{count}</h1>
      <div className={styles.buttons}>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(increment())}>+1</button>
      </div>
    </div>
  );
};

export default Counter;
