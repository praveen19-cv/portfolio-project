import Hero3D from "@/components/Hero3D";
import Preloader from "@/components/Preloader";
import ContactForm from "@/components/ContactForm";
import ServicesSection from "@/components/ServicesSection";
import Link from "next/link"; // Required for routing

// Data
import teamData from "@/data/team.json";
import projectsData from "@/data/projects.json";
import servicesData from "@/data/services.json";
import companyData from "@/data/company.json";

// Icons
import { Cpu, Wrench, BrainCircuit, Network, MoveRight, Layers, ArrowRight } from "lucide-react";

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
      <section id="hero" className="relative h-screen flex items-center justify-center border-b border-[#1e293b]">
        <Hero3D />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1220] pointer-events-none" />

        <div className="z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <div className="inline-block border border-[#00e5ff]/30 bg-[#00e5ff]/5 px-4 py-1.5 rounded-full mb-4">
            <span className="text-[#00e5ff] font-mono tracking-widest text-xs uppercase">
              Industrial Robotics & AI
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-[#9ca3af]">
            Intelligent Industrial Systems
          </h1>
          <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto">
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

      {/* --- SYSTEM FLOW VISUALIZATION --- */}
      <section className="py-24 relative bg-[#0b1220]">
        <div className="scan-line absolute top-0" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white uppercase font-mono mb-2">Process Architecture</h2>
            <p className="text-[#14b8a6]">Energy flowing through engineered systems</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 font-mono text-sm text-[#9ca3af]">
            <div className="glass-card px-6 py-4 border-[#00e5ff]/20 text-[#00e5ff] rounded-lg">MACHINE</div>
            <MoveRight className="hidden md:block text-[#1e293b] w-8 h-8" />
            <div className="glass-card px-6 py-4 border-[#14b8a6]/20 text-[#14b8a6] rounded-lg">INTEGRATION</div>
            <MoveRight className="hidden md:block text-[#1e293b] w-8 h-8" />
            <div className="glass-card px-6 py-4 border-[#ffffff]/20 text-white rounded-lg">ROBOT</div>
            <MoveRight className="hidden md:block text-[#1e293b] w-8 h-8" />
            <div className="glass-card px-6 py-4 border-[#14b8a6]/20 text-[#14b8a6] rounded-lg">AI</div>
            <MoveRight className="hidden md:block text-[#1e293b] w-8 h-8" />
            <div className="glass-card px-6 py-4 border-[#00e5ff]/20 text-[#00e5ff] rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.4)]">OUTPUT</div>
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
                    <span className="text-xs font-mono text-[#00e5ff] mb-2 px-2 py-1 bg-[#00e5ff]/10 rounded inline-block w-max">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <div key={member.id} className="glass-card hover-glow rounded-xl overflow-hidden text-center group">
                {/* Image Placeholder */}
                <div className="w-full h-64 bg-[#1e293b] relative grid place-items-center">
                  <span className="font-mono text-[#9ca3af] opacity-30 text-4xl">[{member.name[0]}]</span>
                  <div className="absolute inset-0 bg-[#00e5ff]/0 group-hover:bg-[#00e5ff]/10 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#14b8a6] font-mono tracking-widest text-xs uppercase mb-4">{member.role}</p>
                  <p className="text-sm text-[#9ca3af]">{member.bio}</p>
                </div>
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
      <footer className="border-t border-[#1e293b] bg-[#0b1220] py-12 text-center text-[#6b7280] font-mono text-sm">
        <p>© {new Date().getFullYear()} {companyData.name}. ALL SYSTEMS NOMINAL.</p>
        <p className="mt-2 text-xs opacity-50">{companyData.location} | {companyData.email}</p>
      </footer>
    </main>
  );
}
