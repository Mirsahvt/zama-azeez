"use client";

import Image from "next/image";
import { useRef, type CSSProperties, type SVGProps } from "react";
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
    names: ["Fathima Zama", "Abdul Azeez"],
    ampersand: "&",
    quote:
      "Join us as we celebrate love, blessings, family, and a beautiful new beginning.",
    subline: "Wedding Celebrations • 7 June – 16 June 2026",
    scroll: "SCROLL TO BEGIN",
    musicOn: "Silence",
    musicOff: "Music",
  },
  ES: {
    prelude: "TOGETHER WITH THEIR FAMILIES",
    names: ["Fathima Zama", "Abdul Azeez"],
    ampersand: "&",
    quote:
      "Join us as we celebrate love, blessings, family, and a beautiful new beginning.",
    subline: "Wedding Celebrations • 7 June – 16 June 2026",
    scroll: "SCROLL TO BEGIN",
    musicOn: "Silence",
    musicOff: "Music",
  },
} as const;

const PETALS = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  left: `${(i * 17.8 + 6) % 100}%`,
  delay: `${i * 1.8}s`,
  duration: `${12 + (i % 3) * 1.6}s`,
  size: `${12 + (i % 2) * 4}px`,
  rotateFrom: `${i % 2 === 0 ? -20 : 20}deg`,
  rotateTo: `${i % 2 === 0 ? 240 : -220}deg`,
}));

