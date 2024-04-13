import { useState } from "react";
import outline from "../assets/search-outline.svg";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (onSearch) {
      onSearch(newQuery);
    }
  };

  return (
    <div className="border border-tertiary px-7 py-2 bg-primary rounded-[2.5rem]">
      <div className="flex items-center justify-between">
        <input
          type="search"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          className="bg-transparent w-[90%] outline-none"
        />
        <img src={outline} alt="Search Icon" />
      </div>
    </div>
  );
};

export default SearchInput;
