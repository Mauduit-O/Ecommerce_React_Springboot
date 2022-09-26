import './index.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
import NotFound from './component/notFound/NotFound';
import Header from './component/header/Header';
import Home from './pages/home/Home';
import ProductsPage from './pages/productsPage/ProductsPage';
import Footer from './component/footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './pages/search/Search';

// Nom de la clé ou on va stocké notre token dans le localStorage
export const AUTH_TOKEN_KEY = 'jhiauthenticationToken';

function App() {

  const [searchTerm, setSearchTerm ] = useState<string>("");

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value.toLowerCase());    
  }

  // Mise en place d'un intercepteur pour automatiquement ajouter un token JWT si il est present dans le localstorage 
  const [loading, setLoading] = useState(false)
  const service = axios.create({
    timeout: 20000 // request timeout
  });
  

  useEffect(() => {
    axios.interceptors.request.use(function (request: any) {
      const token = sessionStorage.getItem(AUTH_TOKEN_KEY)
      if (token) {       
        // request.headers.Authorization = `Bearer ${token}`;
        request.headers["Authorization"] = `Bearer ${token}`;
      }
      setLoading(true)
      console.log(request);
      return request
      
    }, (error) => {
      setLoading(false)
      return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
      setLoading(false)
      return response;
    }, (error) => {
      setLoading(false)
      return Promise.reject(error);
    });
  })
  
  return (
    <div className="App">
      <Header handleChange={handleChange}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductsPage/>} />
        <Route path="/search" element={<Search searchTerm={searchTerm}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
