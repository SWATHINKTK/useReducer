import { useReducer, useState } from 'react'
import './App.css'
import Counter from './Counter'
import BackgroundChange from './BackgroundChange';
import valueReducer from './Reducer';

const initialArg = {
    count:{
      value:0,
      status:''
    },
    color:"green"
}

function App() {
  const [state , dispatch] = useReducer(valueReducer, initialArg)

  return (
    <div>
      <div className='display' style={{backgroundColor:state.color}}>
        {state.count.value}
      </div>
      <Counter state={state} dispatch={dispatch} />
      <hr></hr>
      <BackgroundChange state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
