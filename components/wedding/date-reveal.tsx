"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface DateRevealProps {
  language: "ES" | "EN";
}

interface ScratchTileProps {
  value: string;
  delay?: number;
  onReveal?: () => void;
}

function ScratchTile({ value, delay = 0, onReveal }: ScratchTileProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastRevealCheckRef = useRef(0);

  const burstParticlesRef = useRef(
    Array.from({ length: 8 }, () => ({
      x: (Math.random() - 0.5) * 110,
      y: (Math.random() - 0.5) * 90,
    }))
  );

  const [revealed, setRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [burst, setBurst] = useState(false);

  const powderBits = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        left: `${(i * 17) % 100}%`,
        top: `${(i * 13) % 100}%`,
        x: (Math.random() - 0.5) * 36,
        y: (Math.random() - 0.5) * 26,
        delay: i * 0.02,
      })),
    []
  );

  const sparkles = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        left: `${(i * 19) % 100}%`,
        top: `${(i * 11) % 100}%`,
        x: i % 2 === 0 ? 18 : -18,
        y: -12 - (i % 3) * 5,
        delay: i * 0.04,
      })),
    []
  );

  useEffect(() => {
    const audio = new Audio("/freesound_community-morris-head-scratch-103330.mp3");
    audio.volume = 0.22;
    audio.preload = "none";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;

    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const setupCanvas = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#fff8ef");
      gradient.addColorStop(0.18, "#f4dfbd");
      gradient.addColorStop(0.36, "#d7ba89");
      gradient.addColorStop(0.52, "#f6ddb0");
      gradient.addColorStop(0.74, "#b9965f");
      gradient.addColorStop(1, "#fff1d6");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const sheen = ctx.createLinearGradient(0, 0, width, height);
      sheen.addColorStop(0, "rgba(255,255,255,0.34)");
      sheen.addColorStop(0.24, "rgba(255,255,255,0.08)");
      sheen.addColorStop(0.5, "rgba(255,255,255,0)");
      sheen.addColorStop(0.78, "rgba(255,255,255,0.18)");
      sheen.addColorStop(1, "rgba(255,255,255,0.06)");

      ctx.fillStyle = sheen;
      ctx.fillRect(0, 0, width, height);

      const shimmer = ctx.createLinearGradient(0, 0, width, 0);
      shimmer.addColorStop(0, "rgba(255,255,255,0)");
      shimmer.addColorStop(0.18, "rgba(255,255,255,0.04)");
      shimmer.addColorStop(0.42, "rgba(255,255,255,0.32)");
      shimmer.addColorStop(0.5, "rgba(255,255,255,0.72)");
      shimmer.addColorStop(0.58, "rgba(255,255,255,0.32)");
      shimmer.addColorStop(0.82, "rgba(255,255,255,0.04)");
      shimmer.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = shimmer;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 8; i++) {
        const y = (height / 8) * i;

        ctx.strokeStyle =
          i % 2 === 0 ? "rgba(255,255,255,0.14)" : "rgba(0,0,64,0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(width * 0.25, y + 4, width * 0.7, y - 5, width, y + 3);
        ctx.stroke();
      }

      for (let i = 0; i < 22; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.13})`;
        ctx.beginPath();
        ctx.arc(
          Math.random() * width,
          Math.random() * height,
          Math.random() * 1 + 0.25,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgba(0,0,64,0.72)";
      ctx.font = '700 13px "Cormorant Garamond", Georgia, serif';
      ctx.fillText("Scratch", width / 2, height / 2);

      ctx.globalCompositeOperation = "destination-out";
    };

    setupCanvas();

    let drawing = false;
    let lastSoundTime = 0;

    const playScratchSound = () => {
      const now = Date.now();

      if (!audioRef.current || now - lastSoundTime < 260) return;

      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
      lastSoundTime = now;
    };

    const getPoint = (event: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();

      if ("touches" in event && event.touches.length > 0) {
        return {
          x: event.touches[0].clientX - rect.left,
          y: event.touches[0].clientY - rect.top,
        };
      }

      const mouseEvent = event as MouseEvent;

      return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top,
      };
    };

    const scratch = (x: number, y: number) => {
      const radius = 15;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, radius * 0.56, 0, Math.PI * 2);
      ctx.fill();
    };

    const checkReveal = () => {
      const now = Date.now();

      if (now - lastRevealCheckRef.current < 180) return;

      lastRevealCheckRef.current = now;

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let transparentPixels = 0;

      for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] < 20) transparentPixels++;
      }

      const totalPixels = imageData.data.length / 4;
      const percent = transparentPixels / totalPixels;

      if (percent > 0.28 && !revealed) {
        setRevealed(true);
        setBurst(true);
        onReveal?.();

        if (typeof navigator !== "undefined" && "vibrate" in navigator) {
          navigator.vibrate([14, 24, 14]);
        }

        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }

        setTimeout(() => setBurst(false), 800);
      }
    };

    const handleStart = (event: MouseEvent | TouchEvent) => {
      if (revealed) return;

      drawing = true;
      setIsScratching(true);

      const point = getPoint(event);
      scratch(point.x, point.y);
      playScratchSound();
    };

    const handleMove = (event: MouseEvent | TouchEvent) => {
      if (!drawing || revealed) return;

      const point = getPoint(event);
      scratch(point.x, point.y);
      playScratchSound();
      checkReveal();
    };

    const handleEnd = () => {
      drawing = false;
      setIsScratching(false);
      checkReveal();
    };

    canvas.addEventListener("mousedown", handleStart as EventListener);
    canvas.addEventListener("mousemove", handleMove as EventListener);
    window.addEventListener("mouseup", handleEnd);

    canvas.addEventListener("touchstart", handleStart as EventListener, {
      passive: true,
    });
    canvas.addEventListener("touchmove", handleMove as EventListener, {
      passive: true,
    });
    window.addEventListener("touchend", handleEnd);

    const resizeObserver = new ResizeObserver(() => setupCanvas());
    resizeObserver.observe(wrapper);

    return () => {
      canvas.removeEventListener("mousedown", handleStart as EventListener);
      canvas.removeEventListener("mousemove", handleMove as EventListener);
      window.removeEventListener("mouseup", handleEnd);

      canvas.removeEventListener("touchstart", handleStart as EventListener);
      canvas.removeEventListener("touchmove", handleMove as EventListener);
      window.removeEventListener("touchend", handleEnd);

      resizeObserver.disconnect();
    };
  }, [revealed, onReveal]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={wrapperRef}
        className="gpu-transform relative h-[92px] w-[92px] overflow-hidden rounded-[1.4rem] border border-[#D7BA89]/60 bg-gradient-to-br from-[#fff8ef] via-[#f4e3c8] to-[#d7ba89] shadow-[0_18px_42px_rgba(0,0,64,0.22)] backdrop-blur-xl sm:h-[110px] sm:w-[110px] md:h-[120px] md:w-[120px]"
      >
        <div className="absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.38),transparent_42%)]" />
        <div className="absolute inset-0 rounded-[1.4rem] border border-white/45" />

        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.34),transparent_70%)]">
          <motion.span
            className="text-[26px] font-bold tracking-[0.08em] text-[#000040] sm:text-[30px] md:text-[34px]"
            style={{
              fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
              textShadow: revealed
                ? `
                  0 1px 0 rgba(255,255,255,0.85),
                  0 2px 0 rgba(255,255,255,0.45),
                  0 10px 18px rgba(0,0,64,0.16)
                `
                : "none",
            }}
            animate={
              revealed
                ? {
                    scale: [1, 1.05, 1],
                    filter: [
                      "drop-shadow(0 0 0 rgba(215,186,137,0))",
                      "drop-shadow(0 0 10px rgba(215,186,137,0.35))",
                      "drop-shadow(0 0 0 rgba(215,186,137,0))",
                    ],
                  }
                : {}
            }
            transition={{ duration: 0.8 }}
          >
            {value}
          </motion.span>
        </div>

        <AnimatePresence>
          {!revealed && (
            <motion.canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full touch-none rounded-[1.4rem]"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.03, filter: "blur(1.5px)" }}
              transition={{ duration: 0.35 }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {revealed &&
            sparkles.map((spark) => (
              <motion.div
                key={spark.id}
                className="absolute"
                style={{ left: spark.left, top: spark.top }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.15, 0],
                  x: [0, spark.x],
                  y: [0, spark.y],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: spark.delay }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.75)]" />
              </motion.div>
            ))}
        </AnimatePresence>

        <AnimatePresence>
          {isScratching &&
            !revealed &&
            powderBits.map((bit) => (
              <motion.div
                key={bit.id}
                className="absolute h-1 w-1 rounded-full bg-[#fff8ef]/90"
                style={{ left: bit.left, top: bit.top }}
                initial={{ opacity: 0.85, x: 0, y: 0, scale: 1 }}
                animate={{
                  opacity: 0,
                  x: bit.x,
                  y: bit.y,
                  scale: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: bit.delay }}
              />
            ))}
        </AnimatePresence>

        <AnimatePresence>
          {burst &&
            burstParticlesRef.current.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
                style={{
                  background:
                    i % 3 === 0
                      ? "#ffffff"
                      : i % 3 === 1
                        ? "#D7BA89"
                        : "#000040",
                }}
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{
                  opacity: 0,
                  x: particle.x,
                  y: particle.y,
                  scale: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
              />
            ))}
        </AnimatePresence>

        <AnimatePresence>
          {isScratching && !revealed && (
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-[1.4rem] border border-white/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function DateReveal({ language }: DateRevealProps) {
  const [revealedCount, setRevealedCount] = useState(0);

  const content = {
    EN: {
      title: "Save the Date",
      subtitle: "Gently scratch each tile to reveal the Nikkah day",
      day: "13",
      month: "06",
      year: "2026",
      note: "With heartfelt prayers and blessings, we invite you to grace the Nikkah ceremony of Fathima Zama and Abdul Azeez.",
    },
    ES: {
      title: "Save the Date",
      subtitle: "Gently scratch each tile to reveal the Nikkah day",
      day: "13",
      month: "06",
      year: "2026",
      note: "With heartfelt prayers and blessings, we invite you to grace the Nikkah ceremony of Fathima Zama and Abdul Azeez.",
    },
  };

  const { title, subtitle, day, month, year, note } = content[language];

  const handleReveal = () => {
    setRevealedCount((prev) => Math.min(prev + 1, 3));
  };

  return (
    <section
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background: `linear-gradient(
          to bottom,
          #000014 0%,
          #000040 14%,
          #03034f 30%,
          #0a0a5f 46%,
          #3c315a 62%,
          #8e765c 78%,
          #d7ba89 92%,
          #fff8ef 100%
        )`,
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-black/35 via-[#000040]/20 to-transparent" />
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-[#D7BA89]/12 blur-[90px]" />
        <div className="absolute right-[8%] bottom-16 h-80 w-80 rounded-full bg-[#fff8ef]/14 blur-[90px]" />
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/6 blur-[100px]" />
        <div className="absolute left-1/2 top-[42%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,186,137,0.20)_0%,rgba(255,248,239,0.08)_34%,rgba(0,0,64,0.04)_56%,transparent_76%)] blur-[90px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#D7BA89] bg-[#fff8ef]" />
            <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
          </div>

          <h2
            className="mb-3 text-4xl md:text-5xl"
            style={{
              fontFamily: '"Great Vibes", cursive',
              color: "#fff8ef",
              textShadow: `
                0 0 12px rgba(215,186,137,0.26),
                0 4px 14px rgba(0,0,0,0.42)
              `,
            }}
          >
            {title}
          </h2>

          <p
            className="mx-auto max-w-xl text-sm leading-relaxed md:text-base"
            style={{
              color: "rgba(255,248,239,0.86)",
              textShadow: "0 2px 10px rgba(0,0,0,0.32)",
            }}
          >
            {subtitle}
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#D7BA89]/30 bg-gradient-to-br from-[#fff8ef]/16 via-[#d7ba89]/12 to-[#000040]/18 px-6 py-10 shadow-[0_24px_60px_rgba(0,0,64,0.32)] backdrop-blur-xl md:px-10 md:py-12">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(215,186,137,0.04)_36%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.16),transparent_38%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.16)_0%,rgba(215,186,137,0.08)_34%,transparent_72%)]" />

            <div className="absolute left-4 top-4 h-8 w-8 rounded-tl-xl border-l border-t border-[#D7BA89]/38" />
            <div className="absolute right-4 top-4 h-8 w-8 rounded-tr-xl border-r border-t border-[#D7BA89]/38" />
            <div className="absolute bottom-4 left-4 h-8 w-8 rounded-bl-xl border-b border-l border-[#D7BA89]/38" />
            <div className="absolute bottom-4 right-4 h-8 w-8 rounded-br-xl border-b border-r border-[#D7BA89]/38" />

            <div className="relative flex flex-row items-center justify-center gap-3 sm:gap-5 md:gap-7">
              <ScratchTile value={day} delay={0} onReveal={handleReveal} />
              <ScratchTile value={month} delay={0.1} onReveal={handleReveal} />
              <ScratchTile value={year} delay={0.2} onReveal={handleReveal} />
            </div>

            <AnimatePresence>
              {revealedCount === 3 && (
                <motion.div
                  className="mx-auto mt-10 max-w-2xl px-4 text-center"
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p
                    style={{
                      color: "rgba(255,248,239,0.96)",
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: "clamp(20px, 2.2vw, 28px)",
                      fontStyle: "italic",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      textShadow: `
                        0 1px 0 rgba(255,255,255,0.12),
                        0 2px 16px rgba(0,0,0,0.36)
                      `,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {note}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}