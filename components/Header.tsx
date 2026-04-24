import Link from "next/link";
import { Terminal, Activity } from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Decorative HUD Corner Bracket - Top Left */}
      <div className="fixed top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#00e5ff] opacity-40 z-40 pointer-events-none hidden md:block"></div>
      
      {/* Decorative HUD Corner Bracket - Top Right */}
      <div className="fixed top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#14b8a6] opacity-40 z-40 pointer-events-none hidden md:block"></div>

      {/* Industrial Logo / Status Tag - Floating Top Left */}
      <Link href="/" className="fixed top-8 left-8 z-50 flex items-center gap-4 group hover-glow outline-none">
        <div className="bg-[#0b1220]/90 backdrop-blur-md border border-[#1e293b] p-3 text-[#00e5ff] group-hover:border-[#00e5ff] transition-colors relative overflow-hidden">
          <Terminal className="w-5 h-5 relative z-10" />
          <div className="absolute inset-0 bg-[#00e5ff]/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
        </div>
        <div className="hidden md:flex flex-col font-mono select-none">
          <span className="text-white text-sm font-bold tracking-widest leading-none">NEXUS_SYS</span>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="w-1.5 h-1.5 bg-[#14b8a6] rounded-full shadow-[0_0_8px_#14b8a6]"></div>
            <span className="text-[#14b8a6] text-[10px] tracking-[0.2em]">AUTOMATION SYSTEMS</span>
          </div>
        </div>
      </Link>

      {/* Floating Cockpit Console - Bottom Center */}
      <nav className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#0b1220]/95 backdrop-blur-xl border border-[#1e293b] p-1.5 flex items-center gap-1 shadow-[0_0_30px_rgba(0,229,255,0.05)] rounded-none md:rounded-full whitespace-nowrap w-[95%] md:w-auto overflow-x-auto">
        <Link href="/#services" className="flex items-center gap-2 px-5 py-3 md:rounded-full bg-transparent hover:bg-[#00e5ff]/20 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] text-xs font-mono font-bold text-[#9ca3af] hover:text-white uppercase transition-all">
          <span className="text-[#00e5ff]/50">01</span> Capabilities
        </Link>
        <Link href="/#projects" className="flex items-center gap-2 px-5 py-3 md:rounded-full bg-transparent hover:bg-[#00e5ff]/20 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] text-xs font-mono font-bold text-[#9ca3af] hover:text-white uppercase transition-all">
          <span className="text-[#00e5ff]/50">02</span> Portfolio
        </Link>
        <Link href="/#team" className="flex items-center gap-2 px-5 py-3 md:rounded-full bg-transparent hover:bg-[#00e5ff]/20 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] text-xs font-mono font-bold text-[#9ca3af] hover:text-white uppercase transition-all">
          <span className="text-[#00e5ff]/50">03</span> Architects
        </Link>
        <div className="w-px h-6 bg-[#1e293b] mx-2 hidden md:block"></div>
        <Link href="/#contact" className="flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-[#14b8a6]/20 text-xs font-mono text-[#14b8a6] uppercase hover:bg-[#14b8a6]/10 transition-all group ml-auto md:ml-0">
          <Activity className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="hidden md:block">Transmit Inquiry</span>
          <span className="md:hidden">Inquiry</span>
        </Link>
      </nav>
    </>
  );
}
