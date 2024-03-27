import { Route, Routes, Router } from 'react-router-dom';
import './App.css';
import Header from './conpanets/Header';
import Product from './conpanets/Product';
import Basket from './conpanets/Basket/index';
import Home from './conpanets/Home/index';

function App() {
  return (
    <div className="App">
      
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/basket" element={<Basket/>} />

     </Routes>
    </div>
  );
}

export default App;
