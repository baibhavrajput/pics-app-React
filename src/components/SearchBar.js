import { useState } from "react";
import './SearchBar.css';

function SearchBar(props) {
  const onSubmit = props.onSubmit;

  const [searchTerm, setSearchTerm] = useState('');

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onFormSubmitHandler}>
        <label>Enter Search Term</label>
        <input value={searchTerm} onChange={onChangeHandler} />
      </form>
    </div>
  );
}

export default SearchBar;
