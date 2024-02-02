const TYPE = {
    CHANGE_VALUE:'change-value',
    CHANGE_COLOR:'change-color'
}

function valueReducer(state, action){
    switch(action.type){
        case TYPE.CHANGE_VALUE : return {
            ...state,
            count: {
                ...state.count,
                value: state.count.value + action.payload
            }
        }
        case TYPE.CHANGE_COLOR : return {
            ...state,
            color: action.payload
        }
        default:
            return state
    }
}

export default valueReducer;

export {TYPE}