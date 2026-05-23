import './styles/App.css'

import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Resume/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
