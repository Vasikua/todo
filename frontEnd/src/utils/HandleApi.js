import axios from "axios";

const baseURL = "http://localhost:5000";


export const getAllToDo = async (setTodoList) => {
  try {
    const { data } = await axios.get(baseURL);
    console.log("Fetched data:", data);
    setTodoList(data);
  } catch (error) {
    console.error("Error fetching todos:", error.message);
  }
};


export const addToDo = async (text, setText, setTodoList) => {
  if (!text.trim()) return console.warn("Cannot add an empty todo!"); 

  try {
    const { data } = await axios.post(`${baseURL}/save`, { text });
    console.log("Added:", data);
    setText("");
    getAllToDo(setTodoList);
  } catch (error) {
    console.error("Error adding todo:", error.message);
  }
};
            

export const updateToDo = async (text, setText, setUpdating, toDoId, setTodoList) => {
     console.log("HandleAPI ID:", toDoId);
  if (!toDoId) return console.warn("No todo selected for update!"); 
    if (!text.trim()) return console.warn("Cannot update with empty text!");

    try {
   
    const { data } = await axios.put(`${baseURL}/update/${toDoId}`, { text });
    console.log("Updated:", data);
    setUpdating(false);
    setText("");
    getAllToDo(setTodoList);
  } catch (error) {
    console.error("Error updating todo:", error.message);
  }
};


export const deleteToDo = async (id, setTodoList) => {
  if (!id) return console.warn("No todo selected for deletion!");

  try {
    const { data } = await axios.delete(`${baseURL}/delete/${id}`);
    console.log("Deleted:", data);
    getAllToDo(setTodoList);
  } catch (error) {
    console.error("Error deleting todo:", error.message);
  }
};