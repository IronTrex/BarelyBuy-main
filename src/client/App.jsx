import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'; // Import your Layout component
import Home from './Home'; // Import your Home component
import Posts from './Posts'; // Import your Posts component
import Login from './Login'; // Import your Login component
import Profile from './Profile'; // Import your Profile component
import Register from './Register'; // Import your Register component

function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout component is wrapped around these routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
