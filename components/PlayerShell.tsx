"use client";

import React, { useEffect, useRef, useState } from "react";
import { PLAYLISTS, Track } from "@/lib/tracks";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

// ----------------------------------------------------
// HELPER FUNCTIONS & CLIENT LOADER (Module Scope)
// ----------------------------------------------------

const formatProgressTime = (seconds: number) => {
  if (isNaN(seconds) || seconds === undefined) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const loadYTAPI = (callback: () => void) => {
  if (typeof window === "undefined") return;

  if (window.YT && window.YT.Player) {
    callback();
    return;
  }

  const prevCallback = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => {
    if (prevCallback) prevCallback();
    callback();
  };

  if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }
};

// ----------------------------------------------------
// SUB-COMPONENTS
// ----------------------------------------------------

const Clock = () => {
  const [time, setTime] = useState<{ hour: string; minute: string } | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now);

      const parts = formatted.split(":");
      if (parts.length === 2) {
        setTime({ hour: parts[0], minute: parts[1] });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="font-mono text-sm tracking-widest text-white/90 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center gap-0.5 select-none">
      <span>{time.hour}</span>
      <span className="animate-colon-blink text-accent font-bold">:</span>
      <span>{time.minute}</span>
    </div>
  );
};

const ListenerCount = () => {
  const [count, setCount] = useState(1487);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4; // -4 to +4
        return Math.max(1000, prev + delta);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs font-semibold text-white/80 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center gap-2 select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
      </span>
      <span>{count.toLocaleString()} listening</span>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors duration-200" aria-label="Instagram">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors duration-200" aria-label="X">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors duration-200" aria-label="YouTube">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>
    </div>
  );
};

const PlaylistSelector = ({
  playlists,
  currentPlaylistIndex,
  onSelectPlaylist,
}: {
  playlists: typeof PLAYLISTS;
  currentPlaylistIndex: number;
  onSelectPlaylist: (index: number) => void;
}) => {
  return (
    <div className="flex justify-start sm:justify-center gap-2 overflow-x-auto py-1 px-1.5 max-w-full no-scrollbar select-none scroll-smooth shrink-0">
      {playlists.map((playlist, idx) => {
        const isActive = idx === currentPlaylistIndex;
        return (
          <button
            key={playlist.name}
            onClick={() => onSelectPlaylist(idx)}
            className={`whitespace-nowrap px-3.5 py-1.5 text-xs rounded-full border transition-all duration-300 font-semibold cursor-pointer ${
              isActive
                ? "bg-accent/15 border-accent text-accent shadow-[0_0_12px_rgba(249,115,22,0.18)]"
                : "bg-white/5 border-white/5 text-white/55 hover:text-white hover:border-white/15"
            }`}
          >
            {playlist.name}
          </button>
        );
      })}
    </div>
  );
};

const VinylDisc = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 select-none shadow-[0_8px_32px_rgba(0,0,0,0.65)] border border-white/10 rounded-full bg-black/60 overflow-hidden">
      {/* Glossy record grooves */}
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none z-10 scale-95" />
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none z-10 scale-75" />
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none z-10 scale-[0.55]" />
      
      {/* Rotating YouTube IFrame frame */}
      <div
        className={`w-full h-full rounded-full overflow-hidden ${
          isPlaying ? "animate-spin-vinyl" : ""
        }`}
        style={{
          animationPlayState: isPlaying ? "running" : "paused",
        }}
      >
        <div id="youtube-iframe-container" className="w-full h-full scale-[1.3] brightness-90 saturate-[1.1]" />
      </div>

      {/* Spindle center hole */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="w-3.5 h-3.5 rounded-full bg-black/85 ring-2 ring-white/40 shadow-inner" />
      </div>
    </div>
  );
};

