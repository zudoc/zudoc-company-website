import React from 'react';
import { footerContent } from '../constants/footerContent';
import zudocIcon from '../assets/zudocIcon.svg';

function Footer() {
  return (
    <footer className="w-full px-6 py-12 bg-cyan-900 flex flex-col justify-center items-center gap-8 mt-auto z-10 relative">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 border-b border-white/10 pb-12">
        <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start max-w-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex justify-center items-center shadow-sm p-1">
              <img src={zudocIcon} alt="Zudoc" className="w-full h-full object-contain" />
            </div>
            <div className="text-white text-2xl font-extrabold">Zudoc</div>
          </div>
          <div className="text-white/70 text-base font-medium leading-relaxed">
            {footerContent.description}
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[1280px] flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center">
          <div className="text-white/60 text-sm">{footerContent.copyright}</div>
          <div className="flex gap-6">
            {footerContent.links.map((link, idx) => (
              <div key={idx} className="text-white/80 text-sm font-medium cursor-pointer hover:text-white transition-colors">{link}</div>
            ))}
          </div>
        </div>
        <div className="text-white/80 font-medium text-center">
          {footerContent.tagline}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
