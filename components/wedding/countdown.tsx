"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  language: "ES" | "EN";
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function AnimatedNumber({ value }: { value: number }) {
  const displayValue = String(value).padStart(2, "0");

  return (
    <div className="relative flex h-[58px] items-center justify-center overflow-hidden md:h-[82px]">
      <motion.span
        key={displayValue}
        className="text-4xl font-semibold tabular-nums md:text-6xl"
        style={{
          fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
          color: "#FFF8EF",
          textShadow:
            "0 1px 0 rgba(255,255,255,0.16), 0 0 18px rgba(215,186,137,0.25), 0 8px 24px rgba(0,0,0,0.38)",
        }}
        initial={{ y: -18, opacity: 0.55, filter: "blur(4px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {displayValue}
      </motion.span>
    </div>
  );
}

function getTimeLeft(targetTime: number): TimeLeft {
  const now = Date.now();
  const difference = targetTime - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

export function Countdown({ language }: CountdownProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const tickAudioRef = useRef<HTMLAudioElement | null>(null);

  // Nikkah: 13 June 2026, 11:00 AM
  const weddingDateRef = useRef(new Date("2026-06-13T11:00:00").getTime());
  const audioUnlockedRef = useRef(false);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(weddingDateRef.current)
  );

  const content = {
    EN: {
      title: "Countdown",
      subtitle: "To the blessed Nikkah of Fathima Zama & Abdul Azeez",
      dateLine: "13 June 2026 • 11:00 AM",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    ES: {
      title: "Countdown",
      subtitle: "To the blessed Nikkah of Fathima Zama & Abdul Azeez",
      dateLine: "13 June 2026 • 11:00 AM",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
  } as const;

  const { title, subtitle, dateLine, days, hours, minutes, seconds } =
    content[language];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDateRef.current));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const audio = tickAudioRef.current;
    if (!audio) return;

    audio.volume = 0.16;
    audio.loop = true;
    audio.preload = "auto";

    const unlockAudio = async () => {
      if (audioUnlockedRef.current) return;

      try {
        audio.muted = true;
        await audio.play();
        audio.pause();
        audio.currentTime = 0;
        audio.muted = false;
        audioUnlockedRef.current = true;
      } catch {
        // Browser blocked audio until user interaction.
      }
    };

    const handleFirstInteraction = () => {
      unlockAudio();
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const audio = tickAudioRef.current;

    if (!section || !audio) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            try {
              audio.currentTime = 0;
              await audio.play();
            } catch {
              // Audio may still be blocked until user interaction.
            }
          } else {
            audio.pause();
            audio.currentTime = 0;
          }
        }
      },
      {
        threshold: 0.55,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const timeUnits = useMemo(
    () => [
      { value: timeLeft.days, label: days },
      { value: timeLeft.hours, label: hours },
      { value: timeLeft.minutes, label: minutes },
      { value: timeLeft.seconds, label: seconds },
    ],
    [timeLeft, days, hours, minutes, seconds]
  );

  return (
    <section
      ref={sectionRef}
      id="countdown"
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #FFF8EF 0%, #D7BA89 8%, #4E405E 22%, #000040 48%, #00002B 74%, #000014 100%)",
      }}
    >
      <audio ref={tickAudioRef} loop preload="auto">
        <source src="/tick.mp3" type="audio/mpeg" />
      </audio>

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <Image
          src="/images/rose.jpg"
          alt="Luxury floral background"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Luxury Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,248,239,0.82) 0%, rgba(215,186,137,0.50) 10%, rgba(0,0,64,0.56) 34%, rgba(0,0,64,0.88) 68%, rgba(0,0,20,0.98) 100%)",
        }}
      />

      {/* Golden Center Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(215,186,137,0.26) 0%, rgba(215,186,137,0.10) 30%, rgba(0,0,64,0.06) 52%, transparent 76%)",
        }}
      />

      {/* Top Blend */}
      <div
        className="absolute inset-x-0 top-0 h-[30%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,248,239,0.95) 0%, rgba(255,248,239,0.34) 35%, rgba(215,186,137,0.08) 68%, transparent 100%)",
        }}
      />

      {/* Bottom Blend */}
      <div
        className="absolute inset-x-0 bottom-0 h-[34%]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,20,1) 0%, rgba(0,0,40,0.78) 34%, rgba(0,0,64,0.24) 70%, transparent 100%)",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-24 h-64 w-64 rounded-full bg-[#D7BA89]/16 blur-[80px]" />
        <div className="absolute right-[8%] bottom-12 h-72 w-72 rounded-full bg-[#FFF8EF]/10 blur-[90px]" />
        <div className="absolute left-1/2 top-[55%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D7BA89]/10 blur-[110px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mb-14 text-center md:mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#D7BA89] bg-[#FFF8EF] shadow-[0_0_18px_rgba(215,186,137,0.55)]" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
          </div>

          <h2
            className="mb-3 text-5xl md:text-6xl"
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              color: "#FFF8EF",
              textShadow:
                "0 0 18px rgba(215,186,137,0.32), 0 8px 28px rgba(0,0,0,0.45)",
            }}
          >
            {title}
          </h2>

          <p
            className="mx-auto max-w-2xl text-base leading-relaxed md:text-lg"
            style={{
              color: "rgba(255,248,239,0.86)",
              textShadow: "0 4px 14px rgba(0,0,0,0.42)",
            }}
          >
            {subtitle}
          </p>

          <p
            className="mt-4 text-xs uppercase tracking-[0.32em] md:text-sm"
            style={{
              color: "rgba(215,186,137,0.96)",
              textShadow: "0 4px 14px rgba(0,0,0,0.36)",
            }}
          >
            {dateLine}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.58,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="group relative overflow-hidden rounded-[28px] border p-6 text-center md:p-8"
                style={{
                  borderColor: "rgba(215,186,137,0.36)",
                  backdropFilter: "blur(16px)",
                  background:
                    "linear-gradient(180deg, rgba(255,248,239,0.16) 0%, rgba(215,186,137,0.10) 38%, rgba(0,0,64,0.28) 100%)",
                  boxShadow:
                    "0 22px 55px rgba(0,0,40,0.36), inset 0 1px 0 rgba(255,248,239,0.28), inset 0 -1px 0 rgba(215,186,137,0.16)",
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,248,239,0.18),rgba(255,248,239,0.03)_36%,transparent_60%)]" />
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#D7BA89]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D7BA89]/30 to-transparent" />

                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#D7BA89]/10 blur-2xl transition-all duration-500 group-hover:bg-[#D7BA89]/20" />
                <div className="absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#FFF8EF]/8 blur-2xl" />

                <div className="relative">
                  <AnimatedNumber value={unit.value} />

                  <span
                    className="mt-2 block text-xs uppercase tracking-[0.30em] md:text-sm"
                    style={{
                      color: "rgba(215,186,137,0.94)",
                      textShadow: "0 3px 12px rgba(0,0,0,0.38)",
                    }}
                  >
                    {unit.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mx-auto mt-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.75 }}
        >
          <p
            style={{
              color: "rgba(255,248,239,0.78)",
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "clamp(18px, 2.2vw, 25px)",
              fontStyle: "italic",
              lineHeight: 1.5,
              textShadow: "0 4px 14px rgba(0,0,0,0.42)",
            }}
          >
            Every passing moment brings us closer to a day filled with prayers,
            blessings, family, and love.
          </p>
        </motion.div>
      </div>
    </section>
  );
}