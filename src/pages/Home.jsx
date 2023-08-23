import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function renderUsers() {
    return users.map((user) => (
      <Link to={`/users/${user.id}`} key={user.id} style={{ textDecoration: 'none', color: "black"}}>
        <User
          name={user.name}
        ></User>
      </Link>
    ));
  }

  return (
  <div className="contact--info">
    {users.length > 0 ? renderUsers() : <h1>Loading...</h1>}
  </div>
  );
}

export default Home;