const SeekBar = ({
  elapsed,
  duration,
  onSeek,
}: {
  elapsed: number;
  duration: number;
  onSeek: (e: React.PointerEvent<HTMLDivElement>) => void;
}) => {
  const percent = duration > 0 ? (elapsed / duration) * 100 : 0;

  return (
    <div
      onPointerDown={onSeek}
      className="group relative w-full h-6 flex items-center cursor-pointer touch-none select-none"
    >
      {/* Rail background */}
      <div className="w-full h-[3px] bg-white/15 rounded-full relative">
        {/* Active glowing progress */}
        <div
          style={{ width: `${percent}%` }}
          className="absolute top-0 left-0 h-full bg-accent rounded-full shadow-[0_0_8px_var(--accent-color)]"
        />
        {/* Slider Knob */}
        <div
          style={{ left: `calc(${percent}% - 6px)` }}
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-[0_0_6px_var(--accent-color)] pointer-events-none"
        />
      </div>
    </div>
  );
};

interface TransportProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrev: () => void;
  onNext: () => void;
  size?: "sm" | "lg";
}

const Transport = ({ isPlaying, onTogglePlay, onPrev, onNext, size = "sm" }: TransportProps) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPrev}
        className="w-9 h-9 rounded-full flex items-center justify-center text-white/75 hover:text-white hover:bg-white/5 active:scale-90 transition-all duration-200 cursor-pointer"
        aria-label="Previous track"
      >
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
        </svg>
      </button>

      <button
        onClick={onTogglePlay}
        className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-90 transition-all duration-200 shadow-lg cursor-pointer"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg className="w-4.5 h-4.5 fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <button
        onClick={onNext}
        className="w-9 h-9 rounded-full flex items-center justify-center text-white/75 hover:text-white hover:bg-white/5 active:scale-90 transition-all duration-200 cursor-pointer"
        aria-label="Next track"
      >
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
      </button>
    </div>
  );
};

// ----------------------------------------------------
// THE MASTER CLIENT ORCHESTRATOR
// ----------------------------------------------------

