"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, Sparkles, HeartHandshake } from "lucide-react"
import { useMemo } from "react"

interface FAQProps {
  language: "ES" | "EN"
}

export function FAQ({ language }: FAQProps) {

  const content = {
    EN: {
      title: "Important Information",
      subtitle:
        "A few helpful notes for our beloved guests as you join us in this blessed celebration.",

      faqs: [
        {
          icon: Sparkles,
          question: "What should guests wear?",
          answer:
            "Guests are warmly invited to dress in elegant and festive attire suitable for a traditional celebration. For men, Mundu and Kurta will be especially appreciated. For girls and ladies, graceful sarees, churidars, lehengas, gowns, or other traditional outfits will beautifully complement the celebration.",
        },
        {
          icon: HeartHandshake,
          question: "What time should I arrive?",
          answer:
            "We recommend arriving 15 to 30 minutes before the ceremony begins.",
        },
        {
          icon: HelpCircle,
          question: "Will lunch and reception follow the ceremony?",
          answer:
            "Yes. Betrothal and Wedding celebrations will be followed by lunch and reception.",
        },
        {
          icon: Sparkles,
          question: "How can I find the venue easily?",
          answer:
            "You can use the map and directions buttons in the venue section of this invitation.",
        },
      ],

      blessingTitle: "A Loving Reminder",
      blessingText:
        "Your presence, prayers, and blessings mean so much to us. Thank you for being part of our joy in Christ.",
    },

    ES: {
      title: "Important Information",
      subtitle:
        "A few helpful notes for our beloved guests as you join us in this blessed celebration.",
      faqs: [],
      blessingTitle: "A Loving Reminder",
      blessingText:
        "Your presence and blessings mean so much to us.",
    },
  }

  const { title, subtitle, blessingTitle, blessingText } = content[language]

  const faqs = useMemo(() => content[language].faqs, [language])

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #f8dfe8 0%, #f4d3df 18%, #f1dce2 34%, #4a2a3a 62%, #2d1824 82%, #f3d8e2 100%)",
      }}
    >

      <div className="container relative z-10 mx-auto px-4">

        {/* Title */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
              <HelpCircle className="h-7 w-7 text-[#5a3347]" />
            </div>
          </div>

          <h2
            className="mb-4 text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-script), cursive" }}
          >
            {title}
          </h2>

          <p className="text-sm md:text-base text-[#604151]">
            {subtitle}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">

              {faqs.map((faq, index) => {

                const Icon = faq.icon

                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-xl border bg-white/90 shadow-sm"
                  >

                    <AccordionTrigger className="px-6 py-5 text-left">

                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f7e6ee]">
                          <Icon className="h-4 w-4 text-[#6b4154]" />
                        </div>

                        <span className="text-[#4b2d3d]">
                          {faq.question}
                        </span>

                      </div>

                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-6">

                      <p className="text-sm text-[#6a5060] leading-7">
                        {faq.answer}
                      </p>

                    </AccordionContent>

                  </AccordionItem>
                )
              })}

            </Accordion>
          </motion.div>

          {/* Blessing Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-[#4f2c3d] text-white p-8 shadow-xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-5">
              <HeartHandshake className="h-6 w-6 text-[#f5d7e4]" />
            </div>

            <h3
              className="mb-4 text-3xl"
              style={{ fontFamily: "var(--font-script), cursive" }}
            >
              {blessingTitle}
            </h3>

            <p className="text-sm leading-8 text-white/85">
              {blessingText}
            </p>

            <div className="mt-8 flex items-center gap-2">

              <div className="flex-1 h-px bg-white/30"></div>

              <Sparkles className="h-4 w-4 text-white/80" />

              <div className="flex-1 h-px bg-white/30"></div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}