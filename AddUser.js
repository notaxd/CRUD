import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://127.0.0.1:5000/users', { name, email });
    navigate('/');
  };

  return (
    <div>
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddUser;