export default function PlayerShell() {
  const [mounted, setMounted] = useState(false);

  // Music state
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);

  const playerRef = useRef<any>(null);

  // Active playlist and track
  const currentPlaylist = PLAYLISTS[currentPlaylistIndex];
  const currentTrack = currentPlaylist.tracks[currentTrackIndex];

  // Screen layout detector & cleanup legacy localStorage
  useEffect(() => {
    setMounted(true);
    try {
      localStorage.removeItem("blockedVideoIds");
    } catch (e) {}
  }, []);

  // Handler state refs to prevent event listener closure staleness
  const nextTrackRef = useRef<() => void>(() => {});
  const errorRef = useRef<(code: number, videoId: string) => void>(() => {});
  const lastPlayAtRef = useRef<number>(0);
  const currentTrackRef = useRef<Track>(currentTrack);
  currentTrackRef.current = currentTrack;

  const isPlayingRef = useRef<boolean>(isPlaying);
  isPlayingRef.current = isPlaying;

  const handleNext = () => {
    setCurrentTrackIndex((prev) => {
      const len = currentPlaylist.tracks.length;
      return (prev + 1) % len;
    });
    setElapsed(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => {
      const len = currentPlaylist.tracks.length;
      return (prev - 1 + len) % len;
    });
    setElapsed(0);
  };

  const handleTogglePlay = () => {
    if (!playerRef.current || !playerReady) return;
    if (isPlaying) {
      try {
        playerRef.current.pauseVideo();
      } catch (e) {}
      setIsPlaying(false);
    } else {
      try {
        if (playerRef.current.unMute) playerRef.current.unMute();
        if (playerRef.current.setVolume) playerRef.current.setVolume(85);
        playerRef.current.playVideo();
      } catch (e) {}
      setIsPlaying(true);
    }
  };

  nextTrackRef.current = handleNext;
  errorRef.current = (code: number, videoId: string) => {
    console.warn(`YouTube Player error ${code} on video ${videoId}. Advancing to next track...`);
    
    // Check if current track has fallback video IDs
    const track = currentTrackRef.current;
    if (track && track.fallbackVideoIds && track.fallbackVideoIds.length > 0) {
      const fbId = track.fallbackVideoIds[0];
      try {
        if (playerRef.current && playerRef.current.loadVideoById) {
          playerRef.current.loadVideoById({ videoId: fbId, startSeconds: 0 });
          setIsPlaying(true);
          return;
        }
      } catch (e) {}
    }

    // Auto-advance safely
    setTimeout(() => {
      nextTrackRef.current();
    }, 1200);
  };

  // Effect 1: Core YouTube script loader and Player initialization (RUNS ONCE ON MOUNT)
  useEffect(() => {
    if (!mounted) return;

    let isSubscribed = true;

    const initPlayer = () => {
      if (!isSubscribed || !window.YT || !window.YT.Player) return;

      const container = document.getElementById("youtube-iframe-container");
      if (!container) {
        setTimeout(() => {
          if (isSubscribed) initPlayer();
        }, 150);
        return;
      }

      if (playerRef.current) return;

      try {
        playerRef.current = new window.YT.Player("youtube-iframe-container", {
          height: "100%",
          width: "100%",
          videoId: currentTrackRef.current.videoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            rel: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            enablejsapi: 1,
            origin: typeof window !== "undefined" ? window.location.origin : undefined,
          },
          events: {
            onReady: (event: any) => {
              if (!isSubscribed) return;
              setPlayerReady(true);
              try {
                if (event.target.setVolume) event.target.setVolume(85);
                const dur = event.target.getDuration();
                if (dur) setDuration(dur);
                if (isPlayingRef.current) {
                  event.target.playVideo();
                }
              } catch (e) {}
            },
            onStateChange: (event: any) => {
              if (!isSubscribed) return;
              const state = event.data;
              if (state === 1) {
                // PLAYING
                setIsPlaying(true);
                lastPlayAtRef.current = Date.now();
                const dur = event.target.getDuration();
                if (dur) setDuration(dur);
              } else if (state === 2) {
                // PAUSED
                setIsPlaying(false);
              } else if (state === 0) {
                // ENDED
                const timeSincePlay = Date.now() - lastPlayAtRef.current;
                if (timeSincePlay > 2000) {
                  nextTrackRef.current();
                }
              }
            },
            onError: (event: any) => {
              if (!isSubscribed) return;
              errorRef.current(event.data, currentTrackRef.current.videoId);
            },
          },
        });
      } catch (err) {
        console.error("Error creating YT.Player:", err);
      }
    };

    loadYTAPI(initPlayer);

    return () => {
      isSubscribed = false;
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
        setPlayerReady(false);
      }
    };
  }, [mounted]);

  // Effect 2: Smooth track video switching (No destroy, direct buffer load)
  useEffect(() => {
    if (playerReady && playerRef.current) {
      lastPlayAtRef.current = 0;
      setElapsed(0);

      try {
        if (isPlaying) {
          if (playerRef.current.loadVideoById) {
            playerRef.current.loadVideoById({
              videoId: currentTrack.videoId,
              startSeconds: 0,
            });
          }
        } else {
          if (playerRef.current.cueVideoById) {
            playerRef.current.cueVideoById({
              videoId: currentTrack.videoId,
              startSeconds: 0,
            });
          }
        }
      } catch (e) {
        console.warn("Track load exception:", e);
      }
    }
  }, [currentTrack.videoId, playerReady]);

  // Effect 3: Timed progress tracker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && playerReady && playerRef.current) {
      interval = setInterval(() => {
        if (playerRef.current && playerRef.current.getCurrentTime) {
          try {
            const time = playerRef.current.getCurrentTime();
            setElapsed(time);
          } catch (e) {}
        }
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playerReady]);

  // Seek bar slide trigger handler
  const handleSeek = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!playerRef.current || !playerReady || duration <= 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    
    const getTargetTime = (clientX: number) => {
      const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const ratio = clickX / rect.width;
      return ratio * duration;
    };

    const initialTime = getTargetTime(e.clientX);
    setElapsed(initialTime);
    playerRef.current.seekTo(initialTime, true);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const nextTime = getTargetTime(moveEvent.clientX);
      setElapsed(nextTime);
      playerRef.current.seekTo(nextTime, false);
    };

    const handlePointerUp = (upEvent: PointerEvent) => {
      const finalTime = getTargetTime(upEvent.clientX);
      setElapsed(finalTime);
      playerRef.current.seekTo(finalTime, true);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
  };

  const handleSelectPlaylist = (idx: number) => {
    setCurrentPlaylistIndex(idx);
    setCurrentTrackIndex(0);
    setElapsed(0);
    setDuration(0);
    setIsPlaying(true);
  };

  if (!mounted) {
    return (
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 w-full max-w-xl px-4 sm:px-0 z-40 select-none">
        <div className="w-full h-24 rounded-full border border-white/5 bg-white/5 backdrop-blur-md animate-pulse" />
      </div>
    );
  }

  return (
    <>
      {/* ----------------- FIXED CORNERS ----------------- */}
      {/* Top Left: IST Time Clock */}
      <div className="fixed top-[max(1rem,env(safe-area-inset-top))] left-[max(1rem,env(safe-area-inset-left))] z-30">
        <Clock />
      </div>

      {/* Top Centre: Simulated Listener counts */}
      <div className="fixed top-[max(1rem,env(safe-area-inset-top))] left-1/2 -translate-x-1/2 z-30">
        <ListenerCount />
      </div>

      {/* Top Right: Connect social links */}
      <div className="fixed top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-30">
        <SocialLinks />
      </div>

      {/* ----------------- BOTTOM LAYOUT AREA ----------------- */}
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4 sm:px-0 flex flex-col gap-3.5">
        
        {/* Playlist selection tabs pill */}
        <PlaylistSelector
          playlists={PLAYLISTS}
          currentPlaylistIndex={currentPlaylistIndex}
          onSelectPlaylist={handleSelectPlaylist}
        />

        {/* Responsive Unified Glass Player */}
        <div className="w-full rounded-[28px] sm:rounded-full border border-white/10 bg-gradient-to-b from-white/[0.14] to-white/[0.05] backdrop-blur-3xl backdrop-saturate-[1.7] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)] p-3.5 sm:p-3 sm:pr-5 glass-glow transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
            
            {/* Top row / Left section: Vinyl Disc & Track Info */}
            <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
              <VinylDisc isPlaying={isPlaying} />

              <div className="flex-1 flex flex-col justify-center min-w-0 pr-1 select-none">
                <div className="flex items-baseline justify-between gap-2 sm:gap-4 mb-0.5">
                  <div className="flex flex-col min-w-0">
                    <h2 className="text-sm sm:text-[15px] font-semibold text-white truncate tracking-wide font-display">
                      {currentTrack.title}
                    </h2>
                    <span className="text-xs sm:text-[12.5px] text-white/70 truncate">
                      {currentTrack.artist} {currentTrack.film ? `(${currentTrack.film})` : ""}
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-[10.5px] font-mono text-white/55 tracking-wider tabular-nums font-semibold shrink-0">
                    {formatProgressTime(elapsed)} / {formatProgressTime(duration)}
                  </div>
                </div>

                <SeekBar elapsed={elapsed} duration={duration} onSeek={handleSeek} />
              </div>
            </div>

            {/* Controls: centered on mobile, right-aligned on desktop */}
            <div className="flex justify-center sm:justify-end shrink-0 sm:pl-1">
              <Transport
                isPlaying={isPlaying}
                onTogglePlay={handleTogglePlay}
                onPrev={handlePrev}
                onNext={handleNext}
                size="sm"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
