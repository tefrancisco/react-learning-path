import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store/counter.js'
const Counter = () => {
  const dispatch = useDispatch()

  // The useSelector() hook is used to retrive a specific part of the store data.
  // The hook also automatically sets up a subscription for this component to the store.
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  function incrementHandler() {
    // dispatch({ type: "increment" })
    dispatch(counterActions.increment())
  }

  function increaseHandler() {
    // dispatch({ type: "increase", amount: 5 })
    dispatch(counterActions.increase(5)) // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
  }

  function decrementHandler() {
    // dispatch({ type: "decrement" })
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" })
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className="counter">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
