"use client";

import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { Heart, Users, Sparkles, MoonStar, Gem, Crown } from "lucide-react";

interface OurStoryProps {
  language: "ES" | "EN";
}

function vibrateSoft(pattern: number | number[] = 8) {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
}

const CARD_STYLE = {
  background:
    "linear-gradient(180deg, rgba(255,248,239,0.14) 0%, rgba(215,186,137,0.08) 44%, rgba(0,0,64,0.22) 100%)",
  WebkitBackdropFilter: "blur(20px) saturate(160%)",
  backdropFilter: "blur(20px) saturate(160%)",
  boxShadow:
    "0 22px 70px rgba(0,0,40,0.34), inset 0 1px 0 rgba(255,248,239,0.22), inset 0 -1px 0 rgba(215,186,137,0.14)",
} as const;

const INTRO_STYLE = {
  background:
    "linear-gradient(180deg, rgba(255,248,239,0.16) 0%, rgba(215,186,137,0.10) 46%, rgba(0,0,64,0.22) 100%)",
  WebkitBackdropFilter: "blur(20px) saturate(165%)",
  backdropFilter: "blur(20px) saturate(165%)",
  boxShadow:
    "0 24px 70px rgba(0,0,40,0.34), inset 0 1px 0 rgba(255,248,239,0.24), inset 0 -1px 0 rgba(215,186,137,0.16)",
} as const;

