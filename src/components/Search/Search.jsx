import { useState } from "react";
import "./Search.scss";
const Search = () => {
  const [searchValue, SetSearchValue] = useState("");

  const handleSearch = (e) => {
    SetSearchValue(e.target.value);
  };
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
