import React from "react";

function person(props) {
  return (
    <div onClick={props.click}>
      <p>
        I am a {props.name}!, I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.input} value={props.name}></input>
    </div>
  );
}

export default person;
