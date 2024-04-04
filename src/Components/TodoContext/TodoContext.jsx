import { createContext, useReducer } from "react"
import { initialState } from "./initialState"
import todoReducer from "./todoReducer"

const TodoContext = createContext({})
export const TodoDataProvider = ({ children }) => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState)
    return (
        <TodoContext.Provider value={{todos, dispatchTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContext;