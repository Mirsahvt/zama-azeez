"use client"

import { motion } from "framer-motion"
import {
  ExternalLink,
  Navigation,
  MapPin,
  Church,
  Sparkles,
  Clock,
} from "lucide-react"
import Image from "next/image"
import { useMemo } from "react"

interface VenueProps {
  language: "ES" | "EN"
}

export function Venue({ language }: VenueProps) {

  const content = {
    EN: {
      title: "Our Venues",
      subtitle:
        "From heartfelt vows to joyful gatherings with loved ones, each place holds a beautiful part of our celebration.",
      openMap: "Map",
      getDirections: "Route",
      venues: [
        {
          label: "Bride Church",
          badge: "Betrothal",
          dateTag: "29 APR",
          time: "11:00 AM",
          name: "Sacred Heart Church",
          subname: "Angadikadavu",
          address: "Angadikadavu",
          city: "Kannur",
          state: "Kerala",
          image: "/images/church-1.jpg",
          map: "https://maps.app.goo.gl/fvZoL5bKsQ6HnH9p7",
          direction:
            "https://www.google.com/maps/dir/?api=1&destination=Sacred+Heart+Church+Angadikadavu",
          icon: Church,
        },
        {
          label: "Bride Hall",
          badge: "Reception",
          dateTag: "30 APR",
          time: "12:00 PM",
          name: "Plackiyil Auditorium",
          subname: "Angadikadavu",
          address: "Angadikadavu",
          city: "Kannur",
          state: "Kerala",
          image: "/images/hall-1.jpg",
          map: "https://maps.app.goo.gl/5kVLsssEBvvGV1UL9",
          direction:
            "https://www.google.com/maps/dir/?api=1&destination=Plackiyil+Auditorium+Angadikadavu",
          icon: Sparkles,
        },
        {
          label: "Groom Church",
          badge: "Wedding",
          dateTag: "11 MAY",
          time: "10:00 AM",
          name: "St Mary's Church",
          subname: "Mylampully",
          address: "Mylampully",
          city: "Palakkad",
          state: "Kerala",
          image: "/images/church-2.png",
          map: "https://share.google/PT8oR5gUdxS7GColV",
          direction:
            "https://www.google.com/maps/dir/?api=1&destination=St+Marys+Church+Mylampully",
          icon: Church,
        },
        {
          label: "Groom Hall",
          badge: "Reception",
          dateTag: "11 MAY",
          time: "12:30 PM",
          name: "Galaxy Events Complex",
          subname: "Mylampully",
          address: "Mylampully",
          city: "Palakkad",
          state: "Kerala",
          image: "/images/hall-2.jpg",
          map: "https://share.google/UnwMEslIuXuQ4P8km",
          direction:
            "https://www.google.com/maps/dir/?api=1&destination=Galaxy+Events+Complex+Mylampully",
          icon: Sparkles,
        },
      ],
    },

    ES: {
      title: "Our Venues",
      subtitle:
        "From heartfelt vows to joyful gatherings with loved ones, each place holds a beautiful part of our celebration.",
      openMap: "Map",
      getDirections: "Route",
      venues: []
    },
  }

  const { title, subtitle, openMap, getDirections } = content[language]

  const venues = useMemo(() => content[language].venues, [language])

  return (
    <section
      id="venue"
      className="relative overflow-hidden py-16 md:py-22"
      style={{
        background:
          "linear-gradient(180deg, #f7dde7 0%, #f4d2de 18%, #f0d6de 34%, #3b2231 62%, #2b1824 82%, #f3d8e2 100%)",
      }}
    >
      <div className="container relative z-10 mx-auto px-3 sm:px-4">

        {/* Title */}
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="mb-3 text-3xl md:text-5xl"
            style={{
              fontFamily: "var(--font-script), cursive",
              color: "#3f2433",
            }}
          >
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-xs md:text-base text-[#604151]">
            {subtitle}
          </p>
        </motion.div>

        {/* Horizontal Scroll */}
        <div className="overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 snap-x snap-mandatory">

            {venues.map((venue, index) => {
              const Icon = venue.icon

              return (
                <motion.div
                  key={venue.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="min-w-[300px] md:min-w-[420px] snap-center"
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-[1.8rem] border border-white/25 bg-[#fff8fb]/90 shadow-xl"
                  >

                    {/* Image */}
                    <div className="relative h-56">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    {/* Info */}
                    <div className="p-5">

                      <h3
                        className="text-xl mb-1"
                        style={{ fontFamily: "var(--font-script), cursive" }}
                      >
                        {venue.name}
                      </h3>

                      <p className="text-sm text-[#5f4451] mb-3">
                        {venue.subname}
                      </p>

                      <div className="space-y-2 text-sm text-[#4b2d3d]">

                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-[#a46782]" />
                          {venue.time}
                        </div>

                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-[#a46782]" />
                          {venue.address}, {venue.city}
                        </div>

                      </div>

                      {/* Buttons */}
                      <div className="grid grid-cols-2 gap-2 mt-4">

                        <a
                          href={venue.map}
                          target="_blank"
                          className="flex items-center justify-center gap-1 rounded-lg bg-[#4f2c3d] text-white py-2 text-sm"
                        >
                          {openMap}
                          <ExternalLink className="h-4 w-4" />
                        </a>

                        <a
                          href={venue.direction}
                          target="_blank"
                          className="flex items-center justify-center gap-1 rounded-lg border border-[#e7c3d2] text-[#4f2c3d] py-2 text-sm"
                        >
                          <Navigation className="h-4 w-4" />
                          {getDirections}
                        </a>

                      </div>

                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}