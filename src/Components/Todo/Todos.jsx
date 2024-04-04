import { useContext, useState } from "react";
import SingleTodo from "./SingleTodo";
import TodoContext from "../TodoContext/TodoContext";
import { addTodo } from "../TodoContext/action";

function Todos() {
    const { todos, dispatchTodo } = useContext(TodoContext)
    const [inputvalue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputvalue !== "") {
            let flag = false
            todos.forEach(x => {
                if (x.text === inputvalue) {
                    flag = true
                }
            });
            if (flag) {
                alert("The value is already defined")
            }
            else {
                dispatchTodo(
                    addTodo({ id: todos.length + 1, text: inputvalue, checked: false })
                )
                setInputValue("")
            }
        }
        else {
            alert("This is not a value")
        }
    }
    return (
        <div style={{ display: "flex", flexDirection: 'column', gap: 20, alignItems: "center" }}>
            <form onSubmit={handleSubmit} 
            style={{ width: 500, display: 'flex', justifyContent: 'space-between', backgroundColor: "darkgray", padding: 10, borderRadius: 3 }}>
                <input type="text" value={inputvalue} onChange={(e) => setInputValue(e.target.value)} 
                style={{ width: 400, height: 25, borderRadius:3, boxShadow:"none" }} />
                <button style={{ backgroundColor: "grey", borderRadius: 3 }}>Add</button>
            </form>
            {todos.map((ele) => (
                <SingleTodo key={ele.id} todo={ele} />
            ))}
        </div>
    )
}
export default Todos;