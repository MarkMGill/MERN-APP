import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function Counter() {
  const { isAuthenticated, user } = useAuth0();

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const [addAmnt, setaddAmnt] = useState(0);
  const [decreaseAmnt, setdecreaseAmnt] = useState(0);

  const handleaddAmntChange = e => {
    setaddAmnt(Number(e.target.value));
  }
  const handledecreaseAmntChange = e => {
    setdecreaseAmnt(Number(e.target.value));
  }
  console.log(addAmnt)
  return (
    <div className="App">
      {isAuthenticated &&
      <>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(addAmnt))}>+</button>
      <input value={addAmnt} onChange={(e) => handleaddAmntChange(e)}></input>
      <button onClick={() => dispatch(decrement(decreaseAmnt))}>-</button>
      <input value={decreaseAmnt} onChange={(e) => handledecreaseAmntChange(e)}></input>
      {isLogged ? <h3>Info</h3> : ''}
      </>
    }
    </div>
  );
}

export default Counter;
