"use client";

import Image from "next/image";
import { useRef, type SVGProps } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";

interface HeroProps {
  language: "ES" | "EN";
  isMuted: boolean;
  onToggleMusic: () => void;
}

const content = {
  EN: {
    prelude: "TOGETHER WITH THEIR FAMILIES",
    names: ["Stebin", "Jesna"],
    ampersand: "&",
    quote: "Join us as we celebrate love, faith, and a beautiful new beginning.",
    subline: "A  Wedding Celebration",
    scroll: "SCROLL TO BEGIN",
    musicOn: "Silence",
    musicOff: "Music",
  },
  ES: {
    prelude: "JUNTO CON SUS FAMILIAS",
    names: ["Stebin", "Jesna"],
    ampersand: "&",
    quote:
      "Únanse a nosotros para celebrar el amor, la fe y un hermoso nuevo comienzo.",
    subline: "UNA CELEBRACIÓN DE BODA CRISTIANA",
    scroll: "DESLIZA PARA COMENZAR",
    musicOn: "Silencio",
    musicOff: "Música",
  },
} as const;

const PETALS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${(i * 11.8 + 6) % 100}%`,
  delay: `${i * 1.4}s`,
  duration: `${12 + (i % 4) * 1.5}s`,
  size: `${12 + (i % 3) * 4}px`,
  rotateFrom: `${i % 2 === 0 ? -20 : 20}deg`,
  rotateTo: `${i % 2 === 0 ? 240 : -220}deg`,
}));

const GLOW_PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 12.4 + 5) % 100}%`,
  top: `${(i * 14.2 + 10) % 78}%`,
  delay: `${i * 0.25}s`,
  duration: `${3.8 + (i % 5) * 0.5}s`,
  size: `${6 + (i % 4) * 4}px`,
}));

function OrnamentLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 300 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <line
        x1="0"
        y1="6"
        x2="110"
        y2="6"
        stroke="#cda57d"
        strokeWidth="0.6"
        strokeDasharray="2 4"
      />
      <path
        d="M118 6 L124 2 L130 6 L124 10 Z"
        fill="none"
        stroke="#cda57d"
        strokeWidth="0.7"
      />
      <path
        d="M138 6 L150 2 L162 6 L150 10 Z"
        fill="none"
        stroke="#cda57d"
        strokeWidth="0.9"
      />
      <path
        d="M170 6 L176 2 L182 6 L176 10 Z"
        fill="none"
        stroke="#cda57d"
        strokeWidth="0.7"
      />
      <line
        x1="190"
        y1="6"
        x2="300"
        y2="6"
        stroke="#cda57d"
        strokeWidth="0.6"
        strokeDasharray="2 4"
      />
    </svg>
  );
}

function CornerOrnament(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 58 L2 2 L58 2" stroke="#cda57d" strokeWidth="0.7" fill="none" />
      <path d="M2 20 L2 2 L20 2" stroke="#cda57d" strokeWidth="1.2" fill="none" />
      <circle cx="2" cy="2" r="2" fill="#cda57d" opacity="0.8" />
    </svg>
  );
}

