import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('http://127.0.0.1:5000/users');
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>All Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})&nbsp;
            <Link to={`/edit/${user.id}`}>Edit</Link> | 
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
