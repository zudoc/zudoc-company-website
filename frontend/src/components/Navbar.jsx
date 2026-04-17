import React, { useState } from 'react';
import zudocIcon from '../assets/zudocIcon.svg';

function Navbar({ currentPage, setCurrentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePlatformsOpen, setIsMobilePlatformsOpen] = useState(false);

  const platformPages = ['patient', 'doctor', 'hospital', 'laboratory'];
  const isPlatformActive = platformPages.includes(currentPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    setIsMobilePlatformsOpen(false);
  };

  return (
    <nav className="w-full px-6 md:px-20 py-5 bg-white/80 backdrop-blur-md shadow-sm flex flex-col md:flex-row justify-between md:items-center fixed top-0 left-0 right-0 z-50 animate-in fade-in slide-in-from-top duration-700">
      <div className="w-full md:w-auto flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => handlePageChange('home')}
        >
          <img src={zudocIcon} alt="zudoc" className="w-12 h-12 transition-transform group-hover:scale-110" />
          <div className="justify-start text-primary text-3xl leading-10 company-name">zudoc</div>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary transition-transform active:scale-95"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <button 
          onClick={() => handlePageChange('home')}
          className={`px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 ${
            currentPage === 'home' 
            ? 'bg-primary text-white shadow-lg shadow-primary/30' 
            : 'text-primary hover:bg-primary/5'
          }`}
        >
          Home
        </button>
        
        <button 
          onClick={() => handlePageChange('about')}
          className={`px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 ${
            currentPage === 'about' 
            ? 'bg-primary text-white shadow-lg shadow-primary/30' 
            : 'text-primary hover:bg-primary/5'
          }`}
        >
          About
        </button>

        <div className="relative flex items-center gap-1 group cursor-pointer px-4 py-2.5 rounded-xl transition-all duration-300">
          <span className={`font-bold transition-colors ${
            isPlatformActive ? 'text-primary' : 'text-primary/70 group-hover:text-primary'
          }`}>Platforms</span>
          <svg className={`w-4 h-4 transition-all duration-300 ${isPlatformActive ? 'text-primary' : 'text-primary/70 group-hover:text-primary'} group-hover:rotate-180`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          
          {/* Active Highlight Underline for Platforms */}
          {isPlatformActive && (
            <div className="absolute bottom-1 left-4 right-8 h-0.5 bg-primary rounded-full animate-in fade-in slide-in-from-left-2 duration-300" />
          )}
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50 pointer-events-none group-hover:pointer-events-auto overflow-hidden">
            {['patient', 'doctor', 'hospital', 'laboratory'].map((page) => (
              <button 
                key={page}
                onClick={() => handlePageChange(page)} 
                className={`text-left px-5 py-3 text-sm font-bold transition-colors ${
                  currentPage === page 
                  ? 'bg-primary text-white' 
                  : 'text-primary hover:bg-primary/5'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full flex flex-col gap-3 mt-6 animate-in slide-in-from-top-4 fade-in duration-300">
          <button 
            onClick={() => handlePageChange('home')}
            className={`px-5 py-3 rounded-xl font-bold transition-all text-left w-full ${
              currentPage === 'home' 
              ? 'bg-primary text-white shadow-md' 
              : 'text-primary bg-primary/5 hover:bg-primary/10'
            }`}
          >
            Home
          </button>
          
          <button 
            onClick={() => handlePageChange('about')}
            className={`px-5 py-3 rounded-xl font-bold transition-all text-left w-full ${
              currentPage === 'about' 
              ? 'bg-primary text-white shadow-md' 
              : 'text-primary bg-primary/5 hover:bg-primary/10'
            }`}
          >
            About
          </button>
          
          <div className={`flex flex-col rounded-xl overflow-hidden border transition-all duration-300 ${
            isPlatformActive ? 'bg-primary/5 border-primary/20' : 'bg-primary/5 border-primary/10'
          }`}>
            <button 
              onClick={() => setIsMobilePlatformsOpen(!isMobilePlatformsOpen)}
              className={`px-5 py-3 font-bold text-left flex justify-between items-center transition-colors ${
                isPlatformActive ? 'text-primary' : 'text-primary/70'
              } hover:bg-primary/10`}
            >
              Platforms
              <svg className={`w-4 h-4 transition-transform duration-300 ${isMobilePlatformsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {(isMobilePlatformsOpen || isPlatformActive) && (
              <div className="flex flex-col bg-white/50 animate-in slide-in-from-top-2 fade-in duration-200">
                {['patient', 'doctor', 'hospital', 'laboratory'].map((page) => (
                  <button 
                    key={page}
                    onClick={() => handlePageChange(page)} 
                    className={`text-left px-8 py-3 font-semibold transition-all border-l-2 ${
                      currentPage === page 
                      ? 'bg-primary text-white border-primary/80' 
                      : 'text-primary hover:bg-primary/10 border-transparent hover:border-primary/50'
                    }`}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
