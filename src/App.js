import React from "react";
import BodyContent from "./Components/BodyContent";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <SearchBar />
      <BodyContent />
    </div>
  );
};

export default App;
