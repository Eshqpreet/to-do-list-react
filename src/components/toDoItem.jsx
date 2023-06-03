import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.onCheck(props.id);
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
