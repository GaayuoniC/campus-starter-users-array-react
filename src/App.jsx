import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";
import { Navigation } from "./components/Navigation";
import { useState } from "react";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  function handleFilterChange(filter) {
    setSelectedFilter(filter);
  }

  return (
    <>
      <header>
        <h1>Array function magic</h1>
        <Navigation
          activeButton={selectedFilter}
          onChange={handleFilterChange}
        />
      </header>
      <main>
        <section className="card-list">
          {users.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
