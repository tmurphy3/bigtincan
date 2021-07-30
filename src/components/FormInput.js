import React from "react";
import "../styles/FormInput.css";

function FormInput({ state, setState, placeholder }) {
  return (
    <div className="FormInput">
      <h4>{placeholder}</h4>
      <input value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  );
}

export default FormInput;
