import PlayerShell from "@/components/PlayerShell";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      {/* 1. Fixed Background Hero */}
      <div className="fixed inset-0 -z-20 hero-bg bg-cover bg-center">
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/95 pointer-events-none" />
      </div>

      {/* 2. Fixed Film Grain Overlay */}
      <div className="fixed inset-0 -z-10 grain-overlay opacity-[0.22] mix-blend-overlay pointer-events-none" />

      {/* Ambient Header Branding */}
      <div className="w-full flex flex-col items-center justify-center mt-[max(4.2rem,calc(env(safe-area-inset-top)+3.4rem))] px-3 text-center select-none z-10 shrink-0 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md mb-1.5 sm:mb-2 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-accent uppercase font-mono">
            MARATHI NOSTALGIA
          </span>
        </div>
        
        <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.85)] font-marathi">
          गाणी आणि गप्पा
        </h1>
        
        <p className="mt-0.5 sm:mt-1 text-[10.5px] xs:text-[11px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.28em] text-white/80 uppercase font-mono drop-shadow">
          Gaani Aani Gappa • 24/7 Retro Radio
        </p>
      </div>

      {/* 3. The Interactive Master Player Component */}
      <PlayerShell />
    </main>
  );
}
