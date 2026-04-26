import projectsData from "@/data/projects.json";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projectsData.map((p) => ({
    id: p.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const processParams = await params;
  const project = projectsData.find((p) => p.id === processParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen font-sans bg-[#0b1220] pt-24 pb-20">
      <div className="scan-line absolute top-0" />
      <div className="max-w-5xl mx-auto px-6 mt-8">
        
        {/* BACK / BREADCRUMB */}
        <div className="mb-12 border-b border-[#1e293b] pb-4">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-[#00e5ff] font-mono text-sm hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            RETURN_TO_MAIN_INDEX
          </Link>
        </div>

        {/* HEADER */}
        <div className="mb-8">
           <span className={`font-mono tracking-widest text-sm uppercase block mb-3 ${
             project.category === "Ongoing" ? "text-[#fbbf24]" : "text-[#14b8a6]"
           }`}>
            [CATEGORY: {project.category}]
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            {project.title}
          </h1>
        </div>

        {/* IMAGE PLACEHOLDER */}
        {/* <div className="w-full aspect-[21/9] bg-[#111827] border border-[#1e293b] rounded-xl mb-12 relative flex flex-col items-center justify-center overflow-hidden">
            <Terminal className="w-16 h-16 text-[#1e293b] absolute opacity-20" />
            <span className="font-mono text-[#00e5ff]/50 z-10">[IMAGE_DATA_NOT_FOUND]</span>
            <span className="font-mono text-[#6b7280] text-xs z-10 mt-2">{project.image}</span>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none" />
        </div> */}

        {/* CONTENT */}
        <div className="glass-card p-8 md:p-12 rounded-xl text-[#9ca3af]">
          <h2 className="text-xl text-white font-mono uppercase mb-4 border-l-2 border-[#00e5ff] pl-4">Project Brief</h2>
          <p className="text-lg leading-relaxed mb-6">
            {project.description}
          </p>
          {project.extendedDescription && (
            <p className="text-lg leading-relaxed mb-12">
              {project.extendedDescription}
            </p>
          )}
          
          {project.logs && project.logs.length > 0 && (
            <>
              <h2 className="text-xl text-white font-mono uppercase mb-4 border-l-2 border-[#14b8a6] pl-4">System Highlights</h2>
              <div className="space-y-4 font-mono text-sm bg-[#0b1220] p-6 rounded border border-[#1e293b]">
                {project.logs.map((log: any, index: number) => (
                  <div key={index} className="flex gap-4">
                     <span className="text-[#6b7280]">{log.code}</span>
                     <span className={log.color}>{log.type}</span>
                     <span className="text-white">{log.message}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </main>
  );
}
