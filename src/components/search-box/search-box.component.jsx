import React from "react";
import "./search-box-styles.css";

export const SearchBox = ({placeholder, handleChange}) => (
  // functional component doesn't have access to "state" and lifecycle methods
  /* setState is an async function. JS will run the rest of the code while "waiting" for the fn to be completed*/
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
