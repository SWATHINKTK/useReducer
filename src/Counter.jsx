import React from 'react';
import { TYPE } from './Reducer';

function Counter({state, dispatch}) {
    
    const increment = () => {
        dispatch({
            type: TYPE.CHANGE_VALUE,
            payload:1
        })
    }

    const decrement = () => {
        dispatch({
            type: TYPE.CHANGE_VALUE,
            payload:-1
        })
    }

  return (
    <div>
      <button style={{marginRight:'6px'}} onClick={increment}>increment - {state.count.value}</button>
      <button onClick={decrement}>Decrement - {state.count.value}</button>
    </div>
  )
}

export default Counter
