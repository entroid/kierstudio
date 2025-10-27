import { motion } from "motion/react";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "DISCOVERY",
      description: "Entendemos tus objetivos, audiencia y desafíos únicos a través de investigación profunda y análisis estratégico.",
      services: ["Research", "Strategy", "Planning"],
    },
    {
      number: "02",
      title: "DESIGN",
      description: "Creamos soluciones visuales impactantes que comunican tu mensaje y conectan emocionalmente con tu audiencia.",
      services: ["Wireframes", "Mockups", "Prototypes"],
    },
    {
      number: "03",
      title: "DEVELOP",
      description: "Transformamos diseños en experiencias digitales funcionales utilizando las últimas tecnologías y mejores prácticas.",
      services: ["Frontend", "Backend", "Testing"],
    },
    {
      number: "04",
      title: "DELIVER",
      description: "Lanzamos tu proyecto al mundo y proporcionamos soporte continuo para asegurar el éxito a largo plazo.",
      services: ["Launch", "Support", "Optimization"],
    },
  ];

  return (
    <section id="proceso" className="py-32 bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-6 block italic" style={{ fontWeight: 400 }}>
            (How We Work)
          </span>

          <h2 className="font-['Archivo',sans-serif] text-[80px] md:text-[120px] lg:text-[180px] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8" style={{ fontWeight: 900 }}>
            PROCESS
          </h2>

          <p className="font-['Archivo',sans-serif] text-[18px] md:text-[28px] text-[#28292D] dark:text-white/90 max-w-[900px] leading-[1.4]" style={{ fontWeight: 600 }}>
            Our proven methodology ensures exceptional results every time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group border-b border-[#28292D]/10 dark:border-white/10 last:border-b-0"
            >
              <div className="grid lg:grid-cols-12 gap-8 py-16 lg:py-20 items-start">
                {/* Number */}
                <div className="lg:col-span-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="font-['Archivo',sans-serif] text-[80px] md:text-[120px] leading-[0.9] tracking-[-0.02em] text-[#D52169] group-hover:text-[#28292D] dark:group-hover:text-white transition-colors duration-300"
                    style={{ fontWeight: 900 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-['Archivo',sans-serif] text-[42px] md:text-[56px] lg:text-[64px] leading-[0.9] tracking-[-0.02em] text-[#28292D] dark:text-white mb-6"
                    style={{ fontWeight: 900 }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/70 leading-[1.7] max-w-[600px]"
                    style={{ fontWeight: 400 }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Services Tags */}
                <div className="lg:col-span-4 flex flex-wrap gap-3 items-start">
                  {step.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + serviceIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-white dark:bg-[#1a1a1a] border border-[#28292D]/10 dark:border-white/10 px-4 py-2 font-['Archivo',sans-serif] text-[11px] tracking-[0.1em] uppercase text-[#28292D] dark:text-white hover:border-[#D52169] hover:text-[#D52169] transition-all duration-300"
                      style={{ fontWeight: 600 }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D52169] text-white px-12 py-5 font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D]"
            style={{ fontWeight: 700 }}
          >
            Start Your Project →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
