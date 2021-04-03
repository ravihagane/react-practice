import React from "react";

export default function userOutput(props) {
  return (
    <div>
      <p>MY name is {props.name},</p>
      <p>I am a {props.job}</p>
    </div>
  );
}
