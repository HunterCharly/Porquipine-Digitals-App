import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import * as LucideIcons from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeadGen = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using the service ID provided. 
    // You will need to replace 'YOUR_TEMPLATE_ID' and 'YOUR_PUBLIC_KEY' with actual values from EmailJS.
    emailjs.send(
      'service_8ziulu2', 
      'template_kd1ktqv', 
      { 
        user_email: email,
        message: 'New lead from Porquipine Digitals platform.'
      }, 
      'oiA07oxzzeReFOtCz'
    )
    .then((result) => {
        alert(`Thank you for reaching out to Porquipine Digitals ${email}`);
        setEmail('');
    })
    .catch((error) => {
        alert('Error initializing connection. Please verify your EmailJS Template ID and Public Key in App.jsx.');
        console.error(error);
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  const portfolio = [
    { title: "Web Architecture & UX", category: "Web Development", image: "/images/web-dev.png" },
    { title: "Growth & Campaigns", category: "Digital Marketing", image: "/images/marketing.png" },
    { title: "Corporate Identity", category: "Brand Building", image: "/images/branding.png" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-yellow-500/20">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none mix-blend-screen">
          <div className="w-[80vw] h-[80vw] max-w-4xl max-h-4xl rounded-full border border-yellow-500/30 animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute w-[60vw] h-[60vw] max-w-2xl max-h-2xl rounded-full border border-dashed border-yellow-500/40 animate-[spin_40s_linear_infinite_reverse]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-yellow-500 text-xs font-mono tracking-[0.2em] uppercase">Global Operations Active</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-600">
            Architecting <br/>
            <span className="text-yellow-500 bg-none bg-clip-border [text-shadow:0_0_30px_rgba(234,179,8,0.3)]">Digital Dominance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 font-mono leading-relaxed text-balance">
            An end-to-end algorithmic approach to brand building, operations, and global digital presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md mx-auto justify-center">
            <a href="#services" className="group relative px-8 py-4 bg-yellow-500 text-black font-bold uppercase tracking-widest text-sm overflow-hidden text-center">
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">Initialize Core <LucideIcons.ArrowRight className="w-4 h-4" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
             <div>
                <h2 className="text-sm text-yellow-500 font-mono tracking-[0.3em] uppercase mb-4">Service Modules</h2>
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Strategic Implementation</h3>
             </div>
             <p className="text-neutral-400 font-mono text-sm max-w-md lg:justify-self-end">Our comprehensive execution modules are engineered to scale your digital presence globally with minimal friction and maximum ROI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => {
              const Icon = LucideIcons[service.iconName];
              return (
                <Link to={`/service/${service.id}`} key={service.id} className="group block relative p-px bg-neutral-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-black h-full p-8 md:p-10 border border-neutral-800 group-hover:border-yellow-500/50 transition-colors duration-500 flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-8 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-colors duration-500">
                        {Icon && <Icon className="w-6 h-6 text-yellow-500" strokeWidth={1.5} />}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight group-hover:text-yellow-500 transition-colors">{service.title}</h4>
                      <p className="text-neutral-400 text-sm font-mono leading-relaxed mb-8">{service.shortDesc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto border-t border-neutral-900 pt-6">
                      <span className="text-yellow-500 text-xs font-mono uppercase tracking-widest hidden group-hover:block animate-fade-in-up">Access Module</span>
                      <LucideIcons.ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-yellow-500 ml-auto transition-colors" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative Portfolio Section */}
      <section className="py-32 bg-black border-y border-yellow-500/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-yellow-500/5 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
             <h2 className="text-sm text-yellow-500 font-mono tracking-[0.3em] uppercase mb-4">Global Deployments</h2>
             <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">System Architecture Visualized</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group relative overflow-hidden aspect-[3/4] bg-neutral-900 border border-neutral-800 cursor-pointer">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" style={{ backgroundImage: `url(${item.image})` }}></div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-yellow-500 text-xs font-mono uppercase tracking-widest">{item.category}</span>
                  </div>
                  <h4 className="text-white text-3xl font-black uppercase tracking-tight">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automated Lead Generation Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="bg-neutral-900 border border-yellow-500/20 p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm text-yellow-500 font-mono tracking-[0.3em] uppercase mb-4">Secure Network</h2>
                <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-6">Initialize Partnership Protocol</h3>
                <p className="text-neutral-400 font-mono text-sm leading-relaxed mb-8">Enter your secure communication terminal address to establish a direct link with our global consulting matrix. Fast. Encrypted. Scalable.</p>
                <div className="flex gap-4 items-center border-t border-neutral-800 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-white">24/7</div>
                    <div className="text-xs text-neutral-500 font-mono uppercase">Node Uptime</div>
                  </div>
                  <div className="w-px h-10 bg-neutral-800"></div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-white">100%</div>
                    <div className="text-xs text-neutral-500 font-mono uppercase">Data Security</div>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleLeadGen} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="emailInput" className="block text-xs font-mono text-yellow-500 mb-2 uppercase tracking-widest">Target Email Vector</label>
                  <input 
                    type="email" 
                    id="emailInput" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black border border-neutral-700 px-6 py-4 text-white font-mono focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-neutral-700" 
                    placeholder="sysadmin@enterprise.com" 
                  />
                </div>
                <button disabled={isSubmitting} type="submit" className="w-full bg-yellow-500 text-black font-black uppercase tracking-[0.2em] py-5 hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2 disabled:opacity-50 border-none">
                  {isSubmitting ? 'Establishing Connection...' : 'Establish Connection'} <LucideIcons.Terminal className="w-5 h-5"/>
                </button>
                <p className="text-neutral-600 text-[10px] font-mono uppercase text-center mt-2">By submitting you agree to our automated lead tracking telemetry.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
