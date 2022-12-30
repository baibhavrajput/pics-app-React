import { useState } from "react";

function SearchBar(props) {
  const onSubmit = props.onSubmit;

  const [searchTerm, setSearchTerm] = useState("");

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    onSubmit("cars");
  };

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onFormSubmitHandler}>
        <input value={searchTerm} onChange={onChangeHandler} />
      </form>
    </div>
  );
}

export default SearchBar;
