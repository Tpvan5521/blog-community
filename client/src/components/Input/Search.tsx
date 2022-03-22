import React from "react";
import { BsSearch } from "react-icons/bs";
import { CoffeeButton } from "../Button/Button";

interface ISearch {
  value: string;
  placeholder: string;
  maxWidth?: string;
  onChange: any;
}

const Search = ({ value, placeholder, maxWidth, onChange }: ISearch) => {
  return (
    <div className="flex flex-1 items-center mx-16">
      <input
        className="h-10 px-5 flex-1 outline-none border-none bg-transparent flex items-center max-w-md"
        type="text"
        value={value}
        placeholder={placeholder}
        style={{ maxWidth: maxWidth ? maxWidth : "none" }}
        onChange={onChange}
      />
      <CoffeeButton content={<BsSearch />} customClassName="rounded-none h-10 font-bold" />
    </div>
  );
};

export default Search;
