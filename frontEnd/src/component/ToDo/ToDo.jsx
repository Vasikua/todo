import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "./ToDo.css";

export default function ToDo({ updateMode, deleteMode, text }) {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteMode} />
      </div>
    </div>
  );
}