export function Hero({ language, isMuted, onToggleMusic }: HeroProps) {
  const t = content[language];
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const posterY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 40]
  );

  const posterScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.03]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 50]
  );

  const textOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.96]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500;1,600&family=Great+Vibes&family=Inter:wght@300;400;500;600&display=swap');

        .font-cormorant {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-script {
          font-family: 'Great Vibes', cursive;
        }

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        .hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 600;
          letter-spacing: -0.028em;
          line-height: 0.86;
        }

        .hero-name-gradient {
          background: linear-gradient(180deg, #fffefb 0%, #f7e8d6 30%, #d8aa7b 62%, #b97b4f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .hero-name-shadow {
          text-shadow:
            0 2px 0 rgba(255,255,255,0.14),
            0 8px 22px rgba(88,54,33,0.18),
            0 14px 40px rgba(0,0,0,0.26);
        }

        .hero-quote-shadow {
          text-shadow:
            0 0 10px rgba(255,220,200,0.15),
            0 6px 18px rgba(0,0,0,0.35);
        }

        .gold-shimmer {
          background-size: 200% 100%;
          animation: shimmerMove 5s linear infinite;
          will-change: background-position;
        }

        @keyframes shimmerMove {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(6px); }
        }

        .scroll-pulse {
          animation: scrollPulse 2.4s ease-in-out infinite;
        }

        @keyframes petalFall {
          0% {
            transform: translate3d(0, -80px, 0) rotate(var(--rotate-from));
            opacity: 0;
          }
          10% {
            opacity: 0.72;
          }
          35% {
            transform: translate3d(18px, 28vh, 0) rotate(calc(var(--rotate-from) + 70deg));
            opacity: 0.66;
          }
          60% {
            transform: translate3d(-12px, 58vh, 0) rotate(calc(var(--rotate-from) + 140deg));
            opacity: 0.45;
          }
          80% {
            transform: translate3d(10px, 86vh, 0) rotate(calc(var(--rotate-from) + 200deg));
            opacity: 0.2;
          }
          100% {
            transform: translate3d(-8px, 110vh, 0) rotate(var(--rotate-to));
            opacity: 0;
          }
        }

        @keyframes glowFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate3d(8px, -18px, 0) scale(1.18);
            opacity: 0.75;
          }
        }

        .hero-petal {
          position: absolute;
          top: -4rem;
          z-index: 9;
          pointer-events: none;
          animation-name: petalFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--duration);
          animation-delay: var(--delay);
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        .hero-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 9999px;
          animation-name: glowFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-duration: var(--duration);
          animation-delay: var(--delay);
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .gold-shimmer,
          .scroll-pulse,
          .hero-petal,
          .hero-glow {
            animation: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-[100svh] overflow-hidden"
        aria-label="Wedding Hero"
        style={{
          background:
            "linear-gradient(180deg, #f5e5dc 0%, #f5ddd8 20%, #f3d8dc 42%, #f2d9df 64%, #edd8dd 82%, #ead7d8 100%)",
        }}
      >
        {/* background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_36%)]" />
          <div className="absolute left-1/2 top-[40%] h-[82vh] w-[82vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,248,239,0.72)_0%,rgba(246,218,224,0.34)_40%,transparent_72%)] blur-[46px]" />
          <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-white/22 blur-3xl" />
          <div className="absolute right-[10%] top-[24%] h-80 w-80 rounded-full bg-[#f6d5de]/26 blur-3xl" />
          <div className="absolute bottom-[10%] left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[#ffffff]/18 blur-[90px]" />
        </div>

        {/* full screen image */}
        <motion.div
          className="absolute inset-0 z-[5]"
          style={{
            y: posterY,
            scale: posterScale,
          }}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(255,244,235,0.18)_0%,rgba(255,235,230,0.08)_35%,rgba(0,0,0,0)_70%)]" />

            <div className="absolute inset-0 z-[2]">
              <Image
                src="/images/doodle-couple.png"
                alt="Wedding Couple"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover object-center"
                style={{
                  filter: "drop-shadow(0 18px 34px rgba(0,0,0,0.18))",
                }}
              />
            </div>

            {/* image overlays */}
            <div className="absolute inset-0 z-[3] bg-black/20" />
            <div className="absolute inset-0 z-[4] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.04)_28%,rgba(0,0,0,0.18)_62%,rgba(0,0,0,0.48)_88%,rgba(14,11,12,0.82)_100%)]" />
          </div>
        </motion.div>

        {/* particles */}
        {!reduceMotion && (
          <div className="absolute inset-0 z-[7]">
            {GLOW_PARTICLES.map((p) => (
              <div
                key={p.id}
                className="hero-glow"
                style={
                  {
                    left: p.left,
                    top: p.top,
                    width: p.size,
                    height: p.size,
                    "--delay": p.delay,
                    "--duration": p.duration,
                    background:
                      "radial-gradient(circle, rgba(255,248,238,0.95) 0%, rgba(205,165,125,0.42) 35%, rgba(247,205,219,0.14) 70%, transparent 100%)",
                    filter: "blur(1px)",
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        )}

        {!reduceMotion && (
          <div className="absolute inset-0 z-[8] overflow-hidden">
            {PETALS.map((petal) => (
              <div
                key={petal.id}
                className="hero-petal"
                style={
                  {
                    left: petal.left,
                    width: petal.size,
                    height: `calc(${petal.size} * 0.8)`,
                    "--delay": petal.delay,
                    "--duration": petal.duration,
                    "--rotate-from": petal.rotateFrom,
                    "--rotate-to": petal.rotateTo,
                  } as React.CSSProperties
                }
              >
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255,247,249,0.95) 0%, rgba(247,205,219,0.92) 28%, rgba(229,170,191,0.88) 58%, rgba(195,126,151,0.82) 100%)",
                    borderRadius: "65% 35% 60% 40% / 50% 45% 55% 50%",
                    boxShadow: "0 8px 18px rgba(219,133,163,0.12)",
                    filter: "blur(0.2px)",
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* soft overlays */}
        <div className="absolute inset-0 z-[10] bg-gradient-to-t from-[#0e0b0c]/35 via-[#ffffff05] to-transparent" />
        <div className="absolute inset-0 z-[10] bg-gradient-to-r from-[#fff9f7]/6 via-transparent to-[#fff9f7]/4" />
        <div className="absolute inset-0 z-[10] bg-[radial-gradient(circle_at_50%_44%,rgba(255,255,255,0.08),transparent_38%)]" />

        {/* corners */}
        <div className="pointer-events-none absolute inset-0 z-[12]">
          <CornerOrnament className="absolute left-5 top-5 h-12 w-12 sm:left-8 sm:top-8 sm:h-16 sm:w-16" />
          <CornerOrnament className="absolute right-5 top-5 h-12 w-12 scale-x-[-1] sm:right-8 sm:top-8 sm:h-16 sm:w-16" />
        </div>

        {/* music */}
        <motion.button
          onClick={onToggleMusic}
          className="group absolute right-5 top-5 z-30 flex items-center gap-2 sm:right-8 sm:top-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.85 }}
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-label={isMuted ? t.musicOff : t.musicOn}
        >
          <span
            className="font-cormorant text-xs uppercase tracking-[0.32em]"
            style={{ color: "rgba(255,245,238,0.92)" }}
          >
            {isMuted ? t.musicOff : t.musicOn}
          </span>
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            style={{
              borderColor: "rgba(255,255,255,0.22)",
              color: "rgba(255,248,242,0.96)",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 28px rgba(0,0,0,0.18)",
            }}
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </span>
        </motion.button>

        {/* text */}
        <motion.div
          className="absolute bottom-20 left-1/2 z-20 w-full max-w-4xl -translate-x-1/2 px-6 text-center sm:px-8"
          style={{
            y: textY,
            opacity: textOpacity,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.05,
              delay: 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 flex flex-col items-center gap-3"
          >
            <p
              className="font-cormorant uppercase"
              style={{
                color: "rgba(255,244,237,0.9)",
                fontSize: "clamp(8px, 1.7vw, 11px)",
                letterSpacing: "0.34em",
                textShadow: "0 3px 12px rgba(0,0,0,0.35)",
              }}
            >
              {t.prelude}
            </p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.2, filter: "blur(6px)" }}
              animate={{ opacity: 1, scaleX: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="origin-center"
            >
              <OrnamentLine className="w-40 sm:w-56" />
            </motion.div>
          </motion.div>

          <div className="relative flex flex-col items-center">
            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 56,
                  scale: 1.03,
                  clipPath: "inset(100% 0 0 0)",
                  filter: "blur(16px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  clipPath: "inset(0% 0 0 0)",
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.45,
                  delay: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hero-name hero-name-gradient hero-name-shadow gold-shimmer text-center"
                style={{ fontSize: "clamp(58px, 10.5vw, 128px)" }}
              >
                {t.names[0]}
              </motion.h1>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                scale: 0.88,
                rotate: -4,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.95,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="my-[-6px] flex items-center gap-4 sm:my-[-10px]"
            >
              <motion.div
                initial={{ opacity: 0, scaleX: 0.2 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.95, delay: 0.54 }}
                className="origin-right"
                style={{
                  width: "clamp(24px, 6vw, 48px)",
                  height: "0.5px",
                  background: "rgba(240,207,170,0.5)",
                }}
              />
              <span
                className="font-script"
                style={{
                  color: "rgba(244,210,174,0.98)",
                  fontSize: "clamp(38px, 6vw, 60px)",
                  lineHeight: 1,
                  textShadow: "0 0 18px rgba(0,0,0,0.22)",
                }}
              >
                {t.ampersand}
              </span>
              <motion.div
                initial={{ opacity: 0, scaleX: 0.2 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.95, delay: 0.54 }}
                className="origin-left"
                style={{
                  width: "clamp(24px, 6vw, 48px)",
                  height: "0.5px",
                  background: "rgba(240,207,170,0.5)",
                }}
              />
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 56,
                  scale: 1.03,
                  clipPath: "inset(100% 0 0 0)",
                  filter: "blur(16px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  clipPath: "inset(0% 0 0 0)",
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.45,
                  delay: 0.72,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hero-name hero-name-gradient hero-name-shadow gold-shimmer text-center"
                style={{ fontSize: "clamp(58px, 10.5vw, 128px)" }}
              >
                {t.names[1]}
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.2, filter: "blur(6px)" }}
            animate={{ opacity: 1, scaleX: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.92,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 origin-center sm:mt-10"
          >
            <OrnamentLine className="w-40 sm:w-60" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
              scale: 0.985,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.12,
              delay: 1.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 px-2 text-center sm:mt-9"
          >
            <p
              className="font-cormorant hero-quote-shadow italic"
              style={{
                color: "rgba(255,241,232,0.95)",
                fontSize: "clamp(16px, 2.4vw, 24px)",
                lineHeight: 1.55,
              }}
            >
              {t.quote}
            </p>
            <p
              className="font-inter mt-3 uppercase"
              style={{
                color: "rgba(255,226,210,0.88)",
                fontSize: "clamp(10px, 1.4vw, 12px)",
                letterSpacing: "0.18em",
                textShadow: "0 4px 12px rgba(0,0,0,0.28)",
              }}
            >
              {t.subline}
            </p>
          </motion.div>
        </motion.div>

        {/* scroll */}
        <motion.div
          className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
        >
          <span
            className="font-cormorant uppercase tracking-[0.38em]"
            style={{
              color: "rgba(255,230,215,0.85)",
              fontSize: "8px",
              textShadow: "0 3px 10px rgba(0,0,0,0.3)",
            }}
          >
            {t.scroll}
          </span>
          <div className={reduceMotion ? "" : "scroll-pulse"}>
            <ChevronDown size={14} style={{ color: "rgba(255,230,215,0.92)" }} />
          </div>
        </motion.div>

        {/* dark blend to next section */}
        <div
          className="absolute bottom-0 left-0 z-[15] h-40 w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(14,11,12,0.45) 40%, rgba(14,11,12,0.82) 70%, #0e0b0c 100%)",
          }}
        />
      </section>
    </>
  );
}