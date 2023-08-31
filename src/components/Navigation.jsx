import "./Navigation.css";
export function Navigation() {
  return (
    <div>
      <nav>
        <div className="filter-by">
          <p>Filter by</p>
          <ul>All</ul>
          <ul>Men</ul>
          <ul>Women</ul>
        </div>
        <div className="sort-by">
          <p>Sort by</p>
          <ul>Name</ul>
          <ul>Age</ul>
        </div>
      </nav>
    </div>
  );
}
