import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    const searchQuery = inputValue.trim().toLowerCase();

    if (searchQuery === "") {
      alert("Enter your query.");
      return;
    }

    onSubmit(searchQuery);
    setInputValue("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        <input value={inputValue} onChange={handleChangeInput} />
        <button type="submit">Find</button>
      </label>
    </form>
  );
}

export default SearchBar;
