'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import Navigation from '@/components/Navigation';
import AppLogic from '@/components/AppLogic';
import { useState } from 'react';

// Helper Components
const ServiceCard = ({ title, description, icon, className = "", delay = "0s" }: any) => (
  <div
    className={`reveal service-card group bg-gradient-to-br from-cool-600 to-cool-700/80 rounded-2xl p-8 cursor-pointer shadow-xl shadow-black/10 border border-white/5 hover:border-cool-500/20 ${className}`}
    style={{ transitionDelay: delay }}
  >
    <div className="service-icon w-14 h-14 rounded-xl bg-black/10 border border-black/5 flex items-center justify-center mb-6">
      <Icon icon={icon} className="text-2xl text-white" />
    </div>
    <h3 className="font-syne font-bold text-2xl text-white mb-3">{title}</h3>
    <div className="text-sm text-white/70 leading-relaxed mb-4">{description}</div>
  </div>
);

const ReviewCard = ({ name, location, initials, text, delay = "0s" }: any) => (
  <div className="reveal bg-white/[0.02] border border-white/5 rounded-2xl p-8" style={{ transitionDelay: delay }}>
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Icon key={i} icon="lucide:star" className="text-amber-400" />
      ))}
    </div>
    <p className="text-sm text-neutral-300 leading-relaxed mb-6">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-cool-500/10 flex items-center justify-center text-cool-400 font-syne font-bold text-sm">
        {initials}
      </div>
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-neutral-500">{location}</div>
      </div>
    </div>
  </div>
);

const BrandLogo = ({ src, alt, delay = "0s", className = "" }: any) => (
  <div
    className={`reveal h-10 md:h-12 flex items-center justify-center transition-all duration-300 bg-white rounded-xl p-2 hover:scale-110 hover:shadow-lg hover:shadow-cool-500/10 cursor-pointer ${className}`}
    style={{ transitionDelay: delay }}
  >
    <Image
      src={src}
      alt={alt}
      width={120}
      height={48}
      className="h-full w-auto object-contain"
    />
  </div>
);

