import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "./ToDo.css";

export default function ToDo({ updateItem, deleteItem, text }) {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateItem} />
        <AiFillDelete className="icon" onClick={deleteItem} />
      </div>
    </div>
  );
}
