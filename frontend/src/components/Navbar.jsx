import React from 'react';
import zudocIcon from '../assets/zudocIcon.svg';

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="w-full px-6 md:px-20 py-5 bg-white/80 backdrop-blur-md shadow-sm flex justify-between items-center sticky top-0 z-50 animate-in fade-in slide-in-from-top duration-700">
      <div 
        className="flex items-center gap-3 cursor-pointer group" 
        onClick={() => setCurrentPage('home')}
      >
        <img src={zudocIcon} alt="Zudoc" className="w-12 h-12 transition-transform group-hover:scale-110" />
        <div className="justify-start text-cyan-700 text-3xl font-extrabold leading-10">Zudoc</div>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 ${
            currentPage === 'home' 
            ? 'bg-cyan-700 text-white shadow-lg shadow-cyan-700/30' 
            : 'text-cyan-700 hover:bg-cyan-50'
          }`}
        >
          Home
        </button>
        
        <button 
          onClick={() => setCurrentPage('about')}
          className={`px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 ${
            currentPage === 'about' 
            ? 'bg-cyan-700 text-white shadow-lg shadow-cyan-700/30' 
            : 'text-cyan-700 hover:bg-cyan-50'
          }`}
        >
          About
        </button>

        <div className="relative flex items-center gap-1 group cursor-pointer py-4">
          <span className="text-cyan-700 font-semibold group-hover:text-cyan-900 transition-colors">Platforms</span>
          <svg className="w-4 h-4 text-cyan-700 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50 pointer-events-none group-hover:pointer-events-auto">
            <button onClick={() => setCurrentPage('patient')} className="text-left px-5 py-3 text-cyan-700 font-bold hover:bg-cyan-50">Patient</button>
            <button onClick={() => setCurrentPage('doctor')} className="text-left px-5 py-3 text-cyan-700 font-bold hover:bg-cyan-50">Doctor</button>
            <button onClick={() => setCurrentPage('hospital')} className="text-left px-5 py-3 text-cyan-700 font-bold hover:bg-cyan-50">Hospital</button>
            <button onClick={() => setCurrentPage('laboratory')} className="text-left px-5 py-3 text-cyan-700 font-bold hover:bg-cyan-50">Laboratory</button>
          </div>
        </div>
      </div>

      <button className="md:hidden text-cyan-700">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
