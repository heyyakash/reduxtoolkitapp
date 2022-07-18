import React from 'react'
import { actions } from '../app/store';
import { useSelector,useDispatch } from 'react-redux';

const First = () => {
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch();
    return (
    <div>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={()=>dispatch(actions.increment())}>+</button>
        <button onClick={()=>dispatch(actions.decrement())}>-</button>
    </div>
  )
}

export default First