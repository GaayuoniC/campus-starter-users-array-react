import "./Navigation.css";
import { useState } from "react";
export function Navigation() {
  const [isSelected, setIsSelected] = userState(false);
  console.log("Navigations function has been called");

  function onSelectButtonType() {
    setIsSelected(!isSelected);
  }

  return (
    <div>
      <nav onClick={}>
        <div className="filter-by">
          <p>Filter by;</p>
          <ul>
            <button id="click-all">All</button>{" "}
          </ul>
          <ul>
            <button id="click-men">Men</button>
          </ul>
          <ul>
            <button id="click-women">Women</button>
          </ul>
        </div>
        <div className="sort-by">
          <p>Sort by;</p>
          <ul>
            <button id="click-name">Name</button>
          </ul>
          <ul>
            <button id="click-age">Age</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
