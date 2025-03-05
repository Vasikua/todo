import { useEffect, useState } from "react";
import ToDo from "../ToDo/ToDo";
import "./App.css";
import {
  getAllToDo,
  addToDo,
  updateToDo,
  deleteToDo,
} from "../../utils/HandleApi";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const [updating, setUpdating] = useState(false);
  const [toDoId, setToDoId] = useState(null);

  useEffect(() => {
    getAllToDo(setTodoList);
  }, []);

  const handleAddOrUpdate = () => {
    if (!text.trim()) {
      return alert("cant be emoty");
    } else if (text && toDoId) {
      updateToDo(text, setText, setUpdating, toDoId, setTodoList);

      console.log("App id", toDoId);
    } else {
      addToDo(text, setText, setTodoList);
    }
  };

  const updateItem = (id, text) => {
    setToDoId(id);
    setUpdating(true);
    setText(text);
  };

  const deleteItem = (id) => {
    deleteToDo(id, setTodoList);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">ToDo App</h1>
        <div className="top">
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Add todos..."
          />
          <div className="add" onClick={handleAddOrUpdate}>
            {updating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todoList.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateItem={() => updateItem(item._id, item.text)}
              deleteItem={() => deleteItem(item._id, setTodoList)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
