import * as React from 'react';
import './index.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
import NotFound from './component/notFound/NotFound';
import Home from './pages/home/Home';
import Profile from './component/profile/Profile';
import PrimarySearchAppBar from './component/header/Header';
import Footer from './component/footer/Footer';
import ProductsPage from './pages/productsPage/ProductsPage';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/profil/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
