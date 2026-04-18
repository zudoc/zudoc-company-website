import { useState } from 'react';
import { hospitalContent } from '../constants/hospitalContent';

function Hospital() {
  const [activeResourceTab, setActiveResourceTab] = useState('Beds');
  const [activeTowerTab, setActiveTowerTab] = useState('Weekly');
  const { hero, trackPatient, resourceAvailability, controlTower, insights, cta } = hospitalContent;

  return (
    <main className="relative pt-20 pb-32 flex flex-col items-center overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[120px] -z-10 animate-pulse" />

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12 animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-neutral-800 leading-[1.1] tracking-tight">
            {hero.titleTop} <br />
            {hero.titleMiddle} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500">
              {hero.titleBottom}
            </span>
          </h1>
          <p className="max-w-xl mx-auto lg:mx-0 text-xl text-stone-500 font-medium leading-relaxed">
            {hero.description}
          </p>
          <div className="pt-4 flex justify-center lg:justify-start">
             <button className="px-8 py-4 bg-teal-700 hover:bg-teal-800 transition-colors rounded-full text-white text-lg font-semibold shadow-lg shadow-teal-700/20">
               {hero.buttonText}
             </button>
          </div>
        </div>
        <div className="flex-1 w-full relative overflow-visible">
          <img className="w-full h-auto object-cover relative z-10" src={hero.image} alt="Hospital Admin Dashboard" />
        </div>
      </section>

      {/* Track Every Patient Section */}
      <section className="w-full max-w-7xl px-6 mt-32 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
            {trackPatient.title}
          </h2>
          <p className="text-xl text-stone-500 font-medium max-w-3xl mx-auto">
             {trackPatient.description}
          </p>
        </div>
        <div className="relative w-full max-w-5xl mx-auto mt-20 pb-12">
          {/* === MOBILE: Vertical Timeline === */}
          <div className="md:hidden relative flex flex-col gap-0 px-6 pl-16">
            {/* Vertical Connector Line - runs through icon centers */}
            <div className="absolute top-[40px] bottom-[40px] left-[101px] w-1.5 z-0 flex flex-col">
              <div className="h-1/4 bg-gradient-to-b from-[#0b9480] to-[#1c5fdf]" />
              <div className="h-1/4 bg-gradient-to-b from-[#1c5fdf] to-[#9124e5]" />
              <div className="h-1/4 bg-gradient-to-b from-[#9124e5] to-[#09aa47]" />
              <div className="h-1/4 bg-gradient-to-b from-[#09aa47] to-[#0a8b66]" />
            </div>

            {trackPatient.steps.map((step, index) => {
              let StepIcon;
              if (step.id === 'checkIn') StepIcon = <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>;
              else if (step.id === 'treatment') StepIcon = <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-9 5 18 3-9h6"/></svg>;
              else if (step.id === 'recovery') StepIcon = <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
              else if (step.id === 'reports') StepIcon = <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>;
              else StepIcon = <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;

              return (
                <div key={step.id} className="flex items-center gap-5 relative z-10" style={{ marginBottom: index < trackPatient.steps.length - 1 ? '20px' : '0' }}>
                  <div className={`w-[80px] h-[80px] rounded-full ${step.color} border-[5px] border-white shadow-xl ${step.shadow}/40 flex items-center justify-center relative shrink-0 transition-transform duration-300 cursor-pointer`}>
                    {step.completed && (
                      <div className="absolute top-0 -right-1 w-7 h-7 bg-green-500 rounded-full border-[3px] border-white flex items-center justify-center shadow-md">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                    )}
                    {StepIcon}
                  </div>
                  <div className="text-[15px] font-bold text-slate-800 whitespace-nowrap">{step.label}</div>
                </div>
              )
            })}
          </div>

          {/* === DESKTOP: Horizontal Timeline === */}
          <div className="hidden md:block relative px-4">
            {/* Background Connector Line */}
            <div className="absolute top-[48px] left-[10%] right-[10%] h-1.5 flex z-0">
              <div className="h-full w-1/4 bg-gradient-to-r from-[#0b9480] to-[#1c5fdf]" />
              <div className="h-full w-1/4 bg-gradient-to-r from-[#1c5fdf] to-[#9124e5]" />
              <div className="h-full w-1/4 bg-gradient-to-r from-[#9124e5] to-[#09aa47]" />
              <div className="h-full w-1/4 bg-gradient-to-r from-[#09aa47] to-[#0a8b66]" />
            </div>

            {/* Timeline Nodes */}
            <div className="relative flex justify-between items-start z-10 pr-2 pl-2">
              {trackPatient.steps.map((step) => {
                let StepIcon;
                if (step.id === 'checkIn') StepIcon = <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>;
                else if (step.id === 'treatment') StepIcon = <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-9 5 18 3-9h6"/></svg>;
                else if (step.id === 'recovery') StepIcon = <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
                else if (step.id === 'reports') StepIcon = <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>;
                else StepIcon = <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;

                return (
                  <div key={step.id} className="flex flex-col items-center w-36 relative group">
                    <div className={`w-[100px] h-[100px] rounded-full ${step.color} border-[5px] border-white shadow-xl ${step.shadow}/40 flex items-center justify-center relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl cursor-pointer`}>
                      {step.completed && (
                        <div className="absolute top-0 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-md">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                      )}
                      {StepIcon}
                    </div>
                    <div className="mt-5 text-[15px] font-bold text-slate-800 text-center whitespace-nowrap">{step.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Availability Section */}
      <section className="w-full max-w-7xl px-6 mt-32 space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 rounded-full border border-green-500/20">
              <svg className="w-3.5 h-3.5 text-green-600 animate-pulse" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>
              <span className="text-green-700 text-xs font-black uppercase tracking-wider">{resourceAvailability.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              {resourceAvailability.title}
            </h2>
            <p className="text-xl text-stone-500 font-medium">
              {resourceAvailability.description}
            </p>
          </div>
          <div className="flex p-2 bg-gray-100 rounded-full border border-cyan-700/20 shadow-sm">
            {resourceAvailability.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveResourceTab(tab)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeResourceTab === tab
                    ? 'bg-cyan-700 text-white shadow-md'
                    : 'text-stone-500 hover:text-cyan-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
           <div className="text-center lg:text-left">
             <h3 className="text-3xl font-extrabold text-zinc-800">
               {activeResourceTab === 'Beds' && resourceAvailability.subtitle}
               {activeResourceTab === 'ICU' && 'Live ICU Availability Status'}
               {activeResourceTab === 'OT Slots' && 'Operating Theater Booking'}
             </h3>
             <p className="text-stone-500 font-medium mt-2">
               {activeResourceTab === 'Beds' && `${resourceAvailability.subDescription1} • ${resourceAvailability.subDescription2}`}
               {activeResourceTab === 'ICU' && 'Real-Time monitoring • view current bed occupancy across all wards'}
               {activeResourceTab === 'OT Slots' && 'Reserve your slot • Specialist surgeons'}
             </p>
           </div>
           
           {activeResourceTab === 'Beds' && (
             <>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {resourceAvailability.wards.map(ward => (
                   <div key={ward.id} className="bg-white p-6 rounded-[32px] shadow-xl shadow-cyan-900/5 border border-gray-200/60 flex flex-col gap-6">
                     <div className="flex justify-between items-center">
                       <div className="flex items-center gap-3">
                         <div className="w-12 h-12 bg-cyan-50 rounded-xl overflow-hidden flex justify-center items-center">
                            <img src={ward.icon} alt={ward.title} className="w-full h-full object-cover opacity-80" />
                         </div>
                         <div>
                           <h4 className="text-lg font-bold text-zinc-800">{ward.title}</h4>
                           <p className="text-xs font-bold text-stone-400 uppercase">{ward.subtitle}</p>
                         </div>
                       </div>
                       <div className="text-right">
                          <div className="text-green-500 text-lg font-extrabold">{ward.available} Available</div>
                          <div className="text-[10px] font-bold text-stone-400 uppercase">Status: <span className="text-neutral-500">{ward.status}</span></div>
                       </div>
                     </div>
                     <div className="grid grid-cols-5 gap-2">
                       {ward.beds.map((bed, idx) => {
                         let bg, text, border, icon;
                         if (bed.status === 'available') {
                            bg = 'bg-green-50'; border = 'border-green-100'; text = 'text-green-700';
                            icon = <svg className="w-4 h-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>;
                         } else if (bed.status === 'cleaning') {
                            bg = 'bg-amber-50'; border = 'border-amber-100'; text = 'text-amber-700';
                            icon = <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5-2-2L9 7l2 2z"/><path d="m2 22 5-5"/><path d="M11 20c-1.1 0-2-.9-2-2V7l4-4 4 4v11c0 1.1-.9 2-2 2h-4Z"/></svg>;
                         } else if (bed.status === 'occupied') {
                            bg = 'bg-red-50'; border = 'border-red-100'; text = 'text-red-700';
                            icon = <svg className="w-4 h-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
                         } else {
                            bg = 'bg-slate-100'; border = 'border-slate-200'; text = 'text-slate-500';
                            icon = <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>;
                         }
                         return (
                           <div key={idx} className={`py-2 rounded-xl border-2 ${bg} ${border} flex flex-col items-center justify-center gap-1.5`}>
                             <div className={`${text}`}>{icon}</div>
                             <span className={`text-xs font-bold leading-none ${text}`}>{bed.number}</span>
                           </div>
                         )
                       })}
                     </div>
                   </div>
                 ))}
               </div>

               {/* Legend */}
               <div className="py-4 border-t border-slate-200 flex flex-wrap justify-center gap-8 mt-8">
                 <div className="flex items-center gap-2">
                   <span className="text-green-600"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
                   <span className="text-sm font-semibold text-slate-600">Available</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-amber-600"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v8m0 0H8.5l-1 6h9l-1-6H12Zm-2.5 6v6m5-6v6" /></svg></span>
                   <span className="text-sm font-semibold text-slate-600">Cleaning</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-red-600"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></span>
                   <span className="text-sm font-semibold text-slate-600">Occupied</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-slate-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg></span>
                   <span className="text-sm font-semibold text-slate-600">Inactive/Maintenance</span>
                 </div>
               </div>
             </>
           )}

           {activeResourceTab === 'ICU' && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {resourceAvailability.icuBeds.map((bed, idx) => (
                 <div key={idx} className="p-6 bg-white rounded-[32px] shadow-xl shadow-cyan-900/5 border border-gray-200/60 flex flex-col gap-4">
                   <div className="flex justify-between items-center">
                      <div className="w-10 h-10 bg-teal-800/10 rounded-xl flex items-center justify-center">
                         <svg className="w-6 h-6 text-cyan-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                      </div>
                     <div className={`px-3 py-1.5 rounded-full flex items-center gap-2 ${bed.status === 'Available' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}>
                        <span className="text-sm font-bold">{bed.status}</span>
                     </div>
                   </div>
                   <div className="text-2xl font-bold text-black">{bed.id}</div>
                   <div>
                     <div className="text-lg font-bold text-zinc-800">{bed.floor}</div>
                     <div className="text-lg font-bold text-zinc-800">{bed.info}</div>
                   </div>
                 </div>
               ))}
             </div>
           )}

           {activeResourceTab === 'OT Slots' && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {resourceAvailability.otSlots.map((slot, idx) => (
                 <div key={idx} className="p-6 bg-white rounded-[32px] shadow-xl shadow-cyan-900/5 border border-gray-200/60 flex flex-col gap-4">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-800/10 rounded-xl flex items-center justify-center">
                           <svg className="w-6 h-6 text-cyan-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                        </div>
                        <div>
                          <div className="text-lg font-extrabold text-neutral-900">{slot.id}</div>
                          <div className="text-sm font-semibold text-neutral-400 capitalize">{slot.department}</div>
                        </div>
                      </div>
                     <div className={`px-3 py-1.5 rounded-full flex items-center gap-2 ${slot.status === 'Available' ? 'bg-green-500/10 text-green-600' : 'bg-neutral-500/10 text-neutral-500'}`}>
                        <span className="text-sm font-bold">{slot.status}</span>
                     </div>
                   </div>
                   <div className="text-xl font-bold text-zinc-800 mt-2 flex items-center gap-2">
                       <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                       {slot.doctor}
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="flex items-center gap-2 text-stone-500 font-semibold">
                        <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {slot.date}
                      </div>
                      <div className="flex items-center gap-2 text-stone-500 font-semibold">
                        <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {slot.time}
                      </div>
                    </div>
                 </div>
               ))}
             </div>
           )}
        </div>
      </section>

      {/* Hospital Control Tower */}
      <section className="w-full max-w-7xl px-6 mt-32 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">{controlTower.title}</h2>
          <p className="text-xl text-stone-500 font-medium max-w-3xl mx-auto">{controlTower.description}</p>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl shadow-cyan-900/10 border border-gray-200/60 overflow-hidden outline outline-1 outline-neutral-300/10">
          {/* Enhanced Premium Header */}
          <div className="p-8 bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-700 border-b border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-extrabold text-white tracking-tight">{controlTower.headerTitle}</h3>
              <p className="text-lg text-white/90 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {controlTower.headerSubtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="p-1 px-1.5 bg-white/10 backdrop-blur-md rounded-full flex text-sm font-bold border border-white/20">
                {controlTower.tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTowerTab(tab)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      activeTowerTab === tab
                        ? 'bg-white text-teal-800 shadow-lg scale-105'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button className="px-6 py-2.5 rounded-full border-2 border-white/40 text-sm font-black flex items-center gap-2 text-white hover:bg-white/10 hover:border-white transition-all shadow-lg active:scale-95 uppercase tracking-widest">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                Filter
              </button>
            </div>
          </div>

          {/* === TABLE VIEW (md+) === */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[1000px] text-left border-collapse">
              <thead className="bg-zinc-50/80 backdrop-blur-sm sticky top-0 z-20">
                <tr>
                  {controlTower.columns.map((col, idx) => (
                    <th key={col} className={`px-6 py-5 text-sm font-bold text-neutral-500 uppercase tracking-widest ${idx === 0 ? 'pl-12' : ''}`}>
                      <div className="flex items-center gap-2">
                         {col.includes('Patient') && <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                         {col.includes('Ward') && <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                         {col.includes('Treatment') && <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                         {col.includes('Timeline') && <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                         {col.includes('Revenue') && <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                         {col.includes('Surgeries') && <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758L10.5 13.5m-2-2L7 10.121m0 5.758L8.379 14.5m-3-3L4 10.121" /></svg>}
                         {col}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {controlTower.data[activeTowerTab].map(p => (
                  <tr key={p.id} className="hover:bg-teal-50/30 transition-all duration-300 cursor-pointer group">
                    {/* Patient Name */}
                    <td className="pl-12 pr-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300 ${p.initialsBg} ${p.initialsColor}`}>
                          {p.initials}
                        </div>
                        <div>
                          <div className="text-[17px] font-black text-zinc-800 leading-tight">{p.name}</div>
                          <div className="text-sm font-bold text-neutral-400 tracking-wide">ID: #{p.id}</div>
                        </div>
                      </div>
                    </td>
                    {/* Ward & Admission */}
                    <td className="px-6 py-6">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-sm font-extrabold text-zinc-900">
                          <svg className="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                          {p.ward}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-stone-500 bg-stone-100 w-fit px-2 py-0.5 rounded-md">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          {p.admissionDate}
                        </div>
                        <div className="text-xs font-bold text-cyan-600/80 uppercase tracking-tighter">{p.department}</div>
                      </div>
                    </td>
                    {/* Treatment Plan */}
                    <td className="px-6 py-6">
                      <div className="flex flex-col gap-1">
                        <div className="text-sm font-black text-zinc-800 leading-snug">{p.treatmentPlan}</div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-50 w-fit px-2 py-0.5 rounded-md border border-teal-100">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {p.treatmentDuration}
                        </div>
                      </div>
                    </td>
                    {/* Timeline Status */}
                    <td className="px-6 py-6">
                      <div className={`px-4 py-1.5 rounded-xl text-[13px] font-black border transition-colors duration-300 w-fit ${
                        p.timelineStatus === 'On Time' 
                        ? 'bg-green-50 text-green-700 border-green-100 flex items-center gap-1.5' 
                        : 'bg-rose-50 text-rose-700 border-rose-100 flex items-center gap-1.5'
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${p.timelineStatus === 'On Time' ? 'bg-green-500' : 'bg-rose-500'} animate-pulse`} />
                        {p.timelineStatus}
                      </div>
                    </td>
                    {/* Revenue */}
                    <td className="px-6 py-6">
                      <div className="flex flex-col">
                        <div className="text-xl font-black text-green-600 flex items-baseline gap-0.5">
                          {p.revenue}
                        </div>
                        <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-2 py-0.5 rounded-md w-fit mt-1">
                          {p.revenueTotal}
                        </div>
                      </div>
                    </td>
                    {/* Surgeries */}
                    <td className="px-6 py-6">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-lg font-black text-zinc-800 border-2 border-white shadow-sm">
                        {p.surgeries}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* === MOBILE & TABLET CARDS (< md, and optimized for sm/md) === */}
          <div className="md:hidden divide-y divide-gray-100">
            {controlTower.data[activeTowerTab].map(p => (
              <div key={p.id} className="p-6 space-y-6 hover:bg-slate-50 transition-colors">
                {/* Patient header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shrink-0 shadow-md ${p.initialsBg} ${p.initialsColor}`}>
                      {p.initials}
                    </div>
                    <div>
                      <div className="text-base font-black text-zinc-800">{p.name}</div>
                      <div className="text-xs font-bold text-neutral-400">ID: #{p.id}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-xs font-black flex items-center gap-1.5 border shadow-sm ${
                    p.timelineStatus === 'On Time' 
                    ? 'bg-green-50 text-green-700 border-green-100' 
                    : 'bg-rose-50 text-rose-700 border-rose-100'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${p.timelineStatus === 'On Time' ? 'bg-green-500' : 'bg-rose-500'} animate-pulse`} />
                    {p.timelineStatus}
                  </div>
                </div>
                
                {/* Details grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      Ward
                    </div>
                    <div className="font-extrabold text-zinc-800 text-[15px]">{p.ward}</div>
                    <div className="text-xs font-bold text-stone-500 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {p.admissionDate}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Treatment
                    </div>
                    <div className="font-extrabold text-zinc-800 text-[15px]">{p.treatmentPlan}</div>
                    <div className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded w-fit">{p.treatmentDuration}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10" /></svg>
                      Current Revenue
                    </div>
                    <div className="text-xl font-black text-green-600">{p.revenue}</div>
                    <div className="text-[10px] font-bold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded inline-block">{p.revenueTotal}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758L10.5 13.5" /></svg>
                      Surgeries
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center font-black shadow-lg">
                      {p.surgeries}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Footer with Enhanced Spacing */}
          <div className="p-6 bg-zinc-50/50 border-t border-gray-100 text-center">
             <button className="px-10 py-3.5 bg-white text-teal-800 font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-sm border border-teal-800/10 hover:bg-teal-800 hover:text-white transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-3 mx-auto">
               View All Admissions Data
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </button>
          </div>
        </div>
      </section>

      {/* Patient Conversion & Satisfaction Insights */}
      <section className="w-full max-w-7xl px-6 py-20 mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold text-[#111827] tracking-tight">
              {insights.title}
            </h2>
            <p className="text-lg text-[#6B7280] font-medium">
              {insights.description}
            </p>
          </div>
          <div className="px-4 py-2 bg-[#F0FDFA] rounded-full flex items-center gap-2 border border-[#CCFBF1]">
            <svg className="w-5 h-5 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            <span className="text-[#0D9488] text-sm font-bold">
              {insights.statusBadge}
            </span>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {insights.stats.map((stat) => (
            <div key={stat.id} className="p-6 bg-white rounded-[24px] border border-[#E5E7EB] shadow-sm flex flex-col justify-between items-start gap-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 flex items-center justify-center">
                 {stat.id === 'scanned' && (
                    <svg className="w-6 h-6 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                      <line x1="7" y1="7" x2="7" y2="7"></line>
                      <line x1="17" y1="7" x2="17" y2="7"></line>
                      <line x1="17" y1="17" x2="17" y2="17"></line>
                      <line x1="7" y1="17" x2="7" y2="17"></line>
                    </svg>
                 )}
                 {stat.id === 'converted' && (
                    <svg className="w-6 h-6 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                 )}
                 {stat.id === 'satBefore' && (
                    <svg className="w-7 h-7 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="8" y1="15" x2="16" y2="15"></line>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                 )}
                 {stat.id === 'satAfter' && (
                    <svg className="w-7 h-7 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                 )}
              </div>
              <div className="space-y-1">
                <div className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">
                  {stat.title}
                </div>
                <div className="text-[#111827] text-3xl font-extrabold leading-none">
                  {stat.value}
                </div>
                <div className="text-[#9CA3AF] text-[10px] font-medium uppercase">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}

          {/* Improvement Rate Card */}
          <div className="p-6 bg-[#065F46] rounded-[24px] flex flex-col justify-between items-start gap-6 shadow-lg shadow-teal-900/10">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <div className="space-y-1">
              <div className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                {insights.improvement.title}
              </div>
              <div className="text-white text-3xl font-extrabold leading-none">
                {insights.improvement.value}
              </div>
              <div className="text-white/60 text-[10px] font-medium leading-tight">
                {insights.improvement.subtext}
              </div>
            </div>
          </div>
        </div>

        {/* Journey & Benchmarking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Journey Flow */}
          <div className="lg:col-span-3 p-8 bg-[#F3F4F6] rounded-[32px] space-y-10 relative">
             <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <h3 className="text-xl font-bold text-[#111827] leading-tight">Patient Journey<br/>Flow</h3>
             </div>

             <div className="relative space-y-12 pl-4">
                {/* Vertical Connector Line */}
                <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-[#D1D5DB]" />
                
                {insights.flow.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-6 relative z-10">
                    <div className={`w-14 h-14 rounded-full ${idx === 0 ? 'bg-[#115E59]' : idx === 1 ? 'bg-[#0D9488]' : idx === 2 ? 'bg-[#D97706]' : 'bg-[#166534]'} shadow-sm flex items-center justify-center border-4 border-white`}>
                       {idx === 0 ? (
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                       ) : idx === 3 ? (
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                       ) : idx === 1 ? (
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                          </svg>
                       ) : (
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          </svg>
                       )}
                    </div>
                    <div>
                       <div className={`text-sm font-bold ${idx === 3 ? 'text-[#166534]' : 'text-[#0D9488]'}`}>
                          {step.name}
                       </div>
                       <div className="text-2xl font-black text-[#111827]">
                          {step.count}
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Right Column: Benchmarking & Case Insight */}
          <div className="lg:col-span-9 space-y-6">
             {/* Satisfaction Benchmarking Box */}
             <div className="p-10 bg-white rounded-[32px] border border-[#E5E7EB] shadow-sm space-y-10">
                <div className="flex justify-between items-center">
                   <div className="space-y-1">
                      <h4 className="text-2xl font-bold text-[#111827]">{insights.benchmarking.title}</h4>
                      <p className="text-[#6B7280] font-medium">{insights.benchmarking.subtitle}</p>
                   </div>
                   <div className="px-4 py-2 bg-[#DCFCE7] rounded-full flex items-center gap-2">
                      <span className="text-[#166534] text-sm font-bold">↑ {insights.benchmarking.improvement}</span>
                   </div>
                </div>

                <div className="space-y-10">
                   {insights.benchmarking.metrics.map((metric, idx) => (
                     <div key={idx} className="space-y-4">
                        <div className="flex justify-between items-end">
                           <span className="text-[#374151] text-sm font-bold uppercase tracking-widest">{metric.label}</span>
                           <span className="text-[#111827] text-2xl font-black">
                             {metric.value} <span className="text-gray-300 font-bold">/ {metric.max}</span>
                           </span>
                        </div>
                        <div className="h-4 bg-[#F3F4F6] rounded-full overflow-hidden">
                           <div 
                              className={`h-full bg-gradient-to-r ${idx === 0 ? 'from-[#F59E0B] to-[#FCD34D]' : 'from-[#166534] to-[#4ADE80]'} rounded-full transition-all duration-1000`} 
                              style={{ width: `${(parseFloat(metric.value) / parseFloat(metric.max)) * 100}%` }}
                           />
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Featured Case Insight Box */}
             <div className="p-6 bg-[#F9FAFB] rounded-[32px] space-y-4">
                <div className="flex justify-between items-center px-2">
                   <h5 className="text-[#0D9488] text-xl font-bold">{insights.caseInsight.title}</h5>
                   <div className="px-3 py-1 bg-[#E5E7EB] rounded-full text-[10px] font-bold text-[#4B5563] uppercase tracking-widest">
                      RECENT ACTIVITY
                   </div>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-[#E5E7EB] flex flex-col md:flex-row items-center gap-8">
                   <div className="relative">
                      <img src={insights.caseInsight.image} className="w-20 h-20 rounded-full object-cover border-2 border-[#E5E7EB]" alt="Patient" />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#166534] rounded-full border-4 border-white flex items-center justify-center text-white">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      </div>
                   </div>

                   <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="text-[#111827] text-lg font-bold">Patient ID: {insights.caseInsight.patientId}</div>
                         <div className="px-3 py-1 bg-[#DCFCE7] text-[#166534] text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                            {insights.caseInsight.status}
                         </div>
                      </div>
                      
                      <div className="flex items-center gap-10">
                         <div className="space-y-1">
                            <div className="text-[#9CA3AF] text-[10px] font-bold uppercase">Pre-Score</div>
                            <div className="text-[#4B5563] text-2xl font-bold">{insights.caseInsight.preScore}</div>
                         </div>
                         <div className="space-y-1">
                            <div className="text-[#9CA3AF] text-[10px] font-bold uppercase">Post-Score</div>
                            <div className="text-[#16A34A] text-2xl font-bold">{insights.caseInsight.postScore}</div>
                         </div>
                      </div>
                   </div>

                   <button className="px-10 py-3 bg-[#065F46] text-white font-bold text-sm rounded-full hover:bg-teal-900 transition-colors shadow-sm">
                      View Records
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-[1440px] px-6 mt-32 mb-16">
         <div className="relative bg-gradient-to-r from-teal-800 to-cyan-700 rounded-[48px] p-12 md:p-24 text-center overflow-hidden shadow-2xl shadow-cyan-900/20">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-[60px]" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-400/20 rounded-full blur-[60px]" />
            
            <div className="relative z-10 space-y-8 flex flex-col items-center">
               <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Start Managing Your Hospital <br className="hidden md:block" /> Smarter Today
               </h2>
               <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                  {cta.description}
               </p>
               <button className="mt-4 px-10 py-5 bg-white text-teal-800 text-lg font-extrabold rounded-2xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300">
                  {cta.buttonText}
               </button>
            </div>
         </div>
      </section>

    </main>
  );
}

export default Hospital;