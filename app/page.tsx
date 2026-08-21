import PlayerShell from "@/components/PlayerShell";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      {/* 1. Fixed Background */}
      <div className="fixed inset-0 -z-20 hero-bg bg-cover bg-center">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/85 pointer-events-none" />
      </div>

      {/* 2. Fixed Grain Overlay */}
      <div className="fixed inset-0 -z-10 grain-overlay opacity-[0.22] mix-blend-overlay pointer-events-none" />

      {/* Ambient header branding */}
      <div className="w-full flex flex-col items-center justify-center mt-[max(7rem,env(safe-area-inset-top))] px-6 text-center select-none z-10 shrink-0 pointer-events-none">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white/95 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] font-display uppercase">
          Punjabi Pop
        </h1>
        <p className="mt-1.5 text-xs sm:text-xs font-bold tracking-[0.25em] text-accent uppercase font-mono">
          Nostalgia Radio
        </p>
      </div>

      {/* 3. The Client components (renders top status and player) */}
      <PlayerShell />
    </main>
  );
}
