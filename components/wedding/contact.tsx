"use client"

import { motion } from "framer-motion"
import {
  Phone,
  MessageCircle,
  Share2,
  MapPin,
  Heart,
  Instagram,
} from "lucide-react"
import { useCallback, useMemo } from "react"

interface ContactProps {
  language: "EN" | "ES"
}

export function Contact({ language }: ContactProps) {
  const phoneNumber = "+918586010417"

  const mapUrl = "https://maps.google.com/?q=Sacred+Heart+Church+Angadikadavu"

  const shareMessage = useMemo(
    () =>
      encodeURIComponent(
        "You're warmly invited to Stebin & Jesna's Wedding Celebration 💍"
      ),
    []
  )

  const shareText = useMemo(
    () =>
      "With joyful hearts in Christ, we warmly invite you to be part of our special day.Your presence, prayers, and blessings mean so much to us and to our families.Come celebrate love, faith, and togetherness with us.",
    []
  )

  const whatsappNumber = useMemo(() => phoneNumber.replace("+", ""), [phoneNumber])

  const handleShare = useCallback(async () => {
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Wedding Invitation",
          text: shareText,
          url,
        })
        return
      } catch {}
    }

    window.open(`https://wa.me/?text=${shareMessage}%20${url}`, "_blank")
  }, [shareMessage, shareText])

  const buttons = useMemo(
    () => [
      {
        icon: MapPin,
        label: "Venue Map",
        href: mapUrl,
        style: "bg-white/80 text-[#5a3347] border border-white/50",
      },
      {
        icon: Phone,
        label: "Call Family",
        href: `tel:${phoneNumber}`,
        style: "bg-white/80 text-[#5a3347] border border-white/50",
      },
      {
        icon: MessageCircle,
        label: "WhatsApp",
        href: `https://wa.me/${whatsappNumber}`,
        style: "bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30",
      },
      {
        icon: Share2,
        label: "Share Invitation",
        onClick: handleShare,
        style: "bg-[#4f2c3d] text-white border border-[#4f2c3d]",
      },
    ],
    [handleShare, mapUrl, phoneNumber, whatsappNumber]
  )

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24"
      style={{
        background:
          "linear-gradient(180deg,#f7dbe5 0%,#f3d3df 25%,#e7c1d0 55%,#7e5165 80%,#3f2433 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          className="mb-4 text-4xl md:text-6xl"
          style={{
            fontFamily: "var(--font-script), cursive",
            color: "#4b2a3a",
          }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          With Love, We Await Your Presence
        </motion.h2>

        <motion.p
          className="mx-auto mb-12 max-w-3xl text-sm leading-7 text-[#6a4456] md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Your prayers, blessings and presence will make our celebration even
          more meaningful. We would be truly honored to celebrate this sacred
          day with you.
        </motion.p>

        <motion.div
          className="rounded-3xl border border-white/40 bg-white/30 p-10 shadow-xl backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#7a4a61]">
            A Final Blessing
          </p>

          <p
            className="text-xl italic text-[#3f2433] md:text-2xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            “This is the day that the Lord has made; let us rejoice and be glad in it.”
          </p>

          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#9b6c82]">
            Psalm 118:24
          </p>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#5b3748]">
            With joyful hearts in Christ, we warmly welcome you to be part of our
            wedding celebration.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {buttons.map((btn) => {
              const Icon = btn.icon

              if (btn.onClick) {
                return (
                  <button
                    key={btn.label}
                    onClick={btn.onClick}
                    className={`flex flex-col items-center justify-center gap-2 rounded-xl p-6 transition hover:scale-105 ${btn.style}`}
                    type="button"
                  >
                    <Icon size={22} />
                    <span className="text-sm font-medium">{btn.label}</span>
                  </button>
                )
              }

              return (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center gap-2 rounded-xl p-6 transition hover:scale-105 ${btn.style}`}
                >
                  <Icon size={22} />
                  <span className="text-sm font-medium">{btn.label}</span>
                </a>
              )
            })}
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-white/40" />
            <Heart className="h-4 w-4 fill-pink-200 text-pink-200" />
            <div className="h-px w-14 bg-white/40" />
          </div>

          <p
            className="text-lg text-white"
            style={{ fontFamily: "var(--font-script), cursive" }}
          >
            Made with love, prayer and grace
          </p>

          <p
            className="mt-2 text-3xl text-white"
            style={{ fontFamily: "var(--font-script), cursive" }}
          >
            Stebin & Jesna
          </p>

          <p className="mt-2 text-sm text-white/70">© 2026 InviteScroll</p>

          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-white/40" />
              <Heart className="h-3 w-3 fill-pink-200 text-pink-200" />
              <div className="h-px w-10 bg-white/40" />
            </div>

            <p
              className="text-sm text-white"
              style={{ fontFamily: "var(--font-script), cursive" }}
            >
              InviteScroll
            </p>

            <div className="flex items-center gap-4 text-xs text-white/80">
              <span className="flex items-center gap-1">
                <Phone size={14} />
                050 857 7054
              </span>

              <span className="flex items-center gap-1">
                <Instagram size={14} />
                @invitescroll
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}