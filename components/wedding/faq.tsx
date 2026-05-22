"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Sparkles,
  HeartHandshake,
  Shirt,
  MapPin,
  Clock,
  CalendarDays,
} from "lucide-react";
import { useMemo } from "react";

interface FAQProps {
  language: "ES" | "EN";
}

export function FAQ({ language }: FAQProps) {
  const content = {
    EN: {
      title: "Important Information",
      subtitle:
        "A few helpful notes for our beloved guests as you join us in the wedding celebrations of Fathima Zama and Abdul Azeez.",

      faqs: [
        {
          icon: CalendarDays,
          question: "How many functions are part of the celebration?",
          answer:
            "There are five main functions: Game Party on 7 June 2026, Banaras Night on 12 June 2026, Nikkah on 13 June 2026, Reception on 14 June 2026, and Turkish Delight on 16 June 2026.",
        },
        {
          icon: Shirt,
          question: "Is there a dress code for each function?",
          answer:
            "Yes. Game Party: Team Bride in black and red jersey, Team Groom in black and white jersey. Banaras Night: emerald green or black, with the bride in golden shade. Nikkah: pastel colours, with the bride in pastel pink. Reception: dark shades, with the bride in maroon and black. Turkish Delight: shades of blue or off white.",
        },
        {
          icon: Clock,
          question: "What time should guests arrive?",
          answer:
            "We recommend arriving 15 to 30 minutes before the mentioned time for each function, especially for the Nikkah and Reception.",
        },
        {
          icon: MapPin,
          question: "How can I find the venues easily?",
          answer:
            "You can use the Map or Route buttons in the venue section of this invitation. For Banaras Night, the location is the bride house.",
        },
        {
          icon: Sparkles,
          question: "Can guests attend all functions?",
          answer:
            "Yes, guests are warmly welcome to join the celebrations and make every moment more memorable with their presence and blessings.",
        },
      ],

      blessingTitle: "A Loving Reminder",
      blessingText:
        "Your presence, duas, and blessings mean so much to both families. We look forward to celebrating these beautiful moments with you.",
    },

    ES: {
      title: "Important Information",
      subtitle:
        "A few helpful notes for our beloved guests as you join us in the wedding celebrations of Fathima Zama and Abdul Azeez.",

      faqs: [
        {
          icon: CalendarDays,
          question: "How many functions are part of the celebration?",
          answer:
            "There are five main functions: Game Party on 7 June 2026, Banaras Night on 12 June 2026, Nikkah on 13 June 2026, Reception on 14 June 2026, and Turkish Delight on 16 June 2026.",
        },
        {
          icon: Shirt,
          question: "Is there a dress code for each function?",
          answer:
            "Yes. Game Party: Team Bride in black and red jersey, Team Groom in black and white jersey. Banaras Night: emerald green or black, with the bride in golden shade. Nikkah: pastel colours, with the bride in pastel pink. Reception: dark shades, with the bride in maroon and black. Turkish Delight: shades of blue or off white.",
        },
        {
          icon: Clock,
          question: "What time should guests arrive?",
          answer:
            "We recommend arriving 15 to 30 minutes before the mentioned time for each function, especially for the Nikkah and Reception.",
        },
        {
          icon: MapPin,
          question: "How can I find the venues easily?",
          answer:
            "You can use the Map or Route buttons in the venue section of this invitation. For Banaras Night, the location is the bride house.",
        },
        {
          icon: Sparkles,
          question: "Can guests attend all functions?",
          answer:
            "Yes, guests are warmly welcome to join the celebrations and make every moment more memorable with their presence and blessings.",
        },
      ],

      blessingTitle: "A Loving Reminder",
      blessingText:
        "Your presence, duas, and blessings mean so much to both families. We look forward to celebrating these beautiful moments with you.",
    },
  };

  const { title, subtitle, blessingTitle, blessingText } = content[language];

  const faqs = useMemo(() => content[language].faqs, [language]);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #000018 0%, #000040 20%, #05062E 48%, #171845 70%, #D7BA89 94%, #FFF8EF 100%)",
      }}
    >
      {/* Background Layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#000018] via-[#000040]/82 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#FFF8EF] via-[#D7BA89]/42 to-transparent" />

        <div className="absolute left-[7%] top-24 h-80 w-80 rounded-full bg-[#D7BA89]/16 blur-[110px]" />
        <div className="absolute right-[7%] top-[32%] h-96 w-96 rounded-full bg-[#FFF8EF]/8 blur-[130px]" />
        <div className="absolute bottom-20 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#B8925A]/14 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,186,137,0.14),transparent_44%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.07),transparent_58%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Title */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex justify-center">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full border shadow-[0_0_26px_rgba(215,186,137,0.34)]"
              style={{
                borderColor: "rgba(215,186,137,0.45)",
                background:
                  "linear-gradient(135deg, #FFF8EF 0%, #D7BA89 52%, #B8925A 100%)",
              }}
            >
              <HelpCircle className="h-7 w-7 text-[#000040]" />
            </div>
          </div>

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
                "0 0 18px rgba(215,186,137,0.32), 0 8px 30px rgba(0,0,0,0.70)",
            }}
          >
            {title}
          </h2>

          <p
            className="mx-auto max-w-2xl text-sm leading-7 md:text-base"
            style={{
              color: "rgba(255,248,239,0.82)",
              textShadow: "0 4px 16px rgba(0,0,0,0.55)",
            }}
          >
            {subtitle}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;

                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="overflow-hidden rounded-2xl border"
                    style={{
                      borderColor: "rgba(215,186,137,0.34)",
                      background:
                        "linear-gradient(180deg, rgba(255,248,239,0.13), rgba(215,186,137,0.07), rgba(0,0,64,0.32))",
                      WebkitBackdropFilter: "blur(18px) saturate(160%)",
                      backdropFilter: "blur(18px) saturate(160%)",
                      boxShadow:
                        "0 18px 52px rgba(0,0,24,0.32), inset 0 1px 0 rgba(255,248,239,0.15)",
                    }}
                  >
                    <AccordionTrigger className="px-5 py-5 text-left hover:no-underline md:px-6">
                      <div className="flex items-center gap-4 pr-3">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                          style={{
                            borderColor: "rgba(215,186,137,0.42)",
                            background:
                              "linear-gradient(135deg, #FFF8EF 0%, #D7BA89 55%, #B8925A 100%)",
                            boxShadow: "0 10px 24px rgba(0,0,24,0.26)",
                          }}
                        >
                          <Icon className="h-4 w-4 text-[#000040]" />
                        </div>

                        <span
                          className="text-sm font-medium leading-6 md:text-base"
                          style={{
                            color: "#FFF8EF",
                            textShadow: "0 4px 14px rgba(0,0,0,0.48)",
                          }}
                        >
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-5 pb-6 md:px-6">
                      <div
                        className="rounded-[1.2rem] border p-4"
                        style={{
                          borderColor: "rgba(215,186,137,0.22)",
                          background:
                            "linear-gradient(180deg, rgba(0,0,24,0.48), rgba(5,6,46,0.34))",
                        }}
                      >
                        <p
                          className="text-sm leading-7"
                          style={{
                            color: "rgba(255,248,239,0.82)",
                            textShadow: "0 3px 12px rgba(0,0,0,0.42)",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>

          {/* Blessing Card */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border p-8"
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
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border"
                style={{
                  borderColor: "rgba(215,186,137,0.42)",
                  background:
                    "linear-gradient(135deg, #FFF8EF 0%, #D7BA89 52%, #B8925A 100%)",
                  boxShadow: "0 14px 30px rgba(0,0,24,0.28)",
                }}
              >
                <HeartHandshake className="h-6 w-6 text-[#000040]" />
              </div>

              <h3
                className="mb-4 text-3xl md:text-4xl"
                style={{
                  fontFamily: "var(--font-script), 'Great Vibes', cursive",
                  color: "#FFF8EF",
                  textShadow:
                    "0 0 16px rgba(215,186,137,0.28), 0 7px 22px rgba(0,0,0,0.66)",
                }}
              >
                {blessingTitle}
              </h3>

              <p
                className="text-sm leading-8"
                style={{
                  color: "rgba(255,248,239,0.84)",
                  textShadow: "0 4px 14px rgba(0,0,0,0.48)",
                }}
              >
                {blessingText}
              </p>

              <div className="my-8 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D7BA89]/55 to-transparent" />
                <Sparkles className="h-4 w-4 text-[#D7BA89]" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D7BA89]/55 to-transparent" />
              </div>

              <div
                className="rounded-[1.4rem] border p-5"
                style={{
                  borderColor: "rgba(215,186,137,0.24)",
                  background:
                    "linear-gradient(180deg, rgba(0,0,24,0.46), rgba(5,6,46,0.32))",
                }}
              >
                <p
                  className="text-sm italic leading-7"
                  style={{
                    color: "rgba(255,248,239,0.80)",
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  May this celebration be filled with joy, peace, family warmth,
                  and beautiful memories.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}