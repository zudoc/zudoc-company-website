import React from 'react';
import { footerContent } from '../constants/footerContent';
import zudocIcon from '../assets/zudocIcon2.svg';

function Footer() {
  return (
    <footer className="w-full px-6 py-12 bg-primary flex flex-col justify-center items-center gap-8 mt-auto z-10 relative">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 border-b border-white/10 pb-12">
        <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start max-w-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-transparent rounded-lg flex justify-center items-center p-1">
              <img src={zudocIcon} alt="zudoc" className="w-full h-full object-contain" />
            </div>
            <div 
              className="text-white text-2xl"
              style={{ 
                fontFamily: "'Rival Sans', sans-serif", 
                fontWeight: 800, 
                textTransform: 'lowercase', 
                letterSpacing: '-0.02em' 
              }}
            >
              zudoc
            </div>
          </div>
          <div className="text-white/70 text-base font-medium leading-relaxed">
            {footerContent.description}
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex gap-4 mb-2">
          {footerContent.socials.filter(s => s.url).map((social, idx) => {
            let bgClass = "";
            let icon = null;

            switch (social.platform) {
              case 'facebook':
                bgClass = "bg-[#1877F2]";
                icon = (
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                );
                break;
              case 'instagram':
                bgClass = "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]";
                icon = (
                  <svg className="w-6 h-6 stroke-white fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                );
                break;
              case 'whatsapp':
                bgClass = "bg-[#25D366]";
                icon = (
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                );
                break;
              case 'linkedin':
                bgClass = "bg-[#0077B5]";
                icon = (
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                );
                break;
              case 'x':
                bgClass = "bg-black";
                icon = (
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                );
                break;
              default:
                bgClass = "bg-white/10";
            }

            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 ${bgClass} rounded-xl flex justify-center items-center shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95`}
              >
                {icon}
              </a>
            );
          })}
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
