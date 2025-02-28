import { useState } from "react";
import ToDo from "../ToDo/ToDo";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  const updateMode = () => {};
  const deleteMode = () => {};
  const addToDoList = () => {
    setCurrentValue();
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add todos..."
            onChange={() => {
              setCurrentValue();
            }}
          />
          <div className="add" onClick={addToDoList}>
            Add
          </div>
        </div>
        <div className="list">
          <ToDo updateMode={updateMode} deleteMode={deleteMode} text="{text}" />
          <ToDo updateMode={updateMode} deleteMode={deleteMode} text="{text}" />
          <ToDo updateMode={updateMode} deleteMode={deleteMode} text="{text}" />
        </div>
      </div>
    </div>
  );
}

export default App;
