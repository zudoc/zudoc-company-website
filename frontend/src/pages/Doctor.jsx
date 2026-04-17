import React from 'react'
import { doctorContent } from '../constants/doctorContent'

function Doctor() {
  const { hero, aiEngagement, schedule, treatmentJourney, postCare, controlTower, cta } = doctorContent

  return (
    <div className="relative w-full flex-1 flex flex-col items-center overflow-hidden font-['Manrope']">
      {/* Decorative Background Element like Home */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-200/20 rounded-full blur-[140px] -z-10 animate-pulse pointer-events-none" />

      <section className="w-full max-w-[1280px] px-6 md:px-10 py-10">
        <div className="rounded-[32px] flex flex-col lg:flex-row items-start gap-6">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Badge */}
            <div className="px-4 py-1.5 bg-gray-200 rounded-full inline-flex items-center gap-2 w-fit">
              <svg className="w-3 h-3 text-teal-800" viewBox="0 0 12 12" fill="currentColor">
                <circle cx="6" cy="6" r="5" />
              </svg>
              <span className="text-teal-800 text-sm font-bold uppercase leading-4">
                {hero.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.2] text-neutral-800">
              {hero.title.line1}<br />
              {hero.title.line2}<br />
              <span className="text-cyan-700">{hero.title.line3}</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-stone-500 font-medium leading-7 max-w-md">
              {hero.description}
            </p>

            {/* Button */}
            <div className="pt-4">
              <button className="px-7 py-3 bg-teal-700 hover:bg-teal-800 rounded-[45px] shadow-[0px_11.25px_7.5px_-2.25px_rgba(10,155,138,0.10)] text-white text-lg font-semibold leading-6 transition-all duration-300 cursor-pointer">
                {hero.buttonText}
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="flex-1 w-full max-w-[576px] relative">
            {/* Decorative blurs — purely visual, don't affect layout */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-800/5 to-cyan-700/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute left-[27%] top-[10%] w-72 h-44 bg-teal-300/10 rounded-full blur-[20px] pointer-events-none" />
            {/* Card in normal flow so it doesn't overlap siblings */}
            <div className="relative p-4 bg-white rounded-3xl shadow-[0px_44px_109px_0px_rgba(24,28,29,0.08)] border border-neutral-300/10">
              <img
                className="w-full h-auto rounded-2xl object-cover"
                src={hero.placeholderImage}
                alt="Doctor Dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AI-POWERED PATIENT ENGAGEMENT
          ═══════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] px-6 md:px-20 py-20 flex flex-col items-center gap-8">
        <div className="max-w-[697px] flex flex-col items-center gap-2 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[1.22]">
            {aiEngagement.title}
          </h2>
          <p className="text-xl text-stone-500 font-medium leading-7">
            {aiEngagement.subtitle}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiEngagement.cards.map((card, i) => (
            <div
              key={i}
              className={`p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border-l-[12px] ${i === 1 ? 'border-cyan-700' : 'border-transparent'} flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-teal-800/10 rounded-2xl flex items-center justify-center">
                {i === 0 ? (
                  <svg className="w-5 h-6 text-teal-800" viewBox="0 0 20 24" fill="currentColor">
                    <path d="M4 0C1.79 0 0 1.79 0 4v16c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V7l-7-7H4zm8 2l6 6h-4c-1.1 0-2-.9-2-2V2zm-7 9h10v2H5v-2zm0 4h10v2H5v-2z"/>
                  </svg>
                ) : i === 1 ? (
                  <svg className="w-5 h-6 text-teal-800" viewBox="0 0 20 24" fill="currentColor">
                    <path d="M1 12l4-4 3 6 4-10 3 7 4-3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-5 text-teal-800" viewBox="0 0 24 20" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="text-xl font-bold text-zinc-800 leading-7">{card.title}</h3>
                <p className="text-base text-neutral-400 font-medium leading-6">{card.description}</p>
              </div>

              {/* Tags */}
              {card.tags && (
                <div className="flex flex-wrap gap-2 pt-3.5">
                  {card.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-100 text-stone-500 text-sm font-semibold rounded-full leading-5">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Quote */}
              {card.quote && (
                <div className="p-3.5 bg-zinc-100 rounded-2xl">
                  <p className="text-teal-800 text-xs font-normal leading-5 text-center whitespace-pre-line">
                    {card.quote}
                  </p>
                </div>
              )}

              {/* Action */}
              {card.actionText && (
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-teal-800 text-sm font-bold leading-6">{card.actionText}</span>
                  <svg className="w-3.5 h-3.5 text-teal-800 group-hover:translate-x-1 transition-transform" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SCHEDULE & CALENDAR SYNC
          ═══════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] px-6 md:px-20 py-20 flex flex-col items-center gap-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[1.22]">
            {schedule.title}
          </h2>
          <p className="text-xl text-stone-500 font-medium leading-7">
            {schedule.subtitle}
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Schedule Management Card */}
          <div className="flex-1 max-w-[638px] p-6 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-gray-300/10 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl font-extrabold text-zinc-800 leading-10">{schedule.managementTitle}</h3>
                <p className="text-base text-stone-500 font-normal leading-6">{schedule.managementSubtitle}</p>
              </div>
              <div className="flex gap-3">
                <button className="w-8 h-8 p-3 bg-zinc-100 rounded-full flex items-center justify-center">
                  <svg className="w-1.5 h-2.5 text-zinc-900" viewBox="0 0 6 10" fill="currentColor"><path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="w-8 h-8 p-3 bg-zinc-100 rounded-full flex items-center justify-center">
                  <svg className="w-1.5 h-2.5 text-zinc-900" viewBox="0 0 6 10" fill="currentColor"><path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {schedule.appointments.map((apt, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl flex items-center gap-6 ${
                    apt.isActive
                      ? 'bg-cyan-700 text-white shadow-lg relative'
                      : 'bg-zinc-100'
                  }`}
                >
                  <div className="w-20 flex flex-col">
                    <span className={`text-sm font-extrabold leading-5 ${apt.isActive ? 'text-white' : 'text-cyan-700'}`}>
                      {apt.time}
                    </span>
                  </div>
                  <div className={`w-1 h-10 rounded-full ${apt.isActive ? 'bg-white/40' : i === 2 ? 'bg-slate-300' : 'bg-cyan-700'}`} />
                  <div className="flex-1 flex flex-col gap-1">
                    <span className={`text-base font-bold leading-6 ${apt.isActive ? 'text-white' : 'text-zinc-800'}`}>
                      {apt.name}
                    </span>
                    <span className={`text-xs font-medium leading-4 ${apt.isActive ? 'text-white/80' : 'text-stone-500'}`}>
                      {apt.type}
                    </span>
                  </div>
                  {apt.isActive && (
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-bold leading-4">
                      Active
                    </span>
                  )}
                  {!apt.isActive && (
                    <svg className="w-1 h-4 text-sky-900/40" viewBox="0 0 4 16" fill="currentColor"><circle cx="2" cy="2" r="1.5"/><circle cx="2" cy="8" r="1.5"/><circle cx="2" cy="14" r="1.5"/></svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Sync */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-extrabold text-zinc-800 leading-10">{schedule.syncTitle}</h3>
              <p className="text-base text-stone-500 font-normal leading-6">{schedule.syncSubtitle}</p>
            </div>

            <div className="flex flex-col gap-4">
              {schedule.syncOptions.map((opt, i) => (
                <div key={i} className="p-4 bg-zinc-100 rounded-2xl flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    {i === 0 ? (
                      <svg className="w-4 h-5 text-teal-800" viewBox="0 0 16 20" fill="currentColor"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zM4 8l2.5 2.5L12 5" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                    ) : i === 1 ? (
                      <svg className="w-5 h-4 text-cyan-700" viewBox="0 0 20 16" fill="currentColor"><rect width="20" height="16" rx="2" opacity="0.2"/><path d="M0 2l10 7 10-7" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                    ) : (
                      <svg className="w-6 h-4 text-slate-500" viewBox="0 0 24 16" fill="currentColor"><path d="M18 4a5 5 0 00-9.66-1.5A4 4 0 004 6.5 4 4 0 008 10h10a4 4 0 000-8z" opacity="0.4"/></svg>
                    )}
                    <span className="text-base font-bold text-zinc-900 leading-6">{opt.name}</span>
                  </div>
                  {/* Toggle */}
                  <div className={`w-12 h-6 px-1 rounded-full flex items-center ${opt.enabled ? 'bg-teal-800 justify-end' : 'bg-neutral-300 justify-start'}`}>
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TREATMENT JOURNEY & TESTIMONIAL
          ═══════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center gap-8 overflow-hidden">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row gap-14">
          {/* Left — Steps */}
          <div className="flex-1 flex flex-col gap-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[1.22]">
              {treatmentJourney.title}
            </h2>

            <div className="relative flex flex-col gap-8">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-[8px] w-0.5 h-80 bg-neutral-300" />

              {treatmentJourney.steps.map((step, i) => (
                <div key={i} className="flex gap-8 relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shrink-0 ${step.active ? 'bg-teal-800 text-white' : 'bg-neutral-300 text-zinc-900'}`}>
                    {step.number}
                  </div>
                  <div className={`flex-1 p-5 rounded-3xl flex flex-col gap-1 ${step.active ? 'bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' : 'bg-white border border-neutral-300'}`}>
                    <h3 className="text-base font-bold text-zinc-800 leading-6">{step.title}</h3>
                    <p className="text-sm text-stone-500 font-normal leading-5">{step.description}</p>
                  </div>
                </div>
              ))}

              {/* Fade overlay at bottom */}
              <div className="absolute left-0 bottom-0 w-full h-28 bg-gradient-to-b from-slate-50/0 to-slate-50 pointer-events-none" />
            </div>
          </div>

          {/* Right — Testimonial Card */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="p-12 relative bg-teal-800 rounded-3xl shadow-2xl flex flex-col gap-4 overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute right-[-10px] top-[-32px] w-32 h-32 bg-white/10 rounded-full" />

              <span className="text-6xl font-extrabold text-white leading-[60px]">
                {treatmentJourney.testimonial.score}
              </span>
              <span className="text-xl font-bold text-white leading-7">
                {treatmentJourney.testimonial.label}
              </span>

              <div className="pl-6 py-2 bg-white/5 rounded-[10px] border-l-4 border-white/75">
                <p className="text-lg font-medium text-white leading-6">
                  {treatmentJourney.testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
                  src={treatmentJourney.testimonial.image}
                  alt={treatmentJourney.testimonial.doctorName}
                />
                <span className="text-2xl font-bold text-white leading-8">
                  {treatmentJourney.testimonial.doctorName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EFFORTLESS POST-CARE
          ═══════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] px-6 md:px-20 py-20 flex flex-col items-center gap-8">
        <div className="w-full max-w-[1216px] flex flex-col lg:flex-row gap-14">
          {/* Left — Task Cards */}
          <div className="flex-1 relative flex flex-col">
            {/* Decorative blur */}
            <div className="absolute right-10 bottom-10 w-40 h-40 bg-emerald-800/10 rounded-full blur-[32px] pointer-events-none" />

            <div className="p-8 relative bg-gray-100 rounded-3xl border border-neutral-300/20 flex flex-col gap-6">
              {/* Shadow overlay */}
              <div className="absolute inset-0 bg-white/0 rounded-3xl shadow-xl pointer-events-none" />

              {postCare.tasks.map((task, i) => (
                <div
                  key={i}
                  className={`p-4 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-between items-center relative z-10 ${task.highlighted ? 'border-l-4 border-cyan-700' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    {i === 0 ? (
                      <svg className="w-5 h-5 text-cyan-700 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a2 2 0 002-2H8a2 2 0 002 2z"/></svg>
                    ) : (
                      <svg className="w-5 h-4 text-cyan-700 shrink-0" viewBox="0 0 20 16" fill="currentColor"><path d="M2 0h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm0 4v10h16V4l-8 5-8-5z"/></svg>
                    )}
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-zinc-800 leading-6">{task.title}</span>
                      <span className="text-xs text-stone-500 font-medium leading-4">{task.details}</span>
                    </div>
                  </div>
                  <span className="text-cyan-700 text-sm font-bold leading-5">{task.status}</span>
                </div>
              ))}

              <div className="py-3 bg-white/60 rounded-xl border border-cyan-700 flex justify-center items-center relative z-10">
                <span className="text-teal-800 text-sm font-bold leading-5">{postCare.moreTasksText}</span>
              </div>
            </div>
          </div>

          {/* Right — Description */}
          <div className="flex-1 flex flex-col gap-8 justify-center">
            <h2 className="text-4xl font-bold text-zinc-900 leading-10">
              {postCare.title}
            </h2>
            <p className="text-xl text-stone-500 font-medium leading-7">
              {postCare.description}
            </p>
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-emerald-800 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-emerald-800 text-xl font-bold leading-7">{postCare.badgeText}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTROL TOWER
          ═══════════════════════════════════════════ */}
      <section className="w-full max-w-[1440px] px-6 md:px-20 py-20 flex flex-col items-start gap-8">
        {/* Section Header */}
        <div className="w-full flex flex-col items-center gap-2 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[1.22]">
            {controlTower.title}
          </h2>
          <p className="text-xl text-stone-500 font-medium leading-7">
            {controlTower.subtitle}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Monthly Patient Growth */}
          <div className="p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-neutral-900 leading-7">{controlTower.growthTitle}</h3>
              <span className="text-xs font-bold text-green-600 leading-4">{controlTower.growthStat}</span>
            </div>
            <div className="h-48 flex items-end gap-2">
              {controlTower.growthBars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-b from-teal-500 to-teal-600 rounded-t-sm transition-all duration-500 hover:opacity-80"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>

          {/* Revenue + Patients Today */}
          <div className="flex flex-col gap-8">
            <div className="flex-1 p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col gap-4">
              <h3 className="text-xl font-bold text-neutral-900 leading-7">{controlTower.revenueTitle}</h3>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-cyan-700 leading-10">{controlTower.revenueAmount}</span>
                <span className="text-base font-medium text-zinc-800 leading-6">{controlTower.revenueSubtitle}</span>
              </div>
            </div>
            <div className="flex-1 p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-start gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-neutral-900 leading-7">{controlTower.patientsToday.title}</h3>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-cyan-700 leading-10">{controlTower.patientsToday.count}</span>
                  <span>
                    <span className="text-green-500 text-base font-medium leading-6">{controlTower.patientsToday.change}</span>
                    <span className="text-neutral-400 text-base font-medium leading-6"> {controlTower.patientsToday.changeLabel}</span>
                  </span>
                </div>
              </div>
              <div className="px-1.5 py-1 bg-cyan-700/10 rounded-lg flex flex-col items-center gap-1">
                <span className="text-zinc-800 text-xs font-semibold leading-4">Peak hour</span>
                <span className="text-cyan-700 text-sm font-bold leading-5">{controlTower.patientsToday.peakHour}</span>
              </div>
            </div>
          </div>

          {/* All Patients */}
          <div className="p-6 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col gap-2">
            <h3 className="text-xl font-bold text-neutral-900 leading-7">{controlTower.patientsTitle}</h3>
            <div className="flex flex-col gap-4">
              {controlTower.patients.map((p, i) => (
                <div key={i} className={`flex justify-between items-center pb-3 ${i < controlTower.patients.length - 1 ? 'border-b border-gray-300/10' : ''}`}>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-zinc-800 leading-5">{p.name}</span>
                    <span className="text-xs text-stone-500 font-medium leading-4">{p.time}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold leading-4 ${p.statusVariant === 'critical' ? 'bg-cyan-700/10 text-zinc-800' : 'bg-gray-200 text-zinc-800'}`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="py-3 rounded-xl border border-cyan-700 flex justify-center items-center hover:bg-cyan-50 transition-colors cursor-pointer">
              <span className="text-cyan-700 text-sm font-bold leading-5">{controlTower.directoryText}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════ */}
      <section className="w-full max-w-[1536px] px-6 md:px-20 py-20 flex flex-col items-center gap-6 overflow-hidden">
        <div className="w-full max-w-[1130px] px-8 md:px-24 py-20 relative bg-gradient-to-r from-teal-800 to-cyan-700 rounded-[40px] flex flex-col items-center gap-8 overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute right-[-50px] top-[-192px] w-96 h-96 bg-white/10 rounded-full blur-[50px] pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-bold text-white text-center leading-tight md:leading-[84px] max-w-[822px]">
            {cta.title}
          </h2>

          <p className="text-xl text-white/80 font-normal text-center max-w-[529px] leading-7 pb-4">
            {cta.description}
          </p>

          <button className="px-12 py-5 relative bg-white rounded-[20px] shadow-2xl text-teal-800 text-lg font-extrabold leading-7 hover:scale-105 transition-transform duration-300 cursor-pointer">
            {cta.buttonText}
          </button>
        </div>
      </section>
    </div>
  )
}

export default Doctor
