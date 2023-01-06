import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {

  const [images, setImages] = useState([]);

  const submitHandler = async (searchTerm) => {
    const result = await searchImages(searchTerm);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={submitHandler} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
