import { useState } from 'react';
import { hospitalContent } from '../constants/hospitalContent';

function Hospital() {
  const [activeResourceTab, setActiveResourceTab] = useState('Beds');
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
        <div className="relative w-full max-w-5xl mx-auto mt-20 pb-12 overflow-x-auto sm:overflow-visible">
          <div className="min-w-[800px] relative px-4">
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

        <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/5 border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900">{controlTower.headerTitle}</h3>
              <p className="text-sm text-zinc-500">{controlTower.headerSubtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1 bg-zinc-100 rounded-full flex text-[11px] font-bold">
                <button className="px-4 py-1.5 rounded-full text-zinc-600 hover:text-zinc-900">Daily</button>
                <button className="px-4 py-1.5 rounded-full bg-white text-teal-800 shadow-sm">Weekly</button>
                <button className="px-4 py-1.5 rounded-full text-zinc-600 hover:text-zinc-900">Monthly</button>
              </div>
              <button className="px-5 py-2 border border-gray-200 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-50 text-zinc-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                Filter
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead className="bg-zinc-50 text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                <tr>
                  <th className="px-8 py-4">Patient Name</th>
                  <th className="px-4 py-4">Ward/Bed</th>
                  <th className="px-4 py-4">Care Stage</th>
                  <th className="px-4 py-4">Physician</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {controlTower.patients.map(p => (
                  <tr key={p.id} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="px-8 py-5 flex items-center gap-4">
                      {p.image ? (
                        <img src={p.image} className="w-10 h-10 rounded-full object-cover" alt={p.name} />
                      ) : (
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${p.initialsBg} ${p.initialsColor}`}>
                          {p.initials}
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-zinc-900">{p.name}</div>
                        <div className="text-xs text-zinc-500">ID: #{p.id}</div>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="font-bold text-sm text-zinc-900">{p.ward}</div>
                      <div className="text-xs text-zinc-500">{p.bed}</div>
                    </td>
                    <td className="px-4 py-5">
                       <div className="flex items-center gap-3">
                         <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                           <div className={`h-full ${p.progressColor}`} style={{width: `${p.progress}%`}} />
                         </div>
                         <span className="text-xs font-bold text-zinc-900">{p.progress}%</span>
                       </div>
                    </td>
                    <td className="px-4 py-5 text-sm font-medium text-zinc-900">{p.physician}</td>
                    <td className="px-4 py-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${p.statusBg} ${p.statusColor}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                       <button className="p-2 hover:bg-gray-100 rounded-full text-zinc-400 hover:text-zinc-600 transition-colors">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-100 bg-zinc-50/50 text-center">
             <button className="text-sm font-bold text-teal-800 hover:text-teal-900">View All Admissions</button>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="w-full max-w-7xl px-6 mt-32 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-center md:text-left">
           <div className="max-w-3xl space-y-4">
             <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">{insights.title}</h2>
             <p className="text-xl text-stone-500 font-medium">{insights.description}</p>
           </div>
           <div className="bg-cyan-50 text-cyan-700 px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 mx-auto md:mx-0">
              <div className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
              Real-time Analysis Active
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {insights.stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-[32px] shadow-lg shadow-cyan-900/5 border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
                 <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider">
                       <div className={`w-2 h-2 rounded-full ${stat.color} animate-pulse`} />
                       {stat.title}
                    </div>
                    <div className={`p-2 rounded-xl ${stat.color.replace('bg-', 'bg-')}/10 text-cyan-700`}>
                      {stat.title.includes('Scan') && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>}
                      {stat.title.includes('Converted') && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>}
                      {stat.title.includes('Satisfaction') && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M18 10h.01"/><path d="M6 10h.01"/><path d="M8 15s1.5 2 4 2 4-2 4-2"/></svg>}
                    </div>
                 </div>
                 <div className="text-4xl font-extrabold text-neutral-900 mb-1">{stat.value}</div>
                 <div className="text-xs font-bold text-stone-400 uppercase">{stat.subtext}</div>
              </div>
          ))}
          <div className="bg-gradient-to-br from-teal-800 to-cyan-700 p-6 rounded-[32px] text-white flex flex-col justify-between shadow-xl shadow-teal-900/20 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-15 transform translate-x-1 translate-y-[-4px] group-hover:scale-110 transition-transform duration-500">
                <svg className="w-24 h-24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 6-6 4 4 8-8"/><polyline points="13 7 21 7 21 15"/></svg>
             </div>
             <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase text-white/90 relative z-10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 6-6 4 4 8-8"/><polyline points="13 7 21 7 21 15"/></svg>
                {insights.improvement.title}
             </div>
             <div className="text-4xl font-extrabold mb-1 relative z-10">{insights.improvement.value}</div>
             <div className="text-xs text-white/80 font-bold uppercase relative z-10">{insights.improvement.subtext}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                   <div className="w-3 h-3 bg-teal-800 rounded-sm" />
                 </div>
                 {insights.flow.title}
              </h3>
              <div className="relative space-y-12 pl-6">
                 {/* Connecting line */}
                 <div className="absolute top-8 bottom-8 left-[39px] w-1 bg-gradient-to-b from-teal-800 to-green-300 rounded-full opacity-30" />
                 
                 {insights.flow.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-8 relative z-10">
                       <div className={`w-14 h-14 rounded-full flex items-center justify-center ${i < 2 ? 'bg-teal-800' : 'bg-green-100'}`}>
                          <div className={`w-4 h-4 rounded-full ${i < 2 ? 'bg-white' : 'bg-green-800'}`} />
                       </div>
                       <div>
                          <div className={`text-xs font-bold uppercase mb-1 ${step.color}`}>{step.name}</div>
                          <div className="text-3xl font-extrabold text-zinc-900">{step.count}</div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-cyan-900/5 border border-gray-100 flex gap-12 flex-col md:flex-row">
                 <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                       <h3 className="text-2xl font-bold text-zinc-900">Satisfaction Benchmarking</h3>
                       <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          +2.2 Improvement
                       </div>
                    </div>
                    <p className="text-stone-500 mb-8">Before vs After treatment comparison</p>
                    <div className="space-y-6">
                       <div>
                          <div className="flex justify-between font-bold text-sm uppercase text-zinc-800 mb-2">
                             <span>Pre-Treatment</span>
                             <span className="text-amber-600">6.2 / 10</span>
                          </div>
                          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                             <div className="w-[62%] h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" />
                          </div>
                       </div>
                       <div>
                          <div className="flex justify-between font-bold text-sm uppercase text-zinc-800 mb-2">
                             <span>Post-Treatment</span>
                             <span className="text-green-700">8.4 / 10</span>
                          </div>
                          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                             <div className="w-[84%] h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-teal-800">{insights.caseInsight.title}</h3>
                    <span className="bg-white px-3 py-1 rounded-lg text-xs font-bold text-zinc-500 shadow-sm uppercase">Recent Activity</span>
                 </div>
                 <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                     <img src={insights.caseInsight.image} className="w-24 h-24 rounded-full object-cover border-4 border-teal-50" alt="Patient" />
                     <div className="flex-1 space-y-4 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                           <span className="font-bold text-zinc-900 text-lg">Patient ID: {insights.caseInsight.patientId}</span>
                           <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">{insights.caseInsight.status}</span>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-6 font-bold">
                           <div className="text-center sm:text-left">
                              <span className="text-xs text-slate-400 uppercase block">Pre-Score</span>
                              <span className="text-amber-600 text-xl">{insights.caseInsight.preScore}</span>
                           </div>
                           <div className="w-px h-8 bg-gray-200" />
                           <div className="text-center sm:text-left">
                              <span className="text-xs text-slate-400 uppercase block">Post-Score</span>
                              <span className="text-green-700 text-xl">{insights.caseInsight.postScore}</span>
                           </div>
                        </div>
                     </div>
                     <button className="bg-teal-800 hover:bg-teal-900 transition-colors text-white font-bold text-sm px-6 py-3 rounded-full shrink-0 shadow-lg shadow-teal-900/20">
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