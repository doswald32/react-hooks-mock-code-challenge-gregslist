import React from "react";
import Search from "./Search";

function Header({ search, setSearch, handleSearch, handleSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} handleSubmit={handleSubmit}/>
    </header>
  );
}

export default Header;
