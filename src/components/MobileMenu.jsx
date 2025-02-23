export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
      <div className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-50 flex flex-col items-center justify-center
          transition-all duration-300 ease-in-out backdrop-blur-md
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}>
        {/* X (Close) Button */}
        <button 
          onClick={() => setMenuOpen(false)} 
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>
                <a 
                href="#Home" 
                onClick={() => setMenuOpen(false)}
                className={`sixe-4xl font-normal text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}>
                        Home
                </a>
                <a 
                href="#blog" 
                onClick={()=> setMenuOpen(false)}
                className={`sixe-4xl font-normal text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}>
                        Blog
                </a>
                <a 
                href="#projects" 
                onClick={()=> setMenuOpen(false)}
                className={`sixe-4xl font-normal text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}>
                        Projects
                </a>
                <a 
                href="#contact" 
                onClick={()=> setMenuOpen(false)}
                className={`sixe-4xl font-normal text-white my-4 transform transition-transform duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}>
                        Contact
                </a>
      </div>
    );
  };
  