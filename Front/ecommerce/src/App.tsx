import * as React from 'react';
import './index.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
// import { Button } from '@mui/material';
// import  Header from './component/header';
import NotFound from './component/notFound/NotFound';
import Home from './pages/home/Home';
import Profile from './component/profile/Profile';
import Navbar from './component/header/Navbar';
import PrimarySearchAppBar from './component/header/Header';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil/:id" element={<Profile />} />
        {/* <Route path="/profil/*" element={<Profile />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
