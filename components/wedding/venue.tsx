"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Navigation,
  MapPin,
  Sparkles,
  Clock,
  CalendarDays,
  Trophy,
  MoonStar,
  Heart,
  Gem,
} from "lucide-react";
import Image from "next/image";

interface VenueProps {
  language: "ES" | "EN";
}

type VenueItem = {
  label: string;
  badge: string;
  dateTag: string;
  date: string;
  time: string;
  name: string;
  subname: string;
  address: string;
  city: string;
  state: string;
  image: string;
  map: string;
  direction: string;
  icon: typeof Sparkles;
};

const content = {
  EN: {
    title: "Our Venues",
    subtitle:
      "Each celebration has its own charm, theme, and beautiful place. We warmly invite you to join us and make every moment more memorable.",
    openMap: "Map",
    getDirections: "Route",
    venues: [
      {
        label: "Function 01",
        badge: "Game Party",
        dateTag: "07 JUN",
        date: "7 June 2026, Saturday",
        time: "5:00 PM – 9:00 PM",
        name: "Game Party",
        subname: "Team Bride & Team Groom",
        address: "Game Party Venue",
        city: "Kerala",
        state: "India",
        image: "/images/zama7.jpg",
        map: "https://maps.app.goo.gl/mUEp1ZsGg4nrU6js7?g_st=ic",
        direction:
          "https://www.google.com/maps/dir/?api=1&destination=https://maps.app.goo.gl/mUEp1ZsGg4nrU6js7",
        icon: Trophy,
      },
      {
        label: "Function 02",
        badge: "Banaras Night",
        dateTag: "12 JUN",
        date: "12 June 2026, Friday",
        time: "5:00 PM onwards",
        name: "Bride House",
        subname: "Banaras Night",
        address: "Bride House",
        city: "Thootha",
        state: "Kerala",
        image: "/images/zama17.jpg",
        map: "",
        direction: "",
        icon: MoonStar,
      },
      {
        label: "Function 03",
        badge: "Nikkah",
        dateTag: "13 JUN",
        date: "13 June 2026, Saturday",
        time: "11:00 AM – 3:00 PM",
        name: "Nikkah Venue",
        subname: "Blessed Nikkah Ceremony",
        address: "Nikkah Venue",
        city: "Kerala",
        state: "India",
        image: "/images/zama8.jpg",
        map: "https://maps.app.goo.gl/92RkeEGmyhAFvefu6?g_st=ic",
        direction:
          "https://www.google.com/maps/dir/?api=1&destination=https://maps.app.goo.gl/92RkeEGmyhAFvefu6",
        icon: Heart,
      },
      {
        label: "Function 04",
        badge: "Reception",
        dateTag: "14 JUN",
        date: "14 June 2026, Sunday",
        time: "11:00 AM – 2:00 PM",
        name: "Reception Venue",
        subname: "Wedding Reception",
        address: "Reception Venue",
        city: "Kerala",
        state: "India",
        image: "/images/zama9.jpg",
        map: "https://maps.app.goo.gl/Bt9ZUin2oK4bCeyM6?g_st=ic",
        direction:
          "https://www.google.com/maps/dir/?api=1&destination=https://maps.app.goo.gl/Bt9ZUin2oK4bCeyM6",
        icon: Gem,
      },
      {
        label: "Function 05",
        badge: "Turkish Delight",
        dateTag: "16 JUN",
        date: "16 June 2026, Tuesday",
        time: "5:00 PM – 9:00 PM",
        name: "Turkish Delight",
        subname: "Themed Celebration",
        address: "Turkish Delight Venue",
        city: "Kerala",
        state: "India",
        image: "/images/zama11.jpg",
        map: "https://maps.app.goo.gl/iwVUH5JeUcToUDUM6?g_st=ic",
        direction:
          "https://www.google.com/maps/dir/?api=1&destination=https://maps.app.goo.gl/iwVUH5JeUcToUDUM6",
        icon: Sparkles,
      },
    ] satisfies VenueItem[],
  },

  ES: {
    title: "Our Venues",
    subtitle:
      "Each celebration has its own charm, theme, and beautiful place. We warmly invite you to join us and make every moment more memorable.",
    openMap: "Map",
    getDirections: "Route",
    venues: [
      {
        label: "Function 01",
        badge: "Game Party",
        dateTag: "07 JUN",
        date: "7 June 2026, Saturday",
        time: "5:00 PM – 9:00 PM",
        name: "Game Party",
        subname: "Team Bride & Team Groom",
        address: "Game Party Venue",
        city: "Kerala",
        state: "India",
        image: "/images/zama7.webp",
        map: "https://maps.app.goo.gl/mUEp1ZsGg4nrU6js7?g_st=ic",
        direction:
          "https://www.google.com/maps/dir/?api=1&destination=https://maps.app.goo.gl/mUEp1ZsGg4nrU6js7",
        icon: Trophy,
      },
      {
        label: "Function 02",
        badge: "Banaras Night",
        dateTag: "12 JUN",
        date: "12 June 2026, Friday",
        time: "5:00 PM onwards",
        name: "Bride House",
        subname: "Banaras Night",
        address: "Bride House",
        city: "Thootha",
        state: "Kerala",
        image: "/images/banaras-night.jpg",
        map: "",
        direction: "",
        icon: MoonStar,
      },
      {
        label: "Function 03",
        badge: "Nikkah",
        dateTag: "13 JUN",
        date: "13 June 2026, Saturday",
        time: "11:00 AM – 3:00 PM",
        name: "Nikkah Venue",
        subname: "Blessed Nikkah Ceremony",
        address: "Nikkah Venue",
        city: "Kerala",
        state: "India",
        image: "/images/zama8.webp",
        map: "https://maps.app.goo.gl/92RkeEGmyhAFvefu6?g_st=ic",
        direction:
          "https://www.google.com/maps/dir/?api=1&destination=https://maps.app.goo.gl/92RkeEGmyhAFvefu6",
        icon: Heart,
      },
      {
        label: "Function 04",
        badge: "Reception",
        dateTag: "14 JUN",
        date: "14 June 2026, Sunday",
        time: "11:00 AM – 2:00 PM",
        name: "Reception Venue",
        subname: "Wedding Reception",
        address: "Reception Venue",
        city: "Kerala",
        state: "India",
        image: "/images/zama9.webp",
        map: "https://maps.app.goo.gl/Bt9ZUin2oK4bCeyM6?g_st=ic",
        direction:
          "https://www.google.com/maps/dir/?api=1&destination=https://maps.app.goo.gl/Bt9ZUin2oK4bCeyM6",
        icon: Gem,
      },
      {
        label: "Function 05",
        badge: "Turkish Delight",
        dateTag: "16 JUN",
        date: "16 June 2026, Tuesday",
        time: "5:00 PM – 9:00 PM",
        name: "Turkish Delight",
        subname: "Themed Celebration",
        address: "Turkish Delight Venue",
        city: "Kerala",
        state: "India",
        image: "/images/zama11.jpg",
        map: "https://maps.app.goo.gl/iwVUH5JeUcToUDUM6?g_st=ic",
        direction:
          "https://www.google.com/maps/dir/?api=1&destination=https://maps.app.goo.gl/iwVUH5JeUcToUDUM6",
        icon: Sparkles,
      },
    ] satisfies VenueItem[],
  },
} as const;

