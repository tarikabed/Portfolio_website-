import { useEffect, useState } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-50 py-8 transition-colors duration-200 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#Home" className="text-2xl tracking-wider">
                        Tarik (طارق)
                    </a> 
                    <div 
                        className="w-7 h-5 cursor-pointer z-40 md:hidden ml-auto" 
                        onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                    <div className="flex items-center space-x-8 relative">
                        <a href="#Home" className="hidden md:flex text-gray-300 relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-current transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#blog" className="hidden md:flex text-gray-300 relative group">
                            Blog
                            <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-current transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#projects" className="hidden md:flex text-gray-300 relative group">
                            Projects
                            <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-current transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#contact" className="hidden md:flex text-gray-300 relative group">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-current transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
