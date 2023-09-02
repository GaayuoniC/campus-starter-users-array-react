import "./Navigation.css";
export function Navigation({ activeButton, onChange }) {
  return (
    <div>
      <nav>
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
              style={activeButton === "male" ? { color: "red" } : {}}
              onClick={() => onChange("male")}
              id="click-men"
            >
              Men
            </button>
          </ul>
          <ul>
            <button
              style={activeButton === "female" ? { color: "red" } : {}}
              onClick={() => onChange("female")}
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
          <ul>
            <button style={activeButton === "by-country"? {color : "red"} : {}}
            onClick={()=> onChange("by-country")}>Country</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
