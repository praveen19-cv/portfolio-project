import Link from "next/link";
import { Activity } from "lucide-react";
import Image from "next/image";
import logoImg from "@/data/images/machinelogo.png";

export default function Header() {
  return (
    <>
      {/* Decorative HUD Corner Bracket - Top Left */}
      <div className="fixed top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#00e5ff] opacity-40 z-40 pointer-events-none hidden md:block"></div>
      
      {/* Decorative HUD Corner Bracket - Top Right */}
      <div className="fixed top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#14b8a6] opacity-40 z-40 pointer-events-none hidden md:block"></div>

      {/* Industrial Logo / Status Tag - Floating Top Left */}
      <Link href="/" className="fixed top-6 md:top-8 left-6 md:left-8 z-50 flex items-center gap-4 group outline-none bg-[#0b1220]/80 backdrop-blur-xl border border-[#00e5ff]/30 shadow-[0_0_20px_rgba(0,229,255,0.15)] pr-6 pl-2 py-2 rounded-full transition-all hover:border-[#00e5ff]/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:bg-[#0b1220]">
        <div className="bg-[#111827] border border-[#1e293b] p-2 group-hover:border-[#00e5ff] transition-colors relative overflow-hidden rounded-full shadow-inner">
          <Image src={logoImg} alt="Synchro Automation Logo" width={28} height={28} className="relative z-10 object-contain drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
          <div className="absolute inset-0 bg-[#00e5ff]/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
        </div>
        <div className="hidden md:flex flex-col font-mono select-none">
          <span className="text-white text-sm font-bold tracking-widest leading-none group-hover:text-[#00e5ff] transition-colors">Synchro Automation</span>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="w-1.5 h-1.5 bg-[#14b8a6] rounded-full shadow-[0_0_8px_#14b8a6]"></div>
            <span className="text-[#14b8a6] text-[10px] tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">Intelligent Industrial Systems</span>
          </div>
        </div>
      </Link>

      {/* Floating Cockpit Console - Bottom Center */}
      <nav className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-[#0b1220] via-cyan-950/60 to-[#0b1220] backdrop-blur-xl border border-[#00e5ff]/40 p-1.5 flex items-center gap-1 shadow-[0_0_15px_rgba(0,229,255,0.15)] rounded-none md:rounded-full whitespace-nowrap w-[95%] md:w-auto overflow-x-auto">
        <Link href="/#services" className="flex items-center gap-2 px-5 py-3 md:rounded-full bg-[#00e5ff]/10 hover:bg-[#00e5ff]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] text-xs font-mono font-bold text-white uppercase transition-all">
          <span className="text-[#00e5ff] font-extrabold">01</span> Capabilities
        </Link>
        <Link href="/#projects" className="flex items-center gap-2 px-5 py-3 md:rounded-full bg-[#00e5ff]/10 hover:bg-[#00e5ff]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] text-xs font-mono font-bold text-white uppercase transition-all">
          <span className="text-[#00e5ff] font-extrabold">02</span> Portfolio
        </Link>
        <Link href="/#team" className="flex items-center gap-2 px-5 py-3 md:rounded-full bg-[#00e5ff]/10 hover:bg-[#00e5ff]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] text-xs font-mono font-bold text-white uppercase transition-all">
          <span className="text-[#00e5ff] font-extrabold">03</span> Architects
        </Link>
        <div className="w-px h-6 bg-[#00e5ff]/30 mx-2 hidden md:block"></div>
        <Link href="/#contact" className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#14b8a6]/20 border border-[#14b8a6]/50 text-xs font-mono text-white font-bold uppercase hover:bg-[#14b8a6]/40 transition-all group ml-auto md:ml-0 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
          <Activity className="w-4 h-4 text-[#14b8a6] group-hover:scale-110 transition-transform" />
          <span className="hidden md:block">Transmit Inquiry</span>
          <span className="md:hidden">Inquiry</span>
        </Link>
      </nav>
    </>
  );
}
