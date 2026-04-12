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
      className="min-h-screen overflow-x-hidden bg-fixed bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area */}
      <main>
        {renderContent()}
      </main>

      <Footer />
    </div>
  )
}

export default App
