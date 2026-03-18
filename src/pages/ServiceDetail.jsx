import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import * as LucideIcons from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" />;
  }

  const Icon = LucideIcons[service.iconName];

  return (
    <div className="min-h-screen bg-black">
      {/* Detail Hero */}
      <section className="relative pt-32 pb-20 border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-[0.03] filter grayscale" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-2 text-yellow-500 font-mono text-xs uppercase tracking-[0.2em] hover:text-white transition-colors mb-12">
            <LucideIcons.ArrowLeft className="w-4 h-4" /> Terminate Connection & Return
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 bg-neutral-900 border border-yellow-500/30 flex items-center justify-center shrink-0">
              {Icon && <Icon className="w-10 h-10 text-yellow-500" strokeWidth={1} />}
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">{service.title}</h1>
              <p className="text-xl text-neutral-400 font-mono leading-relaxed max-w-3xl">{service.fullDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Features Array */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <h3 className="text-yellow-500 text-sm font-mono tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
                  <LucideIcons.Cpu className="w-4 h-4" /> Core Technical Modules
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="bg-neutral-900 border border-neutral-800 p-6 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                        <span className="text-yellow-500 font-mono text-xs">{idx + 1}</span>
                      </div>
                      <p className="text-white font-mono text-sm uppercase leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 bg-neutral-900 border-l-2 border-yellow-500">
                <p className="text-neutral-400 font-mono text-sm italic">"Implementing {service.title} through Porquipine Digitals architecture ensures a hyper-scalable, compliant, and dominant market positioning globally." - System Matrix</p>
              </div>
            </div>

            {/* Sidebar Context */}
            <div className="space-y-8">
              <div className="bg-neutral-900 border border-yellow-500/20 p-8">
                <div className="text-xs text-neutral-500 font-mono uppercase tracking-widest mb-2 font-bold">{service.statLabel}</div>
                <div className="text-5xl font-black text-yellow-500 uppercase tracking-tighter">{service.stat}</div>
              </div>

              <div className="bg-yellow-500 p-8">
                <h4 className="text-black font-black uppercase text-xl mb-4">Deploy Module Now</h4>
                <p className="text-black/80 font-mono text-xs mb-6 font-medium">Initialize the {service.title} protocol with our dedicated global engineering team.</p>
                <a href="/#contact" className="block text-center bg-black text-yellow-500 font-bold uppercase tracking-widest text-xs py-4 hover:bg-neutral-900 transition-colors">
                  Contact Systems
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Visual Tech Representation */}
      <section className="h-[40vh] w-full bg-cover bg-center border-t border-neutral-900 relative" style={{backgroundImage: `url(${service.image})`}}>
         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
         <div className="absolute inset-0 flex items-center container mx-auto px-6">
            <h2 className="text-white/20 text-6xl md:text-8xl font-black uppercase tracking-tighter">System 100% Active.</h2>
         </div>
      </section>
    </div>
  );
}
