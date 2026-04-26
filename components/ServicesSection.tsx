"use client";

import { useState } from "react";
import { Cpu, Wrench, BrainCircuit, Network, Layers, X, Terminal, Settings, Scan } from "lucide-react";
import servicesData from "@/data/services.json";
import { AnimatePresence, motion } from "framer-motion";

const iconMap: Record<string, any> = {
  Cpu: Cpu,
  Wrench: Wrench,
  BrainCircuit: BrainCircuit,
  Network: Network,
  Settings: Settings,
  Scan: Scan
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // Prevent scroll when modal is open
  if (typeof window !== "undefined") {
    if (selectedService) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }

  return (
    <section id="services" className="py-24 relative bg-[#111827] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 border-l-2 border-[#00e5ff] pl-6">
          <h2 className="text-4xl font-bold text-white mb-4">Core Capabilities</h2>
          <p className="text-[#9ca3af] max-w-xl">Precision-engineered solutions tailored for automated environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Layers;
            const isLastOdd = servicesData.length % 2 !== 0 && index === servicesData.length - 1;
            
            return (
              <div 
                key={service.id} 
                onClick={() => setSelectedService(service)}
                className={`glass-card p-8 rounded-xl hover-glow group transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isLastOdd ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto w-full" : ""
                }`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00e5ff]/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#00e5ff]/20 transition-colors" />
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-lg bg-[#0b1220] border border-[#1e293b] group-hover:border-[#00e5ff] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all">
                    <IconComponent className="w-8 h-8 text-[#00e5ff]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#14b8a6] block mb-1">0{index + 1} //</span>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-[#9ca3af]">{service.description}</p>
                    <span className="text-[#00e5ff] font-mono text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity mt-6 block border border-[#00e5ff]/30 w-max px-2 py-1 bg-[#00e5ff]/10">
                       [ CLICK_TO_EXPAND ]
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* EXPANDED MODAL OVERLAY */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0b1220]/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
             <motion.div 
               initial={{ scale: 0.95, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.95, y: 20 }}
               transition={{ type: "spring", damping: 25, stiffness: 300 }}
               onClick={(e) => e.stopPropagation()}
               className="bg-[#0b1220] border border-[#00e5ff]/30 w-full max-w-3xl rounded-xl overflow-y-auto max-h-[90vh] shadow-[0_0_50px_rgba(0,229,255,0.15)] relative"
             >
                <div className="sticky top-0 right-0 p-4 flex justify-end z-20 pointer-events-none">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-[#9ca3af] hover:text-white bg-[#1e293b] hover:bg-red-500/20 hover:border-red-500/50 border border-transparent p-2 rounded pointer-events-auto transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* MODAL CONTENT */}
                <div className="px-8 pb-12 pt-4">
                   <div className="flex items-center gap-4 mb-6 relative z-10">
                     {(() => {
                        const Icon = iconMap[selectedService.icon] || Layers;
                        return (
                          <div className="p-4 bg-[#111827] rounded border border-[#1e293b]">
                            <Icon className="w-10 h-10 text-[#00e5ff]" />
                          </div>
                        );
                     })()}
                     <div>
                       <span className="text-[#14b8a6] font-mono text-xs uppercase tracking-widest block mb-1">MODULE_DETAIL</span>
                       <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                     </div>
                   </div>
                   
                   {/* <div className="mb-8 w-full aspect-[21/9] bg-[#111827] border border-[#1e293b] rounded flex items-center justify-center relative overflow-hidden group">
                      <Terminal className="w-12 h-12 text-[#1e293b] absolute transition-transform group-hover:scale-110" />
                      <span className="font-mono text-[#00e5ff]/50 text-sm z-10 mix-blend-screen">[ PREVIEW_VISUALIZER // {selectedService.title.toUpperCase().replace(" ", "_")} ]</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none" />
                   </div> */}

                   <h3 className="text-xl text-white font-mono uppercase mb-4 border-l-2 border-[#00e5ff] pl-4">Overview</h3>
                   <p className="text-[#9ca3af] leading-relaxed mb-8">
                     {selectedService.description} 
                     <br></br>
                     <br></br>
                     {selectedService.extendedDescription}
                   </p>

                   {selectedService.techStack && (
                     <div className="bg-[#111827] p-6 border-l-2 border-[#14b8a6] font-mono text-sm text-[#9ca3af] shadow-inner">
                        <span className="text-[#00e5ff] font-bold block mb-2">TECH STACK:</span> 
                        {selectedService.techStack}
                     </div>
                   )}
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