export function OurStory({ language }: OurStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vibratedRef = useRef<Record<string, boolean>>({});

  const content = useMemo(
    () => ({
      EN: {
        title: "Our Story",
        subtitle: "A celebration woven with love, family, prayers, and tradition",
        intro:
          "With the blessings of their beloved families, Fathima Zama and Abdul Azeez begin a beautiful new chapter surrounded by love, togetherness, and cherished traditions.",
        stories: [
          {
            icon: Users,
            number: "01",
            title: "Two Families",
            description:
              "This celebration brings together the families of Fathima Zama, daughter of Hameed and Aysha Rishni, and Abdul Azeez, son of Abdul Salam and Ayisha Bi, in a graceful bond of respect, joy, and togetherness.",
          },
          {
            icon: Heart,
            number: "02",
            title: "A Blessed Beginning",
            description:
              "Their journey is not only about two hearts coming together, but also about two families joining in prayers, blessings, and happiness for a beautiful future.",
          },
          {
            icon: MoonStar,
            number: "03",
            title: "Nikkah With Prayers",
            description:
              "The sacred Nikkah marks the most meaningful moment of this celebration, where love is honored with faith, duas, and the heartfelt presence of family and friends.",
          },
          {
            icon: Sparkles,
            number: "04",
            title: "Celebrations Of Joy",
            description:
              "From the Game Party to Banaras Night, Reception, and Turkish Delight, every function is planned to create memories filled with laughter, elegance, colors, and celebration.",
          },
          {
            icon: Gem,
            number: "05",
            title: "Traditions & Elegance",
            description:
              "Each event carries its own charm, from pastel tones and golden shades to emerald greens, maroon, black, blue, and off-white, creating a wedding journey rich in beauty and style.",
          },
          {
            icon: Crown,
            number: "06",
            title: "A New Chapter",
            description:
              "As Fathima Zama and Abdul Azeez step into this new chapter, they look forward to a life filled with love, understanding, blessings, and beautiful memories.",
          },
        ],
      },
      ES: {
        title: "Our Story",
        subtitle: "A celebration woven with love, family, prayers, and tradition",
        intro:
          "With the blessings of their beloved families, Fathima Zama and Abdul Azeez begin a beautiful new chapter surrounded by love, togetherness, and cherished traditions.",
        stories: [
          {
            icon: Users,
            number: "01",
            title: "Two Families",
            description:
              "This celebration brings together the families of Fathima Zama, daughter of Hameed and Aysha Rishni, and Abdul Azeez, son of Abdul Salam and Ayisha Bi, in a graceful bond of respect, joy, and togetherness.",
          },
          {
            icon: Heart,
            number: "02",
            title: "A Blessed Beginning",
            description:
              "Their journey is not only about two hearts coming together, but also about two families joining in prayers, blessings, and happiness for a beautiful future.",
          },
          {
            icon: MoonStar,
            number: "03",
            title: "Nikkah With Prayers",
            description:
              "The sacred Nikkah marks the most meaningful moment of this celebration, where love is honored with faith, duas, and the heartfelt presence of family and friends.",
          },
          {
            icon: Sparkles,
            number: "04",
            title: "Celebrations Of Joy",
            description:
              "From the Game Party to Banaras Night, Reception, and Turkish Delight, every function is planned to create memories filled with laughter, elegance, colors, and celebration.",
          },
          {
            icon: Gem,
            number: "05",
            title: "Traditions & Elegance",
            description:
              "Each event carries its own charm, from pastel tones and golden shades to emerald greens, maroon, black, blue, and off-white, creating a wedding journey rich in beauty and style.",
          },
          {
            icon: Crown,
            number: "06",
            title: "A New Chapter",
            description:
              "As Fathima Zama and Abdul Azeez step into this new chapter, they look forward to a life filled with love, understanding, blessings, and beautiful memories.",
          },
        ],
      },
    }),
    []
  );

  const { title, subtitle, intro, stories } = content[language];

  return (
    <section
      id="our-story"
      ref={containerRef}
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #000014 0%, #000040 18%, #07075A 38%, #3F355A 58%, #9E8261 78%, #D7BA89 92%, #FFF8EF 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#000014] via-[#000040]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FFF8EF] via-[#D7BA89]/35 to-transparent" />

        <div className="absolute left-[7%] top-20 h-72 w-72 rounded-full bg-[#D7BA89]/14 blur-[90px]" />
        <div className="absolute right-[9%] top-1/4 h-80 w-80 rounded-full bg-[#FFF8EF]/10 blur-[100px]" />
        <div className="absolute bottom-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D7BA89]/14 blur-[110px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.14),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.08),transparent_56%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#D7BA89] bg-[#FFF8EF] shadow-[0_0_18px_rgba(215,186,137,0.55)]" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
          </div>

          <h2
            className="mb-3 text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              color: "#FFF8EF",
              textShadow:
                "0 0 18px rgba(215,186,137,0.28), 0 8px 26px rgba(0,0,0,0.45)",
            }}
          >
            {title}
          </h2>

          <p
            className="mx-auto mb-6 max-w-2xl text-base md:text-lg"
            style={{
              color: "rgba(255,248,239,0.84)",
              fontFamily: '"Cormorant Garamond", serif',
              textShadow: "0 4px 14px rgba(0,0,0,0.35)",
            }}
          >
            {subtitle}
          </p>

          <motion.div
            className="relative overflow-hidden rounded-[2rem] border px-6 py-7 backdrop-blur-2xl md:px-10"
            style={{
              ...INTRO_STYLE,
              borderColor: "rgba(215,186,137,0.34)",
            }}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,248,239,0.18),rgba(215,186,137,0.04)_38%,transparent_64%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7BA89]/80 to-transparent" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#D7BA89]/12 blur-2xl" />

            <p
              className="relative text-lg italic md:text-[1.35rem]"
              style={{
                color: "rgba(255,248,239,0.92)",
                fontFamily: '"Cormorant Garamond", serif',
                lineHeight: 1.6,
                textShadow: "0 4px 14px rgba(0,0,0,0.34)",
              }}
            >
              {intro}
            </p>
          </motion.div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => {
            const Icon = story.icon;
            const fromRight = index % 2 === 0;

            return (
              <motion.div
                key={story.number}
                className="group relative"
                initial={{
                  opacity: 0,
                  x: fromRight ? 60 : -60,
                  y: 24,
                  scale: 0.96,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.82,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onViewportEnter={() => {
                  if (!vibratedRef.current[story.number]) {
                    vibrateSoft([8, 18, 8]);
                    vibratedRef.current[story.number] = true;
                  }
                }}
              >
                <motion.div
                  className="relative h-full overflow-hidden rounded-[2rem] border p-6 backdrop-blur-2xl md:p-7"
                  style={{
                    ...CARD_STYLE,
                    borderColor: "rgba(215,186,137,0.32)",
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,248,239,0.18),rgba(215,186,137,0.03)_40%,transparent_62%)]" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.18),transparent_44%)]" />
                  <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-[#D7BA89]/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D7BA89]/28 to-transparent" />

                  <div className="absolute left-4 top-4 h-4 w-4 rounded-tl border-l border-t border-[#D7BA89]/45" />
                  <div className="absolute right-4 top-4 h-4 w-4 rounded-tr border-r border-t border-[#D7BA89]/45" />
                  <div className="absolute bottom-4 left-4 h-4 w-4 rounded-bl border-b border-l border-[#D7BA89]/45" />
                  <div className="absolute bottom-4 right-4 h-4 w-4 rounded-br border-b border-r border-[#D7BA89]/45" />

                  <div className="relative mb-5 flex items-center justify-between">
                    <motion.div
                      className="relative flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_12px_28px_rgba(0,0,40,0.28)] backdrop-blur-xl"
                      style={{
                        borderColor: "rgba(215,186,137,0.42)",
                        background:
                          "linear-gradient(135deg, rgba(255,248,239,0.16), rgba(215,186,137,0.12), rgba(0,0,64,0.20))",
                      }}
                      whileInView={{
                        scale: [0.88, 1.08, 1],
                        rotate: [0, 4, 0],
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 + 0.2 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFF8EF]/18 to-[#D7BA89]/10" />
                      <Icon className="relative h-4 w-4 text-[#D7BA89]" />
                    </motion.div>

                    <span
                      className="text-[11px] uppercase tracking-[0.28em]"
                      style={{
                        color: "rgba(215,186,137,0.82)",
                        fontFamily: '"Cormorant Garamond", serif',
                        textShadow: "0 3px 12px rgba(0,0,0,0.34)",
                      }}
                    >
                      {story.number}
                    </span>
                  </div>

                  <div className="relative">
                    <h3
                      className="mb-3 text-[1.1rem] md:text-[1.18rem]"
                      style={{
                        color: "#FFF8EF",
                        fontWeight: 600,
                        textShadow:
                          "0 0 12px rgba(215,186,137,0.16), 0 4px 14px rgba(0,0,0,0.34)",
                      }}
                    >
                      {story.title}
                    </h3>

                    <p
                      className="text-sm leading-7"
                      style={{
                        color: "rgba(255,248,239,0.76)",
                        textShadow: "0 3px 12px rgba(0,0,0,0.26)",
                      }}
                    >
                      {story.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}