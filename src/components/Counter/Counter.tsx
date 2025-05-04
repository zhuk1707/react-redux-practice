import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, reset} from "../../store/actions.ts";

const Counter = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        borderRadius: '20px',
        backgroundColor: "black",
        padding: "10px 10px 30px 0",
        margin: "10px"
      }}
    >
      <h2>Счетчик:</h2>
      <h1>{count}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: 'center',
          gap: "10px",
        }}
      >
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(increment())}>+1</button>
      </div>
    </div>
  );
};

export default Counter;