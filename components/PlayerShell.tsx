"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { PLAYLISTS, Track, Playlist } from "@/lib/tracks";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

// ----------------------------------------------------
// HELPER FUNCTIONS & CLIENT LOADER
// ----------------------------------------------------

const formatProgressTime = (seconds: number) => {
  if (isNaN(seconds) || seconds === undefined || seconds < 0) return "0:00";
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
// AMBIENT HUD SUB-COMPONENTS
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
    <div className="font-mono text-xs sm:text-sm tracking-widest text-white/90 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center gap-0.5 select-none">
      <span>{time.hour}</span>
      <span className="animate-colon-blink text-accent font-bold">:</span>
      <span>{time.minute}</span>
      <span className="text-[10px] text-white/50 ml-1">IST</span>
    </div>
  );
};

const ListenerCount = () => {
  const [count, setCount] = useState(2348);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4;
        return Math.max(1500, prev + delta);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs font-semibold text-white/90 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center gap-2 select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-85" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_8px_var(--accent-color)]" />
      </span>
      <span className="tabular-nums font-mono">{count.toLocaleString()}</span>
      <span className="text-white/60 font-sans text-[11px] hidden xs:inline">ऐकणारे</span>
    </div>
  );
};

// ----------------------------------------------------
// PLAYLIST SELECTOR BAR
// ----------------------------------------------------

const PlaylistSelector = ({
  playlists,
  currentPlaylistIndex,
  onSelectPlaylist,
}: {
  playlists: Playlist[];
  currentPlaylistIndex: number;
  onSelectPlaylist: (index: number) => void;
}) => {
  return (
    <div className="flex justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto py-1 px-1 max-w-full no-scrollbar select-none scroll-smooth shrink-0">
      {playlists.map((playlist, idx) => {
        const isActive = idx === currentPlaylistIndex;
        return (
          <button
            key={playlist.id}
            onClick={() => onSelectPlaylist(idx)}
            className={`whitespace-nowrap px-3 sm:px-4 py-1.5 text-xs rounded-full border transition-all duration-300 font-medium cursor-pointer flex items-center gap-1.5 ${
              isActive
                ? "bg-accent/20 border-accent text-accent font-semibold shadow-[0_0_16px_rgba(245,158,11,0.25)] scale-[1.02]"
                : "bg-black/40 border-white/10 text-white/65 hover:text-white hover:bg-white/10 hover:border-white/20"
            }`}
          >
            <span>{playlist.name}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-accent/30 text-white" : "bg-white/10 text-white/50"}`}>
              {playlist.tracks.length}
            </span>
          </button>
        );
      })}
    </div>
  );
};

// ----------------------------------------------------
// ROTATING VINYL DISC
// ----------------------------------------------------

const VinylDisc = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 select-none shadow-[0_10px_35px_rgba(0,0,0,0.85)] border border-white/15 rounded-full bg-black/80 overflow-hidden group">
      {/* Vinyl groove sheen textures */}
      <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none z-10 scale-95" />
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none z-10 scale-75" />
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none z-10 scale-[0.55]" />
      
      {/* Rotating Disc with Embedded YouTube Video */}
      <div
        className={`w-full h-full rounded-full overflow-hidden transition-transform duration-700 ${
          isPlaying ? "animate-spin-vinyl" : ""
        }`}
        style={{
          animationPlayState: isPlaying ? "running" : "paused",
        }}
      >
        <div id="youtube-iframe-container" className="w-full h-full scale-[1.35] brightness-90 saturate-[1.15]" />
      </div>

      {/* Center Vinyl Hole / Spindle Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="w-4 h-4 rounded-full bg-black/90 ring-2 ring-accent/60 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
      </div>
    </div>
  );
};

// ----------------------------------------------------
// SEEKBAR
// ----------------------------------------------------

const SeekBar = ({
  elapsed,
  duration,
  onSeek,
}: {
  elapsed: number;
  duration: number;
  onSeek: (e: React.PointerEvent<HTMLDivElement>) => void;
}) => {
  const percent = duration > 0 ? Math.min(100, Math.max(0, (elapsed / duration) * 100)) : 0;

  return (
    <div
      onPointerDown={onSeek}
      className="group relative w-full h-6 flex items-center cursor-pointer touch-none select-none"
      title="गाणे पुढे/मागे करा"
    >
      <div className="w-full h-[4px] bg-white/15 rounded-full relative overflow-visible">
        {/* Glow progress bar */}
        <div
          style={{ width: `${percent}%` }}
          className="absolute top-0 left-0 h-full bg-accent rounded-full shadow-[0_0_10px_var(--accent-color)] transition-all duration-75"
        />
        {/* Slider Thumb knob */}
        <div
          style={{ left: `calc(${percent}% - 6px)` }}
          className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white ring-2 ring-accent shadow-[0_0_8px_var(--accent-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
        />
      </div>
    </div>
  );
};

