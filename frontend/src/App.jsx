// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <h1 className="text-4xl font-bold text-white mb-8">User Authentication System</h1>
                <div className="flex space-x-4 mb-8">
                    <Link to="/login">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                            Register
                        </button>
                    </Link>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
