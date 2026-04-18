import { useState } from 'react';
import { laboratoryContent } from '../constants/laboratoryContent';

/* ── Priority badge style map ─────────────────────────────────────────────── */
const priorityStyles = {
  red:  { wrapper: 'bg-red-500/10',   text: 'text-red-500'   },
  amber:{ wrapper: 'bg-amber-500/10', text: 'text-amber-500' },
  green:{ wrapper: 'bg-green-500/10', text: 'text-green-500' },
};

/* ── Slot appearance helper ───────────────────────────────────────────────── */
function slotClass(status) {
  if (status === 'selected')
    return 'bg-cyan-700 shadow-[0px_4px_6px_-4px_rgba(0,101,101,0.20),0px_10px_15px_-3px_rgba(0,101,101,0.20)]';
  if (status === 'Booked')
    return 'bg-slate-100 outline outline-2 outline-offset-[-2px] outline-slate-200';
  return 'outline outline-2 outline-offset-[-2px] outline-cyan-700 hover:bg-cyan-50 cursor-pointer';
}
function slotTextClass(status) {
  if (status === 'selected') return 'text-white';
  if (status === 'Booked')   return 'text-neutral-400';
  return 'text-cyan-700';
}

/* ──────────────────────────────────────────────────────────────────────────── */

