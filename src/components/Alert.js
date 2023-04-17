import React from "react";

export default function Alert(props) {
  const capital = (word) => {
    const tolower = word.toLowerCase();
    return tolower.charAt(0).toUpperCase() + tolower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}
