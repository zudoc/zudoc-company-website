import React from 'react'
import { doctorContent } from '../constants/doctorContent'

function Doctor() {
  const { hero, aiEngagement, schedule, treatmentJourney, postCare, controlTower, cta } = doctorContent

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col font-['Manrope']">
      {/* Decorative Background Inspired by Home */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-200/20 rounded-full blur-[140px] -z-10 animate-pulse pointer-events-none" />

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="px-4 py-1.5 bg-gray-200/80 rounded-full inline-flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-800 rounded-full" />
            <span className="text-teal-800 text-sm font-bold uppercase tracking-wide">{hero.badge}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-neutral-800">
            {hero.title.line1}<br />
            {hero.title.line2}<br />
            <span className="text-cyan-700">{hero.title.line3}</span>
          </h1>
          <p className="text-xl text-stone-500 font-medium max-w-lg leading-relaxed">
            {hero.description}
          </p>
          <button className="mt-4 px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            {hero.buttonText}
          </button>
        </div>
        <div className="flex-1 w-full max-w-xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800/10 to-cyan-700/20 rounded-full blur-2xl z-0" />
          <div className="relative z-10 p-4 md:p-8 bg-white/50 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/40">
            <img className="w-full h-auto rounded-2xl object-cover" src={hero.placeholderImage} alt="Hero" />
          </div>
        </div>
      </section>

      {/* AI Engagement Section */}
      <section className="w-full bg-white/50 backdrop-blur-sm py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">{aiEngagement.title}</h2>
            <p className="text-xl text-stone-500 font-medium">{aiEngagement.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {aiEngagement.cards.map((card, i) => (
              <div key={i} className={`p-8 bg-white rounded-3xl shadow-xl shadow-cyan-900/5 border-t-4 ${i === 1 ? 'border-cyan-500' : 'border-teal-700'} flex flex-col gap-6 hover:-translate-y-1 transition-transform`}>
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-800">
                  {i === 0 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                  ) : i === 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-2">{card.title}</h3>
                  <p className="text-neutral-500">{card.description}</p>
                </div>
                {card.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-zinc-100 text-stone-600 text-sm font-semibold rounded-full">{tag}</span>
                    ))}
                  </div>
                )}
                {card.quote && (
                  <div className="mt-auto p-4 bg-teal-50 rounded-2xl text-teal-800 text-sm font-medium italic">
                    {card.quote}
                  </div>
                )}
                {card.actionText && (
                  <div className="mt-auto flex items-center gap-2 text-teal-800 font-bold cursor-pointer hover:underline">
                    {card.actionText} <span className="text-lg">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control Tower Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <div className="text-center max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">{controlTower.title}</h2>
          <p className="text-xl text-stone-500 font-medium">{controlTower.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {/* Patients Box */}
          <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-zinc-900">{controlTower.patientsTitle}</h3>
            </div>
            <div className="flex flex-col gap-4">
              {controlTower.patients.map((p, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0">
                  <div>
                    <h4 className="font-bold text-zinc-900">{p.name}</h4>
                    <p className="text-xs text-gray-500">{p.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.statusVariant === 'critical' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Revenue Box */}
          <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-zinc-900 mb-4">{controlTower.revenueTitle}</h3>
            <div className="text-5xl md:text-6xl font-bold text-cyan-700 mb-2">{controlTower.revenueAmount}</div>
            <p className="text-gray-500 tracking-wide mb-6">{controlTower.revenueSubtitle}</p>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div className="bg-cyan-600 h-3 rounded-full" style={{ width: controlTower.revenueBreakdown.percentage }}></div>
            </div>
            <div className="flex justify-between text-sm font-bold text-zinc-700 mt-2">
              <span>{controlTower.revenueBreakdown.label}</span>
              <span>{controlTower.revenueBreakdown.percentage}</span>
            </div>
          </div>
          {/* Growth Box */}
          <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-zinc-900">{controlTower.growthTitle}</h3>
              <span className="text-xs font-bold text-emerald-600">{controlTower.growthStat}</span>
            </div>
            <div className="flex items-end gap-2 h-40">
              {[30, 40, 50, 60, 80, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-cyan-700 rounded-t-md transition-all duration-500 hover:opacity-80" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Journey & Testimonial */}
      <section className="w-full bg-transparent text-neutral-900 py-24 px-6 mt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">
          <div className="flex-1 z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">{treatmentJourney.title}</h2>
            <div className="flex flex-col gap-8 relative">
              <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-zinc-200" />
              {treatmentJourney.steps.map((step, i) => (
                <div key={i} className="flex gap-6 relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${i === 0 ? 'bg-teal-800 text-white shadow-[0_0_15px_rgba(17,94,89,0.5)]' : i === 1 ? 'bg-teal-500 text-white' : 'bg-teal-200 text-teal-900'}`}>
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-stone-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative z-10 flex flex-col justify-center">
            <div className="bg-gradient-to-br from-teal-800 to-teal-900 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              <div className="text-6xl font-black text-white mb-2">{treatmentJourney.testimonial.score}</div>
              <div className="text-teal-200 font-bold mb-8 uppercase tracking-widest">{treatmentJourney.testimonial.label}</div>
              <p className="text-xl italic text-white/90 leading-relaxed mb-8 border-l-4 border-teal-500 pl-6">
                {treatmentJourney.testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <img className="w-14 h-14 rounded-full border-2 border-white/20" src={treatmentJourney.testimonial.image} alt={treatmentJourney.testimonial.doctorName} />
                <div>
                  <h4 className="font-bold text-white">{treatmentJourney.testimonial.doctorName}</h4>
                  <p className="text-sm text-teal-200/80">{treatmentJourney.testimonial.doctorTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24">
        <div className="relative rounded-[3rem] bg-gradient-to-r from-teal-800 to-cyan-700 p-12 md:p-20 text-center overflow-hidden shadow-2xl shadow-cyan-900/20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-white/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {cta.title}
            </h2>
            <p className="text-lg md:text-xl text-teal-50 mb-10 max-w-2xl">
              {cta.description}
            </p>
            <button className="px-10 py-5 bg-white text-teal-900 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform duration-300">
              {cta.buttonText}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Doctor
