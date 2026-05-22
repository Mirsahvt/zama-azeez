"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Share2,
  MapPin,
  Heart,
  Instagram,
  Sparkles,
} from "lucide-react";
import { useCallback, useMemo } from "react";

interface ContactProps {
  language: "EN" | "ES";
}

export function Contact({ language }: ContactProps) {
  const phoneNumber = "+918086251607";

  const mapUrl = "https://maps.app.goo.gl/92RkeEGmyhAFvefu6?g_st=ic";

  const content = {
    EN: {
      title: "With Love, We Await Your Presence",
      description:
        "Your presence, duas, and blessings will make our celebration even more beautiful. We would be truly honoured to celebrate these special moments with you.",
      finalLabel: "A Final Note",
      finalQuote:
        "May this beautiful beginning be filled with love, peace, blessings, and endless happiness.",
      finalSubtext:
        "With heartfelt joy, both families warmly welcome you to the wedding celebrations of Fathima Zama and Abdul Azeez.",
      madeWith: "Made with love, blessings and grace",
      couple: "Fathima Zama & Abdul Azeez",
      venueMap: "Nikkah Map",
      callFamily: "Call Family",
      whatsapp: "WhatsApp",
      shareInvitation: "Share Invitation",
      shareTitle: "Wedding Invitation",
      shareText:
        "You are warmly invited to the wedding celebrations of Fathima Zama and Abdul Azeez. Your presence, duas, and blessings mean so much to both families.",
    },
    ES: {
      title: "With Love, We Await Your Presence",
      description:
        "Your presence, duas, and blessings will make our celebration even more beautiful. We would be truly honoured to celebrate these special moments with you.",
      finalLabel: "A Final Note",
      finalQuote:
        "May this beautiful beginning be filled with love, peace, blessings, and endless happiness.",
      finalSubtext:
        "With heartfelt joy, both families warmly welcome you to the wedding celebrations of Fathima Zama and Abdul Azeez.",
      madeWith: "Made with love, blessings and grace",
      couple: "Fathima Zama & Abdul Azeez",
      venueMap: "Nikkah Map",
      callFamily: "Call Family",
      whatsapp: "WhatsApp",
      shareInvitation: "Share Invitation",
      shareTitle: "Wedding Invitation",
      shareText:
        "You are warmly invited to the wedding celebrations of Fathima Zama and Abdul Azeez. Your presence, duas, and blessings mean so much to both families.",
    },
  } as const;

  const t = content[language];

  const shareMessage = useMemo(
    () =>
      encodeURIComponent(
        "You are warmly invited to the wedding celebrations of Fathima Zama & Abdul Azeez ✨"
      ),
    []
  );

  const whatsappNumber = useMemo(() => phoneNumber.replace("+", ""), [phoneNumber]);

  const handleShare = useCallback(async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: t.shareTitle,
          text: t.shareText,
          url,
        });
        return;
      } catch {
        // Fallback to WhatsApp sharing.
      }
    }

    window.open(`https://wa.me/?text=${shareMessage}%20${url}`, "_blank");
  }, [shareMessage, t.shareText, t.shareTitle]);

  const buttons = useMemo(
    () => [
      {
        icon: MapPin,
        label: t.venueMap,
        href: mapUrl,
        variant: "gold",
      },
      {
        icon: Phone,
        label: t.callFamily,
        href: `tel:${phoneNumber}`,
        variant: "glass",
      },
      {
        icon: MessageCircle,
        label: t.whatsapp,
        href: `https://wa.me/${whatsappNumber}`,
        variant: "whatsapp",
      },
      {
        icon: Share2,
        label: t.shareInvitation,
        onClick: handleShare,
        variant: "dark",
      },
    ],
    [handleShare, mapUrl, phoneNumber, t, whatsappNumber]
  );

  const getButtonStyle = (variant: string) => {
    if (variant === "gold") {
      return {
        color: "#000040",
        borderColor: "rgba(215,186,137,0.55)",
        background:
          "linear-gradient(135deg, #FFF8EF 0%, #D7BA89 50%, #B8925A 100%)",
        boxShadow:
          "0 16px 34px rgba(0,0,24,0.28), inset 0 1px 0 rgba(255,255,255,0.46)",
      };
    }

    if (variant === "whatsapp") {
      return {
        color: "#DFFFEA",
        borderColor: "rgba(37,211,102,0.35)",
        background:
          "linear-gradient(135deg, rgba(37,211,102,0.24), rgba(5,6,46,0.58))",
        boxShadow:
          "0 16px 34px rgba(0,0,24,0.30), inset 0 1px 0 rgba(255,255,255,0.10)",
      };
    }

    if (variant === "dark") {
      return {
        color: "#FFF8EF",
        borderColor: "rgba(215,186,137,0.42)",
        background:
          "linear-gradient(135deg, #000018 0%, #000040 60%, #171845 100%)",
        boxShadow:
          "0 16px 34px rgba(0,0,24,0.38), inset 0 1px 0 rgba(255,248,239,0.12)",
      };
    }

    return {
      color: "#FFF8EF",
      borderColor: "rgba(215,186,137,0.36)",
      background:
        "linear-gradient(180deg, rgba(255,248,239,0.14), rgba(215,186,137,0.08), rgba(0,0,64,0.32))",
      boxShadow:
        "0 16px 34px rgba(0,0,24,0.30), inset 0 1px 0 rgba(255,248,239,0.14)",
    };
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #000018 0%, #000040 20%, #05062E 48%, #171845 72%, #D7BA89 94%, #FFF8EF 100%)",
      }}
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#000018] via-[#000040]/82 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#FFF8EF] via-[#D7BA89]/42 to-transparent" />

        <div className="absolute left-[7%] top-24 h-80 w-80 rounded-full bg-[#D7BA89]/16 blur-[110px]" />
        <div className="absolute right-[7%] top-[32%] h-96 w-96 rounded-full bg-[#FFF8EF]/8 blur-[130px]" />
        <div className="absolute bottom-20 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#B8925A]/14 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.14),transparent_44%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.07),transparent_58%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          className="mb-5 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
          <div className="h-2.5 w-2.5 rotate-45 border border-[#D7BA89] bg-[#FFF8EF] shadow-[0_0_18px_rgba(215,186,137,0.65)]" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
        </motion.div>

        <motion.h2
          className="mb-4 text-4xl md:text-6xl"
          style={{
            fontFamily: "var(--font-script), 'Great Vibes', cursive",
            color: "#FFF8EF",
            textShadow:
              "0 0 18px rgba(215,186,137,0.32), 0 8px 30px rgba(0,0,0,0.70)",
          }}
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t.title}
        </motion.h2>

        <motion.p
          className="mx-auto mb-12 max-w-3xl text-sm leading-7 md:text-base"
          style={{
            color: "rgba(255,248,239,0.82)",
            textShadow: "0 4px 16px rgba(0,0,0,0.55)",
          }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t.description}
        </motion.p>

        <motion.div
          className="relative overflow-hidden rounded-[2rem] border p-7 shadow-xl backdrop-blur-xl md:p-10"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            borderColor: "rgba(215,186,137,0.38)",
            background:
              "linear-gradient(180deg, rgba(255,248,239,0.14) 0%, rgba(215,186,137,0.08) 40%, rgba(0,0,64,0.46) 100%)",
            WebkitBackdropFilter: "blur(18px) saturate(160%)",
            backdropFilter: "blur(18px) saturate(160%)",
            boxShadow:
              "0 28px 80px rgba(0,0,24,0.42), inset 0 1px 0 rgba(255,248,239,0.16)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.16),transparent_45%)]" />
          <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#D7BA89]/70 to-transparent" />
          <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D7BA89]/35 to-transparent" />

          <div className="relative">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D7BA89]">
              {t.finalLabel}
            </p>

            <p
              className="text-xl italic leading-8 md:text-2xl"
              style={{
                color: "#FFF8EF",
                fontFamily: '"Cormorant Garamond", serif',
                textShadow: "0 4px 16px rgba(0,0,0,0.50)",
              }}
            >
              “{t.finalQuote}”
            </p>

            <div className="mx-auto my-6 h-px max-w-sm bg-gradient-to-r from-transparent via-[#D7BA89]/60 to-transparent" />

            <p
              className="mx-auto max-w-xl text-sm leading-8"
              style={{
                color: "rgba(255,248,239,0.80)",
                textShadow: "0 4px 14px rgba(0,0,0,0.45)",
              }}
            >
              {t.finalSubtext}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {buttons.map((btn) => {
                const Icon = btn.icon;
                const style = getButtonStyle(btn.variant);

                if (btn.onClick) {
                  return (
                    <button
                      key={btn.label}
                      onClick={btn.onClick}
                      className="flex flex-col items-center justify-center gap-2 rounded-xl border p-5 transition duration-300 hover:scale-105 md:p-6"
                      style={style}
                      type="button"
                    >
                      <Icon size={22} />
                      <span className="text-sm font-semibold">{btn.label}</span>
                    </button>
                  );
                }

                return (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border p-5 transition duration-300 hover:scale-105 md:p-6"
                    style={style}
                  >
                    <Icon size={22} />
                    <span className="text-sm font-semibold">{btn.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
            <Heart className="h-4 w-4 fill-[#D7BA89] text-[#D7BA89]" />
            <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
          </div>

          <p
            className="text-lg"
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              color: "#FFF8EF",
              textShadow: "0 5px 16px rgba(0,0,0,0.55)",
            }}
          >
            {t.madeWith}
          </p>

          <p
            className="mt-2 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              color: "#D7BA89",
              textShadow:
                "0 0 16px rgba(215,186,137,0.26), 0 7px 22px rgba(0,0,0,0.60)",
            }}
          >
            {t.couple}
          </p>

          <p className="mt-2 text-sm text-[#FFF8EF]/68">© 2026 InviteScroll</p>

          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-transparent via-[#D7BA89]/70 to-transparent" />
              <Sparkles className="h-3.5 w-3.5 text-[#D7BA89]" />
              <div className="h-px w-10 bg-gradient-to-r from-transparent via-[#D7BA89]/70 to-transparent" />
            </div>

            <p
              className="text-sm"
              style={{
                fontFamily: "var(--font-script), 'Great Vibes', cursive",
                color: "#FFF8EF",
              }}
            >
              InviteScroll
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#FFF8EF]/78">
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
  );
}