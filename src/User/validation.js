import React from "react";

export default function validation(props) {
  return (
    <div>
      <p>
        {props.length > 5
          ? "Text length is Strong"
          : "Text length is Too short!"}
      </p>
    </div>
  );
}
