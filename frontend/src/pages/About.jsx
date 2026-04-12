import React from 'react';
import { aboutContent } from '../constants/aboutContent';

function About() {
  return (
    <div className="w-full relative flex flex-col justify-start items-center overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full max-w-[1440px] px-6 lg:px-20 pt-10 flex flex-col justify-center items-center gap-8 overflow-hidden relative">
        <div className="w-full flex lg:flex-row flex-col justify-center items-center lg:items-start gap-7 min-h-[590px]">
          <div className="w-full lg:w-[648px] flex flex-col justify-start z-10">
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <div className="px-4 py-1.5 bg-teal-600/10 rounded-full flex justify-start items-start">
                <div className="justify-center text-teal-600 text-xs font-bold uppercase leading-4 tracking-wider">{aboutContent.hero.badge}</div>
              </div>
              <div className="w-full flex flex-col justify-start items-start">
                <div className="justify-start text-left">
                  <span className="text-zinc-900 text-4xl lg:text-7xl font-extrabold leading-tight lg:leading-[86.40px]">{aboutContent.hero.titleLine1}<br/></span>
                  <span className="text-cyan-700 text-4xl lg:text-7xl font-extrabold leading-tight lg:leading-[86.40px]">{aboutContent.hero.titleHighlight}</span>
                  <span className="text-zinc-900 text-4xl lg:text-7xl font-extrabold leading-tight lg:leading-[86.40px]"> {aboutContent.hero.titleLine2}</span>
                </div>
              </div>
              <div className="w-full lg:max-w-[512px] pt-1.5 flex flex-col justify-start items-start">
                <div className="justify-start text-stone-500 text-lg lg:text-xl font-medium leading-7 whitespace-pre-line">
                  {aboutContent.hero.subtitle}
                </div>
              </div>
              <div className="w-full pt-4 flex flex-col sm:flex-row justify-start items-start gap-4">
                <div className="px-10 py-4 bg-teal-700 rounded-[60px] shadow-[0px_15px_10px_-3px_rgba(10,155,138,0.10)] flex justify-center items-center cursor-pointer hover:bg-teal-800 transition-colors">
                  <div className="justify-start text-white text-xl lg:text-2xl font-semibold leading-8">{aboutContent.hero.primaryButton}</div>
                </div>
                <div className="px-10 py-4 bg-white rounded-[60px] shadow-[0px_15px_10px_-3px_rgba(10,155,138,0.10)] outline outline-[1.63px] outline-teal-700 flex justify-center items-center cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="justify-start text-teal-700 text-xl lg:text-2xl font-semibold leading-8">{aboutContent.hero.secondaryButton}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative shapes background (Hidden on small screens for better reading) */}
          <div className="hidden lg:block w-[590px] h-[590px] absolute right-[-100px] top-0 rounded-full outline outline-[3px] outline-cyan-700 opacity-20 pointer-events-none" />
          <div className="hidden lg:block w-[478px] h-[478px] absolute right-0 top-12 bg-cyan-700 rounded-full outline outline-1 outline-cyan-700 opacity-10 pointer-events-none" />
          
          <div className="w-full lg:w-[600px] aspect-square relative flex justify-center items-center mt-12 lg:mt-0 z-10">
            {/* Thin Dashed Orbital Path */}
            <div className="absolute inset-0 rounded-full border border-dashed border-teal-600/20" />
            
            {/* 5 Specific Icon Badges positioned strictly on the circumference */}
            <div className="absolute top-[-5px] right-[25%] w-10 h-10 bg-teal-800 rounded-full flex justify-center items-center shadow-lg border-2 border-white z-20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <div className="absolute top-[20%] left-[5%] w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-lg border-2 border-teal-600 z-20">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-teal-700 rounded-full flex justify-center items-center shadow-lg border-2 border-white z-20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div className="absolute right-[-10px] top-[40%] w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-lg border-2 border-teal-600 z-20">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            </div>
            <div className="absolute right-[5%] bottom-[15%] w-10 h-10 bg-teal-800 rounded-full flex justify-center items-center shadow-lg border-2 border-white z-20">
               <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" /></svg>
            </div>

            {/* Core Teal Circle */}
            <div className="w-[85%] h-[85%] bg-[#007C7C] rounded-full shadow-2xl relative border-4 border-white flex overflow-hidden">
               {/* Grid Dividers */}
               <div className="absolute inset-0 flex justify-center z-0">
                  <div className="w-px h-full bg-white/20" />
               </div>
               <div className="absolute inset-0 flex items-center z-0">
                  <div className="w-full h-px bg-white/20" />
               </div>

               <div className="grid grid-cols-2 w-full h-full relative z-10">
                  {/* Top Left - Move closer to center (right align) */}
                  <div className="p-4 lg:p-10 flex flex-col justify-end items-end text-right">
                     <div className="text-white text-4xl lg:text-5xl font-bold leading-none">{aboutContent.metrics[0].value}{aboutContent.metrics[0].suffix}</div>
                     <div className="text-white/80 text-[11px] lg:text-[13px] font-medium mt-2 leading-tight tracking-wide max-w-[140px]">{aboutContent.metrics[0].label}</div>
                  </div>
                  {/* Top Right - Move closer to center (left align) */}
                  <div className="p-4 lg:p-10 flex flex-col justify-end items-start text-left">
                     <div className="text-white text-4xl lg:text-5xl font-bold leading-none">{aboutContent.metrics[1].value}{aboutContent.metrics[1].suffix}</div>
                     <div className="text-white/80 text-[11px] lg:text-[13px] font-medium mt-2 leading-tight tracking-wide max-w-[140px]">{aboutContent.metrics[1].label}</div>
                  </div>
                  {/* Bottom Left - Move closer to center (right align) */}
                  <div className="p-4 lg:p-10 flex flex-col justify-start items-end text-right">
                     <div className="text-white text-4xl lg:text-5xl font-bold leading-none">{aboutContent.metrics[2].value}{aboutContent.metrics[2].suffix}</div>
                     <div className="text-white/80 text-[11px] lg:text-[13px] font-medium mt-2 leading-tight tracking-wide max-w-[140px]">{aboutContent.metrics[2].label}</div>
                  </div>
                  {/* Bottom Right - Move closer to center (left align) */}
                  <div className="p-4 lg:p-10 flex flex-col justify-start items-start text-left">
                     <div className="text-white text-4xl lg:text-5xl font-bold leading-none">{aboutContent.metrics[3].value}{aboutContent.metrics[3].suffix}</div>
                     <div className="text-white/80 text-[11px] lg:text-[13px] font-medium mt-2 leading-tight tracking-wide max-w-[140px]">{aboutContent.metrics[3].label}</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="w-full p-6 lg:p-20 flex flex-col justify-center items-center gap-8">
        <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-2 text-center">
          <div className="text-neutral-900 text-4xl lg:text-5xl font-bold leading-tight">{aboutContent.offers.sectionTitle}</div>
          <div className="text-stone-500 text-lg lg:text-xl font-medium leading-7 max-w-2xl">{aboutContent.offers.sectionSubtitle}</div>
        </div>
        
        <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-10">
          {aboutContent.offers.items.map((offer, idx) => (
            <div key={idx} className="bg-white/95 backdrop-blur-md rounded-[32px] p-8 lg:p-10 shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Background Number */}
              <div className="absolute top-4 right-8 text-[120px] font-black text-black/[0.03] leading-none pointer-events-none group-hover:text-black/[0.05] transition-colors">
                {offer.number}
              </div>

              {/* Main Icon Container */}
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex justify-center items-center mb-6 shadow-sm border border-teal-100">
                 {offer.icon === 'user' && <svg className="w-7 h-7 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                 {offer.icon === 'plus' && <svg className="w-7 h-7 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>}
                 {offer.icon === 'office' && <svg className="w-7 h-7 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m4 0h.01" /></svg>}
                 {offer.icon === 'beaker' && <svg className="w-7 h-7 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" /></svg>}
              </div>

              <div className="relative z-10">
                <h3 className="text-zinc-900 text-2xl font-bold mb-2">
                  {offer.target} 
                  <span className="text-teal-700">{offer.highlight}</span>
                </h3>
                <p className="text-neutral-500 text-lg mb-8 max-w-md">{offer.description}</p>
                
                {/* Features with Icons */}
                <div className="flex flex-col gap-4 mb-8">
                  {offer.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 group/feat">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 flex justify-center items-center shrink-0 group-hover/feat:bg-teal-100 transition-colors">
                         {feature.icon === 'calendar' && <span className="text-teal-700 text-sm">📅</span>}
                         {feature.icon === 'shield' && <span className="text-teal-700 text-sm">🛡️</span>}
                         {feature.icon === 'refresh' && <span className="text-teal-700 text-sm">🔄</span>}
                         {feature.icon === 'users' && <span className="text-teal-700 text-sm">👥</span>}
                         {feature.icon === 'sparkles' && <span className="text-teal-700 text-sm">✨</span>}
                         {feature.icon === 'document' && <span className="text-teal-700 text-sm">📄</span>}
                         {feature.icon === 'search' && <span className="text-teal-700 text-sm">🔍</span>}
                         {feature.icon === 'clock' && <span className="text-teal-700 text-sm">🕒</span>}
                         {feature.icon === 'chart' && <span className="text-teal-700 text-sm">📊</span>}
                         {feature.icon === 'cash' && <span className="text-teal-700 text-sm">💰</span>}
                         {feature.icon === 'star' && <span className="text-teal-700 text-sm">⭐</span>}
                         {feature.icon === 'collection' && <span className="text-teal-700 text-sm">📦</span>}
                         {feature.icon === 'microscope' && <span className="text-teal-700 text-sm">🔬</span>}
                         {feature.icon === 'mail' && <span className="text-teal-700 text-sm">✉️</span>}
                      </div>
                      <span className="text-stone-600 text-base font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                  {offer.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-4 py-1.5 bg-teal-50/50 text-teal-800 text-xs font-bold rounded-full border border-teal-100/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patient First Banner Section */}
      <div className="w-full px-6 lg:px-24 py-24 flex flex-col justify-start items-center overflow-visible">
        <div className="w-full max-w-[1280px] bg-gradient-to-r from-[#007074] to-[#018181] rounded-[48px] shadow-2xl relative flex flex-col lg:flex-row items-stretch min-h-[280px] overflow-visible">
          {/* Grounded Doctor/Patient Image */}
          <img 
            className="w-full max-w-[300px] lg:max-w-none lg:w-auto lg:h-[380px] absolute bottom-0 left-0 lg:left-[-30px] z-10 pointer-events-none object-contain block drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)] mb-[-1px]" 
            src={aboutContent.patientFirst.img1} 
            alt="Patient Care" 
          />
          
          {/* Text Content */}
          <div className="flex-1 p-10 lg:p-16 lg:pl-[500px] lg:pr-12 z-0 flex flex-col justify-center items-start gap-4">
            <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight tracking-tight">{aboutContent.patientFirst.title}</h2>
            <p className="text-white/90 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">{aboutContent.patientFirst.description}</p>
          </div>
          
          {/* Popping Rocket Image */}
          <div className="absolute -top-16 -right-12 w-32 lg:w-56 z-20 pointer-events-none">
             <img 
               className="w-full h-auto drop-shadow-2xl rotate-[45deg]" 
               src={aboutContent.patientFirst.img2} 
               alt="Rocket Decor" 
             />
          </div>
        </div>
      </div>

      {/* AI Enablement Section */}
      <div className="w-full p-6 lg:p-20 flex flex-col justify-center items-center gap-8">
        <div className="w-full flex flex-col justify-center items-center gap-2 text-center">
          <div className="text-neutral-900 text-4xl lg:text-5xl font-bold leading-tight">{aboutContent.aiEnablement.title}</div>
          <div className="text-stone-500 text-lg lg:text-xl font-medium leading-7">{aboutContent.aiEnablement.subtitle}</div>
        </div>
        <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          {aboutContent.aiEnablement.roles.map((role, idx) => (
            <div key={idx} className="w-full p-6 lg:p-10 relative bg-white rounded-[48px] shadow-lg outline outline-1 outline-emerald-50 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 overflow-hidden transition-transform hover:-translate-y-1">
               <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-3/5 z-10">
                 <div className="text-zinc-800 text-2xl font-extrabold leading-8">{role.title}</div>
                 <div className="flex flex-col justify-start items-start gap-3">
                   {role.features.map((feat, fIdx) => (
                     <div key={fIdx} className="text-left text-stone-500 text-base lg:text-lg font-medium leading-6 flex gap-2">
                       <span className="text-teal-600 font-bold">•</span> {feat}
                     </div>
                   ))}
                 </div>
               </div>
               <div className="w-full lg:w-2/5 flex justify-center">
                 <img className="w-full max-w-[200px] lg:max-w-full" src={role.img} alt={role.title} />
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* How We Help Section */}
      <div className="w-full p-6 lg:p-20 flex flex-col justify-center items-center gap-8">
        <div className="w-full flex flex-col justify-center items-center gap-2 text-center">
          <div className="text-neutral-900 text-4xl lg:text-5xl font-bold leading-tight">{aboutContent.howWeHelp.title}</div>
          <div className="w-32 lg:w-72 h-1.5 lg:h-2.5 bg-cyan-700 rounded-full mb-4" />
          <div className="text-stone-500 text-lg lg:text-xl font-medium leading-7">
            {aboutContent.howWeHelp.subtitlePrefix}
            <span className="text-cyan-700 font-bold">{aboutContent.howWeHelp.subtitleHighlight}</span>
            {aboutContent.howWeHelp.subtitleSuffix}
          </div>
        </div>

        <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          <div className="w-full p-8 lg:p-10 bg-gray-100 rounded-[48px] flex flex-col justify-start items-start gap-8">
            <div className="flex flex-col gap-2 text-left">
              <div className="text-zinc-800 text-3xl font-extrabold">{aboutContent.howWeHelp.howWeDeliver.title}</div>
              <div className="text-stone-500 text-base font-medium">{aboutContent.howWeHelp.howWeDeliver.subtitle}</div>
            </div>
            <div className="flex flex-col gap-6">
              {aboutContent.howWeHelp.howWeDeliver.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 bg-cyan-700/10 rounded-xl flex justify-center items-center text-2xl">{pt.icon}</div>
                  <div className="flex flex-col gap-1 text-left">
                    <div className="text-zinc-800 text-xl font-bold">{pt.title}</div>
                    <div className="text-stone-500 text-base font-medium">{pt.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full p-8 lg:p-10 bg-gray-100 rounded-[48px] flex flex-col justify-start items-start gap-8">
            <div className="text-zinc-800 text-3xl font-extrabold text-left">{aboutContent.howWeHelp.whatThisMeans.title}</div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
              {[aboutContent.howWeHelp.whatThisMeans.patient, aboutContent.howWeHelp.whatThisMeans.doctor].map((group, idx) => (
                <div key={idx} className="p-6 bg-white rounded-3xl shadow-sm flex flex-col justify-start items-start gap-6 border border-gray-100">
                  <div className="flex flex-col gap-4 text-left">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex justify-center items-center overflow-hidden border-2 border-white shadow-sm">
                      <img src={group.img} alt={group.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-zinc-800 text-xl font-extrabold">{group.title}</div>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    {group.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-3">
                        <div className="w-3.5 h-3.5 bg-teal-700 rounded-sm shrink-0" />
                        <div className="text-stone-500 text-base flex-1 text-left">{pt}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why We Do It Section */}
      <div className="w-full p-6 lg:p-20 flex flex-col justify-center items-center gap-8 bg-slate-100/50">
        <div className="w-full max-w-3xl flex flex-col justify-center items-center gap-4 text-center">
          <div className="text-neutral-900 text-4xl lg:text-5xl font-bold leading-tight">{aboutContent.whyWeDoIt.title}</div>
          <div className="text-stone-500 text-lg lg:text-xl font-medium">
            {aboutContent.whyWeDoIt.subtitlePrefix}
            <span className="text-teal-700 font-bold">{aboutContent.whyWeDoIt.subtitleHighlight}</span>
          </div>
        </div>
        <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {aboutContent.whyWeDoIt.cards.map((card, idx) => (
            <div key={idx} className={`p-8 lg:p-10 relative ${card.bgColor} rounded-[48px] flex flex-col justify-start items-start gap-6 overflow-hidden shadow-xl hover:-translate-y-2 transition-all`}>
               <div className="text-left text-white text-2xl lg:text-3xl font-extrabold z-10">{card.title}</div>
               <div className="text-left text-white/80 text-lg font-semibold leading-relaxed z-10">{card.description}</div>
               <div className="w-40 h-40 absolute bottom-[-40px] right-[-40px] rounded-full border-4 border-white/5 pointer-events-none" />
               <div className="w-60 h-60 absolute bottom-[-60px] right-20 rounded-full border-4 border-white/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full p-6 lg:p-20 flex flex-col justify-center items-center gap-8">
        <div className="w-full max-w-[1280px] relative bg-gradient-to-b from-teal-700 to-cyan-600 rounded-[48px] shadow-2xl border-b-[12px] border-teal-500 overflow-hidden flex flex-col lg:flex-row shadow-teal-700/20">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)] pointer-events-none" />
          
          <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col gap-8 z-10 text-left">
            <div className="flex flex-col gap-3">
              <div className="text-white text-5xl lg:text-7xl font-extrabold leading-tight">{aboutContent.contact.title}</div>
              <div className="text-white/90 text-lg font-medium">{aboutContent.contact.description}</div>
            </div>
            
            <div className="flex flex-col gap-5 w-full max-w-md">
              <div className="flex flex-col gap-2">
                <label className="text-white font-medium text-lg">Full name</label>
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="w-full px-4 py-3 bg-white/95 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-white font-medium text-lg">Email</label>
                  <input 
                    type="email" 
                    placeholder="you@company.com" 
                    className="w-full px-4 py-3 bg-white/95 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-white font-medium text-lg">Phone number</label>
                  <div className="flex w-full bg-white/95 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-cyan-300">
                    <span className="px-3 py-3 bg-gray-100 text-gray-600 border-r border-gray-200">IN</span>
                    <input 
                      type="tel" 
                      placeholder="+91 000 000-0000" 
                      className="w-full px-3 py-3 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 py-4 bg-black text-white rounded-2xl font-semibold text-lg hover:bg-gray-900 transition-colors shadow-lg">
                {aboutContent.contact.button}
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-end p-0 lg:px-10 lg:pt-10 lg:pb-0 z-10 mt-10 lg:mt-0">
            <img className="w-full max-w-sm lg:max-w-md object-contain" src={aboutContent.contact.img} alt="Contact hero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
