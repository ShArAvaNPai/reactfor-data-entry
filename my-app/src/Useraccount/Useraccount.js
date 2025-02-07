import React, { useState, useEffect } from "react";
import "./Useraccounts.css";

const Useraccount = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ id: '', first_name: '', last_name: '', email: '', age: '', address: '', grade: '' });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);

  useEffect(() => {
    fetch("http://91.203.132.60:9080/api/students")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setFormData(user);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteUserId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    fetch(`http://91.203.132.60:9080/api/students/${deleteUserId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setUsers(users.filter(user => user.id !== deleteUserId));
        setShowDeleteModal(false);
        setDeleteUserId(null);
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const method = editingUser ? "PUT" : "POST";
    const url = editingUser
      ? `http://91.203.132.60:9080/api/students/${formData.id}`
      : "http://91.203.132.60:9080/api/students";
  
    // Ensure id is only included for editing, remove it when creating a new user
    const requestData = { ...formData };
    if (!editingUser) {
      delete requestData.id;
    }
  
    console.log("Submitting data:", requestData); // Log correct request data
  
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data); // Log response data after submission
        if (editingUser) {
          setUsers(users.map((user) => (user.id === formData.id ? data : user)));
        } else {
          setUsers([...users, data]);
        }
        setEditingUser(null);
        setFormData({
          id: "",
          first_name: "",
          last_name: "",
          email: "",
          age: "",
          address: "",
          grade: "",
        });
        setShowEditModal(false);
        setShowCreateModal(false);
      })
      .catch((error) => console.error("Error saving data:", error));
  };

  
  const handleCreateClick = () => {
    setFormData({ id: '', first_name: '', last_name: '', email: '', age: '', address: '', grade: '' });
    setShowCreateModal(true);
  };

  return (
    <div className="useraccount-container">
      <h1>User Accounts</h1>
      <button onClick={handleCreateClick}>Create Account</button>
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowEditModal(false)}>X</button>
            <form className="edit-form" onSubmit={handleSubmit}>
              <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
              <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
              <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
              <input type="text" name="grade" value={formData.grade} onChange={handleChange} placeholder="Grade" required />
              <button type="submit" className="submit-btn">Save</button>
            </form>
          </div>
        </div>
      )}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowCreateModal(false)}>X</button>
            <form className="edit-form" onSubmit={handleSubmit}>
              <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
              <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
              <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
              <input type="text" name="grade" value={formData.grade} onChange={handleChange} placeholder="Grade" required />
              <button type="submit" className="submit-btn">Create</button>
            </form>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Do you want to delete it?</p>
            <button onClick={confirmDelete}>OK</button>
            <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
          </div>
        </div>
      )}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name + " " + user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
              <td>{user.grade}</td>
              <td>
                <button onClick={() => handleEditClick(user)}>Edit</button>
                <button onClick={() => handleDeleteClick(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Useraccount;