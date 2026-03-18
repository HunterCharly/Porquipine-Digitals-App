import React from 'react';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  const services = [
    {
      title: "Web Development",
      desc: "Cutting-edge responsive websites and applications tailored to your audience.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    },
    {
      title: "Digital Marketing",
      desc: "Comprehensive campaigns to amplify your voice across all digital channels.",
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </>
      )
    },
    {
      title: "Brand Building Strategies",
      desc: "Crafting a unique and memorable identity that resonates with your target market.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    },
    {
      title: "Lead Generation",
      desc: "Targeted approaches to acquire and nurture high-quality leads for your business.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    {
      title: "SEO Optimisation",
      desc: "Enhancing your visibility on search engines to drive organic, sustainable traffic.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    },
    {
      title: "Business Consultation",
      desc: "Expert advice and strategic planning to overcome challenges and scale efficiently.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    },
    {
      title: "Logistics Consultation",
      desc: "Streamlining your supply chain and operational workflows for maximum efficiency.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      title: "Business Establishment",
      desc: "End-to-end guidance for physical office setup, legalities, and initial operations.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    },
    {
      title: "Investment Procurement",
      desc: "Connecting you with the right investors to secure funding for your next big phase.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    }
  ];

  const portfolio = [
    { title: "Web Architecture & UX", category: "Web Development", image: "/images/web-dev.png" },
    { title: "Growth & Campaigns", category: "Digital Marketing", image: "/images/marketing.png" },
    { title: "Corporate Identity", category: "Brand Building", image: "/images/branding.png" }
  ];

  return (
    <div className="font-sans text-neutral-300 bg-neutral-950 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-950 text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-yellow-900/10 z-0 border-b border-yellow-500/10"></div>
        {/* Abstract glowing orb */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 mt-12 animate-fade-in-up uppercase">
            Porquipine <span className="text-yellow-500">digitals</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mb-12 leading-relaxed text-balance">
            A one touch or end to end solution and consultation for a Brand building from scratch.
          </p>
          <a href="#services" className="bg-yellow-500 hover:bg-yellow-400 text-neutral-950 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
            Explore Solutions
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-neutral-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eab30811_1px,transparent_1px),linear-gradient(to_bottom,#eab30811_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wider">Our Core Services</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
            <p className="mt-8 text-neutral-400 max-w-2xl mx-auto text-lg">Delivering comprehensive strategies and executions to scale businesses from inception to market leadership.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-neutral-950 p-10 rounded-[2rem] shadow-lg hover:shadow-yellow-500/5 transition-all duration-500 border border-neutral-800 hover:border-yellow-500/30 group">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-8 h-8 text-yellow-500 group-hover:text-neutral-950 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm lg:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Portfolio Section */}
      <section className="py-32 bg-neutral-950 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wider">Creative Portfolio</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">Explore our diverse work showcasing premium brand implementations and digital experiences.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {portfolio.map((item, index) => (
              <div key={index} className="w-full md:w-1/3 group relative overflow-hidden rounded-3xl aspect-[4/5] bg-neutral-900 border border-neutral-800 cursor-pointer">
                {/* Image */}
                <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.image})` }}></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block bg-yellow-500/20 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-yellow-500/30 backdrop-blur-md">{item.category}</div>
                  <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-yellow-500 text-neutral-950 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 uppercase tracking-tight">Let's Build It</h2>
            <p className="text-neutral-800 text-xl font-medium">Ready to elevate your brand from scratch? Connect with our experts today.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-neutral-950 p-10 md:p-14 rounded-[3rem] shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-neutral-300 mb-3">Full Name</label>
                <input type="text" id="name" required className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-neutral-300 mb-3">Email Address</label>
                <input type="email" id="email" required className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="mb-10">
              <label htmlFor="message" className="block text-sm font-bold text-neutral-300 mb-3">Your Message</label>
              <textarea id="message" rows="5" required className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-neutral-950 font-black text-lg py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(234,179,8,0.2)]">
              Send Message to Team
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-neutral-900">
        <div className="container mx-auto px-6 flex flex-col mx-auto items-center">
          <h2 className="text-2xl font-black uppercase text-white mb-6">
            Porquipine <span className="text-yellow-500">digitals</span>
          </h2>
          <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Porquipine digitals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
