import React, { useState } from 'react';
import { patientContent } from '../constants/patientContent';

function Patient() {
  const { hero, familyEcosystem } = patientContent;
  const [activeJourney, setActiveJourney] = useState('opd');
  return (
    <main className="w-full relative flex flex-col items-center overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[120px] -z-10 animate-pulse" />
  <div className="self-stretch p-2.5 flex flex-col justify-center items-center gap-2.5">
    <div className="w-full max-w-[1280px] p-4 md:p-10 rounded-[32px] md:rounded-[48px] flex flex-col justify-start items-start overflow-hidden">
      <div className="self-stretch rounded-[32px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
        <div className="flex flex-col justify-start items-center lg:items-start gap-6">
          <div className="flex flex-col justify-start items-start">
            <div className="w-full max-w-[456px] text-center lg:text-left"><span className="text-cyan-700 text-3xl md:text-5xl lg:text-6xl font-extrabold font-['Manrope'] leading-[36px] md:leading-[50px] lg:leading-[60px]">{hero.titleLines[0].text}<br/></span><span className="text-neutral-800 text-3xl md:text-5xl lg:text-6xl font-extrabold font-['Manrope'] leading-[36px] md:leading-[50px] lg:leading-[60px]">{hero.titleLines[1].text}<br/></span><span className="text-cyan-700 text-3xl md:text-5xl lg:text-6xl font-extrabold font-['Manrope'] leading-[36px] md:leading-[50px] lg:leading-[60px]">{hero.titleLines[2].text}</span></div>
          </div>
          <div className="w-full max-w-md flex flex-col justify-start items-start">
            <div className="text-center lg:text-left text-stone-500 text-base md:text-xl font-medium font-['Manrope'] leading-6 md:leading-7 mt-2">{hero.description}</div>
          </div>
          <div className="pt-4 inline-flex justify-start items-start gap-4">
            <button className="px-7 py-3 bg-teal-700 rounded-[45px] shadow-[0px_11.25px_7.500000476837158px_-2.25px_rgba(10,155,138,0.10)] outline outline-[1.22px] outline-offset-[-1.22px] flex justify-center items-center gap-2 overflow-hidden hover:opacity-90 transition-opacity">
              <span className="text-white text-lg font-semibold font-['Manrope'] leading-6 [text-shadow:_0px_3px_3px_rgb(238_238_238_/_0.25)]">{hero.buttonText}</span>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[576px] h-64 md:h-96 relative">
          <img className="w-full lg:w-[721.45px] h-64 md:h-96 left-0 lg:left-[-120px] top-[10px] absolute object-contain" src={hero.placeholderImage} alt="Hero illustration" />
        </div>
      </div>
    </div>
  </div>
  <div className="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 py-10 lg:py-20 flex flex-col justify-center items-center gap-8">
    <div className="self-stretch flex flex-col justify-center items-center gap-2">
      <div className="self-stretch flex flex-col justify-center items-center gap-1">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="text-center justify-center text-neutral-900 text-2xl md:text-4xl lg:text-5xl font-bold font-['Manrope'] leading-tight lg:leading-[58.80px]">All Your Family’s Health, In One Place</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-center">
        <div className="justify-start text-stone-500 text-base md:text-xl font-medium font-['Manrope'] leading-6 md:leading-7 text-center">Easily manage health records for your loved ones—even your pets.</div>
      </div>
    </div>
    <div className="self-stretch flex flex-col lg:flex-row justify-start items-stretch gap-6 lg:gap-20">
      <div className="w-full lg:w-96 p-6 md:p-8 bg-teal-100 rounded-[24px] md:rounded-[32px] shadow-[0px_10px_30px_0px_rgba(0,128,128,0.10)] outline outline-1 outline-offset-[-1px] outline-emerald-50 flex flex-col justify-start items-start gap-5">
        <div className="w-14 flex flex-col justify-start items-start">
          <div className="w-14 h-14 bg-emerald-800/10 rounded-2xl inline-flex justify-center items-center">
            <div className="inline-flex flex-col justify-start items-start">
              <div className="w-7 h-5 bg-emerald-800" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="text-center justify-center text-zinc-800 text-2xl md:text-3xl font-extrabold font-['Manrope'] leading-8 md:leading-10">Set Up Your Account</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-start text-stone-500 text-base md:text-xl font-medium font-['Manrope'] leading-6 md:leading-7">It only takes a few seconds to get started</div>
          </div>
        </div>
      </div>
      <div className="flex-1 pb-7 inline-flex flex-col justify-start items-start gap-4">
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="text-center justify-center text-cyan-700 text-2xl md:text-3xl font-extrabold font-['Manrope'] leading-8 md:leading-10">Your Family Ecosystem</div>
          <div className="justify-start text-stone-500 text-base md:text-xl font-medium font-['Manrope'] leading-6 md:leading-7">Include your parents, partner, kids—and even your pets 🐾</div>
        </div>
        <div className="self-stretch grid grid-cols-2 md:grid-cols-3 lg:flex justify-start items-start gap-4 md:gap-6">
          {familyEcosystem.members.map((member) => (
            <div key={member.id} className="flex-1 p-4 bg-white rounded-2xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex flex-col justify-start items-center gap-2">
              <div className={`w-20 h-20 relative rounded-xl shadow-[0px_0px_0px_2px_rgba(236,238,240,1.00)] overflow-hidden flex justify-center items-center`}>
                <img src={member.image} alt={member.role} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-start items-center mt-1">
                <div className="justify-center text-zinc-800 text-base font-bold font-['Manrope'] leading-6">{member.role}</div>
                <div className="justify-center text-stone-500 text-sm font-medium font-['Manrope'] leading-5">{member.name}</div>
              </div>
            </div>
          ))}
          <div className="flex-1 self-stretch p-4 bg-white rounded-2xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col justify-start items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
            <div className="pt-2 flex flex-col justify-start items-start">
              <div className="justify-center text-neutral-400 text-base font-bold font-['Manrope'] leading-6">Add Member</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 py-10 lg:py-20 flex flex-col justify-center items-center gap-8">
    <div className="self-stretch flex flex-col justify-center items-center gap-2">
      <div className="self-stretch flex flex-col justify-center items-center gap-1">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="text-center justify-center text-neutral-900 text-2xl md:text-4xl lg:text-5xl font-bold font-['Manrope'] leading-tight lg:leading-[58.80px]">Your Care Journey</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-center">
        <div className="justify-start text-stone-500 text-base md:text-xl font-medium font-['Manrope'] leading-6 md:leading-7">Track every step of your hospital stay.</div>
      </div>
    </div>
    <div className="w-full max-w-[494px] p-2 bg-gray-100 rounded-full outline outline-1 outline-offset-[-1px] outline-cyan-700 inline-flex justify-start items-start gap-1">
      <div 
        onClick={() => setActiveJourney('opd')}
        className={`flex-1 h-10 px-8 py-4 cursor-pointer relative ${activeJourney === 'opd' ? 'bg-cyan-700 rounded-[999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)]' : 'rounded-full'} inline-flex flex-col justify-center items-center transition-all`}
      >
        {activeJourney === 'opd' && <div className="w-full h-full left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)]" />}
        <div className={`text-center justify-center text-base ${activeJourney === 'opd' ? 'text-white font-bold' : 'text-zinc-700 font-semibold'} font-['Manrope'] leading-5`}>OPD Journey</div>
      </div>
      <div 
        onClick={() => setActiveJourney('ipd')}
        className={`flex-1 h-10 px-8 py-4 cursor-pointer relative ${activeJourney === 'ipd' ? 'bg-cyan-700 rounded-[999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)]' : 'rounded-full'} inline-flex flex-col justify-center items-center transition-all`}
      >
        {activeJourney === 'ipd' && <div className="w-full h-full left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)]" />}
        <div className={`text-center justify-center text-base ${activeJourney === 'ipd' ? 'text-white font-bold' : 'text-zinc-700 font-semibold'} font-['Manrope'] leading-5`}>IPD Journey</div>
      </div>
    </div>
    {activeJourney === 'ipd' && (
    <div className="self-stretch flex flex-col justify-start items-start gap-6 animate-fade-in">
      <div className="w-full max-w-[1280px] p-4 md:p-8 bg-white rounded-[24px] md:rounded-[32px]">

        {/* Mobile: Vertical Timeline */}
        <div className="flex flex-col gap-0 md:hidden">
          {[
            { day: 'Day 1', title: 'Ward Admission', subtitle: 'Room allocation', active: true, current: false,
              icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg> },
            { day: 'Day 2-3', title: 'Daily Monitoring', subtitle: 'Vitals & observations', active: true, current: false,
              icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
            { day: 'Day 3-5', title: 'Treatment', subtitle: 'Procedures & medications', active: true, current: true,
              icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg> },
            { day: 'Day 6', title: 'Recovery', subtitle: 'Progress assessment', active: false, current: false,
              icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> },
            { day: 'Day 7', title: 'Discharge', subtitle: 'Final checkup & release', active: false, current: false,
              icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
          ].map((step, idx, arr) => (
            <div key={idx} className="flex items-stretch gap-4">
              {/* Left: Icon + Connector Line */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${step.current ? 'bg-teal-600 ring-4 ring-teal-100 shadow-lg' : step.active ? 'bg-teal-600 shadow-md' : 'bg-white border-2 border-slate-300'}`}>
                  {step.active && (
                    <div className="absolute -top-1 -right-1 p-0.5 bg-white rounded-full">
                      <div className="w-3 h-3 bg-teal-600 rounded-full flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    </div>
                  )}
                  {step.icon}
                </div>
                {idx < arr.length - 1 && (
                  <div className={`w-0.5 flex-1 min-h-[32px] ${step.active ? 'bg-teal-600' : 'bg-slate-200'}`} />
                )}
              </div>
              {/* Right: Text Content */}
              <div className="pb-6 pt-1.5">
                <div className={`text-xs font-bold font-['Manrope'] mb-0.5 ${step.current ? 'text-teal-600' : 'text-neutral-400'}`}>{step.day}</div>
                <div className={`text-base font-bold font-['Manrope'] leading-5 ${step.current ? 'text-teal-600' : step.active ? 'text-slate-800' : 'text-neutral-400'}`}>{step.title}</div>
                <div className="text-sm text-neutral-400 font-medium font-['Manrope'] mt-0.5">{step.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Original Horizontal Timeline */}
        <div className="hidden md:block relative">
          <div className="w-full h-0.5 left-0 top-[76px] absolute bg-slate-200" />
          <div className="w-1/2 h-0.5 left-0 top-[76px] absolute bg-teal-600" />
          <div className="flex justify-between items-center">
        <div className="w-36 h-44 inline-flex flex-col justify-between items-center">
          <div className="pb-2 flex flex-col justify-start items-start">
            <div className="justify-center text-neutral-400 text-sm font-bold font-['Manrope'] leading-5">Day 1</div>
          </div>
          <div className="w-14 h-14 relative z-10 bg-teal-600 rounded-full inline-flex justify-center items-center">
            <div className="w-14 h-14 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg" />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
            <div className="p-0.5 left-[40px] top-[-4px] absolute bg-white rounded-full inline-flex flex-col justify-start items-start">
              <div className="p-0.5 bg-teal-600 rounded-full flex flex-col justify-start items-start">
                <div className="w-3 h-3 relative overflow-hidden">
                  <div className="w-1.5 h-[5px] left-[2.50px] top-[3.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center gap-2">
            <div className="self-stretch flex flex-col justify-center items-center">
              <div className="justify-center text-slate-800 text-lg font-bold font-['Manrope'] leading-5">Ward Admission</div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="text-center justify-center text-neutral-400 text-sm font-medium font-['Manrope'] leading-5">Room allocation</div>
            </div>
          </div>
        </div>
        <div className="w-36 h-44 inline-flex flex-col justify-between items-center">
          <div className="pb-2 flex flex-col justify-start items-start">
            <div className="justify-center text-neutral-400 text-sm font-bold font-['Manrope'] leading-5">Day 2-3</div>
          </div>
          <div className="w-14 h-14 relative z-10 bg-teal-600 rounded-full inline-flex justify-center items-center">
            <div className="w-14 h-14 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg" />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <div className="p-0.5 left-[40px] top-[-4px] absolute bg-white rounded-full inline-flex flex-col justify-start items-start">
              <div className="p-0.5 bg-teal-600 rounded-full flex flex-col justify-start items-start">
                <div className="w-3 h-3 relative overflow-hidden">
                  <div className="w-1.5 h-[5px] left-[2.50px] top-[3.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center gap-2">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-slate-800 text-lg font-bold font-['Manrope'] leading-5">Daily Monitoring</div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="text-center justify-center text-neutral-400 text-sm font-medium font-['Manrope'] leading-5">Vitals &amp; observations</div>
            </div>
          </div>
        </div>
        <div className="w-44 h-44 inline-flex flex-col justify-between items-center">
          <div className="flex flex-col justify-start items-start">
            <div className="justify-center text-teal-600 text-sm font-bold font-['Manrope'] leading-5">Day 3-5</div>
          </div>
          <div className="w-20 h-20 relative z-10">
            <div className="w-20 h-20 left-0 top-[-0.21px] absolute bg-teal-600 rounded-full outline outline-4 outline-offset-[-4px] outline-teal-100 inline-flex justify-center items-center">
              <div className="w-20 h-20 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-1">
            <div className="flex flex-col justify-start items-start">
              <div className="justify-center text-teal-600 text-lg font-bold font-['Manrope'] leading-6">Treatment</div>
            </div>
            <div className="text-center justify-center text-neutral-400 text-sm font-medium font-['Manrope'] leading-5">Procedures &amp; medications</div>
          </div>
        </div>
        <div className="w-36 h-44 inline-flex flex-col justify-between items-center">
          <div className="pb-2 flex flex-col justify-start items-start">
            <div className="justify-center text-neutral-400 text-sm font-bold font-['Manrope'] leading-5">Day 6</div>
          </div>
          <div className="w-14 h-14 bg-white relative z-10 rounded-full outline outline-2 outline-offset-[-2px] outline-slate-300 inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-400 absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </div>
          <div className="w-20 flex flex-col justify-start items-center gap-2">
            <div className="text-center justify-center text-neutral-400 text-lg font-bold font-['Manrope'] leading-6">Recovery</div>
          </div>
          <div className="w-36 flex flex-col justify-start items-center gap-2">
            <div className="text-center justify-center text-neutral-400 text-sm font-medium font-['Manrope'] leading-5">Progress assessment</div>
          </div>
        </div>
        <div className="w-36 h-44 inline-flex flex-col justify-between items-center">
          <div className="pb-2 flex flex-col justify-start items-start">
            <div className="justify-center text-neutral-400 text-sm font-bold font-['Manrope'] leading-5">Day 7</div>
          </div>
          <div className="w-14 h-14 bg-white relative z-10 rounded-full outline outline-2 outline-offset-[-2px] outline-slate-300 inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-400 absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <div className="w-40 flex flex-col justify-start items-center gap-2">
            <div className="flex flex-col justify-start items-start">
              <div className="text-center justify-center text-neutral-400 text-lg font-bold font-['Manrope'] leading-6">Discharge</div>
            </div>
            <div className="text-center justify-center text-neutral-400 text-sm font-medium font-['Manrope'] leading-5">Final checkup &amp; release</div>
          </div>
        </div>
          </div>
        </div>
      </div>
      <div className="self-stretch p-4 md:p-8 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col justify-start items-start gap-4 md:gap-8 overflow-hidden">
        <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-4 md:gap-8">
          <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 bg-teal-100 rounded-2xl flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-600 absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="w-24 h-7 justify-center text-slate-800 text-xl font-bold font-['Manrope'] leading-7">Treatment</div>
              </div>
              <div className="px-2 py-0.5 bg-teal-100 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-200 flex justify-start items-center gap-1">
                <div className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                <div className="w-14 h-3.5 justify-center text-teal-600 text-[10px] font-bold font-['Manrope'] leading-4">In Progress</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-slate-500 text-sm font-medium font-['Manrope'] leading-5">Day 3 - Day 5</div>
            </div>
            <div className="w-full max-w-[672px] pt-2.5 pb-[0.75px] flex flex-col justify-start items-start">
              <div className="w-full justify-center text-slate-600 text-sm font-normal font-['Manrope'] leading-6">Your treatment plan is being executed with planned procedures, medications, and regular doctor visits.</div>
            </div>
            <div className="self-stretch pt-5 inline-flex flex-wrap justify-start items-start gap-x-6 gap-y-3">
              <div className="self-stretch pb-px flex justify-start items-center gap-2">
                <div className="w-4 h-4 relative overflow-hidden">
                  <div className="w-3 h-3 left-[1.60px] top-[1.60px] absolute bg-teal-600" />
                </div>
                <div className="w-max justify-center text-slate-700 text-sm font-semibold font-['Manrope'] leading-5">Procedures ongoing</div>
              </div>
              <div className="self-stretch pb-px flex justify-start items-center gap-2">
                <div className="w-4 h-4 relative overflow-hidden">
                  <div className="w-3 h-3 left-[1.60px] top-[1.60px] absolute bg-teal-600" />
                </div>
                <div className="w-max justify-center text-slate-700 text-sm font-semibold font-['Manrope'] leading-5">Medicines administered</div>
              </div>
              <div className="self-stretch pb-px flex justify-start items-center gap-2">
                <div className="w-4 h-4 relative overflow-hidden">
                  <div className="w-3 h-3 left-[1.60px] top-[1.60px] absolute bg-teal-600" />
                </div>
                <div className="w-max justify-center text-slate-700 text-sm font-semibold font-['Manrope'] leading-5">Doctor visits scheduled</div>
              </div>
            </div>
            <div className="self-stretch p-1 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-start items-center gap-6">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="w-28 h-5 justify-center text-slate-500 text-sm font-bold font-['Manrope'] leading-5">Overall Progress</div>
              </div>
              <div className="flex-1 h-3 relative bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[60%] h-3 left-0 top-0 absolute bg-teal-600 rounded-full" />
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="w-28 h-5 justify-center text-teal-600 text-sm font-bold font-['Manrope'] leading-5">60% Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    {activeJourney === 'opd' && (
      <div className="self-stretch flex flex-col justify-start items-start gap-6 animate-fade-in">
        <div className="w-full max-w-[1280px] p-4 md:p-8 bg-white rounded-[24px] md:rounded-[32px]">

          {/* Mobile: Vertical Timeline */}
          <div className="flex flex-col gap-0 md:hidden">
            {[
              { day: '09:00 AM', title: 'Registration', subtitle: 'Vitals taken', active: true, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg> },
              { day: '10:30 AM', title: 'Consultation', subtitle: 'Dr. Anjali', active: true, current: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
              { day: '11:00 AM', title: 'Pharmacy', subtitle: 'Medicines', active: false, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 20.5A2.5 2.5 0 0 0 13 18V8.5A2.5 2.5 0 0 0 10.5 6H7v12h3.5Z"/><path d="M13 10h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6"/><path d="M7 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> },
              { day: 'Next Week', title: 'Follow-up', subtitle: 'Visit clinic', active: false, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
            ].map((step, idx, arr) => (
              <div key={idx} className="flex items-stretch gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${step.current ? 'bg-teal-600 ring-4 ring-teal-100 shadow-lg' : step.active ? 'bg-teal-600 shadow-md' : 'bg-white border-2 border-slate-300'}`}>
                    {step.active && (
                      <div className="absolute -top-1 -right-1 p-0.5 bg-white rounded-full">
                        <div className="w-3 h-3 bg-teal-600 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                      </div>
                    )}
                    {step.icon}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className={`w-0.5 flex-1 min-h-[32px] ${step.active ? 'bg-teal-600' : 'bg-slate-200'}`} />
                  )}
                </div>
                <div className="pb-6 pt-1.5">
                  <div className={`text-xs font-bold font-['Manrope'] mb-0.5 ${step.current ? 'text-teal-600' : 'text-neutral-400'}`}>{step.day}</div>
                  <div className={`text-base font-bold font-['Manrope'] leading-5 ${step.current ? 'text-teal-600' : step.active ? 'text-slate-800' : 'text-neutral-400'}`}>{step.title}</div>
                  <div className="text-sm text-neutral-400 font-medium font-['Manrope'] mt-0.5">{step.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Original Horizontal Timeline */}
          <div className="hidden md:block relative">
            <div className="w-full h-0.5 left-0 top-[76px] absolute bg-slate-200" />
            <div className="w-1/3 h-0.5 left-0 top-[76px] absolute bg-teal-600" />
            <div className="flex justify-between items-center">
          
          <div className="w-36 h-44 inline-flex flex-col justify-between items-center z-10">
            <div className="pb-2 flex flex-col justify-start items-start">
              <div className="justify-center text-neutral-400 text-sm font-bold font-['Manrope'] leading-5">09:00 AM</div>
            </div>
            <div className="w-14 h-14 relative z-10 bg-teal-600 rounded-full inline-flex justify-center items-center">
              <div className="w-14 h-14 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
              <div className="p-0.5 left-[40px] top-[-4px] absolute bg-white rounded-full inline-flex flex-col justify-start items-start">
                <div className="p-0.5 bg-teal-600 rounded-full flex flex-col justify-start items-start">
                  <div className="w-3 h-3 relative overflow-hidden">
                    <div className="w-1.5 h-[5px] left-[2.50px] top-[3.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-2 bg-white">
              <div className="self-stretch flex flex-col justify-center items-center">
                <div className="justify-center text-slate-800 text-lg font-bold font-['Manrope'] leading-5">Registration</div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="text-center justify-center text-neutral-400 text-sm font-medium font-['Manrope'] leading-5">Vitals taken</div>
              </div>
            </div>
          </div>

          <div className="w-44 h-44 inline-flex flex-col justify-between items-center z-10">
            <div className="flex flex-col justify-start items-start">
              <div className="justify-center text-teal-600 text-sm font-bold font-['Manrope'] leading-5">10:30 AM</div>
            </div>
            <div className="w-20 h-20 relative z-10">
              <div className="w-20 h-20 left-0 top-[-0.21px] absolute bg-teal-600 rounded-full outline outline-4 outline-offset-[-4px] outline-teal-100 inline-flex justify-center items-center">
                <div className="w-20 h-20 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl" />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-1 bg-white">
              <div className="flex flex-col justify-start items-start">
                <div className="justify-center text-teal-600 text-lg font-bold font-['Manrope'] leading-6">Consultation</div>
              </div>
              <div className="text-center justify-center text-neutral-400 text-sm font-medium font-['Manrope'] leading-5">Dr. Anjali</div>
            </div>
          </div>

          <div className="w-36 h-44 inline-flex flex-col justify-between items-center z-10">
            <div className="pb-2 flex flex-col justify-start items-start">
              <div className="justify-center text-neutral-400 text-sm font-bold font-['Manrope'] leading-5">11:00 AM</div>
            </div>
            <div className="w-14 h-14 bg-white relative z-10 rounded-full outline outline-2 outline-offset-[-2px] outline-slate-300 inline-flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-400 absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 20.5A2.5 2.5 0 0 0 13 18V8.5A2.5 2.5 0 0 0 10.5 6H7v12h3.5Z"/><path d="M13 10h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6"/><path d="M7 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </div>
            <div className="w-20 flex flex-col justify-start items-center gap-2 bg-white">
              <div className="text-center justify-center text-neutral-400 text-lg font-bold font-['Manrope'] leading-6">Pharmacy</div>
            </div>
            <div className="w-36 flex flex-col justify-start items-center gap-2 bg-white">
              <div className="text-center justify-center text-neutral-400 text-sm font-medium font-['Manrope'] leading-5">Medicines</div>
            </div>
          </div>

          <div className="w-36 h-44 inline-flex flex-col justify-between items-center z-10">
            <div className="pb-2 flex flex-col justify-start items-start">
              <div className="justify-center text-neutral-400 text-sm font-bold font-['Manrope'] leading-5">Next Week</div>
            </div>
            <div className="w-14 h-14 bg-white relative z-10 rounded-full outline outline-2 outline-offset-[-2px] outline-slate-300 inline-flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-400 absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <div className="w-40 flex flex-col justify-start items-center gap-2 bg-white">
              <div className="flex flex-col justify-start items-start">
                <div className="text-center justify-center text-neutral-400 text-lg font-bold font-['Manrope'] leading-6">Follow-up</div>
              </div>
              <div className="text-center justify-center text-neutral-400 text-sm font-medium font-['Manrope'] leading-5">Visit clinic</div>
            </div>
          </div>
            </div>
          </div>
        </div>

        <div className="self-stretch p-4 md:p-8 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col justify-start items-start gap-4 md:gap-8 overflow-hidden">
          <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-4 md:gap-8">
            <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 bg-teal-100 rounded-2xl flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-600 absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
              <div className="self-stretch inline-flex justify-start items-center gap-3">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="w-36 h-7 justify-center text-slate-800 text-xl font-bold font-['Manrope'] leading-7">Consultation</div>
                </div>
                <div className="px-2 py-0.5 bg-teal-100 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-200 flex justify-start items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                  <div className="w-14 h-3.5 justify-center text-teal-600 text-[10px] font-bold font-['Manrope'] leading-4">In Progress</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-500 text-sm font-medium font-['Manrope'] leading-5">Today, 10:30 AM</div>
              </div>
              <div className="w-full max-w-[672px] pt-2.5 pb-[0.75px] flex flex-col justify-start items-start">
                <div className="w-full justify-center text-slate-600 text-sm font-normal font-['Manrope'] leading-6">You are currently consulting with Dr. Anjali Deshmukh regarding your recent blood test results.</div>
              </div>
              <div className="self-stretch pt-5 inline-flex flex-wrap justify-start items-start gap-x-6 gap-y-3">
                <div className="self-stretch pb-px flex justify-start items-center gap-2">
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-3 h-3 left-[1.60px] top-[1.60px] absolute bg-teal-600" />
                  </div>
                  <div className="w-max justify-center text-slate-700 text-sm font-semibold font-['Manrope'] leading-5">Vitals checked</div>
                </div>
                <div className="self-stretch pb-px flex justify-start items-center gap-2">
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-3 h-3 left-[1.60px] top-[1.60px] absolute bg-teal-600" />
                  </div>
                  <div className="w-max justify-center text-slate-700 text-sm font-semibold font-['Manrope'] leading-5">Doctor assigned</div>
                </div>
                <div className="self-stretch pb-px flex justify-start items-center gap-2">
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-3 h-3 left-[1.60px] top-[1.60px] absolute bg-teal-600" />
                  </div>
                  <div className="w-max justify-center text-slate-700 text-sm font-semibold font-['Manrope'] leading-5">Prescription pending</div>
                </div>
              </div>
              <div className="self-stretch p-1 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-start items-center gap-6">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="w-28 h-5 justify-center text-slate-500 text-sm font-bold font-['Manrope'] leading-5">Wait Time</div>
                </div>
                <div className="flex-1 h-3 relative bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[50%] h-3 left-0 top-0 absolute bg-teal-600 rounded-full" />
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="w-28 h-5 justify-center text-teal-600 text-sm font-bold font-['Manrope'] leading-5">~5 mins left</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  <div className="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 py-10 lg:py-20 flex flex-col justify-center items-center gap-8">
    <div className="self-stretch flex flex-col justify-center items-center gap-2">
      <div className="self-stretch flex flex-col justify-center items-center gap-1">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="text-center justify-center text-neutral-900 text-2xl md:text-4xl lg:text-5xl font-bold font-['Manrope'] leading-tight lg:leading-[58.80px]">Track All Records in One Place</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-center">
        <div className="justify-start text-stone-500 text-base md:text-xl font-medium font-['Manrope'] leading-6 md:leading-7 text-center">See your family’s health clearly, anytime.</div>
      </div>
    </div>
    <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-start items-stretch gap-6 lg:gap-20">
      <div className="flex-1 p-6 bg-cyan-700/5 rounded-[24px] md:rounded-[48px] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="justify-center text-zinc-800 text-2xl md:text-3xl font-extrabold font-['Manrope'] leading-8 md:leading-10">Family Overview</div>
          </div>
          <div className="self-stretch justify-center text-stone-500 text-base font-semibold font-['Manrope'] leading-6">Quick summary of your family’s health activity</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch inline-flex justify-start items-center gap-4">
            <div className="w-12 h-12 bg-cyan-700/10 rounded-lg inline-flex flex-col justify-center items-center">
              <div className="justify-center text-black text-3xl font-normal font-['Manrope'] leading-10">⚡</div>
            </div>
            <div className="justify-center text-zinc-800 text-xl font-bold font-['Manrope'] leading-7">4 Members Added</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-4">
            <div className="w-12 h-12 bg-cyan-700/10 rounded-md inline-flex flex-col justify-center items-center">
              <div className="justify-center text-black text-3xl font-normal font-['Manrope'] leading-10">🧠</div>
            </div>
            <div className="justify-center text-zinc-800 text-xl font-bold font-['Manrope'] leading-7">12 Records Stored</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-4">
            <div className="w-12 h-12 bg-cyan-700/10 rounded-lg inline-flex flex-col justify-center items-center">
              <div className="justify-center text-black text-3xl font-normal font-['Manrope'] leading-10">📊</div>
            </div>
            <div className="justify-center text-zinc-800 text-xl font-bold font-['Manrope'] leading-7">2 Upcoming Appoinmnets</div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[799px] p-6 bg-gray-200 rounded-[24px] md:rounded-[54.73px] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-zinc-800 text-2xl md:text-3xl font-extrabold font-['Manrope'] leading-8 md:leading-10">Health Vitals</div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col md:flex-row justify-start items-stretch gap-6">
          <div className="flex-1 self-stretch p-4 md:p-5 bg-white rounded-3xl shadow-[0px_11.403087615966797px_45.61235046386719px_0px_rgba(0,106,104,0.06)] flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-end items-start gap-5">
              <div className="flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center text-zinc-800 text-lg md:text-2xl font-extrabold font-['Manrope'] leading-6 md:leading-8">Medical Records</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="w-4 h-4 bg-teal-700" />
                </div>
                <div className="justify-center text-stone-500 text-lg font-normal font-['Manrope'] leading-6">Blood Test Report · 2 days ago</div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="w-4 h-4 bg-teal-700" />
                </div>
                <div className="justify-center text-stone-500 text-lg font-normal font-['Manrope'] leading-6"> Prescription Added</div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="w-4 h-4 bg-teal-700" />
                </div>
                <div className="justify-center text-stone-500 text-lg font-normal font-['Manrope'] leading-6"> X-ray Uploaded</div>
              </div>
            </div>
          </div>
          <div className="flex-1 self-stretch p-4 md:p-5 bg-white rounded-3xl shadow-[0px_11.403087615966797px_45.61235046386719px_0px_rgba(0,106,104,0.06)] flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-center items-start gap-5">
              <div className="flex flex-col justify-start items-start">
                <div className="justify-center text-zinc-800 text-lg md:text-2xl font-extrabold font-['Manrope'] leading-6 md:leading-8">Appointments</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                <div className="inline-flex flex-col justify-start items-start">
                  <img className="w-14 h-14 max-w-72 relative rounded-full" src={patientContent.healthRecords.appointments.doctorImage} />
                </div>
                <div className="inline-flex flex-col justify-center items-start gap-1">
                  <div className="justify-center text-zinc-800 text-base md:text-2xl font-bold font-['Manrope'] leading-6 md:leading-8">Dr.Anjali Deshmukh</div>
                  <div className="inline-flex justify-start items-start">
                    <div className="justify-center text-stone-500 text-lg font-normal font-['Manrope'] leading-6">Today</div>
                    <div className="justify-center text-stone-500 text-lg font-normal font-['Manrope'] leading-6">10:30 Am</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 py-1.5 bg-green-100 rounded-xl flex flex-col justify-start items-start">
              <div className="justify-center text-green-700 text-sm font-bold font-['Manrope'] leading-5">Confirmed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 py-10 lg:py-20 flex flex-col justify-center items-center gap-8">
    <div className="self-stretch flex flex-col justify-center items-center gap-2">
      <div className="self-stretch flex flex-col justify-center items-center gap-1">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="text-center justify-center text-neutral-900 text-2xl md:text-4xl lg:text-5xl font-bold font-['Manrope'] leading-tight lg:leading-[58.80px]">Upload Your Medical Documents</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-center">
        <div className="justify-start text-stone-500 text-base md:text-xl font-medium font-['Manrope'] leading-6 md:leading-7 text-center">Snap, upload, and access everything in one place.</div>
      </div>
    </div>
    <div className="self-stretch flex flex-wrap justify-center items-start gap-3 md:gap-4">
      <div className="px-6 py-3 rounded-xl outline outline-1 outline-offset-[-1px] outline-Gray-Border flex justify-start items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
        <div className="text-center justify-center text-zinc-700 text-base font-semibold font-['Manrope'] leading-6">Prescriptions</div>
      </div>
      <div className="px-6 py-3 bg-cyan-700/10 rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-teal-100 flex justify-start items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <div className="text-center justify-center text-cyan-700 text-base font-extrabold font-['Manrope'] leading-6">Doctor&apos;s Notes</div>
      </div>
      <div className="px-6 py-3 rounded-xl outline outline-1 outline-offset-[-1px] outline-Gray-Border flex justify-start items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M14 16H5.5"/></svg>
        <div className="text-center justify-center text-zinc-700 text-base font-semibold font-['Manrope'] leading-6">Lab Reports</div>
      </div>
      <div className="px-6 py-3 rounded-xl outline outline-1 outline-offset-[-1px] outline-Gray-Border flex justify-start items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
        <div className="text-center justify-center text-zinc-700 text-base font-semibold font-['Manrope'] leading-6">Fitness Cert.</div>
      </div>
    </div>
    <div className="self-stretch flex flex-col lg:flex-row justify-start items-stretch gap-6 lg:gap-20">
      <div className="w-full lg:w-[542px] self-stretch p-6 bg-teal-600/5 rounded-2xl outline outline-2 outline-offset-[-2px] outline-teal-600/30 inline-flex flex-col justify-center items-center gap-6">
        <div className="w-24 flex flex-col justify-start items-start">
          <div className="w-24 h-24 relative bg-teal-600 rounded-full inline-flex justify-center items-center">
            <div className="w-24 h-24 left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_6.25px_9.375px_-6.25px_rgba(13,148,136,0.20)] shadow-[0px_15.625px_23.4375px_-4.6875px_rgba(13,148,136,0.20)]" />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-2">
          <div className="flex flex-col justify-start items-start">
            <div className="text-center justify-center text-zinc-800 text-xl md:text-3xl font-extrabold font-['Manrope'] leading-7 md:leading-10">Click to upload or drag &amp; drop</div>
          </div>
          <div className="pt-1 flex flex-col justify-start items-start">
            <div className="justify-start text-stone-500 text-base font-medium font-['Manrope'] leading-6">PDF, JPG, PNG (Max 10MB)</div>
          </div>
        </div>
        <div className="w-full max-w-96 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch h-1.5 relative bg-slate-200 rounded-full overflow-hidden">
            <div className="w-80 h-1.5 left-0 top-0 absolute bg-teal-600" />
          </div>
          <div className="self-stretch flex flex-col justify-start items-center">
            <div className="w-28 h-3.5 text-center justify-center text-slate-500 text-[10px] font-bold font-['Manrope'] uppercase leading-4 tracking-wide">Uploading... 70%</div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 bg-slate-50 rounded-2xl inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch flex flex-col justify-start items-center">
            <div className="text-center justify-center text-zinc-800 text-xl md:text-3xl font-extrabold font-['Manrope'] leading-7 md:leading-10">Why upload documents?</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center">
            <div className="justify-start text-stone-500 text-base font-medium font-['Manrope'] leading-6">Smart, ring, say and seo tools.</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col md:flex-row justify-start items-stretch gap-4">
          <div className="flex-1 p-2 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex justify-start items-center gap-3">
            <div className="p-3 bg-teal-50 rounded-lg inline-flex flex-col justify-start items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-zinc-800 text-sm font-bold font-['Manrope'] leading-5">Auto Organized</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-neutral-400 text-xs font-medium font-['Manrope'] leading-4">Sort by type &amp; date automatically</div>
              </div>
            </div>
          </div>
          <div className="flex-1 p-2 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex justify-start items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-lg inline-flex flex-col justify-start items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-zinc-800 text-sm font-bold font-['Manrope'] leading-5">Easy Sharing</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-neutral-400 text-xs font-medium font-['Manrope'] leading-4">Share instantly with doctors</div>
              </div>
            </div>
          </div>
          <div className="flex-1 p-2 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex justify-start items-center gap-3">
            <div className="p-3 bg-indigo-50 rounded-lg inline-flex flex-col justify-start items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-zinc-800 text-sm font-bold font-['Manrope'] leading-5">Secure Storage</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-neutral-400 text-xs font-medium font-['Manrope'] leading-4">Encrypted and safe access</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch p-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex justify-start items-center gap-4">
            <div className="w-10 h-10 bg-teal-600/10 rounded-full flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4-4 4 4"/></svg>
            </div>
            <div className="inline-flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="w-40 h-5 justify-center text-zinc-800 text-sm font-bold font-['Manrope'] leading-5">Upload existing reports</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-neutral-400 text-xs font-medium font-['Manrope'] leading-4">Received offline? Store them here for easy access.</div>
              </div>
            </div>
          </div>
          <div className="self-stretch px-6 py-3 bg-teal-600 rounded-lg flex justify-start items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
            <div className="text-center justify-center text-white text-xs font-extrabold font-['Manrope'] leading-4">Upload an file</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 py-10 lg:py-20 flex flex-col justify-center items-center gap-6">
    <div className="self-stretch flex flex-col justify-center items-center gap-2">
      <div className="self-stretch flex flex-col justify-center items-center gap-1">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="text-center justify-center text-neutral-900 text-2xl md:text-4xl lg:text-5xl font-bold font-['Manrope'] leading-tight lg:leading-[58.80px]">All Appointments </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-center">
        <div className="justify-start text-stone-500 text-base md:text-xl font-medium font-['Manrope'] leading-6 md:leading-7 text-center">One Calendar. Every Clinc</div>
      </div>
    </div>
    <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-start items-stretch gap-6 lg:gap-20">
      <div className="w-full lg:w-[860px] p-4 md:p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-slate-900 text-xl md:text-2xl font-bold font-['Manrope'] leading-8">All Appointments</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-slate-500 text-sm font-normal font-['Manrope'] leading-5">One calendar. Every clinic.</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-start items-stretch sm:items-start gap-3">
            <div className="w-full sm:w-auto px-6 py-3 bg-teal-600 rounded-xl flex justify-center items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
              <div className="text-center justify-center text-white text-sm font-bold font-['Manrope'] leading-5">Book Appointment</div>
            </div>
            <div className="w-full sm:w-auto px-6 py-3 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
              <div className="text-center justify-center text-slate-600 text-sm font-bold font-['Manrope'] leading-5">View Records</div>
            </div>
          </div>
        </div>
        <div className="self-stretch p-1 bg-gray-200 rounded-2xl inline-flex justify-center items-start gap-1">
          <div className="flex-1 px-4 py-3 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex justify-center items-center gap-2">
            <div className="inline-flex flex-col justify-start items-center">
              <div className="text-center justify-center text-slate-900 text-sm font-bold font-['Manrope'] leading-5">Today</div>
            </div>
            <div className="px-2 py-0.5 bg-cyan-700 rounded-full inline-flex flex-col justify-start items-center">
              <div className="text-center justify-center text-white text-xs font-bold font-['Manrope'] leading-4">2</div>
            </div>
          </div>
          <div className="flex-1 px-4 py-3 rounded-xl flex justify-center items-center gap-2">
            <div className="inline-flex flex-col justify-start items-center">
              <div className="text-center justify-center text-slate-500 text-sm font-bold font-['Manrope'] leading-5">Upcoming</div>
            </div>
            <div className="px-2 py-0.5 bg-white rounded-full inline-flex flex-col justify-start items-center">
              <div className="text-center justify-center text-slate-500 text-xs font-bold font-['Manrope'] leading-4">5</div>
            </div>
          </div>
          <div className="flex-1 px-4 py-3 rounded-xl flex justify-center items-center gap-2">
            <div className="inline-flex flex-col justify-start items-center">
              <div className="text-center justify-center text-slate-500 text-sm font-bold font-['Manrope'] leading-5">Completed</div>
            </div>
            <div className="px-2 py-0.5 bg-white rounded-full inline-flex flex-col justify-start items-center">
              <div className="text-center justify-center text-slate-500 text-xs font-bold font-['Manrope'] leading-4">12</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch p-4 md:p-6 bg-white/0 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-200 flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="w-14 h-14 bg-slate-200 rounded-xl inline-flex flex-col justify-center items-start overflow-hidden">
                <img className="self-stretch flex-1 relative" src={patientContent.allAppointments.visits[0].image} />
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center text-zinc-800 text-base font-bold font-['Manrope'] leading-6">Dr. Anjali</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center text-slate-500 text-sm font-medium font-['Manrope'] leading-5">Feb 13 • 10:30 AM</div>
                </div>
                <div className="self-stretch pt-1 inline-flex justify-start items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                  <div className="justify-center text-teal-600 text-xs font-bold font-['Manrope'] leading-4">Clinic Visit</div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
          <div className="self-stretch p-4 md:p-6 bg-white/0 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-200 flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="w-14 h-14 bg-slate-200 rounded-xl inline-flex flex-col justify-center items-start overflow-hidden">
                <img className="self-stretch flex-1 relative" src={patientContent.allAppointments.visits[1].image} />
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center text-zinc-800 text-base font-bold font-['Manrope'] leading-6">Dr. Sharma</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center text-slate-500 text-sm font-medium font-['Manrope'] leading-5">Feb 15 • 6:00 PM</div>
                </div>
                <div className="self-stretch pt-1 inline-flex justify-start items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l5-3v10l-5-3"/><rect x="4" y="6" width="11" height="12" rx="2"/></svg>
                  <div className="justify-center text-blue-500 text-xs font-bold font-['Manrope'] leading-4">Online Consultation</div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 px-3 py-2 bg-slate-100 rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200/50 inline-flex justify-start items-start gap-3">
          <div className="w-10 h-10 bg-teal-600/10 rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-slate-800 text-sm font-bold font-['Manrope'] leading-5">Your Privacy Matters</div>
            </div>
            <div className="self-stretch justify-center text-slate-500 text-xs font-medium font-['Manrope'] leading-4">We keep your health information private and fully protected.</div>
          </div>
        </div>
      </div>
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch p-4 md:p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch pr-[0.01px] inline-flex justify-between items-center">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-slate-900 text-base font-bold font-['Manrope'] leading-6">March 2026</div>
              </div>
              <div className="w-8 h-8 bg-slate-100 rounded-full flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
            <div className="self-stretch grid grid-cols-7 gap-y-2 justify-items-center w-full">
              <div className="self-stretch inline-flex flex-col justify-start items-center">
                <div className="w-1.5 h-3.5 text-center justify-center text-slate-400 text-[10px] font-bold font-['Manrope'] leading-4">S</div>
              </div>
              <div className="self-stretch inline-flex flex-col justify-start items-center">
                <div className="w-2 h-3.5 text-center justify-center text-slate-400 text-[10px] font-bold font-['Manrope'] leading-4">M</div>
              </div>
              <div className="self-stretch inline-flex flex-col justify-start items-center">
                <div className="w-1.5 h-3.5 text-center justify-center text-slate-400 text-[10px] font-bold font-['Manrope'] leading-4">T</div>
              </div>
              <div className="self-stretch inline-flex flex-col justify-start items-center">
                <div className="w-2.5 h-3.5 text-center justify-center text-slate-400 text-[10px] font-bold font-['Manrope'] leading-4">W</div>
              </div>
              <div className="self-stretch inline-flex flex-col justify-start items-center">
                <div className="w-1.5 h-3.5 text-center justify-center text-slate-400 text-[10px] font-bold font-['Manrope'] leading-4">T</div>
              </div>
              <div className="self-stretch inline-flex flex-col justify-start items-center">
                <div className="w-1.5 h-3.5 text-center justify-center text-slate-400 text-[10px] font-bold font-['Manrope'] leading-4">F</div>
              </div>
              <div className="self-stretch inline-flex flex-col justify-start items-center">
                <div className="w-1.5 h-3.5 text-center justify-center text-slate-400 text-[10px] font-bold font-['Manrope'] leading-4">S</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-1 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">1</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-1.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">2</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-1.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">3</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-2 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">4</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-1.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">5</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-2 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">6</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-1.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">7</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-1.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">8</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-2 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">9</div>
              </div>
              <div className="self-stretch py-2 bg-teal-600 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-start items-center">
                <div className="w-3 h-4 text-center justify-center text-white text-xs font-bold font-['Manrope'] leading-4">13</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">10</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-2.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">11</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-3 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">12</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">15</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-3 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">14</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">16</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">26</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">27</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">28</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">29</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">30</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-2.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">17</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-3 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">18</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-3 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">19</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-3.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">20</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-3 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">21</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-3.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">22</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-3.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">23</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-3.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">24</div>
              </div>
              <div className="self-stretch py-2 inline-flex flex-col justify-start items-center">
                <div className="w-3.5 h-4 text-center justify-center text-slate-900 text-xs font-normal font-['Manrope'] leading-4">25</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-slate-400 text-xs font-bold font-['Manrope'] uppercase leading-4 tracking-wide">Next Appointment</div>
            </div>
            <div className="self-stretch p-4 bg-teal-600/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal-600/20 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-center gap-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l5-3v10l-5-3"/><rect x="4" y="6" width="11" height="12" rx="2"/></svg>
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-800 text-sm font-bold font-['Manrope'] leading-5">Dr. Anjali Deshmukh</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-slate-500 text-xs font-medium font-['Manrope'] leading-4">Feb 13 • 10:30 AM</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="w-28 py-2 bg-teal-600 rounded-xl flex justify-center items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l5-3v10l-5-3"/><rect x="4" y="6" width="11" height="12" rx="2"/></svg>
                  <div className="w-6 h-4 text-center justify-center text-white text-xs font-bold font-['Manrope'] leading-4">Join</div>
                </div>
                <div className="w-28 py-2 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-center items-center">
                  <div className="w-16 h-4 text-center justify-center text-slate-600 text-xs font-bold font-['Manrope'] leading-4">Reschedule</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full max-w-[1536px] px-4 md:px-10 lg:px-20 py-10 lg:py-20 inline-flex justify-start items-center gap-6 overflow-hidden">
    <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-20">
      <div className="w-full lg:w-[594px] flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="text-center lg:text-left justify-center text-neutral-900 text-2xl md:text-4xl lg:text-5xl font-bold font-['Manrope'] leading-tight lg:leading-[58.80px]">Family Health Reminders</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch pl-6 py-4 relative bg-white rounded-xl shadow-[0px_9px_14.399999618530273px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-neutral-300/10 flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch pr-8 inline-flex justify-between items-center">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-800 text-xl font-bold font-['Manrope'] leading-7">Aspirin 75mg</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-stone-500 text-sm font-normal font-['Manrope'] leading-5">Take with water • 08:00 AM</div>
                  </div>
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-cyan-700 text-base font-bold font-['Manrope'] leading-6">ACTIVE</div>
                </div>
              </div>
              <div className="w-2 h-20 left-[1px] top-[1px] absolute bg-cyan-700" />
            </div>
            <div className="self-stretch pl-6 py-4 relative bg-white rounded-xl shadow-[0px_9px_14.399999618530273px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-neutral-300/10 flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch pr-8 inline-flex justify-between items-center">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-zinc-800 text-xl font-bold font-['Manrope'] leading-7">Multivitamins</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-stone-500 text-sm font-normal font-['Manrope'] leading-5">Daily Supplement • 01:00 PM</div>
                  </div>
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-Secondary text-base font-bold font-['Manrope'] leading-6">UPCOMING</div>
                </div>
              </div>
              <div className="w-2 h-20 left-[1px] top-[1px] absolute bg-Secondary" />
            </div>
            <div className="self-stretch pl-6 py-4 relative opacity-50 bg-white rounded-xl shadow-[0px_9px_14.399999618530273px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-neutral-300/10 flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch pr-8 inline-flex justify-between items-center">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-stone-500 text-xl font-bold font-['Manrope'] leading-7">Metformin</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-stone-500 text-sm font-normal font-['Manrope'] leading-5">Post Lunch • 02:30 PM</div>
                  </div>
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-gray-500 text-base font-bold font-['Manrope'] leading-6">PAUSED</div>
                </div>
              </div>
              <div className="w-2 h-20 left-[1px] top-[1px] absolute bg-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[594px] h-64 md:h-96 relative rounded-[24px] md:rounded-[48px] overflow-hidden flex justify-center items-center bg-[#E6F3F1]">
        <img className="w-full h-auto object-cover scale-110" src={patientContent.reminders.mobileImage} alt="Mobile App View" />
      </div>
    </div>
  </div>
  <div className="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 py-10 lg:py-20 flex flex-col justify-center items-center gap-6 overflow-hidden">
    <div className="w-full max-w-[1280px] px-6 md:px-12 lg:px-24 py-14 md:py-20 relative bg-gradient-to-r from-teal-800 to-cyan-700 rounded-[24px] md:rounded-[48px] flex flex-col justify-start items-start overflow-hidden">
      <div className="w-96 h-96 left-[1088px] top-[-192px] absolute bg-white/10 rounded-full blur-[50px]" />
      <div className="self-stretch flex flex-col justify-start items-center gap-8">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="w-full max-w-[672px] text-center justify-center text-white text-2xl md:text-4xl lg:text-6xl font-bold font-['Manrope'] leading-tight lg:leading-[60px]">Take Control of Your Health, Effortlessly</div>
        </div>
        <div className="w-full max-w-[672px] pb-4 flex flex-col justify-start items-center">
          <div className="w-full max-w-[665px] text-center justify-center text-white/80 text-sm md:text-lg font-normal font-['Manrope'] leading-6 md:leading-7">Join the future of healthcare management. Secure, fast, and designed for clinical serenity.</div>
        </div>
        <div className="px-10 md:px-12 py-4 md:py-5 relative bg-white rounded-[20px] shadow-2xl inline-flex justify-center items-center">
          <div className="text-center justify-center text-teal-800 text-base md:text-lg font-extrabold font-['Manrope'] leading-7">Get Started Free</div>
        </div>
      </div>
    </div>
  </div>
</main>
  )
}

export default Patient
