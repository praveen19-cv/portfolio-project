import Hero3D from "@/components/Hero3D";
import Preloader from "@/components/Preloader";
import ContactForm from "@/components/ContactForm";
import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";
import Image from "next/image";
import logo from "@/data/images/circularlogo.png";

// Data
import teamData from "@/data/team.json";
import projectsData from "@/data/projects.json";
import servicesData from "@/data/services.json";
import companyData from "@/data/company.json";

// Icons
import { Cpu, Wrench, BrainCircuit, Network, MoveRight, Layers, ArrowRight, Target, Users, ShieldCheck, Factory } from "lucide-react";

// For services mapping, map string names to actual Lucide components
const iconMap: Record<string, any> = {
  Cpu: Cpu,
  Wrench: Wrench,
  BrainCircuit: BrainCircuit,
  Network: Network,
};

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans overflow-x-hidden">
      <Preloader />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center border-b border-[#1e293b] pt-32 pb-24">
        <Hero3D />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1220] pointer-events-none" />

        <div className="z-10 text-center px-4 max-w-4xl mx-auto space-y-4 md:space-y-6">
          <div className="w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full bg-[#0b1220]/80 backdrop-blur-md border border-[#1e293b] p-6 shadow-[0_0_50px_rgba(0,229,255,0.25)] flex items-center justify-center overflow-hidden mb-8 hover:scale-105 transition-transform duration-700">
            <Image src={logo} alt="Synchro Automation Logo" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          </div>
          {/* <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-[#9ca3af]">
            Synchro Automation 
          </h1>
          <div className="inline-block border border-[#00e5ff]/40 bg-[#0b1220]/70 backdrop-blur-md px-6 py-2 rounded-full mb-4 shadow-[0_0_20px_rgba(0,229,255,0.15)] mt-4">
            <span className="text-[#00e5ff] font-mono tracking-widest text-sm uppercase font-bold">
              Integrate. Automate. Elevate.
            </span>
          </div> */}
          <p className="text-lg md:text-2xl text-white text-center leading-relaxed max-w-7xl mx-auto w-full mt-6 mb-10 px-4">
            {companyData.about}
          </p>
          <div className="pt-8">
            <Link href="#services" className="glass-card hover-glow px-8 py-4 text-[#00e5ff] font-mono tracking-widest uppercase flex items-center justify-center w-max gap-3 mx-auto transition-all group outline-none">
              View Capabilities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- COMPANY MANIFESTO --- */}
      <section className="py-24 relative bg-[#0b1220] scroll-mt-16" id="about">
        <div className="scan-line absolute top-0" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white uppercase font-mono mb-2">Corporate Identity</h2>
            <p className="text-[#14b8a6]">Bridging traditional machinery with Industry 4.0</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Who We Are */}
            <div className="glass-card hover-glow rounded-xl p-8 flex flex-col justify-center border-l-4 border-l-[#00e5ff] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00e5ff]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#00e5ff]/20 transition-colors" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 bg-[#0b1220] rounded border border-[#00e5ff]/30 shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                  <Users className="w-6 h-6 text-[#00e5ff]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who We Are</h3>
              </div>
              <p className="text-white leading-relaxed relative z-10">
                {companyData.identity.whoWeAre}
              </p>
            </div>

            {/* Our Vision */}
            <div className="glass-card hover-glow rounded-xl p-8 flex flex-col justify-center border-l-4 border-l-[#14b8a6] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#14b8a6]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#14b8a6]/20 transition-colors" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 bg-[#0b1220] rounded border border-[#14b8a6]/30 shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                  <Target className="w-6 h-6 text-[#14b8a6]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white leading-relaxed relative z-10">
                {companyData.identity.vision}
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="glass-card hover-glow rounded-xl p-8 border border-[#1e293b]">
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-[#0b1220] rounded border border-[#fbbf24]/30 shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                  <ShieldCheck className="w-6 h-6 text-[#fbbf24]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Why Choose Us</h3>
              </div>
              <ul className="space-y-4 text-white font-mono text-sm relative z-10">
                {companyData.identity.whyChooseUs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-3 bg-[#0b1220]/50 rounded border border-[#1e293b] hover:border-[#fbbf24]/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#fbbf24] mt-1.5 shadow-[0_0_8px_#fbbf24] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who We Serve */}
            <div className="glass-card hover-glow rounded-xl p-8 border border-[#1e293b]">
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-[#0b1220] rounded border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who We Serve</h3>
              </div>
              <ul className="space-y-4 text-[#9ca3af] font-mono text-sm relative z-10">
                {companyData.identity.whoWeServe.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 bg-[#0b1220]/50 rounded border border-[#1e293b] hover:border-white/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-white mt-1.5 shadow-[0_0_8px_#ffffff] shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <ServicesSection />

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 relative bg-[#0b1220] scroll-mt-16">
        <div className="scan-line absolute top-0" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 flex items-end justify-between">
            <div className="border-l-2 border-[#14b8a6] pl-6">
              <h2 className="text-4xl font-bold text-white mb-4">Project Matrix</h2>
              <p className="text-[#9ca3af] max-w-xl">Real-world integrations pushing the boundaries of automation.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="group outline-none">
                <div className="relative overflow-hidden rounded-xl border border-[#1e293b] group-hover:border-[#14b8a6] group-focus:border-[#00e5ff] transition-colors cursor-pointer hover-glow">
                  {/* Fallback gray placeholder since images might not exist yet */}
                  <div className="aspect-video bg-[#111827] w-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/80 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className={`text-xs font-mono mb-2 px-2 py-1 rounded inline-block w-max border ${
                      project.category === "Ongoing" 
                        ? "text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/30" 
                        : "text-[#00e5ff] bg-[#00e5ff]/10 border-[#00e5ff]/30"
                    }`}>
                      [{project.category}]
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section id="team" className="py-24 relative bg-[#111827] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">System Architects</h2>
            <p className="text-[#9ca3af]">The architects behind the intelligence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {teamData.map((member) => (
              <div key={member.id} className="text-center group flex flex-col items-center">
                {/* Giant Circular Avatar */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full mb-6 bg-[#0b1220] glass-card hover-glow relative grid place-items-center overflow-hidden transition-all duration-300">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-mono text-white font-extrabold text-6xl">
                      {member.name ? member.name.trim().charAt(0).toUpperCase() : ""}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00e5ff]/0 to-transparent group-hover:from-[#00e5ff]/10 transition-colors pointer-events-none" />
                </div>
                
                {/* Floating Text Content */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#00e5ff] transition-colors">{member.name}</h3>
                <p className="text-[#14b8a6] font-mono tracking-widest text-xs uppercase mb-3">{member.role}</p>
                <p className="text-sm text-[#9ca3af] leading-relaxed max-w-[280px]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 relative bg-[#0b1220] scroll-mt-16">
        <div className="scan-line absolute top-0" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transmit Inquiry</h2>
            <p className="text-[#9ca3af] font-mono max-w-xl mx-auto">
              Open a secure communications channel with our technical advisory team.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-[#1e293b] bg-[#0b1220] pt-12 pb-32 md:pb-40 text-center text-[#6b7280] font-mono text-xl text-white">
  
        <p>© {new Date().getFullYear()} {companyData.name}</p>
        <p className="mt-2 text-2xl"> | {companyData.location} | {companyData.email} |</p>
        
      </footer>
    </main>
  );
}
