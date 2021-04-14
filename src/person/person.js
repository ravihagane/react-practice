import React from "react";

function person(props) {
  return (
    <div onClick={props.click}>
      <p>
        I am a {props.name}!, I am {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
  );
}

export default person;
