import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import './display.css';

const Display = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="display-container">
      <h1>Stored Data</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;