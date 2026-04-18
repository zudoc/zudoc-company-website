import { useState, useEffect } from 'react'
import './App.css'
import backgroundImage from './assets/heroPage/background.png'
import Home from './pages/Home'
import About from './pages/About'
import Patient from './pages/Patient'
import Doctor from './pages/Doctor'
import Hospital from './pages/Hospital'
import Laboratory from './pages/Laboratory'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'patient':
        return <Patient />;
      case 'doctor':
        return <Doctor />;
      case 'hospital':
        return <Hospital />;
      case 'laboratory':
        return <Laboratory />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  }

  return (
    <div 
      className="min-h-screen flex flex-col overflow-x-hidden bg-fixed bg-cover bg-center transition-all duration-500"
      style={{ 
        backgroundImage: currentPage === 'home' ? `url(${backgroundImage})` : 'none',
        backgroundColor: currentPage === 'home' ? 'transparent' : '#F7F9FB'
      }}
    >
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area - Added padding top to account for fixed navbar */}
      <main className="flex-1 flex flex-col pt-24 md:pt-28">
        {renderContent()}
      </main>

      <Footer />
    </div>
  )
}

export default App
