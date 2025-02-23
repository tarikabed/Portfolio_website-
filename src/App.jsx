import { useState } from 'react';
import { Navbar } from './components/Navbar';
import "./index.css";
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/Pages/home';


function App() {
  const [isLoaded, setIsLoaded] = useState(false); // Initialize isLoaded
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div >

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />


      </div>
    </>
  );
}

export default App;
