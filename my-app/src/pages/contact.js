import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import './contact.css';
const dataa=[
  {
    "name": "Shravan",
    "email": "aaa@gmail.com"
  },{
    "name": "Shravan",  "email":"abc@gmail.com"}]
const Contact = () => {
  const { setData } = useContext(DataContext);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(prevData => [...prevData, formData]);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default Contact;