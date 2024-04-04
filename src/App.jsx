import Todos from "./Components/Todo/Todos"
import { TodoDataProvider } from "./Components/TodoContext/TodoContext"

function App() {

  return (
    <TodoDataProvider>
      <Todos />
    </TodoDataProvider>

  )
}

export default App
