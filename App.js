import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddUser from './AddUser';
import UserList from './UserList';
import EditUser from './EditUser';
import './App.css';


function App() {
  return (
    <Router>
      <div className="container">
        <h2>User Management App</h2>
        <nav>
          <Link to="/">Users</Link> | <Link to="/add">Add User</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
