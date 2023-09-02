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

  const onlyMen = users.filter((user) => user.gender === "male");
  const onlyWomen = users.filter((user) => user.gender === "female");

  let filteredUsers = [...users]; //spread factor makes a deep copy
  console.log(selectedFilter);
  if (selectedFilter === "male") {
    filteredUsers = onlyMen;
    console.log(filteredUsers);
  } else if (selectedFilter === "female") {
    filteredUsers = onlyWomen;
  } else if (selectedFilter === "by-name") {
    filteredUsers = [...users].sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
    //using a locale compare function within the sort function
  } else if (selectedFilter === "age") {
    filteredUsers = [...users].sort((a, b) => a.dob.age - b.dob.age);
    //Use only localeCompare function for names and use just normal compareFn for numbers
  } else if (selectedFilter === "by-country") {
    filteredUsers = [...users].sort((a, b) =>
      a.location.country.localeCompare(b.location.country)
    );
    //Using localeCompare function again.
  }
  console.log(users);
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
          {filteredUsers.map((user) => {
            // console.log("user.email" + "  " + user.email);
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
