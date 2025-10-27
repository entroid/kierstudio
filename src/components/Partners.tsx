import { motion } from "motion/react";

export function Partners() {
  const partners = [
    { name: "acme", tagline: "Design System" },
    { name: "kanba", tagline: "SaaS Platform" },
    { name: "goldline", tagline: "E-commerce" },
    { name: "ASGARDIA", tagline: "Real Estate" },
    { name: "UTOSIA", tagline: "Tech Startup" },
    { name: "circle", tagline: "Financial Services" },
  ];

  return (
    <section className="py-32 bg-[#F5F5F5] dark:bg-[#0f0f0f] transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-8 block italic" style={{ fontWeight: 400 }}>
            (About Us)
          </span>
          
          <h2 className="font-['Archivo',sans-serif] text-[64px] md:text-[96px] lg:text-[120px] leading-[0.9] tracking-[-0.03em] text-[#28292D] dark:text-white mb-12" style={{ fontWeight: 900 }}>
            CREATIVE
            <br />
            BRANDS.
            <br />
            POWERFUL
            <br />
            WEBSITES.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-[1100px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]" style={{ fontWeight: 400 }}>
                En nuestro estudio basado en Buenos Aires, nos dedicamos a crear espacios digitales que inspiran y perduran. Especializados en diseño comercial, multipropósito y estratégico, combinamos creatividad con funcionalidad para dar vida a tu visión.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7]" style={{ fontWeight: 400 }}>
                Nuestro equipo de arquitectos digitales y diseñadores apasionados trabaja en estrecha colaboración con los clientes, fomentando un proceso colaborativo que prioriza tus necesidades únicas. Creemos que los mejores diseños provienen de comprender los matices de cada proyecto.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-20 border-t border-[#28292D]/10 dark:border-white/10"
        >
          <span className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-12 block italic" style={{ fontWeight: 400 }}>
            (Our Partner)
          </span>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-white dark:bg-[#1a1a1a] p-8 md:p-10 rounded-xl border border-[#28292D]/5 dark:border-white/5 hover:border-[#D52169]/30 dark:hover:border-[#D52169]/50 transition-all duration-500 h-[160px] flex flex-col justify-center items-center relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.05 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-[#D52169]"
                  />

                  {/* Logo/Name */}
                  <motion.div
                    className="relative z-10 text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="font-['Archivo',sans-serif] text-[28px] md:text-[36px] text-[#28292D] dark:text-white group-hover:text-[#D52169] transition-colors duration-300 mb-2" style={{ fontWeight: 800 }}>
                      {partner.name === "ASGARDIA" ? (
                        <div className="flex items-center gap-1">
                          <span className="text-[20px]">|||</span>
                          <span>{partner.name}</span>
                        </div>
                      ) : partner.name === "UTOSIA" ? (
                        <div className="flex items-center gap-1">
                          <span className="text-[24px]">⬤</span>
                          <span>{partner.name}</span>
                        </div>
                      ) : partner.name === "circle" ? (
                        <div className="flex items-center gap-1">
                          <span className="text-[24px]">⚪</span>
                          <span>{partner.name}</span>
                        </div>
                      ) : partner.name === "kanba" ? (
                        <div className="flex items-center gap-1">
                          <span className="text-[20px]">⚡</span>
                          <span>{partner.name}</span>
                        </div>
                      ) : partner.name === "goldline" ? (
                        <div className="flex items-center gap-1">
                          <span className="text-[20px]">▮▮</span>
                          <span>{partner.name}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <span className="text-[20px]">⚛</span>
                          <span>{partner.name}</span>
                        </div>
                      )}
                    </div>
                    <p className="font-['Archivo',sans-serif] text-[10px] tracking-[0.15em] uppercase text-[#28292D]/40 dark:text-white/30 group-hover:text-[#D52169]/60 transition-colors duration-300" style={{ fontWeight: 500 }}>
                      {partner.tagline}
                    </p>
                  </motion.div>

                  {/* Hover line decoration */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "80%" }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#D52169]"
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infinite scroll animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 overflow-hidden"
          >
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 whitespace-nowrap"
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <span
                  key={index}
                  className="font-['Archivo',sans-serif] text-[18px] text-[#28292D]/20 dark:text-white/10 tracking-[0.2em] uppercase"
                  style={{ fontWeight: 700 }}
                >
                  {partner.name}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
