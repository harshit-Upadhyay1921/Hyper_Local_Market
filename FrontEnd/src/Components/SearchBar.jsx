import React from 'react';
const SearchBar = ({ onSearch }) => (
  <div className="p-4">
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => onSearch(e.target.value)}
      className="input input-bordered w-24 md:w-auto"
    />
  </div>
);

export default SearchBar;