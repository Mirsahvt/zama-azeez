"use client"

import { motion } from "framer-motion"
import {
  Heart,
  Church,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import { useMemo } from "react"

interface EventsProps {
  language: "ES" | "EN"
}

export function Events({ language }: EventsProps) {

  const content = {
    EN: {
      title: "Wedding Celebration",
      subtitle:
        "We warmly invite you to celebrate these beautiful moments with us and make the day even more special with your presence.",
      events: [
        {
          icon: Heart,
          title: "Betrothal",
          date: "30 April 2026",
          time: "11:00 AM · Lunch at 12:00 PM",
          location: "Sacred Heart Church, Angadikadavu",
          venue: "Plackiyil Auditorium, Angadikadavu",
          description:
            "Join us for our betrothal ceremony followed by lunch and a heartfelt gathering with family and friends.",
          image: "/images/betrothal.jpg",
        },
        {
          icon: Church,
          title: "Wedding",
          date: "11 May 2026",
          time: "10:00 AM · Lunch at 12:30 PM",
          location: "St Mary's Church, Mylampully",
          venue: "Galaxy Events Complex, Mylampully",
          description:
            "We joyfully invite you to witness our wedding ceremony followed by lunch and reception.",
          image: "/images/wedding.jpg",
        },
      ],
    },
    ES: {
      title: "Wedding Celebrations",
      subtitle:
        "We warmly invite you to celebrate these beautiful moments with us and make the day even more special with your presence.",
      events: [
        {
          icon: Sparkles,
          title: "Betrothal Eve",
          date: "29 April 2026",
          time: "5:30 PM",
          location: "Sacred Heart Church, Angadikadavu",
          venue: "Bride Side Celebration",
          description:
            "A beautiful evening of family gathering, love, and togetherness as the celebrations begin.",
          image: "/images/betrothal-eve.jpg",
        },
        {
          icon: Heart,
          title: "Betrothal",
          date: "30 April 2026",
          time: "11:00 AM · Lunch at 12:00 PM",
          location: "Sacred Heart Church, Angadikadavu",
          venue: "Plackiyil Auditorium, Angadikadavu",
          description:
            "Join us for our betrothal ceremony followed by lunch and a heartfelt gathering with family and friends.",
          image: "/images/betrothal.jpg",
        },
        {
          icon: Church,
          title: "Wedding",
          date: "11 May 2026",
          time: "10:00 AM · Lunch at 12:30 PM",
          location: "St Mary's Church, Mylampully",
          venue: "Galaxy Events Complex, Mylampully",
          description:
            "We joyfully invite you to witness our wedding ceremony followed by lunch and reception.",
          image: "/images/wedding.jpg",
        },
      ],
    },
  }

  const { title, subtitle } = content[language]

  const events = useMemo(() => content[language].events, [language])

  return (
    <section
      id="events"
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #f8dce7 0%, #f5d2df 14%, #f0d3dc 28%, #47293a 54%, #2f1926 72%, #f3d8e2 100%)",
      }}
    >
      <div className="container relative z-10 mx-auto px-4">

        {/* Title */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="mb-4 text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-script), cursive",
              color: "#3a2130",
            }}
          >
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 md:text-base text-[#5a3949]">
            {subtitle}
          </p>
        </motion.div>

        {/* Event Cards */}
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-3">
          {events.map((event, index) => {
            const Icon = event.icon

            return (
              <motion.div
                key={event.title}
                className="group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
              >
                <motion.div
                  className="relative min-h-[520px] overflow-hidden rounded-[2.2rem] border border-white/20 bg-white/10 shadow-[0_24px_70px_rgba(24,10,18,0.25)] backdrop-blur-xl"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />

                  <div className="relative z-10 flex h-full flex-col p-7 md:p-8">

                    {/* Icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/35 bg-white/80 shadow-lg">
                      <Icon className="h-6 w-6 text-[#532d40]" />
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-4 text-[2.2rem] text-white"
                      style={{ fontFamily: "var(--font-script), cursive" }}
                    >
                      {event.title}
                    </h3>

                    {/* Info */}
                    <div className="mb-5 space-y-3 text-sm text-white/92">

                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#efc6d7]" />
                        {event.date}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#efc6d7]" />
                        {event.time}
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-[#efc6d7]" />
                        {event.location}
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-[#efc6d7]" />
                        {event.venue}
                      </div>

                    </div>

                    <p className="mt-auto text-sm leading-7 text-white/85">
                      {event.description}
                    </p>

                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}