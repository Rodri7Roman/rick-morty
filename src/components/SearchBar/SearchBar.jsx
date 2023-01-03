import "./styles.css"
import React, { useState } from "react";

export default function SearchBar(props) {
  let [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput([(userInput = event.target.value)]);
  };

  return (
    <div className="div-container">
      <input className="input-agregar" type="search" value={userInput} onChange={handleChange} />
      <button className="button-agregar" onClick={() => props.onSearch(userInput)}>
        AGREGAR
      </button>
    </div>
  );
}
