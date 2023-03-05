import './App.css';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from './toolkitRedux/toolkitReducer';

function App() {
  const count = useSelector(state => state.toolkit.count)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Счетчик равен {count}</h1>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>
    </div>
  );
}

export default App;
