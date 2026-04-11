"use client"

import { motion } from "framer-motion"
import { Shirt, Sparkles, Gem, Palette } from "lucide-react"

interface DressCodeProps {
  language: "ES" | "EN"
}

export function DressCode({ language }: DressCodeProps) {
  const content = {
    EN: {
      title: "Dress Code",
      subtitle:
        "We would be delighted to see our guests in elegant tones that beautifully complement the mood of our celebration.",
      paletteTitle: "Color Palette",
      paletteText:
        "We kindly invite our guests to dress in graceful shades inspired by the palette below. Soft blush, champagne, ivory, peach, taupe, mocha, and warm neutrals will beautifully match the atmosphere of our celebration.",
      noteTitle: "A Special Note",
      noteText:
        "Your presence on our special day means so much to us. We look forward to celebrating this beautiful occasion together with warmth, joy, and unforgettable memories.",
      coverTitle: "Luxury Palette",
      coverText:
        "Think timeless elegance, soft romantic tones, graceful silhouettes, and polished details that add charm to the celebration.",
      footer:
        "Thank you for being part of our day and for making the celebration even more beautiful with your presence.",
      palette: [
        { name: "Champagne", color: "#f4e6dc" },
        { name: "Blush Pink", color: "#f2cbd3" },
        { name: "Dusty Rose", color: "#e2a7b3" },
        { name: "Soft Peach", color: "#f7d6c8" },
        { name: "Warm Taupe", color: "#b8a3a0" },
        { name: "Ivory", color: "#fff7f2" },
        { name: "Mocha", color: "#7a5b54" },
        { name: "Gold Accent", color: "#d4a373" },
      ],
    },
    ES: {
      title: "Dress Code",
      subtitle:
        "We would be delighted to see our guests in elegant tones that beautifully complement the mood of our celebration.",
      paletteTitle: "Color Palette",
      paletteText:
        "We kindly invite our guests to dress in graceful shades inspired by the palette below. Soft blush, champagne, ivory, peach, taupe, mocha, and warm neutrals will beautifully match the atmosphere of our celebration.",
      noteTitle: "A Special Note",
      noteText:
        "Your presence on our special day means so much to us. We look forward to celebrating this beautiful occasion together with warmth, joy, and unforgettable memories.",
      coverTitle: "Luxury Palette",
      coverText:
        "Think timeless elegance, soft romantic tones, graceful silhouettes, and polished details that add charm to the celebration.",
      footer:
        "Thank you for being part of our day and for making the celebration even more beautiful with your presence.",
      palette: [
        { name: "Champagne", color: "#f4e6dc" },
        { name: "Blush Pink", color: "#f2cbd3" },
        { name: "Dusty Rose", color: "#e2a7b3" },
        { name: "Soft Peach", color: "#f7d6c8" },
        { name: "Warm Taupe", color: "#b8a3a0" },
        { name: "Ivory", color: "#fff7f2" },
        { name: "Mocha", color: "#7a5b54" },
        { name: "Gold Accent", color: "#d4a373" },
      ],
    },
  }

  const {
    title,
    subtitle,
    paletteTitle,
    paletteText,
    noteTitle,
    noteText,
    coverTitle,
    coverText,
    footer,
    palette,
  } = content[language]

  return (
    <section
      id="dress-code"
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #fff6f3 0%, #f7e8e4 12%, #f2d9dd 28%, #c89aaa 50%, #6e4658 72%, #2b1821 88%, #120c10 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fff7f3]/95 via-[#f8e8e3]/50 to-transparent" />
        <div className="absolute left-[6%] top-16 h-64 w-64 rounded-full bg-[#f7d9df]/24 blur-3xl" />
        <div className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-[#f2cfda]/18 blur-3xl" />
        <div className="absolute left-1/2 top-[48%] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f1d2c2]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ffe3ec]/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_34%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#cfa57c] to-transparent" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#dfbb96]/80 bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.30)]" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#cfa57c] to-transparent" />
          </div>

          <h2
            className="mb-4 text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-script), cursive",
              color: "#4a2b3a",
              textShadow:
                "0 1px 0 rgba(255,255,255,0.55), 0 8px 24px rgba(122,70,94,0.10)",
            }}
          >
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#6a4d5c] md:text-base">
            {subtitle}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -40, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2.2rem] border border-white/40 bg-[#fffaf8]/88 p-6 shadow-[0_20px_60px_rgba(25,10,19,0.12)] md:p-8"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_36%,transparent_60%)]" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#efc8d7]/60 to-transparent" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#f0cad8]/20" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#edd0dc] bg-[#fff8fb] shadow-[0_10px_24px_rgba(79,44,61,0.08)]">
                  <Palette className="h-6 w-6 text-[#5a3347]" />
                </div>
                <div>
                  <h3
                    className="text-[2rem] leading-none text-[#4b2d3d] md:text-[2.2rem]"
                    style={{ fontFamily: "var(--font-script), cursive" }}
                  >
                    {paletteTitle}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#9a6c84]">
                    Elegant • Refined • Timeless
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-[#efd4df] bg-white/85 p-5 shadow-[0_12px_30px_rgba(79,44,61,0.06)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_58%)]" />

                <div className="relative z-10">
                  <div className="mb-5 flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f7e6ee]">
                      <Shirt className="h-5 w-5 text-[#6b4154]" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-base font-semibold text-[#4b2d3d]">
                        {paletteTitle}
                      </h4>
                      <p className="text-sm leading-7 text-[#6a5060]">
                        {paletteText}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {palette.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 18, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.55,
                          delay: 0.18 + index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-center"
                      >
                        <div
                          className="relative h-16 w-full overflow-hidden rounded-[1rem] border border-white/50 shadow-[0_10px_24px_rgba(79,44,61,0.08)]"
                          style={{ backgroundColor: item.color }}
                        >
                          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_58%)]" />
                        </div>
                        <p className="mt-2 text-xs font-medium text-[#5c3c4b]">
                          {item.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2.2rem] border border-[#f0d7c3]/18 bg-[linear-gradient(160deg,#2b1821_0%,#4f2c3d_36%,#6b4154_66%,#a56d7f_100%)] p-6 text-white shadow-[0_24px_70px_rgba(25,10,19,0.22)] md:p-8"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_38%,rgba(255,255,255,0.03)_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,244,232,0.18),transparent_32%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,216,225,0.12),transparent_30%)]" />
            <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute left-6 top-6 h-20 w-20 rounded-full border border-[#f1d8c8]/10" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.08 }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                  <Gem className="h-6 w-6 text-[#f5d7c4]" />
                </div>

                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#f2d8c5]">
                  Signature Style
                </p>

                <h3
                  className="mb-4 text-[2.3rem] leading-none md:text-[2.7rem]"
                  style={{ fontFamily: "var(--font-script), cursive" }}
                >
                  {coverTitle}
                </h3>

                <p className="max-w-xl text-sm leading-8 text-white/84 md:text-[15px]">
                  {coverText}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.16 }}
                className="relative mt-8 overflow-hidden rounded-[1.8rem] border border-white/15 bg-white/10 p-6 md:p-7"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_60%)]" />
                <div className="relative z-10">
                  <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#f1cad9]">
                    {noteTitle}
                  </p>

                  <p
                    className="text-lg italic leading-8 text-white/92 md:text-[1.35rem]"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                    }}
                  >
                    {noteText}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.24 }}
                className="mt-6 flex items-start gap-4 rounded-[1.6rem] border border-white/12 bg-[#5d3649]/70 p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <Sparkles className="h-5 w-5 text-[#f3d5e1]" />
                </div>
                <p className="text-sm leading-7 text-white/84">{footer}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}