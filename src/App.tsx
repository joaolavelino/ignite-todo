import CreateTodoForm from "./components/CreateTodoForm";

import List from "./components/List";
import "./styles/global.css";
import Header from "./components/Header";
import { useTodo } from "./reducers/todoReducer";

function App() {
  const { addTodo, completeTodo, removeTodo, state } = useTodo();

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <CreateTodoForm addFn={(name) => addTodo(name)} />
        <List
          list={state.todoList}
          removeFn={(id) => removeTodo(id)}
          completeFn={(id) => completeTodo(id)}
        />
      </div>
    </div>
  );
}

export default App;
