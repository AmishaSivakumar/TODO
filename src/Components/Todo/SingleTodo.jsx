import { useContext, useState } from "react"
import TodoContext from "../TodoContext/TodoContext"
import { changeStatus, deleteTodo, updateTodo } from "../TodoContext/action"

function SingleTodo({ todo }) {
    const { dispatchTodo } = useContext(TodoContext)
    const [inputvalue, setInputValue] = useState(todo.text)
    const [edit, setEdit] = useState(false)
    return (
        <div style={{ width: 500, display: 'flex', flexDirection: "column", gap: 20 }}>
            {edit ?
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <input type="text" value={inputvalue}
                        onChange={e => setInputValue(e.target.value)}
                        style={{ width: 400, height: 25 }} />
                    <button onClick={() => {
                        setEdit(false);
                        dispatchTodo(updateTodo({ ...todo, text: inputvalue }))
                    }}
                        style={{ height: 30 }}>Update</button>
                </div>
                : <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: "flex", gap: 20 }}>
                        <input type="checkbox"
                            onChange={() => dispatchTodo(changeStatus(todo))}
                            checked={todo.checked} />
                        {todo.checked ? <del>{todo.text}</del> : <h3>{todo.text}</h3>}
                    </div>
                    <div style={{ display: 'flex', gap: 20 }}>
                        <button onClick={() => setEdit(true)}><i className="bi bi-pencil-square"></i></button>
                        <button onClick={() => dispatchTodo(deleteTodo(todo))}><i className="bi bi-trash3"></i></button>
                    </div>
                </div>}
        </div >
    )
}
export default SingleTodo