import React, { useState } from 'react';
import { aboutContent } from '../constants/aboutContent';

function About() {
  return (
    <div className="w-full relative flex flex-col justify-start items-center overflow-x-hidden bg-[#F7F9FB]">
      {/* Hero Section */}
      <div className="w-full relative flex justify-center items-center pt-4 lg:pt-8 pb-10 lg:pb-16 px-6 lg:px-20 overflow-hidden">
        <div className="w-full max-w-[1440px] flex flex-col justify-start items-center gap-10 lg:gap-12 relative z-10">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-[648px] flex flex-col justify-start items-center lg:items-start gap-6 lg:gap-8">
              <div className="self-stretch flex flex-col justify-start items-center lg:items-start gap-4 lg:gap-6">
                <div className="px-4 py-1.5 bg-primary/10 rounded-full inline-flex justify-start items-start">
                  <div className="text-primary text-xs font-bold font-['Manrope'] uppercase leading-4 tracking-wider">
                    {aboutContent.hero.badge}
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center lg:items-start">
                  <h1 className="text-zinc-900 text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Manrope'] leading-tight lg:leading-[72px] text-center lg:text-left">
                    We exist to bring<br/>
                    <span className="text-primary">trust</span> back into<br/>
                    healthcare.
                  </h1>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center lg:items-start">
                  <p className="max-w-[520px] text-stone-500 text-base md:text-lg font-medium font-['Manrope'] leading-6 text-center lg:text-left">
                    {aboutContent.hero.subtitle}
                  </p>
                </div>
              </div>
              <div className="self-stretch pt-2 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                <button className="px-8 py-3.5 bg-primary rounded-[45px] shadow-lg flex justify-center items-center gap-2 hover:bg-primary-dark transition-all text-white text-base lg:text-lg font-semibold font-['Manrope'] leading-6">
                  {aboutContent.hero.primaryButton}
                </button>
                <button className="px-8 py-3.5 bg-white rounded-[45px] shadow-lg border-2 border-primary flex justify-center items-center gap-2 hover:bg-slate-50 transition-all text-primary text-base lg:text-lg font-semibold font-['Manrope'] leading-6">
                  {aboutContent.hero.secondaryButton.replace(' →', '')}
                </button>
              </div>
            </div>

            {/* Right Content - Rotated Image Card */}
            <div className="w-full lg:w-[500px] flex justify-center lg:justify-end items-center">
              <div className="w-full max-w-[440px] aspect-[1.2] p-4 origin-center rotate-[-4deg] bg-stone-50 rounded-[32px] shadow-2xl border border-teal-600/10 flex justify-center items-center">
                <img 
                  className="w-full h-full object-cover rounded-2xl" 
                  src={aboutContent.hero.img} 
                  alt="Zudoc Story"
                />
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="w-full bg-white/80 backdrop-blur-lg grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 py-8 border-t border-gray-100">
            {aboutContent.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col justify-start items-center gap-2 text-center px-4">
                <div className="text-primary text-2xl lg:text-4xl font-bold font-['Manrope'] leading-none">
                  {metric.value}{metric.suffix}
                </div>
                <div className="max-w-[180px] opacity-60 text-black text-xs lg:text-sm font-normal font-['Manrope'] leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="self-stretch px-6 lg:px-20 py-16 lg:py-24 bg-[#F9FAFB] flex flex-col justify-center items-center gap-12 lg:gap-16">
        <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-4 text-center">
          <h2 className="text-zinc-900 text-4xl lg:text-5xl font-bold font-['Manrope'] leading-tight">
            {aboutContent.offers.sectionTitle}
          </h2>
          <p className="text-stone-500 text-lg lg:text-xl font-medium font-['Manrope'] leading-relaxed max-w-3xl">
            {aboutContent.offers.sectionSubtitle}
          </p>
        </div>

        <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {aboutContent.offers.items.map((offer, idx) => {

            const bgClass = idx === 0 
              ? 'bg-white' 
              : idx === 1 
              ? 'bg-[#EEF7F7]' 
              : idx === 2 
              ? 'bg-white lg:bg-[#EEF7F7]' 
              : 'bg-[#EEF7F7] lg:bg-white';

            const outlineClass = idx === 0 
              ? 'outline-emerald-50' 
              : idx === 1 
              ? 'outline-white' 
              : idx === 2 
              ? 'outline-emerald-50 lg:outline-white' 
              : 'outline-white lg:outline-emerald-50';

            return (
              <div 
                key={idx} 
                className={`flex-1 p-8 lg:p-10 relative ${bgClass} rounded-[48px] shadow-lg outline outline-1 outline-offset-[-1px] ${outlineClass} flex flex-col justify-start items-start gap-6 transition-all duration-300 hover:shadow-xl group`}
              >
                {/* Background Number */}
                <div className="right-10 top-6 absolute flex flex-col justify-start items-start pointer-events-none select-none">
                  <div className="text-zinc-900/5 text-8xl lg:text-[100px] font-extrabold font-['Manrope'] leading-none">
                    {offer.number}
                  </div>
                </div>

                {/* Main Icon Container */}
                <div className="w-16 h-16 bg-teal-700/10 rounded-2xl flex justify-center items-center relative z-10">
                  {offer.icon === 'user' && (
                    <svg className="w-8 h-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  {offer.icon === 'plus' && (
                    <svg className="w-8 h-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                  {offer.icon === 'office' && (
                    <svg className="w-8 h-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m4 0h.01" />
                    </svg>
                  )}
                  {offer.icon === 'beaker' && (
                    <svg className="w-8 h-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                    </svg>
                  )}
                </div>

                {/* Content Area */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2 relative z-10">
                  <h3 className="text-zinc-900 text-2xl lg:text-3xl font-bold font-['Manrope'] leading-tight">
                    {offer.target}
                    <span className="text-teal-700 ml-1">{offer.highlight}</span>
                  </h3>
                  <p className="self-stretch text-neutral-400 text-base lg:text-lg font-medium font-['Manrope'] leading-relaxed max-w-[440px]">
                    {offer.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="flex flex-col justify-start items-start gap-4 relative z-10 mt-2">
                  {offer.features.map((feat, fIdx) => (
                    <div key={fIdx} className="inline-flex justify-start items-center gap-3 group/feat">
                      <div className="w-6 h-6 flex justify-center items-center">
                        {feat.icon === 'calendar' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                        {feat.icon === 'shield' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        )}
                        {feat.icon === 'refresh' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        )}
                        {feat.icon === 'users' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                        {feat.icon === 'sparkles' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                          </svg>
                        )}
                        {feat.icon === 'document' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        )}
                        {feat.icon === 'search' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        )}
                        {feat.icon === 'clock' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {feat.icon === 'chart' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        )}
                        {feat.icon === 'cash' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {feat.icon === 'star' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        )}
                        {feat.icon === 'collection' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        )}
                        {feat.icon === 'microscope' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        )}
                        {feat.icon === 'mail' && (
                          <svg className="w-5 h-5 text-teal-700/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                      <span className="text-stone-500 text-lg font-medium font-['Manrope'] leading-6 group-hover/feat:text-teal-700 transition-colors">
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags Section */}
                <div className="self-stretch flex flex-wrap justify-start items-center gap-2 mt-auto pt-6 border-t border-gray-100/50 relative z-10">
                  {offer.tags.map((tag, tIdx) => (
                    <div 
                      key={tIdx} 
                      className="px-4 py-1.5 bg-teal-500/10 rounded-full border border-teal-500/5 group-hover:bg-teal-500/15 transition-colors"
                    >
                      <span className="text-teal-700 text-sm font-bold font-['Manrope'] leading-tight">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Patient First Banner Section */}
      <div className="w-full px-6 lg:px-24 py-24 flex flex-col justify-start items-center overflow-visible">
        <div className="w-full max-w-[1280px] bg-gradient-to-r from-[#007074] to-[#018181] rounded-[48px] shadow-2xl relative flex flex-col lg:flex-row items-stretch min-h-[280px] overflow-visible">
          {/* Grounded Doctor/Patient Image */}
          <img 
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none lg:w-auto lg:h-[380px] absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[-30px] z-10 pointer-events-none object-contain block drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)] mb-[-1px]" 
            src={aboutContent.patientFirst.img1} 
            alt="Patient Care" 
          />
          
          {/* Text Content */}
          <div className="flex-1 px-8 pt-10 pb-[220px] sm:pb-[260px] lg:p-16 lg:pb-16 lg:pl-[460px] xl:pl-[500px] lg:pr-12 z-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4">
            <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight tracking-tight">{aboutContent.patientFirst.title}</h2>
            <p className="text-white/90 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">{aboutContent.patientFirst.description}</p>
          </div>
          
          {/* Popping Rocket Image */}
          <div className="absolute -top-12 sm:-top-16 -right-6 sm:-right-12 w-24 sm:w-32 lg:w-56 z-20 pointer-events-none">
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
                  <div className="w-16 h-16 shrink-0 bg-white shadow-sm rounded-xl overflow-hidden flex justify-center items-center border border-gray-100">
                    <img src={pt.img} alt={pt.title} className="w-full h-full object-cover" />
                  </div>
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
                        <div className="w-5 h-5 bg-primary rounded-full flex justify-center items-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
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

      {/* What We Do Section */}
      <div className="w-full min-h-[812px] py-16 lg:py-24 px-6 lg:px-20 flex flex-col justify-center items-center gap-12 lg:gap-16 bg-slate-50/50">
        <div className="w-full max-w-4xl flex flex-col justify-center items-center gap-4 text-center">
          <div className="self-stretch flex flex-col justify-start items-center">
            <h2 className="text-zinc-900 text-4xl lg:text-5xl font-bold font-['Manrope'] leading-tight lg:leading-[58.80px]">
              {aboutContent.whatWeDo.title}
            </h2>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center">
            <p className="text-stone-500 text-lg lg:text-xl font-medium font-['Manrope'] leading-7">
              {aboutContent.whatWeDo.subtitlePrefix} 
              <span className="text-teal-700">{aboutContent.whatWeDo.subtitleHighlight}</span>
            </p>
          </div>
        </div>

        {/* Core Values Card */}
        <div className="w-full max-w-[1280px] p-8 lg:p-12 bg-gradient-to-b from-teal-700 to-cyan-600 rounded-[40px] shadow-2xl border-b-[12px] lg:border-b-[19px] border-cyan-800/30 flex flex-col justify-start items-start gap-8 lg:gap-10">
          <div className="self-stretch flex flex-col justify-center items-center gap-2 text-center">
            <h3 className="text-white text-3xl lg:text-4xl font-extrabold font-['Manrope'] leading-tight lg:leading-10">
              {aboutContent.whatWeDo.coreValues.title}
            </h3>
            <p className="text-white/90 text-lg lg:text-xl font-semibold font-['Manrope'] leading-7">
              {aboutContent.whatWeDo.coreValues.description}
            </p>
          </div>
          
          <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {aboutContent.whatWeDo.coreValues.items.map((item, idx) => (
              <div key={idx} className="flex-1 min-h-[280px] p-6 lg:p-10 bg-white rounded-3xl flex flex-col justify-center items-center gap-6 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-teal-600/5 hover:border-teal-600/20">
                <div className="w-20 h-20 relative shrink-0">
                  <div className="w-20 h-20 left-0 top-0 absolute bg-teal-50 rounded-full group-hover:scale-110 transition-transform duration-500" />
                  <div className="w-16 h-16 left-[8px] top-[8px] absolute overflow-hidden flex items-center justify-center">
                    {/* People First Icon */}
                    {item.icon === 'people' && (
                      <svg className="w-10 h-10 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {/* Transparency Icon */}
                    {item.icon === 'transparency' && (
                      <svg className="w-10 h-10 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                    {/* Smart Care Icon */}
                    {item.icon === 'smart' && (
                      <svg className="w-10 h-10 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {/* Reliability Icon */}
                    {item.icon === 'reliable' && (
                      <svg className="w-10 h-10 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center gap-3 text-center">
                  <div className="text-zinc-800 text-xl lg:text-2xl font-bold font-['Manrope'] leading-tight group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-stone-500 text-sm lg:text-base font-semibold font-['Manrope'] leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="p-8 lg:p-12 relative bg-[var(--Secondary,#3a86ff)] rounded-[40px] flex flex-col justify-start items-start gap-6 overflow-hidden shadow-xl hover:-translate-y-1 transition-transform group">
            <div className="self-stretch flex flex-col justify-start items-start">
              <h3 className="text-white text-3xl font-extrabold font-['Manrope'] leading-10">
                {aboutContent.whatWeDo.mission.title}
              </h3>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <p className="text-white/90 text-lg lg:text-xl font-semibold font-['Manrope'] leading-relaxed max-w-md">
                {aboutContent.whatWeDo.mission.description}
              </p>
            </div>
            {/* Decorative Orbs */}
            <div className="w-40 h-40 absolute bottom-[-40px] right-[-40px] rounded-full border-2 border-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div className="w-60 h-60 absolute bottom-[-60px] right-20 rounded-full border-2 border-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700 delay-100" />
          </div>

          {/* Vision Card */}
          <div className="p-8 lg:p-12 relative bg-teal-600 rounded-[40px] flex flex-col justify-start items-start gap-6 overflow-hidden shadow-xl hover:-translate-y-1 transition-transform group">
            <div className="self-stretch flex flex-col justify-start items-start">
              <h3 className="text-white text-3xl font-extrabold font-['Manrope'] leading-10">
                {aboutContent.whatWeDo.vision.title}
              </h3>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <p className="text-white/90 text-lg lg:text-xl font-semibold font-['Manrope'] leading-relaxed max-w-md">
                {aboutContent.whatWeDo.vision.description}
              </p>
            </div>
            {/* Decorative Orbs */}
            <div className="w-40 h-40 absolute bottom-[-40px] right-[-40px] rounded-full border-2 border-white/10 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div className="w-60 h-60 absolute bottom-[-60px] right-20 rounded-full border-2 border-white/10 pointer-events-none group-hover:scale-110 transition-transform duration-700 delay-100" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full relative flex justify-center items-center py-12 lg:py-24 px-6 lg:px-20">
        <div className="w-full max-w-[1280px] min-h-[570px] relative bg-gradient-to-b from-primary to-primary-light rounded-[48px] lg:rounded-[67px] shadow-2xl border-b-[12px] lg:border-b-[19px] border-primary-dark/80 overflow-hidden flex flex-col lg:flex-row shadow-[0px_23px_47px_-11px_rgba(0,0,0,0.25)]">
          {/* Main Content Area */}
          <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-start items-start gap-8 z-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold font-['Manrope'] leading-tight lg:leading-[86.40px]">
                {aboutContent.contact.title}
              </h2>
              <p className="text-white text-base lg:text-lg font-normal font-['Manrope'] opacity-90">
                {aboutContent.contact.description}
              </p>
            </div>

            {/* Contact Form with splash logic */}
            {/** Splash state logic **/}
            {(() => {
              const [splash, setSplash] = React.useState(false);
              const [form, setForm] = React.useState({
                Name: '',
                Email: '',
                Phone: '',
                // Name_Last: '',
                // Message: '',
              });
              const [submitting, setSubmitting] = React.useState(false);

              const handleChange = (e) => {
                const { name, value } = e.target;
                setForm((prev) => ({ ...prev, [name]: value }));
              };

              const handleSubmit = async (e) => {
                e.preventDefault();
                setSubmitting(true);
                // Prepare Zoho field mapping
                const data = new FormData();
                data.append('Name_First', form.Name);
                data.append('Email', form.Email);
                data.append('PhoneNumber_countrycodeval', form.Phone);
                // data.append('Name_Last', form.Name_Last); // Commented out
                // data.append('MultiLine', form.Message); // Commented out
                // Required hidden fields
                data.append('zf_referrer_name', '');
                data.append('zf_redirect_url', '');
                data.append('zc_gad', '');
                try {
                  await fetch('https://forms.zohopublic.in/krishnarajsrzu1/form/WebsiteEnquiry/formperma/ruyJnu0Z1RIc6Y76unkRYJaaNseOuaJM55SXLYO9Xo4/htmlRecords/submit', {
                    method: 'POST',
                    body: data,
                    mode: 'no-cors',
                  });
                  setSplash(true);
                } catch (err) {
                  setSplash(true); // fallback: show splash even on error
                }
                setSubmitting(false);
              };

              if (splash) {
                return (
                  <div className="w-full flex flex-col items-center justify-center py-16">
                    <div className="text-white text-3xl lg:text-4xl font-bold mb-4">Thank you!</div>
                    <div className="text-white text-lg">Your enquiry has been submitted. We will get in touch soon.</div>
                  </div>
                );
              }

              return (
                <form className="w-full flex flex-col gap-6 lg:gap-8" onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-white text-lg font-normal font-['Manrope'] tracking-tight">Full name</label>
                    <div className="w-full px-4 py-3 bg-white/90 rounded-xl shadow-sm border border-gray-300 flex items-center">
                      <input
                        type="text"
                        name="Name"
                        maxLength="255"
                        placeholder="Full name"
                        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm font-normal font-['Manrope']"
                        value={form.Name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Last Name (commented out) */}
                  {false && (
                    <div className="w-full flex flex-col gap-2">
                      <label className="text-white text-lg font-normal font-['Manrope'] tracking-tight">Last Name</label>
                      <div className="w-full px-4 py-3 bg-white/90 rounded-xl shadow-sm border border-gray-300 flex items-center">
                        <input
                          type="text"
                          name="Name_Last"
                          maxLength="255"
                          placeholder="Last name"
                          className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm font-normal font-['Manrope']"
                          value={form.Name_Last}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}

                  {/* Email */}
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-white text-lg font-normal font-['Manrope'] tracking-tight">Email</label>
                    <div className="w-full px-4 py-3 bg-white/90 rounded-xl shadow-sm border border-gray-300 flex items-center">
                      <input
                        type="email"
                        name="Email"
                        maxLength="255"
                        placeholder="you@company.com"
                        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm font-normal font-['Manrope']"
                        value={form.Email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-white text-lg font-normal font-['Manrope'] tracking-tight">Phone number</label>
                    <div className="w-full px-4 py-3 bg-white/90 rounded-xl shadow-sm border border-gray-300 flex items-center">
                      <input
                        type="text"
                        name="Phone"
                        maxLength="20"
                        placeholder="Phone number"
                        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm font-normal font-['Manrope']"
                        value={form.Phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Message (commented out) */}
                  {false && (
                    <div className="w-full flex flex-col gap-2">
                      <label className="text-white text-lg font-normal font-['Manrope'] tracking-tight">Any messages for us?</label>
                      <div className="w-full px-4 py-3 bg-white/90 rounded-xl shadow-sm border border-gray-300 flex items-center">
                        <textarea
                          name="Message"
                          maxLength="65535"
                          placeholder=""
                          className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm font-normal font-['Manrope']"
                          value={form.Message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-14 bg-black text-white rounded-2xl font-semibold text-lg hover:bg-gray-900 transition-all shadow-lg flex justify-center items-center group"
                    disabled={submitting}
                  >
                    <span className="[text-shadow:_0px_3px_3px_rgba(255,255,255,0.1)]">{submitting ? 'Submitting...' : 'Submit'}</span>
                  </button>
                </form>
              );
            })()}
          </div>

          {/* Image Container */}
          <div className="w-full lg:w-2/5 relative flex justify-center items-end p-0 mt-8 lg:mt-0 z-0">
            <img 
              className="w-full max-w-[320px] lg:max-w-[400px] h-auto object-contain lg:absolute lg:right-[10%] lg:bottom-0" 
              src={aboutContent.contact.img} 
              alt="Get in touch" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
