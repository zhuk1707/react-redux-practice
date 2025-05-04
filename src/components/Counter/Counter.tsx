import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        borderRadius: '20px',
        backgroundColor: "black",
        padding: "30px",
        margin: "10px"
      }}
    >
      <h2>Счетчик:</h2>
      <h1>{count}</h1>
      <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
    </div>
  );
};

export default Counter;