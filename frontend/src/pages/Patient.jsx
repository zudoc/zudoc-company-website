import React, { useState } from 'react';
import { patientContent } from '../constants/patientContent';

function Patient() {
  const { hero, familyEcosystem, careJourney } = patientContent;
  const [activeJourney, setActiveJourney] = useState('opd');
  const [activeAppointmentTab, setActiveAppointmentTab] = useState('today');
  return (
    <main className="w-full relative flex flex-col items-center overflow-hidden bg-[#F7F9FB]">
      <section className="w-full self-stretch p-2.5 flex flex-col justify-center items-center gap-2.5">
        <div className="w-full max-w-[1280px] p-6 md:p-10 rounded-[48px] flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch rounded-[32px] flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="flex flex-col justify-start items-center lg:items-start gap-6 lg:w-[456px] text-center lg:text-left">
              <div className="self-stretch flex flex-col justify-start items-center lg:items-start">
                <div className="w-full max-w-[456px]">
                  <h1 className="text-5xl lg:text-5xl font-extrabold font-['Manrope'] leading-[52.80px]">
                    <span className="text-primary">{hero.titleLines[0].text}<br /></span>
                    <span className="text-neutral-800">{hero.titleLines[1].text}<br /></span>
                    <span className="text-primary">{hero.titleLines[2].text}</span>
                  </h1>
                </div>
              </div>
              <div className="w-full max-w-96 flex flex-col justify-start items-center lg:items-start">
                <p className="text-stone-500 text-xl font-medium font-['Manrope'] leading-7">
                  {hero.description}
                </p>
              </div>
              <div className="self-stretch pt-4 flex justify-center lg:justify-start items-start gap-4">
                <button 
                  data-property-1="Primary Button" 
                  className="px-7 py-3 bg-primary rounded-[45px] shadow-[0px_11.25px_7.50px_-2.25px_rgba(0,128,128,0.10)] outline outline-[1.22px] outline-offset-[-1.22px] flex justify-center items-center gap-2 overflow-hidden hover:opacity-90 transition-all active:scale-95"
                >
                  <span className="text-white text-lg font-semibold font-['Manrope'] leading-6 [text-shadow:_0px_3px_3px_rgb(238_238_238_/_0.25)]">
                    {hero.buttonText}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Image/Illustration Section */}
            <div className="w-full lg:w-[596.24px] self-stretch p-2.5 flex flex-col justify-center items-center lg:items-start gap-2.5">
              <div className="w-full max-w-[543.32px] sm:h-96 px-5 pt-12 pb-5 relative origin-center lg:origin-top-left rotate-0 lg:rotate-[-4deg] bg-stone-50 rounded-3xl shadow-[0px_10.35px_35.50px_0px_rgba(0,128,128,0.27)] outline outline-[0.85px] outline-offset-[-0.85px] flex justify-center items-end gap-2 overflow-hidden sm:overflow-visible">
                <img
                  className="w-full h-auto sm:w-[521.35px] sm:h-80 rounded-2xl object-cover"
                  src={hero.placeholderImage}
                  alt="Patient healthcare journey"
                />
                {/* Decorative Accent - Using Cyan-600 as the "Secondary" color */}
                <div className="hidden sm:block w-14 h-16 left-1/2 -translate-x-1/2 lg:left-[242.41px] top-[-20.17px] absolute bg-primary rounded-lg shadow-lg -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1440px] px-6 md:px-10 lg:px-20 py-16 lg:py-24 flex flex-col justify-center items-center gap-12">
        {/* Section Header */}
        <h2 className="text-center text-zinc-900 text-4xl md:text-5xl font-bold font-['Manrope'] mb-4">
          {familyEcosystem.title}
        </h2>

        {/* Layout Container */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-10">
          
          {/* Left Card: Set Up Your Account */}
          <div className="w-full lg:w-[420px] p-10 bg-[#f0f7f7] rounded-[48px] shadow-sm flex flex-col justify-center items-start gap-6 border border-[#e0eeee]">
            <div className="w-14 h-14 bg-[#d9eded] rounded-2xl flex justify-center items-center shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#008080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
               </svg>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-zinc-800 text-3xl font-extrabold font-['Manrope']">
                {familyEcosystem.setupAccountTitle}
              </h3>
              <p className="text-stone-500 text-xl font-medium font-['Manrope'] leading-relaxed max-w-[280px]">
                {familyEcosystem.setupAccountSub}
              </p>
            </div>
          </div>

          {/* Right Section: Family Ecosystem */}
          <div className="flex-1 flex flex-col justify-start items-center lg:items-start gap-8">
            <div className="flex flex-col gap-2 text-center lg:text-left">
              <h3 className="text-[#008080] text-3xl font-extrabold font-['Manrope']">
                {familyEcosystem.ecosystemTitle}
              </h3>
              <p className="text-stone-500 text-xl font-medium font-['Manrope']">
                {familyEcosystem.ecosystemSub}
              </p>
            </div>

            {/* Member Cards Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {familyEcosystem.members.map((member) => (
                <div key={member.id} className="bg-white p-4 rounded-[24px] border border-neutral-100 shadow-sm flex flex-col items-center gap-4 transition-all hover:shadow-md">
                  <div className={`w-20 h-20 rounded-2xl ${member.color} overflow-hidden flex justify-center items-center`}>
                    <img className="w-full h-full object-cover" src={member.image} alt={member.role} />
                  </div>
                  <span className="text-stone-500 text-base font-bold font-['Manrope']">
                    {member.name}
                  </span>
                </div>
              ))}

              {/* Add Member Card */}
              <button className="col-span-2 sm:col-span-1 bg-white p-4 rounded-[24px] border border-neutral-100 shadow-sm flex flex-col items-center justify-center gap-2 group hover:bg-neutral-50 transition-all">
                <div className="text-neutral-400 font-light text-4xl mb-1 group-hover:text-[#008080]">+</div>
                <span className="text-neutral-400 text-sm font-bold font-['Manrope'] group-hover:text-[#008080]">
                  Add Member
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

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
    <div className="w-full max-w-[494px] p-2 bg-gray-100 rounded-full outline outline-1 outline-offset-[-1px] outline-primary inline-flex justify-start items-start gap-1">
      <div 
        onClick={() => setActiveJourney('opd')}
        className={`flex-1 h-10 px-8 py-4 cursor-pointer relative ${activeJourney === 'opd' ? 'bg-primary rounded-[999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)]' : 'rounded-full'} inline-flex flex-col justify-center items-center transition-all`}
      >
        {activeJourney === 'opd' && <div className="w-full h-full left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)]" />}
        <div className={`text-center justify-center text-base ${activeJourney === 'opd' ? 'text-white font-bold' : 'text-zinc-700 font-semibold'} font-['Manrope'] leading-5`}>OPD Journey</div>
      </div>
      <div 
        onClick={() => setActiveJourney('ipd')}
        className={`flex-1 h-10 px-8 py-4 cursor-pointer relative ${activeJourney === 'ipd' ? 'bg-primary rounded-[999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)]' : 'rounded-full'} inline-flex flex-col justify-center items-center transition-all`}
      >
        {activeJourney === 'ipd' && <div className="w-full h-full left-0 top-0 absolute bg-white/0 rounded-full shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)]" />}
        <div className={`text-center justify-center text-base ${activeJourney === 'ipd' ? 'text-white font-bold' : 'text-zinc-700 font-semibold'} font-['Manrope'] leading-5`}>IPD Journey</div>
      </div>
    </div>
    {activeJourney === 'ipd' && (
      <div className="self-stretch flex flex-col justify-start items-start gap-6 animate-fade-in px-4 md:px-0">
        <div className="w-full max-w-[1280px] p-8 relative bg-white rounded-[32px] flex flex-col items-center">
          
          {/* Mobile: Vertical Timeline */}
          <div className="flex flex-col gap-0 md:hidden w-full">
            {[
              { day: 'Day 1', title: 'Ward Admission', subtitle: 'Room allocation', active: true, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
              { day: 'Day 2-3', title: 'Daily Monitoring', subtitle: 'Vitals & observations', active: true, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> },
              { day: 'Day 3-5', title: 'Treatment', subtitle: 'Procedures & medications', active: true, current: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 2v3s0 1 1 1h4c1 0 1-1 1-1V2"/><path d="M5 16 7 15V9l2-2h6l2 2v6l2 1a6 6 0 0 1 0 5H5a6 6 0 0 1 0-5z"/></svg> },
              { day: 'Day 6', title: 'Recovery', subtitle: 'Progress assessment', active: false, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> },
              { day: 'Day 7', title: 'Discharge', subtitle: 'Final checkup & release', active: false, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg> },
            ].map((step, idx, arr) => (
              <div key={idx} className="flex items-stretch gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center relative ${step.current ? 'bg-primary ring-4 ring-primary/20 shadow-lg' : step.active ? 'bg-primary' : 'bg-white border-2 border-slate-200'}`}>
                    {step.active && !step.current && (
                      <div className="absolute -top-1 -right-1 p-0.5 bg-white rounded-full shadow-sm">
                        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                      </div>
                    )}
                    {step.icon}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className={`w-0.5 flex-1 min-h-[40px] ${step.active ? 'bg-primary' : 'bg-slate-200'}`} />
                  )}
                </div>
                <div className="pb-8 pt-1">
                  <div className={`text-xs font-bold font-['Manrope'] mb-1 ${step.current ? 'text-primary' : 'text-neutral-400'}`}>{step.day}</div>
                  <div className={`text-lg font-bold font-['Manrope'] leading-5 ${step.current ? 'text-primary' : step.active ? 'text-slate-800' : 'text-neutral-400'}`}>{step.title}</div>
                  <div className="text-sm text-slate-500 font-medium font-['Manrope'] mt-1">{step.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:flex w-full justify-between items-center relative py-8 px-4">
            <div className="w-full h-0.5 left-0 top-[107.81px] absolute bg-slate-200" />
            <div className="w-1/2 h-0.5 left-0 top-[107.81px] absolute bg-primary" />
            
            {/* Step 1: Admission */}
            <div className="w-36 h-44 z-10 flex flex-col justify-between items-center">
              <div className="text-neutral-400 text-sm font-bold font-['Manrope']">Day 1</div>
              <div className="w-14 h-14 relative bg-primary rounded-full flex justify-center items-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <div className="absolute -top-1 -right-1 p-0.5 bg-white rounded-full shadow-sm">
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-slate-800 text-lg font-bold font-['Manrope']">Ward Admission</div>
                <div className="text-neutral-400 text-sm font-medium font-['Manrope']">Room allocation</div>
              </div>
            </div>

            {/* Step 2: Monitoring */}
            <div className="w-36 h-44 z-10 flex flex-col justify-between items-center">
              <div className="text-neutral-400 text-sm font-bold font-['Manrope']">Day 2-3</div>
              <div className="w-14 h-14 relative bg-primary rounded-full flex justify-center items-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                <div className="absolute -top-1 -right-1 p-0.5 bg-white rounded-full shadow-sm">
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-slate-800 text-lg font-bold font-['Manrope']">Daily Monitoring</div>
                <div className="text-neutral-400 text-sm font-medium font-['Manrope']">Vitals & observations</div>
              </div>
            </div>

            {/* Step 3: Treatment (Active) */}
            <div className="w-36 h-44 z-10 flex flex-col justify-between items-center">
              <div className="text-primary text-sm font-bold font-['Manrope']">Day 3-5</div>
              <div className="w-20 h-20 relative bg-primary rounded-full flex justify-center items-center shadow-xl ring-4 ring-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v3s0 1 1 1h4c1 0 1-1 1-1V2"/><path d="M5 16 7 15V9l2-2h6l2 2v6l2 1a6 6 0 0 1 0 5H5a6 6 0 0 1 0-5z"/></svg>
              </div>
              <div className="text-center">
                <div className="text-primary text-lg font-bold font-['Manrope']">Treatment</div>
                <div className="text-neutral-400 text-sm font-medium font-['Manrope']">Procedures & medications</div>
              </div>
            </div>

            {/* Step 4: Recovery */}
            <div className="w-36 h-44 z-10 flex flex-col justify-between items-center">
              <div className="text-neutral-400 text-sm font-bold font-['Manrope']">Day 6</div>
              <div className="w-14 h-14 bg-white rounded-full border-2 border-slate-200 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div className="text-center">
                <div className="text-neutral-400 text-lg font-bold font-['Manrope']">Recovery</div>
                <div className="text-neutral-400 text-sm font-medium font-['Manrope']">Progress assessment</div>
              </div>
            </div>

            {/* Step 5: Discharge */}
            <div className="w-36 h-44 z-10 flex flex-col justify-between items-center">
              <div className="text-neutral-400 text-sm font-bold font-['Manrope']">Day 7</div>
              <div className="w-14 h-14 bg-white rounded-full border-2 border-slate-200 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
              </div>
              <div className="text-center">
                <div className="text-neutral-400 text-lg font-bold font-['Manrope']">Discharge</div>
                <div className="text-neutral-400 text-sm font-medium font-['Manrope']">Final checkup & release</div>
              </div>
            </div>
          </div>
        </div>

        {/* IPD Bottom Detail Card */}
        <div className="w-full max-w-[1280px] p-6 md:p-8 bg-white rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-primary/10 rounded-2xl flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M9 2v3s0 1 1 1h4c1 0 1-1 1-1V2"/><path d="M5 16 7 15V9l2-2h6l2 2v6l2 1a6 6 0 0 1 0 5H5a6 6 0 0 1 0-5z"/></svg>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h3 className="text-slate-800 text-2xl font-bold font-['Manrope']">Treatment</h3>
              <div className="px-3 py-1 bg-primary/10 rounded-full flex items-center gap-1.5 w-fit">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="text-primary text-xs font-bold font-['Manrope']">In Progress</span>
              </div>
            </div>
            <div className="text-slate-500 text-sm font-bold font-['Manrope'] -mt-2">Day 3 - Day 5</div>
            <p className="text-slate-600 text-sm font-medium font-['Manrope'] leading-6 max-w-[700px]">
              Your treatment plan is being executed with planned procedures, medications, and regular doctor visits.
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-2">
              {[
                "Procedures ongoing",
                "Medicines administered",
                "Doctor visits scheduled"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="text-slate-700 text-sm font-semibold font-['Manrope']">{item}</span>
                </div>
              ))}
            </div>

            <div className="w-full flex items-center gap-4 mt-4">
              <span className="text-slate-500 text-sm font-bold font-['Manrope'] whitespace-nowrap">Overall Progress</span>
              <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[60%] h-full bg-primary rounded-full" />
              </div>
              <span className="text-primary text-sm font-bold font-['Manrope'] whitespace-nowrap">60% Completed</span>
            </div>
          </div>
        </div>
      </div>
    )}
    {activeJourney === 'opd' && (
      <div className="self-stretch flex flex-col justify-start items-start gap-6 animate-fade-in px-4 md:px-0">
        <div className="w-full max-w-[1280px] p-8 relative bg-white rounded-[32px] flex flex-col items-center">

          {/* Mobile: Vertical Timeline */}
          <div className="flex flex-col gap-0 md:hidden w-full">
            {[
              { day: 'Day 0', title: 'Registration', subtitle: 'Quick check-in', active: true, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
              { day: 'Day 0', title: 'Doctor Visit', subtitle: 'Physical examination', active: true, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> },
              { day: 'Day 2', title: 'Prescription', subtitle: 'Procedures & medications', active: true, current: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 2v3s0 1 1 1h4c1 0 1-1 1-1V2"/><path d="M5 16 7 15V9l2-2h6l2 2v6l2 1a6 6 0 0 1 0 5H5a6 6 0 0 1 0-5z"/></svg> },
              { day: 'Day 6', title: 'Follow-up', subtitle: 'Next Visit scheduled', active: false, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> },
              { day: 'Day 10', title: 'Discharge', subtitle: 'Successful recovery', active: false, current: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg> },
            ].map((step, idx, arr) => (
              <div key={idx} className="flex items-stretch gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center relative ${step.current ? 'bg-primary ring-4 ring-primary/20 shadow-lg' : step.active ? 'bg-primary' : 'bg-white border-2 border-slate-200'}`}>
                    {step.active && !step.current && (
                      <div className="absolute -top-1 -right-1 p-0.5 bg-white rounded-full shadow-sm">
                        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                      </div>
                    )}
                    {step.icon}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className={`w-0.5 flex-1 min-h-[40px] ${step.active ? 'bg-primary' : 'bg-slate-200'}`} />
                  )}
                </div>
                <div className="pb-8 pt-1">
                  <div className={`text-xs font-bold font-['Manrope'] mb-1 ${step.current ? 'text-primary' : 'text-neutral-400'}`}>{step.day}</div>
                  <div className={`text-lg font-bold font-['Manrope'] leading-5 ${step.current ? 'text-primary' : step.active ? 'text-slate-800' : 'text-neutral-400'}`}>{step.title}</div>
                  <div className="text-sm text-slate-500 font-medium font-['Manrope'] mt-1">{step.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:flex w-full justify-between items-center relative py-8 px-4">
            <div className="w-full h-0.5 left-0 top-[107.81px] absolute bg-slate-200" />
            <div className="w-1/2 h-0.5 left-0 top-[107.81px] absolute bg-primary" />
            
            {/* Step 1: Registration */}
            <div className="w-36 h-44 z-10 flex flex-col justify-between items-center">
              <div className="text-neutral-400 text-sm font-bold font-['Manrope']">Day 0</div>
              <div className="w-14 h-14 relative bg-primary rounded-full flex justify-center items-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <div className="absolute -top-1 -right-1 p-0.5 bg-white rounded-full shadow-sm">
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-slate-800 text-lg font-bold font-['Manrope']">Registration</div>
                <div className="text-neutral-400 text-sm font-medium font-['Manrope']">Quick check-in</div>
              </div>
            </div>

            {/* Step 2: Doctor Visit */}
            <div className="w-36 h-44 z-10 flex flex-col justify-between items-center">
              <div className="text-neutral-400 text-sm font-bold font-['Manrope']">Day 0</div>
              <div className="w-14 h-14 relative bg-primary rounded-full flex justify-center items-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                <div className="absolute -top-1 -right-1 p-0.5 bg-white rounded-full shadow-sm">
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-slate-800 text-lg font-bold font-['Manrope']">Doctor Visit</div>
                <div className="text-neutral-400 text-sm font-medium font-['Manrope']">Physical examination</div>
              </div>
            </div>

            {/* Step 3: Prescription (Active) */}
            <div className="w-36 h-44 z-10 flex flex-col justify-between items-center">
              <div className="text-primary text-sm font-bold font-['Manrope']">Day 2</div>
              <div className="w-20 h-20 relative bg-primary rounded-full flex justify-center items-center shadow-xl ring-4 ring-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v3s0 1 1 1h4c1 0 1-1 1-1V2"/><path d="M5 16 7 15V9l2-2h6l2 2v6l2 1a6 6 0 0 1 0 5H5a6 6 0 0 1 0-5z"/></svg>
              </div>
              <div className="text-center">
                <div className="text-primary text-lg font-bold font-['Manrope']">Prescription</div>
                <div className="text-neutral-400 text-sm font-medium font-['Manrope']">Procedures & medications</div>
              </div>
            </div>

            {/* Step 4: Follow-up */}
            <div className="w-36 h-44 z-10 flex flex-col justify-between items-center">
              <div className="text-neutral-400 text-sm font-bold font-['Manrope']">Day 6</div>
              <div className="w-14 h-14 bg-white rounded-full border-2 border-slate-200 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div className="text-center">
                <div className="text-neutral-400 text-lg font-bold font-['Manrope']">Follow-up</div>
                <div className="text-neutral-400 text-sm font-medium font-['Manrope']">Next Visit scheduled</div>
              </div>
            </div>

            {/* Step 5: Discharge */}
            <div className="w-36 h-44 z-10 flex flex-col justify-between items-center">
              <div className="text-neutral-400 text-sm font-bold font-['Manrope']">Day 10</div>
              <div className="w-14 h-14 bg-white rounded-full border-2 border-slate-200 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
              </div>
              <div className="text-center">
                <div className="text-neutral-400 text-lg font-bold font-['Manrope']">Discharge</div>
                <div className="text-neutral-400 text-sm font-medium font-['Manrope']">Successful recovery</div>
              </div>
            </div>
          </div>
        </div>

        {/* OPD Bottom Detail Card */}
        <div className="w-full max-w-[1280px] p-6 md:p-8 bg-white rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex items-center gap-6 md:gap-8">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-primary/10 rounded-2xl flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M9 2v3s0 1 1 1h4c1 0 1-1 1-1V2"/><path d="M5 16 7 15V9l2-2h6l2 2v6l2 1a6 6 0 0 1 0 5H5a6 6 0 0 1 0-5z"/></svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-800 text-xl font-bold font-['Manrope']">Track Every Step Of Your Journey</h3>
              <p className="text-slate-500 text-sm font-medium font-['Manrope'] leading-relaxed max-w-[500px]">
                Real-time updates, automated reminds, and full transparency at every stage.
              </p>
            </div>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex justify-center items-center shadow-lg border-4 border-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
      </div>
    )}
  </div>
      <section className="w-full max-w-[1440px] px-6 md:px-10 lg:px-20 py-16 lg:py-24 flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-center items-center gap-2">
          <h2 className="text-center text-zinc-900 text-3xl md:text-5xl font-bold font-['Manrope'] mb-2">
            {patientContent.healthRecords.title}
          </h2>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-12">
          {/* Family Overview Card */}
          <div className="flex-1 p-8 bg-[#008080]/5 rounded-[32px] flex flex-col justify-start items-start gap-8 overflow-hidden">
            <div className="flex flex-col gap-2">
              <h3 className="text-zinc-800 text-2xl font-bold font-['Manrope']">
                {patientContent.healthRecords.overview.title}
              </h3>
              <p className="text-stone-500 text-base font-semibold font-['Manrope']">
                {patientContent.healthRecords.overview.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              {patientContent.healthRecords.overview.stats.map((stat, idx) => (
                <div key={idx} className="flex justify-start items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex justify-center items-center shadow-sm p-2">
                    {/* Stat Item Image Icon */}
                    <div className="w-full h-full bg-primary/10 rounded-lg flex justify-center items-center">
                      {idx === 0 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      )}
                      {idx === 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                      )}
                      {idx === 2 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      )}
                    </div>
                  </div>
                  <span className="text-zinc-800 text-lg font-semibold font-['Manrope']">
                    {stat.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Records Card */}
          <div className="lg:w-[799px] p-8 bg-slate-100 rounded-[32px] flex flex-col justify-start items-start gap-8 overflow-hidden">
            <h3 className="text-zinc-800 text-2xl font-bold font-['Manrope']">
              {patientContent.healthRecords.subtitle}
            </h3>
            
            <div className="w-full flex flex-col md:flex-row justify-start items-stretch gap-6 h-full">
              {/* Medical Records Column */}
              <div className="flex-1 p-6 bg-white rounded-3xl shadow-[0px_10px_40px_rgba(0,106,104,0.06)] flex flex-col justify-start items-start gap-6">
                <h4 className="text-zinc-800 text-xl font-extrabold font-['Manrope']">
                  {patientContent.healthRecords.medicalRecords.title}
                </h4>
                <div className="flex flex-col gap-4">
                  {patientContent.healthRecords.medicalRecords.items.map((item, idx) => (
                    <div key={idx} className="flex justify-start items-center gap-3.5">
                      <div className="w-5 h-5 bg-teal-800 rounded-md flex justify-center items-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span className="text-stone-500 text-base font-medium font-['Manrope'] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Appointments Column */}
              <div className="flex-1 p-6 bg-white rounded-3xl shadow-[0px_10px_40px_rgba(0,106,104,0.06)] flex flex-col justify-start items-start gap-6">
                <h4 className="text-zinc-800 text-xl font-extrabold font-['Manrope']">
                  {patientContent.healthRecords.appointments.title}
                </h4>
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-slate-50">
                        <img className="w-full h-full object-cover" src={patientContent.healthRecords.appointments.doctorImage} alt="Doctor" />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-zinc-800 text-xl font-bold font-['Manrope'] leading-tight">
                          {patientContent.healthRecords.appointments.doctorName}
                        </span>
                        <div className="flex gap-2 text-stone-400 text-base font-medium font-['Manrope'] mt-1">
                          <span>{patientContent.healthRecords.appointments.date}</span>
                          <span>•</span>
                          <span>{patientContent.healthRecords.appointments.time}</span>
                        </div>
                     </div>
                   </div>
                   <div className="w-fit px-4 py-1.5 bg-green-50 rounded-lg">
                      <span className="text-green-700 text-sm font-bold font-['Manrope'] uppercase tracking-wider">
                        {patientContent.healthRecords.appointments.status}
                      </span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1440px] px-6 md:px-10 lg:px-20 py-16 lg:py-24 flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-center items-center gap-2">
          <h2 className="text-center text-zinc-900 text-3xl md:text-5xl font-bold font-['Manrope'] mb-2">
            {patientContent.documentUpload.title}
          </h2>
          <p className="text-stone-500 text-lg md:text-xl font-medium font-['Manrope'] text-center">
            {patientContent.documentUpload.subtitle}
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-20">
          {/* Why Upload Benefits Grid */}
          <div className="flex-1 bg-slate-50 rounded-3xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {patientContent.documentUpload.reasons.map((reason, idx) => (
              <div key={idx} className="p-3 bg-white rounded-3xl shadow-sm outline outline-1 outline-slate-100 flex items-center gap-4 transition-all hover:shadow-md">
                <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-slate-100 flex justify-center items-center">
                  <img src={reason.image} alt={reason.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-stone-500 text-lg md:text-xl font-bold font-['Manrope'] leading-tight">
                  {reason.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Upload Area Card */}
          <div className="w-full lg:w-[542px] p-8 bg-primary/5 rounded-3xl outline outline-2 outline-offset-[-2px] outline-primary/20 flex flex-col justify-center items-center gap-8">
            <div className="w-20 h-20 bg-primary rounded-full flex justify-center items-center relative shadow-xl">
               <div className="absolute inset-0 bg-white/10 rounded-full animate-ping" />
               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
               </svg>
            </div>
            
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="text-zinc-800 text-2xl md:text-3xl font-extrabold font-['Manrope'] leading-tight px-4">
                {patientContent.documentUpload.uploadArea.title}
              </h3>
              <p className="text-stone-500 text-lg font-medium font-['Manrope']">
                {patientContent.documentUpload.uploadArea.subtitle}
              </p>
            </div>

            <div className="w-full max-w-sm flex flex-col gap-2">
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-primary rounded-full transition-all duration-500" />
              </div>
              <span className="text-center text-slate-500 text-[10px] font-bold font-['Manrope'] uppercase tracking-widest">
                {patientContent.documentUpload.uploadArea.progressText}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1440px] px-6 md:px-10 lg:px-20 py-16 lg:py-24 flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-center items-center gap-2">
          <h2 className="text-center text-zinc-900 text-3xl md:text-5xl font-bold font-['Manrope'] mb-2">
            {patientContent.allAppointments.title}
          </h2>
          <p className="text-stone-500 text-lg md:text-xl font-medium font-['Manrope']">
            {patientContent.allAppointments.subtitle}
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-12">
          {/* Main Appointments Card */}
          <div className="flex-1 lg:flex-[2] bg-white rounded-3xl p-6 md:p-8 shadow-[0px_10px_30px_0px_rgba(0,128,128,0.10)] border border-slate-100 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex flex-col">
                <h3 className="text-slate-900 text-2xl font-bold font-['Manrope']">
                  {patientContent.allAppointments.cardTitle}
                </h3>
                <p className="text-slate-500 text-sm font-normal font-['Manrope']">
                  {patientContent.allAppointments.cardSubtitle}
                </p>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#008080] text-white px-6 py-3 rounded-xl font-bold font-['Manrope'] text-sm hover:bg-[#006666] transition-colors flex items-center gap-2 shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                   Book Appointment
                </button>
                <button className="bg-white text-slate-600 px-6 py-3 rounded-xl font-bold font-['Manrope'] text-sm border border-slate-200 hover:bg-slate-50 transition-colors shrink-0">
                   View Records
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="p-1 bg-slate-100 rounded-2xl flex gap-1">
              {patientContent.allAppointments.tabs.map((tab) => (
                <button 
                  key={tab.id} 
                  onClick={() => setActiveAppointmentTab(tab.id)}
                  className={`flex-1 flex justify-center items-center gap-2 py-3 rounded-xl transition-all ${activeAppointmentTab === tab.id ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
                >
                   <span className={`text-sm font-bold font-['Manrope'] ${activeAppointmentTab === tab.id ? 'text-black' : 'text-slate-500'}`}>{tab.label}</span>
                   <div className={`px-2 py-0.5 rounded-full text-xs font-bold font-['Manrope'] ${activeAppointmentTab === tab.id ? 'bg-[#008080] text-white' : 'bg-white text-slate-500'}`}>
                     {tab.count}
                   </div>
                </button>
              ))}
            </div>

            {/* Appointment List */}
            <div className="flex flex-col gap-4">
              {patientContent.allAppointments.visits[activeAppointmentTab].map((visit, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-neutral-200 flex justify-between items-center hover:border-[#008080]/30 transition-all cursor-pointer group">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-slate-100 bg-slate-50 flex items-center justify-center shadow-inner">
                         {visit.image ? (
                           <img src={visit.image} alt={visit.doctor} className="w-full h-full object-cover" />
                         ) : (
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                         )}
                      </div>
                      <div className="flex flex-col">
                         <span className="text-zinc-800 text-base font-bold font-['Manrope']">{visit.doctor}</span>
                         <span className="text-slate-500 text-sm font-medium font-['Manrope']">{visit.date}</span>
                         <div className={`mt-1 flex items-center gap-2`}>
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold font-['Manrope'] uppercase tracking-wider flex items-center gap-1.5
                              ${visit.type === 'Clinic Visit' ? 'bg-emerald-50 text-emerald-600' : 
                                visit.type === 'Online Consultation' ? 'bg-blue-50 text-blue-600' : 
                                'bg-purple-50 text-purple-600'}`}>
                               {visit.status === 'Completed' && <span className="text-sm">✔</span>}
                               {visit.type} {visit.status === 'Completed' ? 'Completed' : ''}
                            </span>
                         </div>
                      </div>
                   </div>
                   <div className="text-slate-300 group-hover:text-[#008080] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                   </div>
                </div>
              ))}
            </div>

            {/* Privacy Note */}
            <div className="p-4 bg-slate-100 rounded-3xl border border-slate-200/50 flex items-center gap-4">
               <div className="w-10 h-10 bg-[#008080]/10 rounded-full flex justify-center items-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#008080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
               </div>
               <div className="flex flex-col">
                  <span className="text-slate-800 text-sm font-bold font-['Manrope']">{patientContent.allAppointments.privacyNote.title}</span>
                  <p className="text-slate-500 text-xs font-medium font-['Manrope']">{patientContent.allAppointments.privacyNote.description}</p>
               </div>
            </div>
          </div>

          {/* Sidebar: Calendar + Next Appointment */}
          <div className="w-full lg:flex-1 flex flex-col gap-8">
            {/* Mini Calendar Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
               <div className="flex justify-between items-center">
                  <span className="text-slate-900 text-base font-bold font-['Manrope']">{patientContent.allAppointments.calendar.month}</span>
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-slate-200 transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
               </div>
               
               {/* Day Headers */}
               <div className="grid grid-cols-7 gap-1 text-center">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                    <span key={idx} className="text-slate-400 text-[10px] font-bold font-['Manrope']">{day}</span>
                  ))}
               </div>

               {/* Calendar Grid (Simplified for snippet representation) */}
               <div className="grid grid-cols-7 gap-1">
                  {[...Array(31)].map((_, i) => (
                    <div key={i} className={`h-8 flex justify-center items-center rounded-lg text-xs font-medium font-['Manrope'] ${i + 1 === 13 ? 'bg-[#008080] text-white font-bold' : 'text-slate-900 hover:bg-slate-50 cursor-pointer'}`}>
                       {i + 1}
                    </div>
                  ))}
               </div>
            </div>

            {/* Next Appointment Card */}
            <div className="flex flex-col gap-3">
               <span className="text-slate-400 text-xs font-bold font-['Manrope'] uppercase tracking-wider ml-2">Next Appointment</span>
               <div className="bg-[#008080]/5 rounded-3xl p-6 border border-[#008080]/20 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-[#008080] rounded-full flex justify-center items-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-zinc-800 text-sm font-bold font-['Manrope']">{patientContent.allAppointments.calendar.nextAppointment.doctor}</span>
                        <span className="text-slate-500 text-xs font-medium font-['Manrope']">{patientContent.allAppointments.calendar.nextAppointment.time}</span>
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <button className="flex-1 py-2.5 bg-[#008080] text-white rounded-xl text-xs font-bold font-['Manrope'] transition-all hover:bg-[#006666] flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
                        Join
                     </button>
                     <button className="flex-1 py-2.5 bg-white text-slate-600 rounded-xl text-xs font-bold font-['Manrope'] border border-slate-200 transition-all hover:bg-slate-50">
                        Reschedule
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
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
                  <div className="justify-center text-primary text-base font-bold font-['Manrope'] leading-6">ACTIVE</div>
                </div>
              </div>
              <div className="w-2 h-20 left-[1px] top-[1px] absolute bg-primary" />
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
    <div className="w-full max-w-[1280px] px-6 md:px-12 lg:px-24 py-14 md:py-20 relative bg-gradient-to-r from-primary-dark to-primary rounded-[24px] md:rounded-[48px] flex flex-col justify-start items-start overflow-hidden">
      <div className="w-96 h-96 left-[1088px] top-[-192px] absolute bg-white/10 rounded-full blur-[50px]" />
      <div className="self-stretch flex flex-col justify-start items-center gap-8">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="w-full max-w-[672px] text-center justify-center text-white text-2xl md:text-4xl lg:text-6xl font-bold font-['Manrope'] leading-tight lg:leading-[60px]">Take Control of Your Health, Effortlessly</div>
        </div>
        <div className="w-full max-w-[672px] pb-4 flex flex-col justify-start items-center">
          <div className="w-full max-w-[665px] text-center justify-center text-white/80 text-sm md:text-lg font-normal font-['Manrope'] leading-6 md:leading-7">Join the future of healthcare management. Secure, fast, and designed for clinical serenity.</div>
        </div>
        <div className="px-10 md:px-12 py-4 md:py-5 relative bg-white rounded-[20px] shadow-2xl inline-flex justify-center items-center">
          <div className="text-center justify-center text-primary-dark text-base md:text-lg font-extrabold font-['Manrope'] leading-7">Get Started Free</div>
        </div>
      </div>
    </div>
  </div>
</main>
  )
}

export default Patient
