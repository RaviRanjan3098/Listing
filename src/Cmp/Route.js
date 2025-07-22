import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Post from './Post';
import Dashboard from './Dashboard';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/post/:id" element={<Post />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
