"use client";

import React from "react"; 

const SearchForm: React.FC = () => {
  return (
    <>
      <form className="search-box">
        <input
          type="text"
          className="input-search"
          placeholder="Search for anything"
        />
        <button type="submit">
          <i className="flaticon-loupe"></i>
        </button>
      </form>
    </>
  );
};

export default SearchForm;