function Laboratory() {
  const {
    hero, howItWorks, uploadFeature,
    smartBooking, controlTower, campaignManager, cta,
  } = laboratoryContent;

  const [activeTab, setActiveTab] = useState(0);
  const currentTab = smartBooking.widget.tabs[activeTab];
  const currentSlots = currentTab.slots;

  return (
    <div className="flex flex-col justify-start items-center overflow-hidden w-full bg-[#F7F9FB]">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <div className="self-stretch p-3 sm:p-4 md:p-2.5 flex flex-col justify-center items-center">
        <div className="w-full max-w-[1280px] px-4 sm:px-8 md:px-10 py-8 md:py-10 rounded-[32px] md:rounded-[48px] flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch flex flex-col lg:flex-row justify-start items-center gap-10 xl:gap-16">

            {/* Left – text */}
            <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 md:gap-6">
              <div className="px-4 py-1.5 bg-gray-200 rounded-full inline-flex justify-start items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-sm shrink-0" />
                <span className="text-primary text-xs sm:text-sm font-bold font-['Manrope'] uppercase leading-4">
                  {hero.badge}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-['Manrope'] leading-[1.2]">
                <span className="text-neutral-800">{hero.title.line1}<br /></span>
                <span className="text-primary">{hero.title.line2}</span>
                <span className="text-neutral-800"> {hero.title.line3}</span>
              </h1>

              <p className="max-w-sm text-stone-500 text-base sm:text-xl font-medium font-['Manrope'] leading-7">
                {hero.description}
              </p>

              <div className="pt-2">
                <button className="px-6 sm:px-7 py-3 bg-primary rounded-[45px] shadow-[0px_11.25px_7.5px_-2.25px_rgba(0,128,128,0.10)] border border-primary flex justify-center items-center gap-2 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <span className="text-white text-base sm:text-lg font-semibold font-['Manrope'] leading-6">
                    {hero.buttonText}
                  </span>
                </button>
              </div>
            </div>

            {/* Right – card mockup */}
            <div className="w-full lg:flex-1 relative flex justify-center items-center mt-8 lg:mt-0 group min-h-64">

              <div className="relative w-full max-w-[380px] md:max-w-[517px] p-4 md:p-5 bg-white rounded-[24px] md:rounded-[30px] shadow-[0px_31.46px_78.66px_0px_rgba(24,28,29,0.08)] outline outline-[0.79px] outline-neutral-300/10 flex flex-col justify-start items-start gap-4 md:gap-6 origin-top-left rotate-2 group-hover:rotate-0 transition-transform duration-500 z-10">
                <img
                  className="self-stretch rounded-xl md:rounded-2xl w-full object-cover"
                  src={hero.placeholderImage}
                  alt="Lab dashboard preview"
                />
                {/* Floating badge */}
                <div className="absolute right-[-12px] md:right-[-20px] bottom-4 md:bottom-[20px] w-36 md:w-40 p-3 md:p-3.5 bg-white/70 rounded-3xl outline outline-[0.82px] outline-white/50 backdrop-blur-[9.81px] flex flex-col justify-start items-start origin-top-left -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <div className="self-stretch inline-flex justify-start items-center gap-2 mb-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0px_0px_6.54px_0px_rgba(34,197,94,0.60)]" />
                    <span className="text-[9px] md:text-[9.81px] font-bold uppercase text-zinc-900 tracking-wide opacity-60 leading-3">
                      {hero.systemStatus.label}
                    </span>
                  </div>
                  <span className="text-primary text-lg md:text-xl font-extrabold font-['Manrope'] leading-7">
                    {hero.systemStatus.percentage}
                  </span>
                  <span className="text-zinc-700 text-[7px] md:text-[8.18px] font-medium font-['Manrope'] leading-3">
                    {hero.systemStatus.subtitle}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── 2. HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-20 py-12 md:py-20 flex flex-col justify-center items-center gap-8 md:gap-10">
        <div className="max-w-[697px] flex flex-col justify-center items-center gap-2 text-center px-4">
          <h2 className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-bold font-['Manrope'] leading-tight">
            {howItWorks.title}
          </h2>
          <p className="text-stone-500 text-base sm:text-xl font-medium font-['Manrope'] leading-7 mt-2">
            {howItWorks.subtitle}
          </p>
        </div>

        <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {howItWorks.steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col justify-start items-start gap-3 md:gap-1.5 p-5 bg-white rounded-[24px] md:rounded-[32px] shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-700/10 rounded-xl md:rounded-2xl flex justify-center items-center mb-1">
                <span className="text-teal-800 text-3xl md:text-4xl font-extrabold font-['Manrope'] leading-10">
                  {step.id}
                </span>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <h3 className="self-stretch text-zinc-800 text-lg md:text-xl font-bold font-['Manrope'] leading-7">
                  {step.titlePrefix}
                  <span className="text-cyan-700">{step.titleHighlight}</span>
                  {step.titleSuffix || ''}
                </h3>
                <p className="self-stretch text-neutral-400 text-sm md:text-base font-medium font-['Manrope'] leading-6">
                  {step.description}
                </p>
              </div>
              <div className="self-stretch px-3 py-2 bg-cyan-700/10 rounded-xl md:rounded-2xl flex flex-col justify-center items-center mt-auto">
                <span className="text-zinc-700 text-xs md:text-sm font-normal font-['Manrope'] leading-6 text-center">
                  {step.callout}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. UPLOAD & SHARE ───────────────────────────────────────────────── */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-20 py-12 md:py-20 flex flex-col justify-center items-center gap-8">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-center items-center gap-10 xl:gap-20">

          {/* Upload card */}
          <div className="w-full lg:max-w-[688px] p-6 md:p-8 bg-white rounded-[24px] md:rounded-[32px] outline outline-1 outline-offset-[-1px] outline-white flex flex-col justify-start items-start gap-6 shadow-2xl shadow-slate-100 hover:scale-[1.01] transition-transform duration-500">
            <div className="self-stretch p-8 md:p-12 bg-gray-50 rounded-[24px] md:rounded-[32px] outline outline-2 outline-offset-[-2px] outline-neutral-300 flex flex-col justify-center items-center gap-2">
              <div className="pb-2 md:pb-4">
                <svg className="w-8 h-10 text-teal-800" fill="currentColor" viewBox="0 0 32 40">
                  <path d="M4 0h16l12 12v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z" opacity=".15"/>
                  <path d="M20 0l12 12H20V0z"/>
                </svg>
              </div>
              <p className="text-zinc-900 text-base font-bold font-['Manrope'] leading-6 text-center">
                {uploadFeature.uploadCard.title}
              </p>
              <p className="text-zinc-700 text-xs font-normal font-['Manrope'] leading-4 text-center">
                {uploadFeature.uploadCard.subtitle}
              </p>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch inline-flex justify-between items-start">
                <span className="text-zinc-500 text-xs font-bold font-['Manrope'] uppercase leading-4 tracking-wider">
                  {uploadFeature.uploadCard.filePreview.name}
                </span>
                <span className="text-zinc-500 text-xs font-bold font-['Manrope'] uppercase leading-4 tracking-wider">
                  {uploadFeature.uploadCard.filePreview.progressText}
                </span>
              </div>
              <div className="self-stretch h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-gradient-to-r from-teal-800 to-cyan-700 rounded-full transition-all duration-700"
                  style={{ width: `${uploadFeature.uploadCard.filePreview.progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:max-w-[512px] flex flex-col justify-start items-start gap-6 md:gap-8">
            <h2 className="self-stretch text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-bold font-['Manrope'] leading-tight">
              {uploadFeature.titleTop}<br />{uploadFeature.titleBottom}
            </h2>
            <div className="self-stretch flex flex-col justify-start items-start gap-5 md:gap-6">
              {uploadFeature.features.map((feature, idx) => (
                <div key={idx} className="self-stretch inline-flex justify-start items-start gap-4">
                  <div className="w-10 h-10 bg-teal-800/10 rounded-full flex justify-center items-center shrink-0">
                    <div className="w-4 h-4 bg-teal-800 rounded-sm" />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <h3 className="text-zinc-800 text-lg md:text-xl font-bold font-['Manrope'] leading-7">
                      {feature.title}
                    </h3>
                    <p className="text-stone-500 text-sm md:text-base font-medium font-['Manrope'] leading-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SMART BOOKING ────────────────────────────────────────────────── */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-20 py-12 md:py-20 flex flex-col justify-center items-center gap-8">
        <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-10 xl:gap-20">

          {/* Left text */}
          <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-6 md:gap-8">
            <h2 className="self-stretch text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-bold font-['Manrope'] leading-tight">
              {smartBooking.titleTop}<br />{smartBooking.titleBottom}
            </h2>
            <p className="self-stretch text-stone-500 text-base sm:text-xl font-medium font-['Manrope'] leading-7">
              {smartBooking.description}
            </p>
            <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
              {smartBooking.bulletPoints.map((point, idx) => (
                <div key={idx} className="self-stretch inline-flex justify-start items-center gap-3">
                  <div className="w-5 h-3 bg-teal-800 rounded-sm shrink-0" />
                  <span className="text-zinc-800 text-base md:text-xl font-bold font-['Manrope'] leading-7">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Booking Widget */}
          <div className="w-full lg:max-w-[605px] p-5 sm:p-8 bg-white rounded-[24px] md:rounded-[32px] outline outline-1 outline-offset-[-1px] outline-white flex flex-col justify-start items-start gap-5 md:gap-6 shadow-xl hover:-translate-y-1 transition-transform duration-500">
            {/* Header */}
            <div className="self-stretch inline-flex justify-between items-start">
              <h3 className="text-zinc-800 text-lg md:text-xl font-bold font-['Manrope'] capitalize leading-7">
                {smartBooking.widget.title}
              </h3>
              <span className="text-stone-500 text-sm font-medium font-['Manrope'] leading-5">
                {smartBooking.widget.date}
              </span>
            </div>

            {/* Tab switcher */}
            <div className="self-stretch rounded-[32px] outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-start items-center overflow-hidden">
              {smartBooking.widget.tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 px-2 sm:px-4 md:px-8 py-2 rounded-[32px] outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-1 overflow-hidden transition-all duration-200 ${
                    activeTab === idx
                      ? 'bg-cyan-700 outline-cyan-700'
                      : 'outline-transparent hover:bg-slate-50'
                  }`}
                >
                  <span
                    className={`text-center text-sm sm:text-base md:text-lg font-['Lato'] leading-7 transition-all duration-200 ${
                      activeTab === idx ? 'text-white font-bold' : 'text-stone-500 font-normal'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Slots grid – animated on tab change */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
              {/* Row 1: first 3 slots */}
              <div className="self-stretch grid grid-cols-3 gap-3 md:gap-6">
                {currentSlots.slice(0, 3).map((slot, idx) => (
                  <div
                    key={`${activeTab}-${idx}`}
                    className={`flex-1 px-2 sm:px-4 md:px-8 py-3 rounded-[16px] md:rounded-[20px] flex flex-col justify-center items-center gap-1 transition-all duration-200 ${slotClass(slot.status)}`}
                  >
                    <span className={`text-sm sm:text-base md:text-lg font-bold font-['Manrope'] leading-6 whitespace-nowrap ${slotTextClass(slot.status)}`}>
                      {slot.time}
                    </span>
                    <span className={`text-[9px] md:text-[10px] font-bold font-['Manrope'] uppercase leading-4 tracking-wide ${slotTextClass(slot.status)}`}>
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Row 2: next slots (up to 3) */}
              <div className="self-stretch grid grid-cols-3 gap-3 md:gap-6">
                {currentSlots.slice(3).map((slot, idx) => (
                  <div
                    key={`${activeTab}-r2-${idx}`}
                    className={`flex-1 px-2 sm:px-4 md:px-8 py-3 rounded-[16px] md:rounded-[20px] flex flex-col justify-center items-center gap-1 transition-all duration-200 ${slotClass(slot.status)}`}
                  >
                    <span className={`text-sm sm:text-base md:text-lg font-bold font-['Manrope'] leading-6 whitespace-nowrap ${slotTextClass(slot.status)}`}>
                      {slot.time}
                    </span>
                    <span className={`text-[9px] md:text-[10px] font-bold font-['Manrope'] uppercase leading-4 tracking-wide ${slotTextClass(slot.status)}`}>
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. HOSPITAL CONTROL TOWER ───────────────────────────────────────── */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-20 py-12 md:py-20 flex flex-col justify-center items-center gap-6 md:gap-8">
        {/* Heading */}
        <div className="self-stretch flex flex-col justify-center items-center gap-2 text-center px-4">
          <h2 className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl font-bold font-['Manrope'] leading-tight">
            {controlTower.title}
          </h2>
          <p className="text-stone-500 text-base sm:text-xl font-medium font-['Manrope'] leading-7 mt-1">
            {controlTower.subtitle}
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
          {controlTower.tableData.filters.map((filter, idx) => (
            <button
              key={idx}
              className={`px-5 sm:px-8 py-3 md:py-4 rounded-[999px] flex flex-col justify-center items-center transition-all text-sm md:text-base font-['Manrope'] ${
                filter.active
                  ? 'bg-cyan-700 text-white font-extrabold shadow-md'
                  : 'bg-gray-100 text-stone-500 font-semibold hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Table card */}
        <div className="w-full max-w-[1280px] bg-white rounded-[28px] md:rounded-[40px] shadow-sm outline outline-1 outline-offset-[-1px] outline-neutral-300/10 flex flex-col justify-start items-start overflow-hidden">

          {/* Teal header */}
          <div className="self-stretch p-4 md:p-6 bg-gradient-to-b from-teal-500 to-teal-600 border-b border-neutral-300/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex flex-col justify-start items-start gap-1">
              <h3 className="text-white text-lg md:text-2xl font-bold font-['Manrope'] leading-8">
                {controlTower.tableData.header.title}
              </h3>
              <p className="text-white text-sm md:text-base font-normal font-['Manrope'] leading-6">
                {controlTower.tableData.header.subtitle}
              </p>
            </div>
            <button className="px-4 py-2 rounded-full outline outline-1 outline-offset-[-1px] outline-white flex justify-start items-center gap-2 hover:bg-white/10 transition-colors self-start sm:self-auto">
              <svg className="w-3.5 h-2.5" fill="white" viewBox="0 0 14 10">
                <rect width="14" height="2" rx="1" />
                <rect y="4" width="10" height="2" rx="1" />
                <rect y="8" width="6" height="2" rx="1" />
              </svg>
              <span className="text-white text-sm font-bold font-['Manrope'] leading-5">Filter</span>
            </button>
          </div>

          {/* Scrollable table body */}
          <div className="self-stretch flex flex-col justify-start items-start overflow-x-auto">
            <div className="min-w-[580px] w-full">

              {/* Column headers */}
              <div className="self-stretch bg-zinc-100/50">
                <div className="inline-flex w-full justify-start items-start">
                  <div className="w-52 md:w-72 px-4 md:px-16 py-3 md:py-4">
                    <span className="text-neutral-900 text-sm md:text-base font-medium font-['Manrope'] leading-6">Patient Name</span>
                  </div>
                  <div className="w-20 md:w-48 p-3 md:p-4">
                    <span className="text-neutral-900 text-sm md:text-base font-medium font-['Manrope'] leading-6">Age</span>
                  </div>
                  <div className="flex-1 p-3 md:p-4">
                    <span className="text-neutral-900 text-sm md:text-base font-medium font-['Manrope'] leading-6">Tests</span>
                  </div>
                  <div className="flex-1 p-3 md:p-4 hidden sm:block">
                    <span className="text-neutral-900 text-sm md:text-base font-medium font-['Manrope'] leading-6">Contact</span>
                  </div>
                  <div className="w-24 md:flex-1 p-3 md:p-4">
                    <span className="text-neutral-900 text-sm md:text-base font-medium font-['Manrope'] leading-6">Priority</span>
                  </div>
                </div>
              </div>

              {/* Data rows */}
              <div className="self-stretch flex flex-col">
                {controlTower.tableData.patients.map((patient, idx) => {
                  const pStyle = priorityStyles[patient.priorityColor] || priorityStyles.green;
                  return (
                    <div
                      key={idx}
                      className="inline-flex w-full justify-start items-start hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                    >
                      {/* Name + avatar */}
                      <div className="w-52 md:w-72 px-4 md:px-16 py-4 md:py-5 flex flex-col justify-start items-start">
                        <div className="inline-flex justify-start items-center gap-2 md:gap-3">
                          <div className="w-9 h-9 md:w-10 md:h-10 bg-cyan-300 rounded-full flex justify-center items-center shrink-0">
                            <span className="text-teal-700 text-sm md:text-base font-bold font-['Manrope']">
                              {patient.initials}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-zinc-800 text-xs md:text-sm font-extrabold font-['Manrope'] leading-5">
                              {patient.name}
                            </span>
                            <span className="text-neutral-400 text-[10px] md:text-xs font-normal font-['Manrope'] leading-4">
                              ID: {patient.id}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Age */}
                      <div className="w-20 md:w-48 self-stretch px-3 md:px-4 py-2.5 flex flex-col justify-center items-start">
                        <span className="text-zinc-800 text-xs md:text-sm font-semibold font-['Manrope'] leading-5">
                          {patient.age}
                        </span>
                      </div>

                      {/* Tests */}
                      <div className="flex-1 self-stretch px-3 md:px-4 py-4 md:py-5 flex flex-col justify-start items-start">
                        <span className="text-zinc-800 text-xs md:text-sm font-medium font-['Manrope'] leading-5">
                          {patient.tests}
                        </span>
                      </div>

                      {/* Contact (hidden on xs) */}
                      <div className="flex-1 self-stretch px-3 md:px-4 py-4 md:py-5 flex-col justify-center items-start hidden sm:flex">
                        <span className="text-zinc-700 text-[10px] md:text-xs font-normal font-['Manrope'] leading-4">
                          {patient.phone}
                        </span>
                      </div>

                      {/* Priority */}
                      <div className="w-24 md:flex-1 self-stretch p-3 md:p-4 flex flex-col justify-center items-start">
                        <div className={`px-2 md:px-3 py-0.5 ${pStyle.wrapper} rounded-[32px] inline-flex justify-center items-center gap-2.5`}>
                          <span className={`${pStyle.text} text-[10px] md:text-xs font-medium font-['Manrope'] leading-4`}>
                            {patient.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="self-stretch p-4 bg-zinc-100/30 border-t border-neutral-300/10 flex flex-col justify-start items-center">
            <button className="text-center text-teal-800 text-sm font-bold font-['Manrope'] leading-5 hover:underline">
              {controlTower.tableData.viewAllText}
            </button>
          </div>
        </div>
      </section>

      {/* ── 6. CAMPAIGN MANAGER ─────────────────────────────────────────────── */}
      <section className="w-full max-w-[1440px] px-4 sm:px-8 md:px-20 py-12 md:py-20 flex flex-col justify-center items-center gap-6">
        <div className="self-stretch px-6 sm:px-10 md:px-20 py-10 md:py-14 relative bg-gradient-to-b from-purple-800 to-cyan-700 rounded-[28px] md:rounded-[40px] flex flex-col md:flex-row justify-between items-center overflow-hidden gap-10">
          {/* Blobs */}
          <div className="w-64 h-64 absolute left-[-48px] top-[-48px] bg-white/10 rounded-full blur-[32px] pointer-events-none" />
          <div className="w-96 h-96 absolute right-[-96px] top-9 bg-white/5 rounded-full blur-[20px] pointer-events-none" />

          {/* Text */}
          <div className="relative z-10 w-full max-w-xl flex flex-col justify-start items-start gap-5">
            <div className="px-4 py-1.5 bg-white/20 rounded-full outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-sm inline-flex">
              <span className="text-white text-xs font-black font-['Manrope'] uppercase leading-4 tracking-wider">
                {campaignManager.badge}
              </span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black font-['Manrope'] leading-tight">
              {campaignManager.titleTop}<br />{campaignManager.titleBottom}
            </h2>
            <p className="text-white/80 text-sm md:text-base font-medium font-['Manrope'] leading-6">
              {campaignManager.description.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </p>
          </div>

          {/* Promo card */}
          <div className="relative z-10 w-full max-w-xs">
            <div className="p-6 md:p-8 bg-white/95 rounded-[24px] md:rounded-[32px] outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[6px] flex flex-col justify-start items-start gap-2 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="self-stretch inline-flex justify-between items-start">
                <div className="px-3 py-1 bg-teal-800/10 rounded-full">
                  <span className="text-teal-800 text-xs font-extrabold font-['Manrope'] uppercase leading-4">
                    {campaignManager.promoCard.badge1}
                  </span>
                </div>
                <div className="px-3 py-1 bg-rose-200 rounded-full">
                  <span className="text-yellow-800 text-xs font-extrabold font-['Manrope'] uppercase leading-4">
                    {campaignManager.promoCard.badge2}
                  </span>
                </div>
              </div>
              <div className="self-stretch pt-3 md:pt-4">
                <h3 className="text-neutral-900 text-lg md:text-xl font-extrabold font-['Manrope'] leading-7">
                  {campaignManager.promoCard.title}
                </h3>
              </div>
              <div className="self-stretch">
                <p className="text-zinc-800 text-xs font-normal font-['Manrope'] leading-5">
                  {campaignManager.promoCard.descLine1}
                </p>
                <p className="text-zinc-800 text-xs font-normal font-['Manrope'] leading-5">
                  {campaignManager.promoCard.descLine2}
                </p>
              </div>
              <div className="self-stretch pt-3 md:pt-4 inline-flex justify-between items-center">
                <div>
                  <span className="text-teal-800 text-xl md:text-2xl font-extrabold font-['Manrope'] leading-8">
                    {campaignManager.promoCard.price}
                  </span>
                  <span className="ml-2 opacity-40 text-zinc-900 text-xs font-normal font-['Manrope'] line-through leading-4">
                    {campaignManager.promoCard.originalPrice}
                  </span>
                </div>
                <button className="w-10 h-10 md:w-11 md:h-11 bg-teal-800 rounded-full flex justify-center items-center hover:bg-teal-700 transition-colors shadow-lg">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-[1536px] px-4 sm:px-8 md:px-20 py-12 md:py-20 flex flex-col justify-center items-center gap-6 overflow-hidden">
        <div className="w-full max-w-[1130px] px-6 sm:px-12 md:px-24 py-14 md:py-20 relative bg-gradient-to-r from-teal-800 to-cyan-700 rounded-[28px] md:rounded-[40px] flex flex-col justify-start items-start overflow-hidden">
          <div className="w-96 h-96 absolute right-[-58px] top-[-192px] bg-white/10 rounded-full blur-[50px] pointer-events-none" />
          <div className="self-stretch flex flex-col justify-start items-center gap-6 md:gap-8">
            <h2 className="self-stretch text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Manrope'] leading-tight">
              {cta.title}
            </h2>
            <p className="w-full max-w-[672px] text-center text-white/80 text-base sm:text-xl font-normal font-['Manrope'] leading-7">
              {cta.description}
            </p>
            <button className="px-8 sm:px-12 py-4 md:py-5 bg-white rounded-[16px] md:rounded-[20px] shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <span className="text-teal-800 text-base md:text-lg font-extrabold font-['Manrope'] leading-7">
                {cta.buttonText}
              </span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Laboratory;
