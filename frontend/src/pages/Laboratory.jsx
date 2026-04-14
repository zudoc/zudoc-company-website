import { laboratoryContent } from '../constants/laboratoryContent';

function Laboratory() {
  const { hero, howItWorks, uploadFeature, smartBooking, controlTower, campaignManager, cta } = laboratoryContent;

  return (
    <main className="relative pt-6 md:pt-20 pb-32 flex flex-col items-center overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-200/30 rounded-full blur-[120px] -z-10 animate-pulse" />

      {/* 1. Hero Section */}
      <div className="max-w-7xl w-full px-6 mt-6 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="inline-flex justify-center lg:justify-start items-center gap-2 px-4 py-1.5 bg-gray-200 rounded-full text-sm font-bold uppercase tracking-wider mb-2">
            <div className="w-3 h-3 bg-teal-800" />
            <span className="text-teal-800">{hero.badge}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-neutral-800 leading-[1.2] tracking-tight">
            {hero.title.line1} <br />
            <span className="text-cyan-700">
              {hero.title.line2}
            </span> <br />
            {hero.title.line3}
          </h1>
          <p className="max-w-md mx-auto lg:mx-0 text-xl text-stone-500 font-medium leading-relaxed">
            {hero.description}
          </p>
          <div className="pt-2">
            <button className="px-7 py-3 bg-teal-700 text-white rounded-[45px] text-lg font-semibold shadow-[0px_11.25px_7.50px_-2.25px_rgba(10,155,138,0.10)] border border-teal-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {hero.buttonText}
            </button>
          </div>
        </div>

        {/* Hero Interactive UI Element */}
        <div className="relative w-full flex justify-center items-center mt-16 lg:mt-0 lg:ml-12 group">
          <div className="absolute w-full max-w-[539px] h-96 bg-gradient-to-br from-teal-800/10 to-cyan-700/10 rounded-full blur-xl transition-all duration-500 group-hover:blur-2xl" />
          <div className="absolute w-72 h-44 bg-teal-300/20 rounded-full blur-[20px]" />
          
          <div className="relative w-full max-w-sm p-5 bg-white rounded-[18.88px] shadow-[0px_31.46px_78.66px_0px_rgba(24,28,29,0.08)] outline outline-[0.79px] outline-neutral-300/10 flex flex-col gap-6 origin-top-left rotate-2 group-hover:rotate-0 transition-transform duration-500 z-10">
            <div className="w-full flex justify-between items-center">
              <div className="w-24 h-4 bg-gray-200 rounded-full" />
              <div className="w-7 h-7 bg-gray-200 rounded-full" />
            </div>
            
            <div className="w-full flex flex-col gap-3">
               <div className="w-full flex space-x-3">
                  <div className="h-20 w-full bg-gray-100 rounded-2xl p-3 flex flex-col gap-3">
                     <div className="h-2.5 w-10 bg-teal-800/20 rounded-full"></div>
                     <div className="h-6 w-full bg-teal-800/40 rounded-full"></div>
                  </div>
                  <div className="h-20 w-full bg-gray-100 rounded-2xl p-3 flex flex-col gap-3">
                     <div className="h-2.5 w-10 bg-emerald-700/20 rounded-full"></div>
                     <div className="h-6 w-full bg-emerald-700/40 rounded-full"></div>
                  </div>
               </div>
               
               <div className="w-full h-40 p-3 bg-gray-100 rounded-2xl flex justify-center items-end gap-1.5">
                  <div className="w-16 h-14 bg-teal-800/10 rounded-t-md" />
                  <div className="w-16 h-20 bg-teal-800/20 rounded-t-md" />
                  <div className="w-16 h-28 bg-teal-800/40 rounded-t-md" />
                  <div className="w-16 h-16 bg-teal-800/20 rounded-t-md" />
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute right-[-20px] bottom-[20px] w-40 p-3.5 bg-white/70 backdrop-blur-[9.81px] rounded-3xl outline outline-[0.82px] outline-white/50 shadow-[0px_16.35px_20.44px_-4.08px_rgba(0,0,0,0.10)] flex flex-col items-start origin-top-left -rotate-2 group-hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center gap-2.5 mb-1.5">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0px_0px_6.54px_0px_rgba(34,197,94,0.60)]" />
                 <span className="text-[9.81px] font-bold uppercase text-zinc-900 tracking-wide opacity-60 leading-3">{hero.systemStatus.label}</span>
               </div>
               <span className="text-xl font-extrabold text-teal-800 leading-7">{hero.systemStatus.percentage}</span>
               <span className="text-[8.18px] font-medium text-zinc-700 leading-3">{hero.systemStatus.subtitle}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. How Zudoc Works */}
      <section className="w-full max-w-7xl mt-40 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">{howItWorks.title}</h2>
          <p className="text-xl text-slate-500">{howItWorks.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.steps.map((step, idx) => (
            <div key={step.id} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col gap-4">
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-3xl font-extrabold text-teal-800 mb-2">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                {step.titlePrefix}<span className="text-cyan-700">{step.titleHighlight}</span>
              </h3>
              <p className="text-slate-500 grow">{step.description}</p>
              <div className="px-4 py-3 bg-cyan-50/50 rounded-2xl text-sm text-slate-700 text-center font-medium">
                {step.callout}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Upload & Share Reports */}
      <section className="w-full max-w-7xl mt-40 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative p-10 bg-white rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col gap-6 transform hover:scale-[1.02] transition-transform duration-500">
          <div className="p-8 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-1">{uploadFeature.uploadCard.title}</h4>
            <p className="text-sm text-slate-500">{uploadFeature.uploadCard.subtitle}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-wide">
              <span>{uploadFeature.uploadCard.filePreview.name}</span>
              <span>{uploadFeature.uploadCard.filePreview.progressText}</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full bg-gradient-to-r from-teal-800 to-cyan-500 w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
            {uploadFeature.titleTop} <br className="hidden md:block"/>
            <span className="text-cyan-700">{uploadFeature.titleBottom}</span>
          </h2>
          <div className="space-y-6">
            {uploadFeature.features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-teal-50 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-teal-700 rounded-[4px] rotate-45" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{feature.title}</h3>
                  <p className="text-slate-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Smart Booking */}
      <section className="w-full max-w-7xl mt-40 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
            {smartBooking.titleTop} <br className="hidden md:block"/>
            <span className="text-cyan-700">{smartBooking.titleBottom}</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            {smartBooking.description}
          </p>
          <div className="space-y-4 pt-4">
            {smartBooking.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-3 bg-teal-600 rounded-sm" />
                <span className="text-lg font-bold text-slate-800">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8 bg-white rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-500">
           <div className="flex justify-between items-center mb-2">
             <h3 className="text-xl font-bold text-slate-800">{smartBooking.widget.title}</h3>
             <span className="text-sm font-medium text-slate-500">{smartBooking.widget.date}</span>
           </div>
           
           <div className="flex p-1 bg-slate-50 rounded-full border border-slate-200">
             {smartBooking.widget.tabs.map((tab, idx) => (
               <button key={idx} className={`flex-1 py-2 text-sm md:text-base font-bold rounded-full transition-colors ${idx === 0 ? 'bg-cyan-700 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}>
                 {tab}
               </button>
             ))}
           </div>
           
           <div className="grid grid-cols-3 gap-4">
             {smartBooking.widget.slots.map((slot, idx) => (
               <div key={idx} className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                 slot.status === 'selected' ? 'bg-cyan-700 border-cyan-700 text-white shadow-lg shadow-cyan-900/20 scale-105' :
                 slot.status === 'Booked' ? 'bg-slate-100 border-slate-100 text-slate-400 opacity-70' :
                 'border-cyan-200 text-cyan-800 hover:border-cyan-500 hover:bg-cyan-50'
               }`}>
                 <span className="font-bold whitespace-nowrap">{slot.time}</span>
                 <span className={`text-[9px] uppercase tracking-wider mt-1 ${slot.status === 'selected' ? 'text-cyan-100' : ''}`}>{slot.status}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 5. Control Tower */}
      <section className="w-full max-w-7xl mt-40 px-6 flex flex-col items-center">
         <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 text-center">{controlTower.title}</h2>
         <p className="text-xl text-slate-500 mb-12 text-center">{controlTower.subtitle}</p>

         {/* Filter Buttons */}
         <div className="flex flex-wrap justify-center gap-4 mb-8">
            {controlTower.tableData.filters.map((filter, idx) => (
              <button 
                key={idx} 
                className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-sm ${
                  filter.active 
                    ? 'bg-teal-600 text-white border border-teal-600 hover:bg-teal-700' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {filter.label} <span className={filter.active ? 'opacity-90' : 'text-slate-400 font-medium'}>({filter.count})</span>
              </button>
            ))}
         </div>

         <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 flex flex-col animate-in fade-in duration-1000">
            {/* Table Header Section (Blue Gradient) */}
            <div className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-teal-500 p-4 md:p-6 flex flex-col gap-1 items-start text-white">
              <div className="flex items-center gap-3">
                 <svg className="w-8 h-8 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                 </svg>
                 <h3 className="text-2xl font-bold tracking-wide">{controlTower.tableData.header.title}</h3>
              </div>
              <p className="text-white/80 font-medium ml-11">{controlTower.tableData.header.subtitle}</p>
            </div>

            {/* Table - Scrollable container for mobile */}
            <div className="w-full overflow-x-auto">
            <div className="min-w-[700px]">
            {/* Table Columns Header */}
            <div className="grid grid-cols-12 gap-4 px-4 md:px-8 py-4 bg-slate-50 border-b border-slate-100 text-xs font-black text-slate-500 tracking-wider">
               <div className="col-span-3">PATIENT</div>
               <div className="col-span-1">AGE</div>
               <div className="col-span-4">TESTS</div>
               <div className="col-span-3">CONTACT</div>
               <div className="col-span-1 text-center">PRIORITY</div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col bg-white">
               {controlTower.tableData.patients.map((patient, idx) => (
                 <div key={idx} className="grid grid-cols-12 gap-4 px-4 md:px-8 py-5 items-center border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    {/* Patient Info */}
                    <div className="col-span-3 flex items-center gap-4">
                       <div className={`w-12 h-12 ${patient.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm shrink-0`}>
                          {patient.initials}
                       </div>
                       <div className="flex flex-col">
                          <span className="font-extrabold text-slate-800">{patient.name}</span>
                          <span className="text-xs text-slate-400 font-medium">{patient.id}</span>
                       </div>
                    </div>
                    
                    {/* Age */}
                    <div className="col-span-1 font-bold text-slate-700">
                       {patient.age}
                    </div>

                    {/* Tests */}
                    <div className="col-span-4 flex justify-between items-center pr-6 group cursor-pointer">
                       <div className="flex flex-col">
                          <span className="font-extrabold text-slate-800 text-sm">{patient.testCount}</span>
                          <span className="text-xs text-slate-400 font-medium truncate w-48">{patient.testNames}</span>
                       </div>
                       <svg className="w-5 h-5 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>

                    {/* Contact */}
                    <div className="col-span-3 flex flex-col gap-1 text-xs text-slate-500 font-medium">
                       <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                          <span>{patient.email}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                          <span>{patient.phone}</span>
                       </div>
                    </div>

                    {/* Priority */}
                    <div className="col-span-1 flex justify-center">
                       {patient.isUrgent ? (
                         <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-xs font-bold shadow-sm border border-rose-200">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            {patient.priority}
                         </div>
                       ) : (
                         <span className="text-slate-500 font-bold text-sm">{patient.priority}</span>
                       )}
                    </div>
                 </div>
               ))}
            </div>
            </div>
            </div>

            {/* Table Footer / Pagination */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3 px-4 md:px-8 py-5 bg-white border-t border-slate-100">
               <div className="text-slate-500 font-medium text-sm">
                 Showing <span className="font-bold text-slate-800">1-4</span> of <span className="font-bold text-slate-800">9</span> patients
               </div>
               <div className="flex items-center gap-2">
                 {controlTower.tableData.pagination.pages.map((page, idx) => (
                    <button 
                      key={idx} 
                      className={`w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm transition-colors ${
                        page.active 
                           ? 'bg-blue-600 text-white shadow-md' 
                           : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {page.number}
                    </button>
                 ))}
                 <button className="h-9 px-4 rounded-md bg-cyan-500/20 text-cyan-700 font-bold text-sm ml-2 hover:bg-cyan-500/30 transition-colors">
                    Next
                 </button>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Campaign Manager */}
      <section className="w-full max-w-7xl mt-40 px-6">
        <div className="relative w-full rounded-[48px] bg-gradient-to-br from-indigo-900 via-teal-800 to-cyan-700 p-12 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Decorative Blooms */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[64px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[64px] translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 w-full max-w-lg space-y-6">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-xs font-black text-white uppercase tracking-wider">{campaignManager.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              {campaignManager.titleTop} <br/> {campaignManager.titleBottom}
            </h2>
            <p className="text-lg text-white/80 font-medium">
              {campaignManager.description}
            </p>
          </div>
          
          <div className="relative z-10 w-full max-w-sm">
            <div className="bg-white p-8 rounded-[32px] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/50 backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                 <span className="px-3 py-1 bg-teal-50 text-teal-800 text-xs font-extrabold uppercase rounded-full">{campaignManager.promoCard.badge1}</span>
                 <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-extrabold uppercase rounded-full">{campaignManager.promoCard.badge2}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{campaignManager.promoCard.title}</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                 {campaignManager.promoCard.descLine1} <br/> {campaignManager.promoCard.descLine2}
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                 <div className="flex items-end gap-2">
                   <span className="text-3xl font-extrabold text-teal-800">{campaignManager.promoCard.price}</span>
                   <span className="text-sm text-slate-400 line-through mb-1">{campaignManager.promoCard.originalPrice}</span>
                 </div>
                 <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 cursor-pointer transition-colors">
                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer/CTA */}
      <section className="w-full max-w-7xl mt-40 px-6 mb-20">
         <div className="relative w-full rounded-[48px] bg-gradient-to-r from-teal-800 to-cyan-700 px-8 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 relative z-10">
              {cta.titleTop} <br className="hidden md:block"/> {cta.titleBottom}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mb-12 relative z-10">
              {cta.description}
            </p>
            <button className="px-10 py-5 bg-white text-teal-800 hover:bg-slate-50 text-xl font-extrabold rounded-full shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative z-10">
              {cta.buttonText}
            </button>
         </div>
      </section>

    </main>
  );
}

export default Laboratory;
