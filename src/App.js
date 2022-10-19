import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [close, setClose] = useState(true);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");

  const handleClose = (e) => {
    e.preventDefault();
    setClose((prev) => (prev = !prev));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "" && date !== "") {
      setTodos([{ id: `${Date.now()}`, todo, date }, ...todos]);
      setTodo("");
      setDate("");
    }
  };
  const handleComplete = (id) => {
    let complete = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos([...complete]);
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Task Tracker</h1>
        <button className="btn-close" onClick={handleClose}>
          {close ? "Close" : "Show"}
        </button>
        {close && (
          <div>
            <TodoForm
              handleSubmit={handleSubmit}
              date={date}
              todo={todo}
              setTodo={setTodo}
              setDate={setDate}
            />
            <TodoList
              todos={todos}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