export function Venue({ language }: VenueProps) {
  const { title, subtitle, openMap, getDirections, venues } = content[language];

  return (
    <section
      id="venue"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #000018 0%, #000040 18%, #05062E 42%, #101244 62%, #4C3F55 78%, #D7BA89 94%, #FFF8EF 100%)",
      }}
    >
      {/* Smooth blend from previous dark section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#000018] via-[#000040]/80 to-transparent" />

      {/* Smooth blend to next light/gold section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#FFF8EF] via-[#D7BA89]/45 to-transparent" />

      {/* Background luxury glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-24 h-80 w-80 rounded-full bg-[#D7BA89]/16 blur-[110px]" />
        <div className="absolute right-[7%] top-[28%] h-96 w-96 rounded-full bg-[#FFF8EF]/8 blur-[130px]" />
        <div className="absolute bottom-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#D7BA89]/14 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.13),transparent_44%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.08),transparent_58%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-3 sm:px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-18"
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#D7BA89] bg-[#FFF8EF] shadow-[0_0_20px_rgba(215,186,137,0.75)]" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D7BA89] to-transparent" />
          </div>

          <h2
            className="mb-4 text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-script), 'Great Vibes', cursive",
              color: "#FFF8EF",
              textShadow:
                "0 0 18px rgba(215,186,137,0.35), 0 8px 30px rgba(0,0,0,0.70)",
            }}
          >
            {title}
          </h2>

          <p
            className="mx-auto max-w-2xl text-sm leading-7 md:text-base"
            style={{
              color: "rgba(255,248,239,0.84)",
              textShadow: "0 4px 16px rgba(0,0,0,0.55)",
            }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Venue Cards */}
        <div className="overflow-x-auto pb-7 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-5 md:gap-7">
            {venues.map((venue, index) => {
              const Icon = venue.icon;

              return (
                <motion.div
                  key={`${venue.name}-${venue.dateTag}-${index}`}
                  initial={{ opacity: 0, y: 34, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="min-w-[305px] snap-center sm:min-w-[350px] md:min-w-[430px]"
                >
                  <motion.div
                    whileHover={{ y: -7, scale: 1.018 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden rounded-[2rem] border"
                    style={{
                      borderColor: "rgba(215,186,137,0.42)",
                      background:
                        "linear-gradient(180deg, rgba(255,248,239,0.13) 0%, rgba(215,186,137,0.08) 36%, rgba(0,0,64,0.48) 100%)",
                      WebkitBackdropFilter: "blur(18px) saturate(160%)",
                      backdropFilter: "blur(18px) saturate(160%)",
                      boxShadow:
                        "0 30px 90px rgba(0,0,24,0.55), inset 0 1px 0 rgba(255,248,239,0.18), inset 0 -1px 0 rgba(215,186,137,0.16)",
                    }}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        sizes="(max-width: 768px) 330px, 430px"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#000018]/94 via-[#05062E]/52 to-[#000018]/12" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.20),transparent_46%)]" />

                      <div className="absolute left-4 top-4 flex flex-col gap-2">
                        <span className="rounded-full border border-[#D7BA89]/45 bg-[#000018]/78 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#FFF8EF] backdrop-blur-xl">
                          {venue.label}
                        </span>

                        <span className="rounded-full border border-[#D7BA89]/45 bg-[#FFF8EF]/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#05062E] shadow-[0_8px_18px_rgba(0,0,24,0.18)]">
                          {venue.badge}
                        </span>
                      </div>

                      <div className="absolute right-4 top-4 rounded-full border border-[#D7BA89]/45 bg-[#D7BA89]/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#05062E] shadow-[0_8px_18px_rgba(0,0,24,0.22)]">
                        {venue.dateTag}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <h3
                          className="text-3xl leading-none text-[#FFF8EF] md:text-4xl"
                          style={{
                            fontFamily:
                              "var(--font-script), 'Great Vibes', cursive",
                            textShadow:
                              "0 0 16px rgba(215,186,137,0.35), 0 8px 26px rgba(0,0,0,0.86)",
                          }}
                        >
                          {venue.name}
                        </h3>

                        <p
                          className="mt-1 text-sm font-medium"
                          style={{
                            color: "#D7BA89",
                            textShadow: "0 4px 14px rgba(0,0,0,0.80)",
                          }}
                        >
                          {venue.subname}
                        </p>
                      </div>
                    </div>

                    <div className="relative p-5">
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-xl border"
                          style={{
                            borderColor: "rgba(215,186,137,0.42)",
                            background:
                              "linear-gradient(135deg, #FFF8EF 0%, #D7BA89 48%, #B8925A 100%)",
                            boxShadow:
                              "0 12px 28px rgba(0,0,24,0.22), inset 0 1px 0 rgba(255,255,255,0.42)",
                          }}
                        >
                          <Icon className="h-5 w-5 text-[#000040]" />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-[0.26em] text-[#D7BA89]">
                            Venue Details
                          </p>
                          <p className="mt-1 text-sm text-[#FFF8EF]/72">
                            Tap map or route for navigation
                          </p>
                        </div>
                      </div>

                      <div
                        className="space-y-2.5 rounded-[1.2rem] border p-4 text-sm"
                        style={{
                          borderColor: "rgba(215,186,137,0.24)",
                          background:
                            "linear-gradient(180deg, rgba(0,0,24,0.52), rgba(5,6,46,0.36))",
                          color: "rgba(255,248,239,0.88)",
                          boxShadow:
                            "inset 0 1px 0 rgba(255,248,239,0.10), 0 12px 28px rgba(0,0,24,0.22)",
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 shrink-0 text-[#D7BA89]" />
                          <span>{venue.date}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 shrink-0 text-[#D7BA89]" />
                          <span>{venue.time}</span>
                        </div>

                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D7BA89]" />
                          <span>
                            {venue.address}, {venue.city}, {venue.state}
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        {venue.map ? (
                          <a
                            href={venue.map}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1 rounded-xl py-2.5 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03]"
                            style={{
                              color: "#000040",
                              background:
                                "linear-gradient(135deg, #FFF8EF 0%, #D7BA89 48%, #B8925A 100%)",
                              boxShadow:
                                "0 14px 28px rgba(0,0,24,0.22), inset 0 1px 0 rgba(255,255,255,0.48)",
                            }}
                          >
                            {openMap}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <button
                            disabled
                            className="flex cursor-not-allowed items-center justify-center gap-1 rounded-xl py-2.5 text-sm font-semibold opacity-55"
                            style={{
                              color: "#000040",
                              background:
                                "linear-gradient(135deg, #FFF8EF 0%, #D7BA89 100%)",
                            }}
                          >
                            {openMap}
                            <ExternalLink className="h-4 w-4" />
                          </button>
                        )}

                        {venue.direction ? (
                          <a
                            href={venue.direction}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1 rounded-xl border py-2.5 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03]"
                            style={{
                              borderColor: "rgba(215,186,137,0.40)",
                              color: "#FFF8EF",
                              background:
                                "linear-gradient(135deg, #000018 0%, #000040 62%, #101244 100%)",
                              boxShadow:
                                "0 14px 28px rgba(0,0,24,0.28), inset 0 1px 0 rgba(255,248,239,0.12)",
                            }}
                          >
                            <Navigation className="h-4 w-4" />
                            {getDirections}
                          </a>
                        ) : (
                          <button
                            disabled
                            className="flex cursor-not-allowed items-center justify-center gap-1 rounded-xl border py-2.5 text-sm font-semibold opacity-55"
                            style={{
                              borderColor: "rgba(215,186,137,0.30)",
                              color: "#FFF8EF",
                              background: "#000040",
                            }}
                          >
                            <Navigation className="h-4 w-4" />
                            {getDirections}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}