"use client"

import { motion } from "framer-motion"
import { Shirt, Sparkles, Gem, Palette } from "lucide-react"
import { useMemo } from "react"

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
        "We kindly invite our guests to dress in graceful shades inspired by the palette below.",
      noteTitle: "A Special Note",
      noteText:
        "Your presence on our special day means so much to us.",
      coverTitle: "Luxury Palette",
      coverText:
        "Think timeless elegance and romantic tones.",
      footer:
        "Thank you for being part of our day.",
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
    footer
  } = content[language]

  const palette = useMemo(() => content[language].palette, [language])

  return (
    <section
      id="dress-code"
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #fff6f3 0%, #f7e8e4 12%, #f2d9dd 28%, #c89aaa 50%, #6e4658 72%, #2b1821 88%, #120c10 100%)",
      }}
    >

      <div className="container relative z-10 mx-auto px-4">

        {/* Title */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="mb-4 text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-script), cursive",
              color: "#4a2b3a",
            }}
          >
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-[#6a4d5c] md:text-base">
            {subtitle}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

          {/* Palette Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="rounded-[2rem] border border-white/40 bg-white/90 p-8 shadow-xl"
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7e6ee]">
                <Palette className="h-6 w-6 text-[#5a3347]" />
              </div>

              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-script), cursive" }}
              >
                {paletteTitle}
              </h3>

            </div>

            <p className="mb-6 text-sm text-[#6a5060]">
              {paletteText}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

              {palette.map((item) => (

                <div key={item.name} className="text-center">

                  <div
                    className="h-16 rounded-xl border border-white shadow-md"
                    style={{ backgroundColor: item.color }}
                  />

                  <p className="mt-2 text-xs text-[#5c3c4b]">
                    {item.name}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Luxury Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="rounded-[2rem] bg-gradient-to-br from-[#2b1821] via-[#4f2c3d] to-[#a56d7f] p-8 text-white shadow-xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-4">
              <Gem className="h-6 w-6 text-[#f5d7c4]" />
            </div>

            <h3
              className="mb-4 text-3xl"
              style={{ fontFamily: "var(--font-script), cursive" }}
            >
              {coverTitle}
            </h3>

            <p className="text-sm leading-8 text-white/85">
              {coverText}
            </p>

            <div className="mt-8 rounded-xl bg-white/10 p-6">

              <p className="text-xs uppercase tracking-widest mb-2">
                {noteTitle}
              </p>

              <p className="italic text-lg">
                {noteText}
              </p>

            </div>

            <div className="flex items-start gap-4 mt-6 bg-[#5d3649]/70 p-5 rounded-xl">

              <Sparkles className="h-5 w-5 text-[#f3d5e1]" />

              <p className="text-sm text-white/85">
                {footer}
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}