// ----------------------------------------------------
// FULL TRACKS CATALOG MODAL / DRAWER
// ----------------------------------------------------

interface SongDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  playlists: Playlist[];
  currentPlaylistIndex: number;
  currentTrack: Track;
  onSelectTrack: (playlistIdx: number, trackIdx: number) => void;
}

const SongDrawer = ({
  isOpen,
  onClose,
  playlists,
  currentPlaylistIndex,
  currentTrack,
  onSelectTrack,
}: SongDrawerProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<number>(-1); // -1 means all

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Flattened track search
  const filteredList = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const results: { track: Track; playlistIdx: number; trackIdx: number; playlistName: string }[] = [];

    playlists.forEach((p, pIdx) => {
      if (activeTab !== -1 && activeTab !== pIdx) return;

      p.tracks.forEach((t, tIdx) => {
        if (!q) {
          results.push({ track: t, playlistIdx: pIdx, trackIdx: tIdx, playlistName: p.name });
        } else {
          const matchTitle = t.title.toLowerCase().includes(q);
          const matchArtist = t.artist.toLowerCase().includes(q);
          const matchFilm = t.film ? t.film.toLowerCase().includes(q) : false;
          if (matchTitle || matchArtist || matchFilm) {
            results.push({ track: t, playlistIdx: pIdx, trackIdx: tIdx, playlistName: p.name });
          }
        }
      });
    });

    return results;
  }, [searchQuery, activeTab, playlists]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/95 to-black/95 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-accent/20 text-accent">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-marathi">
                मराठी गाण्यांचा खजिना
              </h2>
              <p className="text-xs text-white/50 font-mono">
                {filteredList.length} गाणी उपलब्ध
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* Search input & Tab filters */}
        <div className="p-4 border-b border-white/10 flex flex-col gap-3 bg-black/40">
          <div className="relative w-full">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 fill-current" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              placeholder="गाण्याचे नाव, गायक किंवा चित्रपट शोधा... (उदा. सैराट, लता, संजू, कोळी)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent/80 transition-colors font-sans"
            />
          </div>

          {/* Quick Playlist filter buttons */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setActiveTab(-1)}
              className={`px-3 py-1 text-xs rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                activeTab === -1 ? "bg-accent text-black font-bold border-accent" : "bg-white/5 text-white/70 border-white/10 hover:border-white/20"
              }`}
            >
              सर्व ({playlists.reduce((acc, p) => acc + p.tracks.length, 0)})
            </button>
            {playlists.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1 text-xs rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === idx ? "bg-accent text-black font-bold border-accent" : "bg-white/5 text-white/70 border-white/10 hover:border-white/20"
                }`}
              >
                {p.name} ({p.tracks.length})
              </button>
            ))}
          </div>
        </div>

        {/* Songs List scrollable */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-3 divide-y divide-white/5">
          {filteredList.length === 0 ? (
            <div className="py-12 text-center text-white/40 text-sm font-marathi">
              कोणतेही गाणे सापडले नाही. कृपया वेगळा शब्द शोधा.
            </div>
          ) : (
            filteredList.map(({ track, playlistIdx, trackIdx, playlistName }) => {
              const isSelected =
                playlistIdx === currentPlaylistIndex && track.videoId === currentTrack.videoId;

              return (
                <button
                  key={`${track.id}-${playlistIdx}-${trackIdx}`}
                  onClick={() => {
                    onSelectTrack(playlistIdx, trackIdx);
                    onClose();
                  }}
                  className={`w-full text-left p-3 rounded-2xl flex items-center justify-between gap-3 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-accent/20 border border-accent/40 text-accent shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                      : "hover:bg-white/5 border border-transparent text-white/80 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isSelected ? "bg-accent text-black" : "bg-white/10 text-white/60"}`}>
                      {isSelected ? (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                        </svg>
                      ) : (
                        <span className="text-xs font-mono">{trackIdx + 1}</span>
                      )}
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold truncate font-marathi">
                        {track.title}
                      </h4>
                      <p className="text-xs text-white/50 truncate">
                        {track.artist} {track.film ? `• ${track.film}` : ""}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-white/50 border border-white/5 hidden xs:inline">
                      {playlistName}
                    </span>
                    <span className="text-xs font-mono text-white/40 tabular-nums">
                      {track.duration}
                    </span>
                  </div>
                </button>
              );
            })
          )}
        </div>

      </div>
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
  const [volume, setVolume] = useState(85);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const playerRef = useRef<any>(null);

  // Active playlist and track
  const currentPlaylist = PLAYLISTS[currentPlaylistIndex];
  const currentTrack = currentPlaylist.tracks[currentTrackIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handler state refs to prevent event listener closure staleness
  const nextTrackRef = useRef<() => void>(() => {});
  const errorRef = useRef<(code: number, videoId: string) => void>(() => {});
  const lastPlayAtRef = useRef<number>(0);
  const currentTrackRef = useRef<Track>(currentTrack);
  currentTrackRef.current = currentTrack;

  const isPlayingRef = useRef<boolean>(isPlaying);
  isPlayingRef.current = isPlaying;

  const consecutiveErrorsRef = useRef<number>(0);

  const handleNext = () => {
    setCurrentTrackIndex((prev) => {
      const len = currentPlaylist.tracks.length;
      if (isShuffle) {
        let rand = Math.floor(Math.random() * len);
        if (rand === prev && len > 1) rand = (rand + 1) % len;
        return rand;
      }
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
    consecutiveErrorsRef.current = 0;
    if (isPlaying) {
      try {
        playerRef.current.pauseVideo();
      } catch (e) {}
      setIsPlaying(false);
    } else {
      try {
        if (playerRef.current.unMute && !isMuted) playerRef.current.unMute();
        if (playerRef.current.setVolume) playerRef.current.setVolume(volume);
        playerRef.current.playVideo();
      } catch (e) {}
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!playerRef.current || !playerReady) return;
    if (isMuted) {
      try {
        playerRef.current.unMute();
        playerRef.current.setVolume(volume);
      } catch (e) {}
      setIsMuted(false);
    } else {
      try {
        playerRef.current.mute();
      } catch (e) {}
      setIsMuted(true);
    }
  };

  nextTrackRef.current = handleNext;
  errorRef.current = (code: number, videoId: string) => {
    console.warn(`YouTube Player error ${code} on video ${videoId}.`);
    consecutiveErrorsRef.current += 1;

    // If too many consecutive errors, pause to avoid endless fast loop
    if (consecutiveErrorsRef.current > 3) {
      console.warn("Too many consecutive errors, pausing playback loop.");
      setIsPlaying(false);
      consecutiveErrorsRef.current = 0;
      return;
    }

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

    setTimeout(() => {
      nextTrackRef.current();
    }, 1500);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === "Space") {
        e.preventDefault();
        handleTogglePlay();
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        if (playerRef.current && duration > 0) {
          const nextTime = Math.min(duration, elapsed + 10);
          setElapsed(nextTime);
          playerRef.current.seekTo(nextTime, true);
        }
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        if (playerRef.current && duration > 0) {
          const nextTime = Math.max(0, elapsed - 10);
          setElapsed(nextTime);
          playerRef.current.seekTo(nextTime, true);
        }
      } else if (e.key === "n" || e.key === "N") {
        handleNext();
      } else if (e.key === "p" || e.key === "P") {
        handlePrev();
      } else if (e.key === "m" || e.key === "M") {
        handleToggleMute();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, playerReady, duration, elapsed, isMuted, volume]);

  // Core YouTube API Initialization
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
            playsinline: 1,
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
                consecutiveErrorsRef.current = 0;
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

  // Video track change
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

  // Progress Interval
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

  const handleSelectSpecificTrack = (playlistIdx: number, trackIdx: number) => {
    setCurrentPlaylistIndex(playlistIdx);
    setCurrentTrackIndex(trackIdx);
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
      {/* ----------------- FIXED CORNERS / HUD ----------------- */}
      {/* Top Left: Clock */}
      <div className="fixed top-[max(1rem,env(safe-area-inset-top))] left-[max(1rem,env(safe-area-inset-left))] z-30">
        <Clock />
      </div>

      {/* Top Centre: Listener pill */}
      <div className="fixed top-[max(1rem,env(safe-area-inset-top))] left-1/2 -translate-x-1/2 z-30">
        <ListenerCount />
      </div>

      {/* Top Right: Songs Catalog Drawer Trigger */}
      <div className="fixed top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-30 flex items-center gap-2">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-accent/50 text-white/90 hover:text-accent shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-all duration-200 cursor-pointer select-none text-xs font-semibold"
        >
          <svg className="w-4 h-4 fill-current text-accent" viewBox="0 0 24 24">
            <path d="M4 10h12v2H4zm0-4h16v2H4zm0 8h8v2H4zm10 0v6l5-3-5-3z" />
          </svg>
          <span className="font-marathi">सर्व गाणी</span>
        </button>
      </div>

      {/* ----------------- BOTTOM PLAYER AREA ----------------- */}
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-3 sm:px-0 flex flex-col gap-2.5 sm:gap-3.5">
        
        {/* Playlist selector pill row */}
        <PlaylistSelector
          playlists={PLAYLISTS}
          currentPlaylistIndex={currentPlaylistIndex}
          onSelectPlaylist={handleSelectPlaylist}
        />

        {/* Unified Glass Player Shell */}
        <div className="w-full rounded-[30px] sm:rounded-full border border-white/15 bg-gradient-to-b from-white/[0.16] to-white/[0.06] backdrop-blur-3xl backdrop-saturate-[1.8] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.25)] p-3.5 sm:p-3 sm:pr-5 glass-glow transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
            
            {/* Left section: Vinyl Disc + Metadata + Seekbar */}
            <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
              <VinylDisc isPlaying={isPlaying} />

              <div className="flex-1 flex flex-col justify-center min-w-0 pr-1 select-none">
                <div className="flex items-baseline justify-between gap-2 sm:gap-4 mb-0.5">
                  <div className="flex flex-col min-w-0">
                    <h2 className="text-sm sm:text-[15.5px] font-bold text-white truncate tracking-wide font-marathi">
                      {currentTrack.title}
                    </h2>
                    <span className="text-xs sm:text-[12.5px] text-white/70 truncate">
                      {currentTrack.artist} {currentTrack.film ? `(${currentTrack.film})` : ""}
                    </span>
                  </div>

                  <div className="text-[10px] sm:text-[11px] font-mono text-white/60 tracking-wider tabular-nums font-semibold shrink-0">
                    {formatProgressTime(elapsed)} / {formatProgressTime(duration)}
                  </div>
                </div>

                <SeekBar elapsed={elapsed} duration={duration} onSeek={handleSeek} />
              </div>
            </div>

            {/* Right section: Transport buttons & controls */}
            <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 shrink-0 pt-1 sm:pt-0 border-t border-white/10 sm:border-t-0">
              
              {/* Shuffle button */}
              <button
                onClick={() => setIsShuffle((prev) => !prev)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                  isShuffle ? "text-accent bg-accent/15" : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
                title="शफल (Shuffle)"
                aria-label="Shuffle"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
                </svg>
              </button>

              {/* Prev button */}
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 active:scale-90 transition-all cursor-pointer"
                aria-label="Previous Track"
                title="मागील गाणे"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
                </svg>
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={handleTogglePlay}
                className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-black flex items-center justify-center hover:scale-105 active:scale-90 shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all cursor-pointer font-bold"
                aria-label={isPlaying ? "Pause" : "Play"}
                title={isPlaying ? "थांबवा" : "सुरू करा"}
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

              {/* Next button */}
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 active:scale-90 transition-all cursor-pointer"
                aria-label="Next Track"
                title="पुढील गाणे"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>

              {/* Mute/Volume button */}
              <button
                onClick={handleToggleMute}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                title={isMuted ? "अनम्यूट" : "म्यूट"}
                aria-label="Mute Toggle"
              >
                {isMuted ? (
                  <svg className="w-4 h-4 fill-current text-red-400" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* ----------------- FULL ALL-SONGS DRAWER MODAL ----------------- */}
      <SongDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        playlists={PLAYLISTS}
        currentPlaylistIndex={currentPlaylistIndex}
        currentTrack={currentTrack}
        onSelectTrack={handleSelectSpecificTrack}
      />
    </>
  );
}