const GLOW_PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${(i * 12.4 + 5) % 100}%`,
  top: `${(i * 14.2 + 10) % 78}%`,
  delay: `${i * 0.35}s`,
  duration: `${3.8 + (i % 4) * 0.5}s`,
  size: `${6 + (i % 3) * 4}px`,
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
        stroke="#D7BA89"
        strokeWidth="0.6"
        strokeDasharray="2 4"
      />
      <path
        d="M118 6 L124 2 L130 6 L124 10 Z"
        fill="none"
        stroke="#D7BA89"
        strokeWidth="0.7"
      />
      <path
        d="M138 6 L150 2 L162 6 L150 10 Z"
        fill="none"
        stroke="#D7BA89"
        strokeWidth="0.9"
      />
      <path
        d="M170 6 L176 2 L182 6 L176 10 Z"
        fill="none"
        stroke="#D7BA89"
        strokeWidth="0.7"
      />
      <line
        x1="190"
        y1="6"
        x2="300"
        y2="6"
        stroke="#D7BA89"
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
      <path
        d="M2 58 L2 2 L58 2"
        stroke="#D7BA89"
        strokeWidth="0.7"
        fill="none"
      />
      <path
        d="M2 20 L2 2 L20 2"
        stroke="#D7BA89"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="2" cy="2" r="2" fill="#D7BA89" opacity="0.85" />
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
    reduceMotion ? [0, 0] : [0, 24]
  );

  const posterScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.025]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 34]
  );

  const textOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.96]);

  return (
    <>
      <style>{`
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
          letter-spacing: -0.035em;
          line-height: 0.88;
        }

        .hero-name-gradient {
          background: linear-gradient(
            180deg,
            #fff8ef 0%,
            #f3dfbd 30%,
            #d7ba89 60%,
            #a87b3f 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .hero-name-shadow {
          text-shadow:
            0 2px 0 rgba(255,255,255,0.08),
            0 10px 28px rgba(215,186,137,0.18),
            0 18px 48px rgba(0,0,64,0.42);
        }

        .hero-quote-shadow {
          text-shadow:
            0 0 12px rgba(215,186,137,0.18),
            0 8px 22px rgba(0,0,0,0.42);
        }

        .gold-shimmer {
          background-size: 220% 100%;
          animation: shimmerMove 5.5s linear infinite;
          will-change: background-position;
        }

        @keyframes shimmerMove {
          0% { background-position: 220% 0; }
          100% { background-position: -220% 0; }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.45; transform: translateY(0px); }
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
            opacity: 0.66;
          }
          35% {
            transform: translate3d(14px, 30vh, 0) rotate(calc(var(--rotate-from) + 70deg));
            opacity: 0.55;
          }
          60% {
            transform: translate3d(-10px, 60vh, 0) rotate(calc(var(--rotate-from) + 140deg));
            opacity: 0.35;
          }
          80% {
            transform: translate3d(8px, 86vh, 0) rotate(calc(var(--rotate-from) + 200deg));
            opacity: 0.18;
          }
          100% {
            transform: translate3d(-6px, 110vh, 0) rotate(var(--rotate-to));
            opacity: 0;
          }
        }

        @keyframes glowFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.18;
          }
          50% {
            transform: translate3d(6px, -14px, 0) scale(1.12);
            opacity: 0.58;
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
            "linear-gradient(135deg, #000040 0%, #01012e 42%, #0b0b64 72%, #d7ba89 145%)",
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.24),transparent_36%)]" />
          <div className="absolute left-1/2 top-[38%] h-[74vh] w-[74vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,186,137,0.22)_0%,rgba(0,0,64,0.18)_42%,transparent_72%)] blur-[32px]" />
          <div className="absolute left-[8%] top-[20%] h-56 w-56 rounded-full bg-[#D7BA89]/15 blur-3xl" />
          <div className="absolute right-[8%] top-[24%] h-60 w-60 rounded-full bg-[#fff8ef]/10 blur-3xl" />
          <div className="absolute bottom-[8%] left-1/2 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-[#D7BA89]/10 blur-[64px]" />
        </div>

        {/* Full Screen Image */}
        <motion.div
          className="absolute inset-0 z-[5] gpu-transform"
          style={{
            y: posterY,
            scale: posterScale,
          }}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(215,186,137,0.14)_0%,rgba(255,248,239,0.06)_35%,rgba(0,0,0,0)_70%)]" />

            <div className="absolute inset-0 z-[2]">
              <Image
                src="/images/zama4.jpg"
                alt="Fathima Zama and Abdul Azeez wedding illustration"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover object-center"
                style={{
                  filter:
                    "drop-shadow(0 18px 34px rgba(0,0,0,0.28)) saturate(0.95)",
                }}
              />
            </div>

            <div className="absolute inset-0 z-[3] bg-[#000040]/34" />
            <div className="absolute inset-0 z-[4] bg-[linear-gradient(to_bottom,rgba(0,0,64,0.42)_0%,rgba(0,0,64,0.12)_30%,rgba(0,0,64,0.30)_62%,rgba(0,0,30,0.70)_88%,rgba(0,0,20,0.94)_100%)]" />
          </div>
        </motion.div>

        {/* Glow Particles */}
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
                      "radial-gradient(circle, rgba(255,248,239,0.92) 0%, rgba(215,186,137,0.42) 35%, rgba(0,0,64,0.08) 70%, transparent 100%)",
                    filter: "blur(0.8px)",
                  } as CSSProperties
                }
              />
            ))}
          </div>
        )}

        {/* Petals */}
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
                  } as CSSProperties
                }
              >
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255,248,239,0.94) 0%, rgba(215,186,137,0.82) 36%, rgba(184,140,78,0.72) 100%)",
                    borderRadius: "65% 35% 60% 40% / 50% 45% 55% 50%",
                    boxShadow: "0 6px 14px rgba(215,186,137,0.12)",
                    filter: "blur(0.15px)",
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Soft Overlays */}
        <div className="absolute inset-0 z-[10] bg-gradient-to-t from-[#000014]/36 via-[#ffffff03] to-transparent" />
        <div className="absolute inset-0 z-[10] bg-gradient-to-r from-[#fff8ef]/5 via-transparent to-[#d7ba89]/4" />
        <div className="absolute inset-0 z-[10] bg-[radial-gradient(circle_at_50%_44%,rgba(215,186,137,0.09),transparent_40%)]" />

        {/* Corners */}
        <div className="pointer-events-none absolute inset-0 z-[12]">
          <CornerOrnament className="absolute left-5 top-5 h-12 w-12 sm:left-8 sm:top-8 sm:h-16 sm:w-16" />
          <CornerOrnament className="absolute right-5 top-5 h-12 w-12 scale-x-[-1] sm:right-8 sm:top-8 sm:h-16 sm:w-16" />
        </div>

        {/* Music Button */}
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
            style={{ color: "rgba(255,248,239,0.92)" }}
          >
            {isMuted ? t.musicOff : t.musicOn}
          </span>
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            style={{
              borderColor: "rgba(215,186,137,0.36)",
              color: "rgba(255,248,239,0.96)",
              background: "rgba(0,0,64,0.32)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 24px rgba(0,0,0,0.24)",
            }}
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </span>
        </motion.button>

        {/* Text */}
        <motion.div
          className="absolute bottom-20 left-1/2 z-20 w-full max-w-5xl -translate-x-1/2 px-6 text-center sm:px-8"
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
                color: "rgba(255,248,239,0.92)",
                fontSize: "clamp(8px, 1.7vw, 11px)",
                letterSpacing: "0.34em",
                textShadow: "0 4px 14px rgba(0,0,0,0.48)",
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
                style={{ fontSize: "clamp(52px, 9.6vw, 120px)" }}
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
              className="my-[-4px] flex items-center gap-4 sm:my-[-8px]"
            >
              <motion.div
                initial={{ opacity: 0, scaleX: 0.2 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.95, delay: 0.54 }}
                className="origin-right"
                style={{
                  width: "clamp(24px, 6vw, 48px)",
                  height: "0.5px",
                  background: "rgba(215,186,137,0.62)",
                }}
              />
              <span
                className="font-script"
                style={{
                  color: "rgba(215,186,137,0.98)",
                  fontSize: "clamp(38px, 6vw, 60px)",
                  lineHeight: 1,
                  textShadow: "0 0 20px rgba(215,186,137,0.18)",
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
                  background: "rgba(215,186,137,0.62)",
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
                style={{ fontSize: "clamp(52px, 9.6vw, 120px)" }}
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
                color: "rgba(255,248,239,0.95)",
                fontSize: "clamp(16px, 2.4vw, 24px)",
                lineHeight: 1.55,
              }}
            >
              {t.quote}
            </p>
            <p
              className="font-inter mt-3 uppercase"
              style={{
                color: "rgba(215,186,137,0.92)",
                fontSize: "clamp(10px, 1.4vw, 12px)",
                letterSpacing: "0.18em",
                textShadow: "0 4px 14px rgba(0,0,0,0.36)",
              }}
            >
              {t.subline}
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
        >
          <span
            className="font-cormorant uppercase tracking-[0.38em]"
            style={{
              color: "rgba(255,248,239,0.82)",
              fontSize: "8px",
              textShadow: "0 3px 10px rgba(0,0,0,0.36)",
            }}
          >
            {t.scroll}
          </span>
          <div className={reduceMotion ? "" : "scroll-pulse"}>
            <ChevronDown size={14} style={{ color: "rgba(215,186,137,0.96)" }} />
          </div>
        </motion.div>

        {/* Dark Blend To Next Section */}
        <div
          className="absolute bottom-0 left-0 z-[15] h-40 w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,64,0) 0%, rgba(0,0,44,0.45) 40%, rgba(0,0,30,0.82) 70%, #000014 100%)",
          }}
        />
      </section>
    </>
  );
}