import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import './index.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use environment variable for API URL or fallback to localhost
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
        const response = await fetch(`${apiUrl}/api/data`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }
        
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-dark flex items-center justify-center text-accent">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-bg-dark flex items-center justify-center text-red-500">
        <p>Error loading portfolio data: {error}</p>
        <p className="text-sm text-gray-400 mt-2">Please ensure the backend server is running.</p>
      </div>
    );
  }

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/projects" element={<AllProjects data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
