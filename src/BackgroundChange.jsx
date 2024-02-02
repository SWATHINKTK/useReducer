import React from 'react'
import { TYPE } from './Reducer'

function BackgroundChange({state, dispatch}) {

    const settingRed = () => {
        dispatch({
            type: TYPE.CHANGE_COLOR,
            payload:'red'
        })
    }

    const settingBlue = () => {
        dispatch({
            type: TYPE.CHANGE_COLOR,
            payload:'blue'
        })
    }

  return (
    <div>
      <button style={{marginRight:'6px'}} onMouseOver={settingRed}>Red</button>
      <button onMouseOver={settingBlue}>blue</button>
    </div>
  )
}

export default BackgroundChange
