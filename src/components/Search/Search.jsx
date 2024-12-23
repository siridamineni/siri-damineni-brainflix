import { useState } from "react";
import "./Search.scss";
import SearchIcon from "../../assets/icons/search.svg";
const Search = () => {
  const [searchValue, SetSearchValue] = useState("");

  const handleSearch = (e) => {
    SetSearchValue(e.target.value);
  };
  return (
    <div className="search">
      <img src={SearchIcon} alt="search Icon" />
      <input
        className="search__input"
        type="text"
        name="search"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
