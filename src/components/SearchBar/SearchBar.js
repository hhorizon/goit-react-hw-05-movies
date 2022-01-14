import { useState } from "react";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsSearch } from "react-icons/bs";
import { Form, Label, Input, Button } from "./SearchBar.styles";

function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    const searchQuery = inputValue.trim().toLowerCase();

    if (searchQuery === "") {
      toast.info("Enter your query.");
      return;
    }

    onSubmit(searchQuery);
    setInputValue("");
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Label>
        <Input value={inputValue} onChange={handleChangeInput} />
        <Button type="submit">
          <BsSearch />
        </Button>
      </Label>
    </Form>
  );
}

SearchBar.propTypes = {
  onSubmit: propTypes.func,
};

export default SearchBar;
