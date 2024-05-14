import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:6001/listings")
    .then(r => r.json())
    .then(data => setListings(data))
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    let searchedListings = listings.filter((listing) => listing.description.includes(search));
    setListings(searchedListings);
    setSearch("");
  }

  return (
    <div className="app">
      <Header listings={listings} search={search} setSearch={setSearch} handleSearch={handleSearch} handleSubmit={handleSubmit}/>
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
