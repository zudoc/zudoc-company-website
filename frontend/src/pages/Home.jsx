import { homeContent } from '../constants/homeContent'

function Home({ setCurrentPage }) {
  const { hero, services } = homeContent;

  return (
    <main className="relative pt-20 pb-32 flex flex-col items-center">
      {/* Decorative Background Element */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="max-w-5xl px-6 text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-cyan-900 leading-[1.1] tracking-tight">
          {hero.titleTop} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-500">
            {hero.titleBottom}
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
          {hero.description}
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-7xl mt-24 px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {services.map((card, index) => (
            <button
              key={card.id}
              onClick={() => setCurrentPage(card.id)}
              className="group relative bg-white p-4 sm:p-8 rounded-[24px] sm:rounded-[40px] shadow-xl shadow-cyan-900/5 border border-cyan-100/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/10 text-left flex flex-col justify-between"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br ${card.color} opacity-[0.03] rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />

              <div className="relative z-10 space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-3xl font-extrabold text-slate-800 group-hover:text-cyan-700 transition-colors uppercase leading-tight">{card.title}</h3>
                <p className="text-xs sm:text-base text-slate-500 font-medium leading-snug">{card.sub}</p>
              </div>

              <div className="mt-4 sm:mt-8 flex justify-end transition-transform duration-500 group-hover:scale-110">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 sm:w-40 sm:h-40 object-contain drop-shadow-lg"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
