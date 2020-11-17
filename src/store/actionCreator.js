import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST, INIT_LIST } from './actionTypes'
import store from './index'
import axios from 'axios'
export const inputValue = (value) =>{
    const action = {
        type:CHANGE_INPUT_VALUE,
        value
    }

    store.dispatch(action)
}

export const addList = (value) => {
    const action = {
        type:ADD_LIST,
        value
    }
    store.dispatch(action)
}

export const deleteList = (value) => {
    const action = {
        type:DELETE_LIST,
        value
    }
    store.dispatch(action)
}

const initList = (value) => ({
    type:INIT_LIST,
    value
})
export const getList = () => {
    return (dispatch)=>{
        axios.get('./data.json').then(res => {
            console.log(res)
            console.log('这是一个请求')
            const action = initList(res.data.list)
            dispatch(action)
        })
    }
}