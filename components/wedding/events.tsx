"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Trophy,
  MoonStar,
  Gem,
  Navigation,
  Shirt,
} from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

interface EventsProps {
  language: "ES" | "EN";
}

export function Events({ language }: EventsProps) {
  const content = {
    EN: {
      title: "Wedding Celebrations",
      subtitle:
        "With joy and gratitude, we invite you to be part of the beautiful celebrations of Fathima Zama and Abdul Azeez.",
      mapButton: "View Location",
      dressCodeLabel: "Dress Code",
      events: [
        {
          icon: Trophy,
          title: "Game Party",
          date: "7 June 2026, Saturday",
          time: "5:00 PM – 9:00 PM",
          location: "Game Party Venue",
          venue: "Celebration with Team Bride & Team Groom",
          dressCode:
            "Team Groom: Black & Red Jersey · Team Bride: Black & White Jersey",
          description:
            "Let the celebrations begin with fun, laughter, and friendly team spirit as both sides come together for an exciting game night.",
          image: "/images/zama12.jpg",
          mapLink: "https://maps.app.goo.gl/mUEp1ZsGg4nrU6js7?g_st=ic",
        },
        {
          icon: MoonStar,
          title: "Banaras Night",
          date: "12 June 2026, Friday",
          time: "5:00 PM onwards",
          location: "Bride House",
          venue: "A graceful evening at the bride’s home",
          dressCode: "Guests: Emerald Green or Black · Bride: Golden Shade",
          description:
            "An elegant evening filled with tradition, colors, music, and family warmth as the celebrations move into a royal Banaras-inspired night.",
          image: "/images/zama13.jpg",
          mapLink: "",
        },
        {
          icon: Heart,
          title: "Nikkah",
          date: "13 June 2026, Saturday",
          time: "11:00 AM – 3:00 PM",
          location: "Nikkah Venue",
          venue: "Sacred ceremony with prayers and blessings",
          dressCode: "Guests: Any Pastel Colour · Bride: Pastel Pink",
          description:
            "With heartfelt prayers and blessings, join us for the sacred Nikkah ceremony of Fathima Zama and Abdul Azeez.",
          image: "/images/zama14.jpg",
          mapLink: "https://maps.app.goo.gl/92RkeEGmyhAFvefu6?g_st=ic",
        },
        {
          icon: Gem,
          title: "Reception",
          date: "14 June 2026, Sunday",
          time: "11:00 AM – 2:00 PM",
          location: "Reception Venue",
          venue: "A joyful gathering for family and friends",
          dressCode: "Guests: Any Dark Shades · Bride: Maroon & Black",
          description:
            "Celebrate the newlywed couple with love, blessings, and joyful memories at their wedding reception.",
          image: "/images/zama15.jpg",
          mapLink: "https://maps.app.goo.gl/Bt9ZUin2oK4bCeyM6?g_st=ic",
        },
        {
          icon: Sparkles,
          title: "Turkish Delight",
          date: "16 June 2026, Tuesday",
          time: "5:00 PM – 9:00 PM",
          location: "Turkish Delight Venue",
          venue: "A dreamy themed celebration",
          dressCode: "Guests: Any Shades of Blue or Off White",
          description:
            "A dreamy themed evening inspired by Turkish elegance, filled with charm, celebration, and beautiful memories.",
          image: "/images/zama16.jpg",
          mapLink: "https://maps.app.goo.gl/iwVUH5JeUcToUDUM6?g_st=ic",
        },
      ],
    },
    ES: {
      title: "Wedding Celebrations",
      subtitle:
        "With joy and gratitude, we invite you to be part of the beautiful celebrations of Fathima Zama and Abdul Azeez.",
      mapButton: "View Location",
      dressCodeLabel: "Dress Code",
      events: [
        {
          icon: Trophy,
          title: "Game Party",
          date: "7 June 2026, Saturday",
          time: "5:00 PM – 9:00 PM",
          location: "Game Party Venue",
          venue: "Celebration with Team Bride & Team Groom",
          dressCode:
            "Team Bride: Black & Red Jersey · Team Groom: Black & White Jersey",
          description:
            "Let the celebrations begin with fun, laughter, and friendly team spirit as both sides come together for an exciting game night.",
          image: "/images/game-party.jpg",
          mapLink: "https://maps.app.goo.gl/mUEp1ZsGg4nrU6js7?g_st=ic",
        },
        {
          icon: MoonStar,
          title: "Banaras Night",
          date: "12 June 2026, Friday",
          time: "5:00 PM onwards",
          location: "Bride House",
          venue: "A graceful evening at the bride’s home",
          dressCode: "Guests: Emerald Green or Black · Bride: Golden Shade",
          description:
            "An elegant evening filled with tradition, colors, music, and family warmth as the celebrations move into a royal Banaras-inspired night.",
          image: "/images/banaras-night.jpg",
          mapLink: "",
        },
        {
          icon: Heart,
          title: "Nikkah",
          date: "13 June 2026, Saturday",
          time: "11:00 AM – 3:00 PM",
          location: "Nikkah Venue",
          venue: "Sacred ceremony with prayers and blessings",
          dressCode: "Guests: Any Pastel Colour · Bride: Pastel Pink",
          description:
            "With heartfelt prayers and blessings, join us for the sacred Nikkah ceremony of Fathima Zama and Abdul Azeez.",
          image: "/images/nikkah.jpg",
          mapLink: "https://maps.app.goo.gl/92RkeEGmyhAFvefu6?g_st=ic",
        },
        {
          icon: Gem,
          title: "Reception",
          date: "14 June 2026, Sunday",
          time: "11:00 AM – 2:00 PM",
          location: "Reception Venue",
          venue: "A joyful gathering for family and friends",
          dressCode: "Guests: Any Dark Shades · Bride: Maroon & Black",
          description:
            "Celebrate the newlywed couple with love, blessings, and joyful memories at their wedding reception.",
          image: "/images/reception.jpg",
          mapLink: "https://maps.app.goo.gl/Bt9ZUin2oK4bCeyM6?g_st=ic",
        },
        {
          icon: Sparkles,
          title: "Turkish Delight",
          date: "16 June 2026, Tuesday",
          time: "5:00 PM – 9:00 PM",
          location: "Turkish Delight Venue",
          venue: "A dreamy themed celebration",
          dressCode: "Guests: Any Shades of Blue or Off White",
          description:
            "A dreamy themed evening inspired by Turkish elegance, filled with charm, celebration, and beautiful memories.",
          image: "/images/turkish-delight.jpg",
          mapLink: "https://maps.app.goo.gl/iwVUH5JeUcToUDUM6?g_st=ic",
        },
      ],
    },
  };

  const { title, subtitle, mapButton, dressCodeLabel } = content[language];

  const events = useMemo(() => content[language].events, [language]);

  return (
    <section
      id="events"
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #000014 0%, #000040 20%, #05062E 48%, #171845 70%, #D7BA89 92%, #FFF8EF 100%)",
      }}
    >
      {/* Luxury Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#000014] via-[#000040]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#FFF8EF] via-[#D7BA89]/35 to-transparent" />

        <div className="absolute left-[7%] top-20 h-80 w-80 rounded-full bg-[#D7BA89]/14 blur-[100px]" />
        <div className="absolute right-[8%] top-[26%] h-96 w-96 rounded-full bg-[#FFF8EF]/8 blur-[120px]" />
        <div className="absolute bottom-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#B8925A]/14 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.16),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.07),transparent_58%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Title */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#D7BA89] bg-[#FFF8EF] shadow-[0_0_18px_rgba(215,186,137,0.65)]" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
          </div>

          <h2
            className="mb-4 text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              color: "#FFF8EF",
              textShadow:
                "0 0 18px rgba(215,186,137,0.30), 0 8px 28px rgba(0,0,0,0.55)",
            }}
          >
            {title}
          </h2>

          <p
            className="mx-auto max-w-2xl text-sm leading-7 md:text-base"
            style={{
              color: "rgba(255,248,239,0.82)",
              textShadow: "0 4px 16px rgba(0,0,0,0.45)",
            }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Event Cards */}
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.title}
                className="group"
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.72,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  className="relative min-h-[580px] overflow-hidden rounded-[2.2rem] border"
                  style={{
                    borderColor: "rgba(215,186,137,0.40)",
                    background:
                      "linear-gradient(180deg, rgba(255,248,239,0.14) 0%, rgba(215,186,137,0.08) 42%, rgba(5,6,46,0.35) 100%)",
                    WebkitBackdropFilter: "blur(20px) saturate(160%)",
                    backdropFilter: "blur(20px) saturate(160%)",
                    boxShadow:
                      "0 30px 90px rgba(0,0,24,0.48), inset 0 1px 0 rgba(255,248,239,0.24), inset 0 -1px 0 rgba(215,186,137,0.18)",
                  }}
                  whileHover={{ y: -10, scale: 1.018 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  {/* Strong Readable Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#000018]/42 via-[#05062E]/68 to-[#000018]/96" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.18),transparent_42%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,248,239,0.10),rgba(215,186,137,0.03)_38%,transparent_68%)]" />

                  {/* Gold Frame */}
                  <div className="absolute inset-0 rounded-[2.2rem] ring-1 ring-[#D7BA89]/25" />
                  <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#D7BA89]/80 to-transparent" />
                  <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D7BA89]/40 to-transparent" />

                  <div className="absolute left-6 top-6 h-7 w-7 rounded-tl border-l border-t border-[#D7BA89]/55" />
                  <div className="absolute right-6 top-6 h-7 w-7 rounded-tr border-r border-t border-[#D7BA89]/55" />
                  <div className="absolute bottom-6 left-6 h-7 w-7 rounded-bl border-b border-l border-[#D7BA89]/55" />
                  <div className="absolute bottom-6 right-6 h-7 w-7 rounded-br border-b border-r border-[#D7BA89]/55" />

                  <div className="relative z-10 flex min-h-[580px] flex-col p-7 md:p-8">
                    {/* Icon + Number */}
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border shadow-lg backdrop-blur-xl"
                        style={{
                          borderColor: "rgba(215,186,137,0.45)",
                          background:
                            "linear-gradient(135deg, rgba(255,248,239,0.20), rgba(215,186,137,0.14), rgba(5,6,46,0.40))",
                          boxShadow:
                            "0 14px 34px rgba(0,0,24,0.35), inset 0 1px 0 rgba(255,248,239,0.22)",
                        }}
                      >
                        <Icon className="h-6 w-6 text-[#D7BA89]" />
                      </div>

                      <span
                        className="text-xs uppercase tracking-[0.32em]"
                        style={{
                          color: "rgba(215,186,137,0.84)",
                          fontFamily: '"Cormorant Garamond", serif',
                        }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-5 text-[2.25rem] leading-none md:text-[2.55rem]"
                      style={{
                        fontFamily: "var(--font-script), 'Great Vibes', cursive",
                        color: "#FFF8EF",
                        textShadow:
                          "0 0 18px rgba(215,186,137,0.30), 0 8px 28px rgba(0,0,0,0.78)",
                      }}
                    >
                      {event.title}
                    </h3>

                    {/* Info Glass Box */}
                    <div
                      className="mb-5 space-y-3 rounded-[1.4rem] border p-4 text-sm"
                      style={{
                        borderColor: "rgba(215,186,137,0.28)",
                        background:
                          "linear-gradient(180deg, rgba(0,0,24,0.46), rgba(5,6,46,0.30))",
                        WebkitBackdropFilter: "blur(14px)",
                        backdropFilter: "blur(14px)",
                        color: "rgba(255,248,239,0.90)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,248,239,0.12), 0 14px 32px rgba(0,0,24,0.24)",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 shrink-0 text-[#D7BA89]" />
                        <span>{event.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 shrink-0 text-[#D7BA89]" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D7BA89]" />
                        <span>{event.location}</span>
                      </div>

                      <div className="flex items-start gap-2">
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#D7BA89]" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    {/* Dress Code */}
                    <div
                      className="mb-5 rounded-[1.3rem] border px-4 py-3"
                      style={{
                        borderColor: "rgba(215,186,137,0.30)",
                        background:
                          "linear-gradient(135deg, rgba(215,186,137,0.16), rgba(255,248,239,0.08), rgba(0,0,64,0.22))",
                        boxShadow: "inset 0 1px 0 rgba(255,248,239,0.12)",
                      }}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <Shirt className="h-4 w-4 text-[#D7BA89]" />
                        <span
                          className="text-[10px] uppercase tracking-[0.26em]"
                          style={{ color: "rgba(215,186,137,0.92)" }}
                        >
                          {dressCodeLabel}
                        </span>
                      </div>

                      <p
                        className="text-sm leading-6"
                        style={{
                          color: "rgba(255,248,239,0.88)",
                          textShadow: "0 3px 12px rgba(0,0,0,0.45)",
                        }}
                      >
                        {event.dressCode}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className="mt-auto text-sm leading-7"
                      style={{
                        color: "rgba(255,248,239,0.82)",
                        textShadow: "0 4px 16px rgba(0,0,0,0.62)",
                      }}
                    >
                      {event.description}
                    </p>

                    {/* Map Button */}
                    {event.mapLink && (
                      <a
                        href={event.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] transition-transform duration-300 hover:scale-[1.03]"
                        style={{
                          borderColor: "rgba(215,186,137,0.48)",
                          color: "#000040",
                          background:
                            "linear-gradient(135deg, #FFF8EF 0%, #D7BA89 48%, #B8925A 100%)",
                          boxShadow:
                            "0 16px 34px rgba(0,0,24,0.30), inset 0 1px 0 rgba(255,255,255,0.45)",
                        }}
                      >
                        <Navigation className="h-4 w-4" />
                        {mapButton}
                      </a>
                    )}
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