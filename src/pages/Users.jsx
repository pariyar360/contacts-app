import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "../components/User";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState({});

  async function fetchUser() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(data);
    console.log(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>{user.name}</h1>
      <hr />
      <div className="contact">
        <i class="fa-solid fa-phone contact__logo"></i>
        <h3>{user.phone}</h3>
      </div>
      <div className="contact">
        <i class="fa-solid fa-envelope contact__logo"></i>
        <h3>{user.email}</h3>
      </div>
      <div className="contact">
        <i class="fa-solid fa-globe contact__logo"></i>
        <h3>{user.website}</h3>
      </div>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Users;
