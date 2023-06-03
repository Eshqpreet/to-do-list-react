import React from "react";

function inputArea(props) {
  return (
    <div className="form">
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.onClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default inputArea;
