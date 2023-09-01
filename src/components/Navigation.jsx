import "./Navigation.css";
export function Navigation({ activeButton, onChange }) {
  return (
    <div>
      <nav onClick={}>
        <div className="filter-by">
          <p>Filter by;</p>
          <ul>
            <button
              style={activeButton === "all" ? { color: "red" } : {}}
              onClick={() => onChange("all")}
              id="click-all"
            >
              All
            </button>{" "}
          </ul>
          <ul>
            <button
              style={activeButton === "men" ? { color: "red" } : {}}
              onClick={() => onChange("men")}
              id="click-men"
            >
              Men
            </button>
          </ul>
          <ul>
            <button
              style={activeButton === "women" ? { color: "red" } : {}}
              onClick={() => onChange("women")}
              id="click-women"
            >
              Women
            </button>
          </ul>
        </div>
        <div className="sort-by">
          <p>Sort by;</p>
          <ul>
            <button
              style={activeButton === "by-name" ? { color: "red" } : {}}
              onClick={() => onChange("by-name")}
              id="click-name"
            >
              Name
            </button>
          </ul>
          <ul>
            <button
              style={activeButton === "by-age" ? { color: "red" } : {}}
              onClick={() => onChange("by-age")}
              id="click-age"
            >
              Age
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
