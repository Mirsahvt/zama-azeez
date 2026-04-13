"use client"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

interface PhotoGalleryProps {
  language: "ES" | "EN"
}

export function PhotoGallery({ language }: PhotoGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const content = {
    EN: {
      title: "Meet the Couple",
      groomLabel: "The Groom",
      brideLabel: "The Bride",
      coupleLabel: "Together",
      groomName: "Stebin",
      brideName: "Jesna",
      coupleName: "Stebin & Jesna",
      groomParents: "Xavier & Teresa",
      brideParents: "Joseph M.D. & Mary Jose",
    },
    ES: {
      title: "Conoce a la Pareja",
      groomLabel: "El Novio",
      brideLabel: "La Novia",
      coupleLabel: "Juntos",
      groomName: "Stebin",
      brideName: "Jesna",
      coupleName: "Stebin & Jesna",
      groomParents: "Xavier & Teresa",
      brideParents: "Joseph M.D. & Mary Jose",
    },
  }

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
  } = content[language]

  const slides = [
    {
      label: groomLabel,
      name: groomName,
      subtitle: groomParents,
      image: "/images/groom.jpeg",
      align: "left",
    },
    {
      label: brideLabel,
      name: brideName,
      subtitle: brideParents,
      image: "/images/bride.jpeg",
      align: "center",
    },
    {
      label: coupleLabel,
      name: coupleName,
      subtitle: "",
      image: "/images/couple.jpeg",
      align: "right",
    },
  ]

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"])

  const groomScale = useTransform(scrollYProgress, [0, 0.15, 0.28], [0.92, 1, 0.96])
  const groomOpacity = useTransform(scrollYProgress, [0, 0.1, 0.28, 0.34], [0.55, 1, 1, 0.72])

  const brideScale = useTransform(scrollYProgress, [0.22, 0.5, 0.62], [0.92, 1, 0.96])
  const brideOpacity = useTransform(scrollYProgress, [0.22, 0.34, 0.62, 0.7], [0.55, 1, 1, 0.72])

  const coupleScale = useTransform(scrollYProgress, [0.56, 0.82, 1], [0.92, 1, 1])
  const coupleOpacity = useTransform(scrollYProgress, [0.56, 0.72, 1], [0.55, 1, 1])

  const groomTextY = useTransform(scrollYProgress, [0, 0.18], [40, 0])
  const brideTextY = useTransform(scrollYProgress, [0.22, 0.5], [40, 0])
  const coupleTextY = useTransform(scrollYProgress, [0.58, 0.84], [40, 0])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative h-[320vh]"
      style={{
        background:
          "linear-gradient(to bottom, #f8dfe6 0%, #f6e7e1 18%, #efe3db 38%, #f6ece6 60%, #f9e8ec 84%, #f7dbe3 100%)",
      }}
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f7dbe3] via-[#f5e6df]/70 to-transparent" />
        <div className="absolute left-[7%] top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute right-[8%] top-1/4 h-80 w-80 rounded-full bg-[#f7c6d9]/14 blur-3xl" />
        <div className="absolute bottom-16 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#f4d2dc]/18 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_38%)]" />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* title */}
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
                <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#caa78d] to-transparent" />
                <div className="h-2.5 w-2.5 rotate-45 border border-[#d7b89a]/80 bg-white/60 shadow-[0_0_12px_rgba(255,255,255,0.35)]" />
                <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#caa78d] to-transparent" />
              </div>

              <h2
                className="text-3xl text-[#3b2d28] sm:text-4xl md:text-5xl"
                style={{
                  fontFamily: "var(--font-script), cursive",
                  textShadow:
                    "0 1px 0 rgba(255,255,255,0.82), 0 4px 14px rgba(132,102,79,0.10)",
                }}
              >
                {title}
              </h2>
            </motion.div>
          </div>
        </div>

        {/* horizontal track */}
        <motion.div
          className="absolute left-0 top-0 flex h-full w-[300vw]"
          style={{ x }}
        >
          {/* Groom */}
          <div className="flex h-screen w-screen items-center justify-center px-4 md:px-8">
            <motion.div
              style={{ scale: groomScale, opacity: groomOpacity }}
              className="relative w-[84vw] max-w-[360px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px]"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/55 shadow-[0_30px_90px_rgba(103,83,67,0.16)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.16) 100%)",
                  WebkitBackdropFilter: "blur(20px) saturate(160%)",
                  backdropFilter: "blur(20px) saturate(160%)",
                  boxShadow:
                    "0 30px 90px rgba(103,83,67,0.16), inset 0 1px 0 rgba(255,255,255,0.68)",
                }}
              >
                <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03)_42%,transparent_64%)]" />
                <div className="absolute left-6 right-6 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-[#d7b89a]/65 to-transparent" />

                <div className="absolute left-6 top-6 z-[2] h-6 w-6 rounded-tl border-l border-t border-[#d7b89a]/40" />
                <div className="absolute right-6 top-6 z-[2] h-6 w-6 rounded-tr border-r border-t border-[#d7b89a]/40" />
                <div className="absolute bottom-6 left-6 z-[2] h-6 w-6 rounded-bl border-b border-l border-[#d7b89a]/40" />
                <div className="absolute bottom-6 right-6 z-[2] h-6 w-6 rounded-br border-b border-r border-[#d7b89a]/40" />

                <Image
                  src={slides[0].image}
                  alt="Groom portrait"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d201c]/82 via-[#2d201c]/15 to-transparent" />

                <motion.div
                  className="absolute bottom-0 left-0 right-0 z-[2] p-6 text-center md:p-8"
                  style={{ y: groomTextY }}
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.26em] text-white/75 md:text-[11px]">
                    {slides[0].label}
                  </p>
                  <h3
                    className="text-3xl text-white md:text-4xl"
                    style={{ fontFamily: "var(--font-script), cursive" }}
                  >
                    {slides[0].name}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 md:text-[15px]">
                    {slides[0].subtitle}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bride */}
          <div className="flex h-screen w-screen items-center justify-center px-4 md:px-8">
            <motion.div
              style={{ scale: brideScale, opacity: brideOpacity }}
              className="relative w-[84vw] max-w-[360px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px]"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/55 shadow-[0_30px_90px_rgba(103,83,67,0.16)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.16) 100%)",
                  WebkitBackdropFilter: "blur(20px) saturate(160%)",
                  backdropFilter: "blur(20px) saturate(160%)",
                  boxShadow:
                    "0 30px 90px rgba(103,83,67,0.16), inset 0 1px 0 rgba(255,255,255,0.68)",
                }}
              >
                <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03)_42%,transparent_64%)]" />
                <div className="absolute left-6 right-6 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-[#d7b89a]/65 to-transparent" />

                <div className="absolute left-6 top-6 z-[2] h-6 w-6 rounded-tl border-l border-t border-[#d7b89a]/40" />
                <div className="absolute right-6 top-6 z-[2] h-6 w-6 rounded-tr border-r border-t border-[#d7b89a]/40" />
                <div className="absolute bottom-6 left-6 z-[2] h-6 w-6 rounded-bl border-b border-l border-[#d7b89a]/40" />
                <div className="absolute bottom-6 right-6 z-[2] h-6 w-6 rounded-br border-b border-r border-[#d7b89a]/40" />

                <Image
                  src={slides[1].image}
                  alt="Bride portrait"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d201c]/82 via-[#2d201c]/15 to-transparent" />

                <motion.div
                  className="absolute bottom-0 left-0 right-0 z-[2] p-6 text-center md:p-8"
                  style={{ y: brideTextY }}
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.26em] text-white/75 md:text-[11px]">
                    {slides[1].label}
                  </p>
                  <h3
                    className="text-3xl text-white md:text-4xl"
                    style={{ fontFamily: "var(--font-script), cursive" }}
                  >
                    {slides[1].name}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 md:text-[15px]">
                    {slides[1].subtitle}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Couple */}
          <div className="flex h-screen w-screen items-center justify-center px-4 md:px-8">
            <motion.div
              style={{ scale: coupleScale, opacity: coupleOpacity }}
              className="relative w-[84vw] max-w-[360px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px]"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/55 shadow-[0_30px_90px_rgba(103,83,67,0.16)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.16) 100%)",
                  WebkitBackdropFilter: "blur(20px) saturate(160%)",
                  backdropFilter: "blur(20px) saturate(160%)",
                  boxShadow:
                    "0 30px 90px rgba(103,83,67,0.16), inset 0 1px 0 rgba(255,255,255,0.68)",
                }}
              >
                <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03)_42%,transparent_64%)]" />
                <div className="absolute left-6 right-6 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-[#d7b89a]/65 to-transparent" />

                <div className="absolute left-6 top-6 z-[2] h-6 w-6 rounded-tl border-l border-t border-[#d7b89a]/40" />
                <div className="absolute right-6 top-6 z-[2] h-6 w-6 rounded-tr border-r border-t border-[#d7b89a]/40" />
                <div className="absolute bottom-6 left-6 z-[2] h-6 w-6 rounded-bl border-b border-l border-[#d7b89a]/40" />
                <div className="absolute bottom-6 right-6 z-[2] h-6 w-6 rounded-br border-b border-r border-[#d7b89a]/40" />

                <Image
                  src={slides[2].image}
                  alt="Couple portrait"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d201c]/84 via-[#2d201c]/16 to-transparent" />

                <motion.div
                  className="absolute bottom-0 left-0 right-0 z-[2] p-6 text-center md:p-8"
                  style={{ y: coupleTextY }}
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/75 md:text-[11px]">
                    {slides[2].label}
                  </p>
                  <h3
                    className="text-3xl text-white md:text-5xl"
                    style={{ fontFamily: "var(--font-script), cursive" }}
                  >
                    {slides[2].name}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* progress hint */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 px-4 md:bottom-10">
          <div className="flex items-center gap-2 rounded-full border border-white/45 bg-white/35 px-4 py-2 backdrop-blur-xl">
            <span className="text-[10px] uppercase tracking-[0.26em] text-[#5b4740]">
              Scroll
            </span>
            <div className="h-1 w-20 overflow-hidden rounded-full bg-[#e8d7cf]">
              <motion.div
                className="h-full rounded-full bg-[#caa78d]"
                style={{
                  width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}