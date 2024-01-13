import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" data-spy='scroll' data-target='#navbar' data-offset='50'>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
