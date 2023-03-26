import axios from "axios";
import React, { useEffect, useState } from "react";

function Githubusers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersFromGithub();
  }, []);

  const getUsersFromGithub = async () => {
    const response = await axios
      .get("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.data));
  };
  return <div> <h1>
    Githubusers</h1> 
    {
        users.map((user) => {
          return <div key={user.id}>{user.login}</div>;
        })
    }
    </div>;
}

export default Githubusers;
