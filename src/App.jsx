import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";
import { useState } from "react";

function App() {
  return (
    <>
      <header>
        <h1>Array function magic</h1>
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
