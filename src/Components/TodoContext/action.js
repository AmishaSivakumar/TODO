import { ADD_TODO, CHANGE_STATUS, DELETE_TODO, UPDATE_TODO } from "./actionType"

export const addTodo = data => {
    return { type: ADD_TODO, payload: data }
  }
  export const updateTodo = data => {
    return { type: UPDATE_TODO, payload: data }
  }
  export const deleteTodo = data => {
    return { type: DELETE_TODO, payload: data }
  }
  export const changeStatus = data => {
    return { type: CHANGE_STATUS, payload: data }
  }