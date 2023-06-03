import React, { useState } from "react";
import ToDoItem from "./toDoItem.jsx";
import InputArea from "./inputArea";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    var newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    // console.log(index);
    setItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea value={inputText} onChange={handleChange} onClick={addItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem key={index} id={index} text={item} onCheck={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
