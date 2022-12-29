import "./App.css";
import SearchBar from './components/SearchBar';

function App() {

  const submitHandler = (searchTerm) => {
    console.log('Do a search with' , searchTerm);
  };

  return (
    <div>
      <SearchBar onSubmit={submitHandler}/>
    </div>
  );
}

export default App;
