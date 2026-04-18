import { useEffect, useState } from 'react'
import { homeContent } from '../constants/homeContent'
import ecgAnimation from '../assets/heroPage/ecg.json'

function Home({ setCurrentPage }) {
  const { hero, services } = homeContent;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-center lg:justify-evenly min-h-[calc(100vh-112px)] lg:h-[calc(100vh-112px)] overflow-hidden lg:pb-8 font-['Manrope']">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      {/* Hero Section — responsive spacing and sizing */}
      <div
        className="max-w-6xl px-6 text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-[min(3vh,2rem)] transition-all duration-[1200ms] ease-out flex-shrink-0"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[min(7vw,90px)] font-extrabold text-slate-900 leading-[1.05] tracking-tight">
          {hero.titleTop} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
            {hero.titleBottom}
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-[min(1.5vw,22px)] text-slate-600 font-medium leading-relaxed">
          {hero.description}
        </p>
      </div>

      {/* Cards Section — using flexible margin to adapt to height */}
      <div className="w-full max-w-7xl mt-6 sm:mt-8 md:mt-12 lg:mt-0 px-6 relative z-10 flex-shrink-0">
        <div className="home-cards-wrapper">

          {/* ─── Heartbeat connectors (Lottie) ─── */}
          {/* Desktop: 3 connectors between 4 cards */}
          <div className={`ecg-connector ecg-desktop ecg-gap-1 ${visible ? 'visible' : ''}`}>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src={JSON.stringify(ecgAnimation)}
              style={{ width: '100%', height: '100%' }}
            ></lottie-player>
          </div>
          <div className={`ecg-connector ecg-desktop ecg-gap-2 ${visible ? 'visible' : ''}`}>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src={JSON.stringify(ecgAnimation)}
              style={{ width: '100%', height: '100%' }}
            ></lottie-player>
          </div>
          <div className={`ecg-connector ecg-desktop ecg-gap-3 ${visible ? 'visible' : ''}`}>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src={JSON.stringify(ecgAnimation)}
              style={{ width: '100%', height: '100%' }}
            ></lottie-player>
          </div>

          {/* Mobile: 2 connectors — one per row */}
          <div className={`ecg-connector ecg-mobile ecg-row-top ${visible ? 'visible' : ''}`}>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src={JSON.stringify(ecgAnimation)}
              style={{ width: '100%', height: '100%' }}
            ></lottie-player>
          </div>
          <div className={`ecg-connector ecg-mobile ecg-row-bottom ${visible ? 'visible' : ''}`}>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src={JSON.stringify(ecgAnimation)}
              style={{ width: '100%', height: '100%' }}
            ></lottie-player>
          </div>

          {/* ─── Cards ─── */}
          {services.map((card, index) => (
            <button
              key={card.id}
              onClick={() => setCurrentPage(card.id)}
              className="home-card group relative bg-white p-4 sm:p-5 lg:p-6 rounded-[24px] lg:rounded-[32px] shadow-xl shadow-primary/5 border border-primary/20 overflow-hidden text-left flex flex-col justify-between h-full min-h-[140px] sm:min-h-[180px] lg:min-h-[min(22vh,240px)]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transition: `all 800ms cubic-bezier(.22, 1, .36, 1) ${300 + index * 100}ms`,
              }}
            >
              {/* Corner gradient blob */}
              <div className={`absolute top-0 right-0 w-24 h-24 lg:w-40 lg:h-40 bg-gradient-to-br ${card.color} opacity-[0.03] rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />

              <div className="relative z-10 space-y-1 lg:space-y-2">
                <h3 className="text-xl sm:text-2xl lg:text-[min(1.8vw,28px)] font-extrabold text-slate-800 group-hover:text-primary transition-colors leading-tight tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-[min(1.1vw,15px)] text-slate-500 font-medium leading-snug">
                  {card.sub}
                </p>
              </div>

              <div className="mt-4 flex justify-end transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 -mr-2 -mb-2 sm:-mr-4 sm:-mb-4">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-20 h-20 sm:w-28 lg:w-[min(9vw,120px)] h-auto object-contain drop-shadow-xl"
                />
              </div>

              {/* Hover glow ring */}
              <span className="pointer-events-none absolute inset-0 rounded-[24px] lg:rounded-[32px] ring-0 ring-primary/0 group-hover:ring-[3px] group-hover:ring-primary/40 transition-all duration-500" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
