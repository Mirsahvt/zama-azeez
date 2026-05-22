"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  Sparkles,
  Gem,
  Trophy,
  MoonStar,
  Heart,
  Crown,
} from "lucide-react";
import { useMemo } from "react";

interface DressCodeProps {
  language: "ES" | "EN";
}

export function DressCode({ language }: DressCodeProps) {
  const content = {
    EN: {
      title: "Dress Code",
      subtitle:
        "Each celebration has its own colour story. We would love to see our guests dressed in elegant tones that beautifully match every event.",
      noteTitle: "A Special Note",
      noteText:
        "Your presence is the most beautiful part of our celebration. The dress code is only to make each event look more coordinated, graceful, and memorable.",
      footer:
        "Thank you for being part of Fathima Zama and Abdul Azeez’s wedding celebrations.",
      events: [
        {
          icon: Trophy,
          title: "Game Party",
          date: "7 June 2026",
          dressCode: "Team Bride: Black & Red Jersey",
          dressCodeTwo: "Team Groom: Black & White Jersey",
          brideLook: "Sporty celebration look",
          colors: [
            { name: "Black", color: "#050505" },
            { name: "Red", color: "#9D1C24" },
            { name: "White", color: "#FFF8EF" },
          ],
        },
        {
          icon: MoonStar,
          title: "Banaras Night",
          date: "12 June 2026",
          dressCode: "Guests: Emerald Green or Black",
          dressCodeTwo: "Bride: Golden Shade",
          brideLook: "Golden Banaras elegance",
          colors: [
            { name: "Emerald", color: "#0E5F4F" },
            { name: "Black", color: "#050505" },
            { name: "Gold", color: "#D7BA89" },
          ],
        },
        {
          icon: Heart,
          title: "Nikkah",
          date: "13 June 2026",
          dressCode: "Guests: Any Pastel Colour",
          dressCodeTwo: "Bride: Pastel Pink",
          brideLook: "Soft pastel Nikkah look",
          colors: [
            { name: "Pastel Pink", color: "#F3C9D7" },
            { name: "Mint", color: "#CDEDDC" },
            { name: "Ivory", color: "#FFF8EF" },
          ],
        },
        {
          icon: Gem,
          title: "Reception",
          date: "14 June 2026",
          dressCode: "Guests: Any Dark Shades",
          dressCodeTwo: "Bride: Maroon & Black",
          brideLook: "Royal reception look",
          colors: [
            { name: "Maroon", color: "#6E1028" },
            { name: "Black", color: "#050505" },
            { name: "Navy", color: "#000040" },
          ],
        },
        {
          icon: Sparkles,
          title: "Turkish Delight",
          date: "16 June 2026",
          dressCode: "Guests: Any Shades of Blue or Off White",
          dressCodeTwo: "Theme: Turkish inspired elegance",
          brideLook: "Elegant blue and ivory mood",
          colors: [
            { name: "Royal Blue", color: "#143D8F" },
            { name: "Sky Blue", color: "#A9CFEF" },
            { name: "Off White", color: "#F8F0E2" },
          ],
        },
      ],
    },

    ES: {
      title: "Dress Code",
      subtitle:
        "Each celebration has its own colour story. We would love to see our guests dressed in elegant tones that beautifully match every event.",
      noteTitle: "A Special Note",
      noteText:
        "Your presence is the most beautiful part of our celebration. The dress code is only to make each event look more coordinated, graceful, and memorable.",
      footer:
        "Thank you for being part of Fathima Zama and Abdul Azeez’s wedding celebrations.",
      events: [
        {
          icon: Trophy,
          title: "Game Party",
          date: "7 June 2026",
          dressCode: "Team Bride: White & Black Jersey",
          dressCodeTwo: "Team Groom: Red & Black Jersey",
          brideLook: "Sporty celebration look",
          colors: [
            { name: "Black", color: "#050505" },
            { name: "Red", color: "#9D1C24" },
            { name: "White", color: "#FFF8EF" },
          ],
        },
        {
          icon: MoonStar,
          title: "Banaras Night",
          date: "12 June 2026",
          dressCode: "Guests: Emerald Green or Black",
          dressCodeTwo: "Bride: Golden Shade",
          brideLook: "Golden Banaras elegance",
          colors: [
            { name: "Emerald", color: "#0E5F4F" },
            { name: "Black", color: "#050505" },
            { name: "Gold", color: "#D7BA89" },
          ],
        },
        {
          icon: Heart,
          title: "Nikkah",
          date: "13 June 2026",
          dressCode: "Guests: Any Pastel Colour",
          dressCodeTwo: "Bride: Pastel Pink",
          brideLook: "Soft pastel Nikkah look",
          colors: [
            { name: "Pastel Pink", color: "#F3C9D7" },
            { name: "Mint", color: "#CDEDDC" },
            { name: "Ivory", color: "#FFF8EF" },
          ],
        },
        {
          icon: Gem,
          title: "Reception",
          date: "14 June 2026",
          dressCode: "Guests: Any Dark Shades",
          dressCodeTwo: "Bride: Maroon & Black",
          brideLook: "Royal reception look",
          colors: [
            { name: "Maroon", color: "#6E1028" },
            { name: "Black", color: "#050505" },
            { name: "Navy", color: "#000040" },
          ],
        },
        {
          icon: Sparkles,
          title: "Turkish Delight",
          date: "16 June 2026",
          dressCode: "Guests: Any Shades of Blue or Off White",
          dressCodeTwo: "Theme: Turkish inspired elegance",
          brideLook: "Elegant blue and ivory mood",
          colors: [
            { name: "Royal Blue", color: "#143D8F" },
            { name: "Sky Blue", color: "#A9CFEF" },
            { name: "Off White", color: "#F8F0E2" },
          ],
        },
      ],
    },
  };

  const { title, subtitle, noteTitle, noteText, footer } = content[language];

  const events = useMemo(() => content[language].events, [language]);

  return (
    <section
      id="dress-code"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #FFF8EF 0%, #D7BA89 10%, #171845 30%, #05062E 58%, #000018 100%)",
      }}
    >
      {/* Smooth background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#FFF8EF] via-[#D7BA89]/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#000018] via-[#05062E]/85 to-transparent" />

        <div className="absolute left-[7%] top-24 h-80 w-80 rounded-full bg-[#D7BA89]/16 blur-[110px]" />
        <div className="absolute right-[7%] top-[30%] h-96 w-96 rounded-full bg-[#FFF8EF]/8 blur-[130px]" />
        <div className="absolute bottom-20 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#B8925A]/14 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,248,239,0.20),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,186,137,0.13),transparent_60%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Title */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#B8925A] to-transparent" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#D7BA89] bg-[#FFF8EF] shadow-[0_0_18px_rgba(215,186,137,0.7)]" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#B8925A] to-transparent" />
          </div>

          <h2
            className="mb-4 text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              color: "#05062E",
              textShadow:
                "0 1px 0 rgba(255,255,255,0.78), 0 8px 28px rgba(0,0,0,0.18)",
            }}
          >
            {title}
          </h2>

          <p
            className="mx-auto max-w-2xl text-sm leading-7 md:text-base"
            style={{
              color: "rgba(5,6,46,0.74)",
              textShadow: "0 1px 0 rgba(255,255,255,0.35)",
            }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Event-wise Dress Cards */}
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.68,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  className="relative h-full overflow-hidden rounded-[2rem] border p-6"
                  whileHover={{ y: -7, scale: 1.018 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    borderColor: "rgba(215,186,137,0.34)",
                    background:
                      "linear-gradient(180deg, rgba(255,248,239,0.14) 0%, rgba(215,186,137,0.08) 42%, rgba(0,0,64,0.42) 100%)",
                    WebkitBackdropFilter: "blur(18px) saturate(160%)",
                    backdropFilter: "blur(18px) saturate(160%)",
                    boxShadow:
                      "0 28px 80px rgba(0,0,24,0.42), inset 0 1px 0 rgba(255,248,239,0.16)",
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.13),transparent_46%)]" />
                  <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-[#D7BA89]/70 to-transparent" />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border"
                        style={{
                          borderColor: "rgba(215,186,137,0.42)",
                          background:
                            "linear-gradient(135deg, #FFF8EF 0%, #D7BA89 52%, #B8925A 100%)",
                          boxShadow: "0 14px 30px rgba(0,0,24,0.28)",
                        }}
                      >
                        <Icon className="h-5 w-5 text-[#000040]" />
                      </div>

                      <span className="text-xs uppercase tracking-[0.28em] text-[#D7BA89]">
                        {event.date}
                      </span>
                    </div>

                    <h3
                      className="mb-4 text-3xl"
                      style={{
                        fontFamily: "var(--font-script), 'Great Vibes', cursive",
                        color: "#FFF8EF",
                        textShadow:
                          "0 0 16px rgba(215,186,137,0.28), 0 7px 22px rgba(0,0,0,0.66)",
                      }}
                    >
                      {event.title}
                    </h3>

                    <div
                      className="mb-5 rounded-[1.35rem] border p-4"
                      style={{
                        borderColor: "rgba(215,186,137,0.25)",
                        background:
                          "linear-gradient(180deg, rgba(0,0,24,0.50), rgba(5,6,46,0.36))",
                      }}
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <Shirt className="h-4 w-4 text-[#D7BA89]" />
                        <p className="text-[10px] uppercase tracking-[0.26em] text-[#D7BA89]">
                          Dress Code
                        </p>
                      </div>

                      <p className="text-sm leading-6 text-[#FFF8EF]/90">
                        {event.dressCode}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#FFF8EF]/90">
                        {event.dressCodeTwo}
                      </p>
                    </div>

                    <div className="mb-5 flex gap-2">
                      {event.colors.map((shade) => (
                        <div
                          key={`${event.title}-${shade.name}`}
                          className="flex-1"
                        >
                          <div
                            className="h-12 rounded-xl border border-white/25 shadow-[0_8px_18px_rgba(0,0,24,0.25)]"
                            style={{ backgroundColor: shade.color }}
                          />
                          <p className="mt-2 text-center text-[10px] text-[#FFF8EF]/70">
                            {shade.name}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div
                      className="rounded-[1.2rem] border p-4"
                      style={{
                        borderColor: "rgba(215,186,137,0.24)",
                        background:
                          "linear-gradient(135deg, rgba(215,186,137,0.13), rgba(255,248,239,0.06), rgba(0,0,64,0.24))",
                      }}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Crown className="h-4 w-4 text-[#D7BA89]" />
                        <p className="text-[10px] uppercase tracking-[0.26em] text-[#D7BA89]">
                          Bride Look
                        </p>
                      </div>

                      <p className="text-sm italic leading-6 text-[#FFF8EF]/84">
                        {event.brideLook}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Special Note */}
        <motion.div
          className="mx-auto mt-10 max-w-4xl rounded-[2rem] border p-6 text-center md:p-8"
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.78 }}
          style={{
            borderColor: "rgba(215,186,137,0.34)",
            background:
              "linear-gradient(180deg, rgba(5,6,46,0.88), rgba(0,0,24,0.82))",
            boxShadow:
              "0 24px 70px rgba(0,0,24,0.40), inset 0 1px 0 rgba(255,248,239,0.14)",
          }}
        >
          <Gem className="mx-auto mb-4 h-7 w-7 text-[#D7BA89]" />

          <p className="mb-2 text-xs uppercase tracking-[0.30em] text-[#D7BA89]">
            {noteTitle}
          </p>

          <p
            className="mx-auto max-w-2xl text-lg italic leading-8 md:text-xl"
            style={{
              color: "#FFF8EF",
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            {noteText}
          </p>

          <div className="mx-auto my-6 h-px max-w-sm bg-gradient-to-r from-transparent via-[#D7BA89]/60 to-transparent" />

          <p className="text-sm leading-7 text-[#FFF8EF]/72">{footer}</p>

          <Sparkles className="mx-auto mt-5 h-5 w-5 text-[#D7BA89]" />
        </motion.div>
      </div>
    </section>
  );
}