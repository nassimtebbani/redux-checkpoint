import React from "react";
import AddTask from "../../components/AddTask";
import Filter from "../../components/Filter";
import ListTask from "../../components/ListTask";

export default function Home() {
  return (
    <div>
      <h1>My todo app</h1>
      <AddTask />
      <div className="Container">
        <h3>choose one to filter</h3>
        <Filter />
      </div>

      <ListTask />
    </div>
  );
}
