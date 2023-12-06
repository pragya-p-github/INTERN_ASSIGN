// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; 

const Dashboard = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('q1');
  const [quarterData, setQuarterData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/quarter/${selectedQuarter}`);
        setQuarterData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedQuarter]);

  const handleQuarterChange = (event) => {
    setSelectedQuarter(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <h1>SBI Metrics Dashboard</h1>
      <label  className="dropdown">Select Quarter: </label>
      <select value={selectedQuarter} onChange={handleQuarterChange} className="select-container">
        <option value="q1" className="id1">Quarter 1 (Dec 22)</option>
        <option value="q2" className="id1">Quarter 2 (Mar 23)</option>
        <option value="q3" className="id1">Quarter 3 (Jun 23)</option>
        <option value="q4" className="id1">Quarter 4 (Sep 23)</option>
      </select>
      <div className="tiles-container">
        <Tile label="Revenue (INR)" value={quarterData.revenue} />
        <Tile label="Net Income (INR)" value={quarterData.netIncome} />
        <Tile label="Net Profit" value={quarterData.netProfit} />
        <Tile label="Operating Income (INR)" value={quarterData.operatingIncome} />
      </div>
    </div>
  );
};

const Tile = ({ label, value }) => {
  return (
    <div className="tile">
      <p>{label}</p>
      <h2>{value}</h2>
    </div>
  );
};

export default Dashboard;
