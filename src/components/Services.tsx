import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const services = [
    {
      title: "BRAND STRATEGY",
      subtitle: "Crafting impactful brands and websites that drive growth and success.",
      image: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MTA0MjQyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      services: ["Brand Discovery", "Brand Positioning", "Visual Identity Design", "Brand Guidelines"],
      tag: "Branding Service",
      bgColor: "bg-white dark:bg-[#1a1a1a]",
    },
    {
      title: "WEBSITE DESIGN",
      subtitle: "Custom & responsive websites that engage users and drive conversions.",
      image: "https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9kZXJufGVufDF8fHx8MTc2MTA2NTkyOHww&ixlib=rb-4.1.0&q=80&w=1080",
      services: ["Website Design", "Framer", "Website Support", "Webflow"],
      tag: "Website Services",
      bgColor: "bg-[#28292D] dark:bg-black",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-500"
    >
      {/* Animated background elements */}
      <motion.div
        style={{ opacity }}
        className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#D52169]/5 rounded-full blur-3xl"
      />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          style={{ opacity, scale }}
          className="mb-20"
        >
          <span className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-6 block italic" style={{ fontWeight: 400 }}>
            (What we do)
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-['Archivo',sans-serif] text-[80px] md:text-[120px] lg:text-[180px] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8 overflow-hidden"
            style={{ fontWeight: 900 }}
          >
            {["S", "E", "R", "V", "I", "C", "E", "S"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="font-['Archivo',sans-serif] text-[18px] md:text-[28px] text-[#28292D] dark:text-white/90 max-w-[900px] leading-[1.4]"
            style={{ fontWeight: 600 }}
          >
            Discover our tailored services designed to elevate your brand, enhance user experience.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-0 min-h-[600px] mb-0"
            >
              {/* Image Side */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className={`relative overflow-hidden ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D52169]/30 to-transparent" />
                </div>
              </motion.div>

              {/* Content Side */}
              <div
                className={`${service.bgColor} p-12 lg:p-16 flex flex-col justify-center transition-colors duration-500 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span
                    className={`font-['Archivo',sans-serif] text-[10px] tracking-[0.3em] uppercase mb-8 block italic ${
                      service.bgColor.includes("28292D") || service.bgColor.includes("black")
                        ? "text-white/50"
                        : "text-[#28292D]/50 dark:text-white/50"
                    }`}
                    style={{ fontWeight: 400 }}
                  >
                    ({service.tag})
                  </span>

                  {/* Animated Title */}
                  <h3
                    className={`font-['Archivo',sans-serif] text-[48px] md:text-[64px] lg:text-[72px] leading-[0.9] tracking-[-0.02em] mb-6 overflow-hidden ${
                      service.bgColor.includes("28292D") || service.bgColor.includes("black")
                        ? "text-white"
                        : "text-[#28292D] dark:text-white"
                    }`}
                    style={{ fontWeight: 900 }}
                  >
                    {service.title.split(" ").map((word, wordIndex) => (
                      <div key={wordIndex} className="overflow-hidden">
                        <motion.div
                          initial={{ y: 100 }}
                          whileInView={{ y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + wordIndex * 0.1, duration: 0.6 }}
                        >
                          {word}
                        </motion.div>
                      </div>
                    ))}
                  </h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className={`font-['Archivo',sans-serif] text-[16px] md:text-[18px] leading-[1.7] mb-10 ${
                      service.bgColor.includes("28292D") || service.bgColor.includes("black")
                        ? "text-white/80"
                        : "text-[#28292D]/70 dark:text-white/70"
                    }`}
                    style={{ fontWeight: 400 }}
                  >
                    {service.subtitle}
                  </motion.p>

                  {/* Services List */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {service.services.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + itemIndex * 0.1 }}
                        whileHover={{ x: 10 }}
                        className={`font-['Archivo',sans-serif] text-[13px] tracking-[0.05em] flex items-center gap-2 ${
                          service.bgColor.includes("28292D") || service.bgColor.includes("black")
                            ? "text-white/60"
                            : "text-[#28292D]/60 dark:text-white/60"
                        }`}
                        style={{ fontWeight: 500 }}
                      >
                        <span className="text-[#D52169]">▸</span>
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`font-['Archivo',sans-serif] text-[12px] tracking-[0.1em] uppercase px-8 py-4 border-2 transition-all duration-300 ${
                      service.bgColor.includes("28292D") || service.bgColor.includes("black")
                        ? "border-white text-white hover:bg-white hover:text-[#28292D]"
                        : "border-[#28292D] dark:border-white text-[#28292D] dark:text-white hover:bg-[#28292D] dark:hover:bg-white hover:text-white dark:hover:text-[#28292D]"
                    }`}
                    style={{ fontWeight: 700 }}
                  >
                    Learn More →
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom number indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-right mt-12"
        >
          <span className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/30 dark:text-white/30 italic" style={{ fontWeight: 400 }}>
            (02)
          </span>
        </motion.div>
      </div>
    </section>
  );
}
