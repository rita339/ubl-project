import { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [placeholder, setPlaceholder] = useState("Suche");

  return (
    <label className="search-label" name="text" htmlFor="search">
      <input
        type="text"
        name="text"
        id="search"
        placeholder={placeholder}
        onFocus={() => setPlaceholder("")}
        onBlur={() => setPlaceholder("Suche")}
      />
      <button className="search-btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </label>
  );
};
