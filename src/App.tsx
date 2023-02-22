import CreateTodoForm from "./components/CreateTodoForm";

import List from "./components/List";
import "./styles/global.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <CreateTodoForm />
        <List />
      </div>
    </div>
  );
}

export default App;
