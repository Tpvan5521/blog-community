import React from "react";
import { BsSearch } from "react-icons/bs";

interface ISearch {
  defaultValue: string;
  placeholder: string;
  maxWidth?: string;
  buttonBg: string;
}

const Search = ({ defaultValue, placeholder, maxWidth, buttonBg }: ISearch) => {
  return (
    <div className="flex">
      <input type="text" value={defaultValue} placeholder={placeholder} style={{ maxWidth: maxWidth ? maxWidth : "none" }} />
      <button>
        <BsSearch />
      </button>
    </div>
  );
};

export default Search;
