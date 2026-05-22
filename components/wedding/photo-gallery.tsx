"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface PhotoGalleryProps {
  language: "ES" | "EN";
}

export function PhotoGallery({ language }: PhotoGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const content = {
    EN: {
      title: "Meet the Couple",
      groomLabel: "The Groom",
      brideLabel: "The Bride",
      coupleLabel: "Together",
      groomName: "Abdul Azeez",
      brideName: "Fathima Zama",
      coupleName: "Fathima Zama & Abdul Azeez",
      groomParents: "S/o Mr. Abdul Salam & Ayisha Bi",
      brideParents: "D/o Hameed & Aysha Rishni",
      scroll: "Scroll",
    },
    ES: {
      title: "Meet the Couple",
      groomLabel: "The Groom",
      brideLabel: "The Bride",
      coupleLabel: "Together",
      groomName: "Abdul Azeez",
      brideName: "Fathima Zama",
      coupleName: "Fathima Zama & Abdul Azeez",
      groomParents: "S/o Mr. Abdul Salam & Ayisha Bi",
      brideParents: "D/o Hameed & Aysha Rishni",
      scroll: "Scroll",
    },
  };

  const {
    title,
    groomLabel,
    brideLabel,
    coupleLabel,
    groomName,
    brideName,
    coupleName,
    groomParents,
    brideParents,
    scroll,
  } = content[language];

  const slides = [
    {
      label: groomLabel,
      name: groomName,
      subtitle: groomParents,
      image: "/images/zama1.jpg",
    },
    {
      label: brideLabel,
      name: brideName,
      subtitle: brideParents,
      image: "/images/zama2.jpg",
    },
    {
      label: coupleLabel,
      name: coupleName,
      subtitle: "Two families, one beautiful beginning",
      image: "/images/zama3.jpg",
    },
  ];

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  const groomScale = useTransform(scrollYProgress, [0, 0.15, 0.28], [0.94, 1, 0.96]);
  const groomOpacity = useTransform(scrollYProgress, [0, 0.1, 0.28, 0.34], [0.7, 1, 1, 0.75]);

  const brideScale = useTransform(scrollYProgress, [0.22, 0.5, 0.62], [0.94, 1, 0.96]);
  const brideOpacity = useTransform(scrollYProgress, [0.22, 0.34, 0.62, 0.7], [0.7, 1, 1, 0.75]);

  const coupleScale = useTransform(scrollYProgress, [0.56, 0.82, 1], [0.94, 1, 1]);
  const coupleOpacity = useTransform(scrollYProgress, [0.56, 0.72, 1], [0.7, 1, 1]);

  const groomTextY = useTransform(scrollYProgress, [0, 0.18], [34, 0]);
  const brideTextY = useTransform(scrollYProgress, [0.22, 0.5], [34, 0]);
  const coupleTextY = useTransform(scrollYProgress, [0.58, 0.84], [34, 0]);

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const slideMotion = [
    { scale: groomScale, opacity: groomOpacity, textY: groomTextY },
    { scale: brideScale, opacity: brideOpacity, textY: brideTextY },
    { scale: coupleScale, opacity: coupleOpacity, textY: coupleTextY },
  ];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative h-[320vh]"
      style={{
        background:
          "linear-gradient(180deg, #FFF8EF 0%, #E7D2AE 10%, #171845 30%, #05062E 58%, #000018 100%)",
      }}
    >
      {/* Luxury Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#FFF8EF] via-[#D7BA89]/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#000018] via-[#05062E]/85 to-transparent" />

        <div className="absolute left-[8%] top-20 h-80 w-80 rounded-full bg-[#D7BA89]/18 blur-[100px]" />
        <div className="absolute right-[8%] top-[28%] h-96 w-96 rounded-full bg-[#FFF8EF]/10 blur-[120px]" />
        <div className="absolute bottom-20 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#B8925A]/14 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,248,239,0.22),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,186,137,0.13),transparent_60%)]" />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section Title */}
        <div className="absolute inset-x-0 top-0 z-30">
          <div className="mx-auto flex w-full max-w-6xl justify-center px-4 pt-8 md:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#B8925A] to-transparent" />
                <div className="h-2.5 w-2.5 rotate-45 border border-[#D7BA89] bg-[#FFF8EF] shadow-[0_0_18px_rgba(215,186,137,0.7)]" />
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#B8925A] to-transparent" />
              </div>

              <h2
                className="text-4xl sm:text-5xl md:text-6xl"
                style={{
                  fontFamily: "var(--font-script), 'Great Vibes', cursive",
                  color: "#05062E",
                  textShadow:
                    "0 1px 0 rgba(255,255,255,0.75), 0 8px 28px rgba(0,0,0,0.18)",
                }}
              >
                {title}
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Slides */}
        <motion.div className="absolute left-0 top-0 flex h-full w-[300vw]" style={{ x }}>
          {slides.map((slide, index) => {
            const motionState = slideMotion[index];

            return (
              <div
                key={slide.label}
                className="flex h-screen w-screen items-center justify-center px-4 pt-16 md:px-8 md:pt-20"
              >
                <motion.div
                  style={{
                    scale: motionState.scale,
                    opacity: motionState.opacity,
                  }}
                  className="relative w-[86vw] max-w-[360px] sm:max-w-[430px] md:max-w-[500px] lg:max-w-[560px]"
                >
                  <div
                    className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border"
                    style={{
                      borderColor: "rgba(215,186,137,0.55)",
                      background:
                        "linear-gradient(180deg, rgba(255,248,239,0.20) 0%, rgba(215,186,137,0.10) 42%, rgba(5,6,46,0.40) 100%)",
                      WebkitBackdropFilter: "blur(22px) saturate(165%)",
                      backdropFilter: "blur(22px) saturate(165%)",
                      boxShadow:
                        "0 34px 100px rgba(0,0,24,0.55), inset 0 1px 0 rgba(255,248,239,0.30), inset 0 -1px 0 rgba(215,186,137,0.22)",
                    }}
                  >
                    {/* Gold Frame Light */}
                    <div className="absolute inset-0 z-[2] rounded-[2.4rem] ring-1 ring-[#D7BA89]/30" />
                    <div className="absolute left-6 right-6 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
                    <div className="absolute left-6 right-6 bottom-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#D7BA89]/50 to-transparent" />

                    {/* Corners */}
                    <div className="absolute left-6 top-6 z-[3] h-7 w-7 rounded-tl border-l border-t border-[#D7BA89]/65" />
                    <div className="absolute right-6 top-6 z-[3] h-7 w-7 rounded-tr border-r border-t border-[#D7BA89]/65" />
                    <div className="absolute bottom-6 left-6 z-[3] h-7 w-7 rounded-bl border-b border-l border-[#D7BA89]/65" />
                    <div className="absolute bottom-6 right-6 z-[3] h-7 w-7 rounded-br border-b border-r border-[#D7BA89]/65" />

                    <Image
                      src={slide.image}
                      alt={`${slide.name} portrait`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 86vw, 560px"
                      className="object-cover"
                    />

                    {/* Strong readable overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000018] via-[#05062E]/48 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#000018]/24 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.12),transparent_45%)]" />

                    {/* Text Content */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 z-[4] px-6 pb-9 pt-24 text-center md:px-8 md:pb-10"
                      style={{ y: motionState.textY }}
                    >
                      <p
                        className="mb-2 text-[10px] uppercase tracking-[0.30em] md:text-[11px]"
                        style={{
                          color: "#D7BA89",
                          fontWeight: 600,
                          textShadow: "0 3px 12px rgba(0,0,0,0.75)",
                        }}
                      >
                        {slide.label}
                      </p>

                      <h3
                        className="text-4xl md:text-5xl"
                        style={{
                          fontFamily: "var(--font-script), 'Great Vibes', cursive",
                          color: "#FFF8EF",
                          textShadow:
                            "0 0 18px rgba(215,186,137,0.35), 0 8px 28px rgba(0,0,0,0.85)",
                        }}
                      >
                        {slide.name}
                      </h3>

                      {slide.subtitle && (
                        <p
                          className="mx-auto mt-3 max-w-sm text-sm leading-relaxed md:text-[15px]"
                          style={{
                            color: "rgba(255,248,239,0.88)",
                            textShadow: "0 4px 16px rgba(0,0,0,0.85)",
                          }}
                        >
                          {slide.subtitle}
                        </p>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Progress Hint */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-30 -translate-x-1/2 px-4 md:bottom-10">
          <div
            className="flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-xl"
            style={{
              borderColor: "rgba(215,186,137,0.45)",
              background:
                "linear-gradient(180deg, rgba(5,6,46,0.72), rgba(0,0,24,0.78))",
              boxShadow:
                "0 16px 40px rgba(0,0,24,0.45), inset 0 1px 0 rgba(255,248,239,0.16)",
            }}
          >
            <span
              className="text-[10px] uppercase tracking-[0.26em]"
              style={{
                color: "#FFF8EF",
              }}
            >
              {scroll}
            </span>

            <div className="h-1 w-20 overflow-hidden rounded-full bg-[#FFF8EF]/18">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: progressWidth,
                  background:
                    "linear-gradient(90deg, #B8925A 0%, #FFF8EF 50%, #D7BA89 100%)",
                  boxShadow: "0 0 12px rgba(215,186,137,0.75)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}