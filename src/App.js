import { Routes, Route } from "react-router-dom"

import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import './styles/Navbar.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={ <Product/> } />
      </Routes>
    </div>
  );
}

export default App;
