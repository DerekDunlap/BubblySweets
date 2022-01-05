import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Navigation from './components/Navbar';
import './styles/Navbar.css'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
