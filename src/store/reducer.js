import * as  constant from './actionTypes'
// import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST } from './actionTypes'
const defaultState = {
    inputValue:'',
    list:[]
}

let reducer = (state = defaultState,action) => {
    const { type,value } = action
    console.log(constant.CHANGE_INPUT_VALUE)
    let newState = { ...state }
    if(type === constant.CHANGE_INPUT_VALUE){
        newState.inputValue = value
        return newState
    }else if(type === constant.ADD_LIST){
        newState.list.push(value)
        newState.inputValue = ''
        return newState
    }else if(type === constant.DELETE_LIST){
        newState.list.splice(value,1)
        return newState
    }else if(type === constant.INIT_LIST){
        newState.list = value
        return newState
    }
    return state
}
export default reducer