const SOCIAL_LINKS = [
  { name: 'facebook', icon: 'lucide:facebook', color: '#1877F2', url: "https://www.facebook.com/share/1EBadZfD3Q/" },
  { name: 'instagram', icon: 'lucide:instagram', color: '#E4405F', url: "https://www.instagram.com/expertcool005?utm_source=qr&igsh=ZDZ4djhlZ3FvbHRl" },
  { name: 'youtube', icon: 'lucide:youtube', color: '#FF0000', url: "https://youtube.com/@expertcool-b3r?si=QKRKjQYepHEBtNvj" },
  { name: 'tiktok', icon: 'ic:baseline-tiktok', color: '#ffffff', url: "https://www.tiktok.com/@expert.cool8?_r=1&_t=ZS-95jwpl8lFOX" }
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    let waMessage = `Assalam o Alaikum! I'm ${formData.name}.`;
    if (formData.service) waMessage += `\nService: ${formData.service.replace('-', ' ')}`;
    if (formData.message) waMessage += `\nProblem: ${formData.message}`;
    waMessage += `\nPhone: ${formData.phone}`;

    const waURL = `https://wa.me/923017067764?text=${encodeURIComponent(waMessage)}`;
    window.open(waURL, '_blank');
  };

  return (
    <main className="font-inter">
      <AppLogic />
      <Navigation />

      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cool-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cool-400/5 rounded-full blur-[100px]"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-white/[0.03] rounded-full animate-spin-slow pointer-events-none"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-cool-500/[0.05] rounded-full animate-spin-slow pointer-events-none"
          style={{ animationDirection: 'reverse', animationDuration: '10s' }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <div className="animate-fade-in flex items-center justify-center gap-8 mb-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                className="group relative"
                title={`Follow us on ${social.name}`}
              >
                <div className="absolute -inset-2 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Icon
                  icon={social.icon}
                  className="text-xl text-neutral-500 transition-all duration-300 group-hover:scale-125"
                  style={{ color: 'var(--icon-color)' } as any}
                  onMouseEnter={(e) => (e.currentTarget.style.color = social.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                />
              </a>
            ))}
          </div>

          <div className="animate-fade-in inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-full px-5 py-2 mb-8">
            <Icon icon="lucide:snowflake" className="text-cool-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-neutral-400">Serving Faisalabad Since 1999</span>
          </div>

          <h1 className="animate-fade-in-d1 font-syne font-bold text-4xl md:text-5xl tracking-tighter leading-[0.95] mb-6">
            <span className="block text-cool-400 mb-2">Expert Cool</span>
            <span className="block text-white">Professional AC Services in</span>
            <span className="block bg-gradient-to-r from-cool-300 via-cool-400 to-cool-500 bg-clip-text text-transparent">Faisalabad</span>
          </h1>

          <p className="animate-fade-in-d2 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-cool-400">
            We deal in Air Conditioning (Wall Mounted, Floor Standing, and Ceiling Hanging) Installation, Service, Gas Filling, and PCB Repairing.
            We also provide services for Refrigeration, Water Chillers, Dispensers, and Home Appliances in Faisalabad.
          </p>

          <div className="animate-fade-in-d3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="tel:+923017067764" className="cta-btn w-full sm:w-auto flex items-center justify-center gap-3 bg-cool-500 text-black text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-cool-400 transition-colors duration-300 animate-pulse-glow">
              Call Now
              <Icon icon="lucide:phone" className="text-lg" />
            </a>
            <a href="#services" className="w-full sm:w-auto flex items-center justify-center gap-3 border border-white/10 text-white text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
              <Icon icon="lucide:arrow-down" className="text-lg" />
              Our Services
            </a>
          </div>

          <div className="animate-fade-in-d4 flex flex-wrap items-center justify-center gap-8 text-neutral-500 mb-5">
            {[
              { icon: 'lucide:shield-check', label: 'Verified Expert' },
              { icon: 'lucide:clock', label: 'Same Day Service' },
              { icon: 'lucide:star', label: '5-Star Rated' },
              { icon: 'lucide:wallet', label: 'Affordable Prices' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon icon={item.icon} className="text-cool-400" />
                <span className="text-xs uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="relative border-y border-white/5 py-4 overflow-hidden bg-white/[0.01]">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {[
                'AC Installation', 'PCB Repairing', 'Gas Filling',
                'Refrigeration & Deep Freezer', 'Water Chillers',
                'Water Dispensers', 'Home Appliances'
              ].map((text, j) => (
                <div key={j} className="flex items-center">
                  <span className="mx-8 text-xs uppercase tracking-[0.3em] text-neutral-400">{text}</span>
                  <span className="mx-4 text-cool-300">❄</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { target: '5000', label: 'ACs Serviced' },
            { target: '25', label: 'Years Experience' },
            { target: '3500', label: 'Happy Customers' },
            { isSpecial: true, value: <>24<span className="text-cool-400">/7</span></>, label: 'Available' }
          ].map((stat, i) => (
            <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className={`font-syne font-bold text-3xl md:text-5xl tracking-tighter ${stat.isSpecial ? 'text-white' : 'text-cool-400 counter'}`} data-target={stat.target}>
                {stat.isSpecial ? stat.value : '0'}
              </div>
              <div className="text-xs uppercase tracking-widest text-neutral-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-cool-400 mb-4">Our Expertise</span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-4">Professional Services</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Providing high-quality cooling and appliance solutions across Faisalabad with guaranteed satisfaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Air Conditioning"
              icon="lucide:wind"
              className="col-span-1 md:col-span-2 lg:col-span-1"
              description={
                <>
                  Comprehensive solutions for all AC types:
                  <span className="block mt-2 font-medium text-white/80">• Wall Mounted AC</span>
                  <span className="block font-medium text-white/80">• Floor Standing AC</span>
                  <span className="block font-medium text-white/80">• Ceiling Hanging AC</span>
                  <span className="block mt-4 text-white font-semibold italic">Installation • Service • Gas Filling • PCB Repairing</span>
                </>
              }
            />
            <ServiceCard
              title="Refrigeration & Deep Freezer"
              icon="lucide:refrigerator"
              delay="0.05s"
              description={
                <>
                  Professional repair and maintenance for refrigerators and freezers:
                  <span className="block mt-2 font-medium text-white/80">• Gas Filling & Leakage Solutions</span>
                  <span className="block font-medium text-white/80">• Compressor Exchange</span>
                  <span className="block font-medium text-white/80">• Freezer Exchange & Repair</span>
                </>
              }
            />
            <ServiceCard
              title="Water Chillers & Dispensers"
              icon="lucide:thermometer-snowflake"
              delay="0.1s"
              description="Specialized repair and service for industrial and commercial water chillers. Quick diagnosis and repair of all water dispenser brands. Hot and cold function repairs, gas charging, and sanitization."
            />
            <ServiceCard
              title="Home Appliances"
              icon="lucide:home"
              delay="0.15s"
              description="One-stop solution for all home appliance repairs. Washing machines, microwave ovens, and other electrical equipment servicing."
            />
            <ServiceCard
              title="Sale & Purchase"
              icon="lucide:shopping-bag"
              delay="0.2s"
              description="Buy or sell your AC, Fridge, or other appliances at the best prices. New and used units available with warranty and installation services."
            />
            <div className="reveal bg-gradient-to-br from-cool-600 to-cool-800 rounded-2xl p-8 flex flex-col justify-between" style={{ transitionDelay: '0.3s' }}>
              <div>
                <h3 className="font-syne font-bold text-2xl text-black mb-4">Need Urgent Help?</h3>
                <p className="text-sm text-black/70 mb-6 font-medium">We offer <span className="text-white"> 24/7 </span> emergency repair services across Faisalabad. Just a click away!</p>
              </div>
              <a href="tel:+923017067764" className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-900 transition-colors">
                <Icon icon="lucide:phone" />
                Contact Technician
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto relative">
          <div className="reveal text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-cool-400 mb-4">Why Choose Us</span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-4">Faisalabad Trusts Us</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Here's why thousands of customers in Faisalabad choose Expert Cool for their cooling needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Same Day Service', icon: 'lucide:zap', text: 'Call us in the morning, get your AC fixed by evening. We prioritize urgent requests in Faisalabad.' },
              { title: 'Affordable Pricing', icon: 'lucide:badge-indian-rupee', text: 'No hidden charges, no overpricing. We offer the most competitive rates in Faisalabad market.', delay: '0.05s' },
              { title: 'Experienced Technician', icon: 'lucide:award', text: '25+ years of hands-on experience with all AC brands — Haier, Dawlance, TCL, Gree, Orient and more.', delay: '0.1s' },
              { title: 'Verified Support', icon: 'lucide:shield-check', text: 'Fully certified and professional team dedicated to providing a hassle-free service experience.', delay: '0.15s' },
              { title: 'All Faisalabad Covered', icon: 'lucide:map', text: 'We serve all areas — Ghulam Muhammad Abad, Madina Town, Peoples Colony, D-Type, Sattellite Town, and more.', delay: '0.2s' },
              { title: '24/7 Availability', icon: 'lucide:clock', text: "AC stopped working at midnight? No worries. We're just a call away, day or night.", delay: '0.25s' }
            ].map((feature, i) => (
              <div key={i} className="reveal flex gap-6 bg-white/[0.02] border border-white/5 rounded-2xl p-8" style={{ transitionDelay: feature.delay }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cool-500/10 flex items-center justify-center">
                  <Icon icon={feature.icon} className="text-xl text-cool-400" />
                </div>
                <div>
                  <h3 className="font-syne font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP & PROCESS SECTION (SIDE-BY-SIDE) */}
      <section id="process" className="relative py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">

          {/* Unified Header */}
          <div className="reveal text-center mb-20">
            <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#0ea5e9] mb-4">Coverage & Service</span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4">Faisalabad's Most Trusted Network</h2>
            <p className="text-[#737373] text-lg leading-relaxed max-w-2xl mx-auto">Serving every neighborhood from Gulberg to Madina Town with a fast, transparent 3-step process.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Coverage map */}
            <div className="reveal">
              <div className="map-wrapper border border-[#0ea5e9]/15 rounded-[20px] overflow-hidden bg-[#0a0a0a]">
                <svg width="100%" viewBox="0 0 680 520" role="img" xmlns="http://www.w3.org/2000/svg">
                  <title>Faisalabad service coverage map</title>
                  <desc>Map showing Expert Cool AC service coverage across popular areas of Faisalabad</desc>

                  <defs>
                    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#0ea5e9" strokeWidth="0.25" opacity="0.15" />
                    </pattern>
                  </defs>

                  {/* Background */}
                  <rect x="0" y="0" width="680" height="520" fill="#0a0a0a" />
                  <rect x="0" y="0" width="680" height="520" fill="url(#grid)" />

                  {/* Coverage zone polygon */}
                  <polygon
                    points="340,58 460,80 548,148 572,260 548,368 460,440 340,462 220,440 132,368 108,260 132,148 220,80"
                    fill="#0ea5e9" fillOpacity="0.06"
                    stroke="#0ea5e9" strokeWidth="1.2" strokeOpacity="0.35"
                    strokeDasharray="7 5" />

                  {/* Inner glow rings */}
                  <circle cx="340" cy="260" r="70" fill="#0ea5e9" fillOpacity="0.07" />
                  <circle cx="340" cy="260" r="40" fill="#0ea5e9" fillOpacity="0.07" />

                  {/* Center pin — Faisalabad main */}
                  <g className="animate-float" style={{ transformOrigin: '340px 220px' }}>
                    <circle className="animate-ping-slow" cx="340" cy="220" r="26" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.5" />
                    <circle cx="340" cy="220" r="18" fill="#0ea5e9" fillOpacity="0.15" stroke="#0ea5e9" strokeWidth="1.2" strokeOpacity="0.7" />
                    <path d="M340 209 L337 214 L331 214 L336 218 L334 224 L340 220 L346 224 L344 218 L349 214 L343 214 Z"
                      fill="#0ea5e9" opacity="0.9" />
                    <text x="340" y="248" textAnchor="middle"
                      fontFamily="'Syne',sans-serif" fontWeight="700" fontSize="11"
                      fill="#0ea5e9" opacity="0.9" letterSpacing="2">FAISALABAD</text>
                  </g>

                  {/* Area pins */}
                  {[
                    { cx: 230, cy: 158, label: 'GULBERG', delay: '0s' },
                    { cx: 450, cy: 158, label: 'D-TYPE COLONY', delay: '.4s' },
                    { cx: 160, cy: 265, label: 'PEOPLES COLONY', delay: '.8s' },
                    { cx: 520, cy: 265, label: 'MADINA TOWN', delay: '1.2s' },
                    { cx: 230, cy: 355, label: 'GM ABAD', delay: '1.6s' },
                    { cx: 450, cy: 355, label: 'SATELLITE TOWN', delay: '2s' },
                    { cx: 340, cy: 410, label: 'SARGODHA ROAD', delay: '2.4s' }
                  ].map((area, i) => (
                    <g key={i} className="area-dot" opacity="0.85">
                      <circle className="animate-ping-slow" cx={area.cx} cy={area.cy} r="16" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.4" style={{ animationDelay: area.delay }} />
                      <circle cx={area.cx} cy={area.cy} r="10" fill="#0a0a0a" stroke="#38bdf8" strokeWidth="1" />
                      <path d={`M${area.cx} ${area.cy - 6} L${area.cx - 1.7} ${area.cy - 2.7} L${area.cx - 5.4} ${area.cy - 2.7} L${area.cx - 2.6} ${area.cy - 0.4} L${area.cx - 3.7} ${area.cy + 3.1} L${area.cx} ${area.cy + 0.8} L${area.cx + 3.7} ${area.cy + 3.1} L${area.cx + 2.6} ${area.cy - 0.4} L${area.cx + 5.4} ${area.cy - 2.7} L${area.cx + 1.7} ${area.cy - 2.7} Z`} fill="#38bdf8" opacity="0.85" />
                      <text x={area.cx} y={area.cy + 20} textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#7dd3fc" letterSpacing="1.5" fontWeight="500">{area.label}</text>
                    </g>
                  ))}

                  <rect x="20" y="20" width="152" height="22" rx="11" fill="#0ea5e9" fillOpacity="0.1" stroke="#0ea5e9" strokeWidth="0.6" strokeOpacity="0.4" />
                  <circle cx="34" cy="31" r="3" fill="#0ea5e9" opacity="0.8" />
                  <path d="M34 28 L33.2 29.6 L31.4 29.6 L32.8 30.6 L32.2 32.4 L34 31.3 L35.8 32.4 L35.2 30.6 L36.6 29.6 L34.8 29.6 Z" fill="#0ea5e9" />
                  <text x="44" y="35" fontFamily="sans-serif" fontSize="10" fill="#7dd3fc" letterSpacing="1.8" fontWeight="500">SERVICE COVERAGE</text>

                  <line x1="108" y1="260" x2="65" y2="260" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" />
                  <line x1="572" y1="260" x2="615" y2="260" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" />
                  <line x1="340" y1="58" x2="340" y2="20" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" />
                  <line x1="340" y1="462" x2="340" y2="500" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>

            {/* Right: Process section */}
            <div className="reveal pt-4" id="process">
              <div className="space-y-8">
                {[
                  { n: 1, title: 'Call or WhatsApp', text: 'Tell us your problem — AC not cooling, gas issue, or anything else. We are available 24/7 in Faisalabad.' },
                  { n: 2, title: 'Free Inspection', text: 'Our expert technician visits your location, diagnose the issue, and provides an honest upfront quote.' },
                  { n: 3, title: 'Get It Fixed', text: 'We repair on the spot using genuine parts. Pay only when you are 100% satisfied with the work.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cool-500 text-black font-syne font-bold text-lg flex items-center justify-center transition-transform group-hover:scale-110">
                      {step.n}
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-xl text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center lg:text-left">
                <a href="tel:+923017067764" className="cta-btn inline-flex items-center gap-3 bg-cool-500 text-black text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-cool-400 transition-colors duration-300">
                  <Icon icon="lucide:phone" className="text-lg" />
                  Start Now — It's Free
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="relative py-16 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-cool-400 mb-4">Our Work</span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-4">Showcase Gallery</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Take a look at some of our recent AC installations and repair work across Faisalabad.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px] max-w-6xl mx-auto">
            {[
              { num: 1, span: "col-span-1 row-span-1" },
              { num: 2, span: "col-span-2 row-span-2" },
              { num: 3, span: "col-span-1 row-span-1" },
              { num: 4, span: "col-span-1 row-span-1" },
              { num: 5, span: "col-span-1 row-span-2" },
              { num: 6, span: "col-span-1 row-span-1" }
            ].map((item, i) => (
              <div
                key={item.num}
                className={`reveal group relative rounded-xl overflow-hidden border border-white/5 bg-neutral-900 ${item.span}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={`/images/image${item.num}.png`}
                    alt={`Service Showcase ${item.num}`}
                    fill
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-[10px] uppercase tracking-widest text-cool-400 font-bold mb-1">Project {item.num}</div>
                      <div className="text-white font-syne font-semibold text-xs">AC Service</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="relative py-16 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="reveal text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-cool-400 mb-4">Testimonials</span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-4">What Customers Say</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Real reviews from real customers across Faisalabad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard
              initials="AH"
              name="Ahmed Hassan"
              location="Peoples Colony, FSD"
              text="My AC was not cooling at all. Called Expert Cool and they came within 1 hour. Gas was low, they filled it and cleaned the whole unit. Now it's running like new!"
            />
            <ReviewCard
              initials="SK"
              name="Sana Khan"
              location="Madina Town, FSD"
              delay="0.05s"
              text="Best fridge repair service in Faisalabad! My Dawlance fridge compressor was making noise. They replaced it at a very reasonable price. Highly recommend."
            />
            <ReviewCard
              initials="MR"
              name="Muhammad Rizwan"
              location="Ghulam Muhammad Abad, FSD"
              delay="0.1s"
              text="Bought a used inverter AC from them at great price. They installed it perfectly and gave 15 days checking warranty. Very professional and trustworthy."
            />
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="relative py-16 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Brands We Service</span>
          </div>
          <div className="reveal flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <BrandLogo src="/images/Haier-Logo.wine.png" alt="Haier" delay="0.05s" />
            <BrandLogo src="/images/dawlance-logo.png" alt="Dawlance" delay="0.1s" />
            <BrandLogo src="/images/TCL_Corporation-Logo.wine.png" alt="TCL" delay="0.15s" />
            <BrandLogo src="/images/gree.png" alt="Gree" delay="0.2s" />
            <BrandLogo src="/images/orient-logo.svg" alt="Orient" delay="0.25s" />
            <BrandLogo src="/images/daikin-removebg-preview.png" alt="Daikin" delay="0.3s" />
            <BrandLogo src="/images/Acson_International_logo.png" alt="Acson" delay="0.35s" />
            <BrandLogo src="/images/kenwood_190x@2x.avif" alt="Kenwood" delay="0.4s" />
            <BrandLogo src="/images/pel.avif" alt="Pel" delay="0.45s" />
            <BrandLogo src="/images/300_186_1.avif" alt="Samsung" delay="0.5s" className="p-0 bg-transparent" />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-cool-400 mb-4">Get In Touch</span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-4">Contact Us Now</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Don't suffer in the heat. Reach out and we'll be at your door in no time.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="reveal space-y-4">
              <form onSubmit={handleFormSubmit} className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-3">
                <h3 className="font-syne font-semibold text-lg mb-2">Send a Quick Message</h3>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cool-500/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cool-500/50 transition-colors"
                />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-400 focus:outline-none focus:border-cool-500/50 transition-colors appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23737373' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="" disabled>Select Service</option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="gas-filling">AC Gas Filling</option>
                  <option value="fridge-repair">Fridge Repair</option>
                  <option value="cooler-repair">Water Cooler Repair</option>
                  <option value="maintenance">AC Maintenance</option>
                  <option value="sale-purchase">Sale & Purchase</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Describe your problem..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cool-500/50 transition-colors resize-none"
                ></textarea>
                <button type="submit" className="cta-btn w-full flex items-center justify-center gap-2 bg-cool-500 text-black text-sm font-semibold uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-cool-400 transition-colors duration-300">
                  <Icon icon="lucide:send" />
                  Send Message
                </button>
              </form>
              <a href="tel:+923017067764" className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-4 hover:bg-cool-500/5 hover:border-cool-500/20 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-cool-500/10 border border-cool-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cool-500/20 transition-colors">
                  <Icon icon="lucide:phone" className="text-xl text-cool-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">Phone / WhatsApp</div>
                  <div className="text-base font-medium group-hover:text-cool-400 transition-colors">+92 301 7067764</div>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                <div className="w-11 h-11 rounded-xl bg-cool-500/10 border border-cool-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:map-pin" className="text-xl text-cool-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">Location</div>
                  <div className="text-base font-medium">Faisalabad, Pakistan</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                <div className="w-11 h-11 rounded-xl bg-cool-500/10 border border-cool-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:clock" className="text-xl text-cool-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">Working Hours</div>
                  <div className="text-base font-medium">24/7 — Always Available</div>
                </div>
              </div>


            </div>

            <div className="reveal flex flex-col" style={{ transitionDelay: '0.15s' }}>
              <div className="rounded-2xl overflow-hidden border border-white/5 h-full min-h-[400px]">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41415.513531426506!2d73.0941252791016!3d31.441259199999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269ec1283d4df%3A0x37d4691b1da2ca51!2sAc%20Technician%20Expert%20Cool!5e1!3m2!1sen!2s!4v1776838805282!5m2!1sen!2s"
                  width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29394.76696952026!2d73.1107093374958!3d31.42501351523218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269ec1283d4df%3A0x37d4691b1da2ca51!2sAc%20Technician%20Expert%20Cool!5e0!3m2!1sen!2s!4v1776877347082!5m2!1sen!2s"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <p className="flex items-center justify-center gap-2 text-xs text-neutral-500 text-center mt-4">
                <Icon icon="lucide:map-pin" className="text-cool-400" />
                Kashmir Pull, Amin Town, Faisalabad, Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-white/5 flex items-center justify-center relative overflow-hidden p-1.5 shadow-lg shadow-white/5">
                  <img src="/images/logo.png" alt="Expert Cool Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-syne font-bold text-lg tracking-tight text-cool-400">EXPERT COOL</span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">Professional AC technician and appliance repair services in Faisalabad. Trusted by thousands for over 25 years.</p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    style={{ color: social.color }}
                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 shadow-lg"
                  >
                    <Icon icon={social.icon} className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="space-y-3">
                {[
                  { name: 'Services', id: 'services' },
                  { name: 'Why Us', id: 'why-us' },
                  { name: 'Gallery', id: 'gallery' },
                  { name: 'Process', id: 'process' },
                  { name: 'Reviews', id: 'reviews' },
                  { name: 'Contact Us', id: 'contact' }
                ].map(link => (
                  <a key={link.id} href={`#${link.id}`} className="block text-sm text-neutral-500 hover:text-white transition-colors">{link.name}</a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-syne font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
              <div className="space-y-3">
                {[
                  'AC Repair & Installation', 'AC Gas Filling', 'Fridge Repair',
                  'Water Cooler Service', 'AC Sale & Purchase', 'Annual Maintenance'
                ].map(service => (
                  <span key={service} className="block text-sm text-neutral-500">{service}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-600">© {new Date().getFullYear()} AC Technician Expert Cool. All rights reserved. Faisalabad, Pakistan.</p>
            <p className="text-xs text-neutral-600"> Develope By <a href="https://sajidhameedportfolio.vercel.app/" target="_blank" className='text-cool-400'>Sajid Hameed</a></p>
            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <Icon icon="lucide:snowflake" className="text-cool-500/50" />
              <span>Keeping Faisalabad Cool Since 1999</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WhatsApp BUTTON */}
      <a
        href="https://wa.me/923017067764"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-cool-400 hover:scale-110 transition-all duration-300 animate-pulse-glow"
        title="Chat on WhatsApp"
      >
        <Icon icon="ic:baseline-whatsapp" className="text-3xl text-white" />
      </a>
    </main>
  );
}
