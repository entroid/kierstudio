import { motion } from "motion/react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-500">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: [null, 100, -100],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute h-[2px] w-32 bg-[#D52169]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-8 block italic" style={{ fontWeight: 400 }}>
              (Let's Connect)
            </span>

            <h2 className="font-['Archivo',sans-serif] text-[64px] md:text-[96px] lg:text-[120px] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8" style={{ fontWeight: 900 }}>
              READY TO
              <br />
              <span className="text-[#D52169]">START?</span>
            </h2>

            <p className="font-['Archivo',sans-serif] text-[18px] md:text-[24px] text-[#28292D]/70 dark:text-white/70 leading-[1.6] mb-12 max-w-[600px]" style={{ fontWeight: 400 }}>
              Transformemos tu visión en una experiencia digital excepcional. Estamos listos para hacer realidad tu próximo proyecto.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              <motion.a
                href="mailto:hello@kierstudio.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#D52169] group-hover:bg-[#28292D] rounded-full flex items-center justify-center transition-colors">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-['Archivo',sans-serif] text-[11px] tracking-[0.2em] uppercase text-[#28292D]/50 dark:text-white/50" style={{ fontWeight: 600 }}>
                    Email Us
                  </p>
                  <p className="font-['Archivo',sans-serif] text-[18px] text-[#28292D] dark:text-white" style={{ fontWeight: 600 }}>
                    hello@kierstudio.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+5491123456789"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#D52169] group-hover:bg-[#28292D] rounded-full flex items-center justify-center transition-colors">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-['Archivo',sans-serif] text-[11px] tracking-[0.2em] uppercase text-[#28292D]/50 dark:text-white/50" style={{ fontWeight: 600 }}>
                    Call Us
                  </p>
                  <p className="font-['Archivo',sans-serif] text-[18px] text-[#28292D] dark:text-white" style={{ fontWeight: 600 }}>
                    +54 9 11 2345 6789
                  </p>
                </div>
              </motion.a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D52169] text-white px-10 py-5 font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] flex items-center justify-center gap-3 group"
                style={{ fontWeight: 700 }}
              >
                Schedule a Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-[#28292D] dark:text-white border-2 border-[#28292D] dark:border-white px-10 py-5 hover:bg-[#28292D] dark:hover:bg-white hover:text-white dark:hover:text-[#28292D] font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300"
                style={{ fontWeight: 700 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#F5F5F5] dark:bg-[#1a1a1a] p-10 lg:p-12 rounded-xl border border-[#28292D]/5 dark:border-white/5"
          >
            <h3 className="font-['Archivo',sans-serif] text-[32px] md:text-[42px] text-[#28292D] dark:text-white mb-8" style={{ fontWeight: 800 }}>
              Send us a message
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="font-['Archivo',sans-serif] text-[11px] tracking-[0.15em] uppercase text-[#28292D]/70 dark:text-white/70 mb-2 block"
                  style={{ fontWeight: 600 }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white dark:bg-[#28292D] border-2 border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] px-5 py-4 font-['Archivo',sans-serif] text-[14px] text-[#28292D] dark:text-white outline-none transition-colors"
                  placeholder="John Doe"
                  style={{ fontWeight: 400 }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-['Archivo',sans-serif] text-[11px] tracking-[0.15em] uppercase text-[#28292D]/70 dark:text-white/70 mb-2 block"
                  style={{ fontWeight: 600 }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white dark:bg-[#28292D] border-2 border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] px-5 py-4 font-['Archivo',sans-serif] text-[14px] text-[#28292D] dark:text-white outline-none transition-colors"
                  placeholder="john@example.com"
                  style={{ fontWeight: 400 }}
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="font-['Archivo',sans-serif] text-[11px] tracking-[0.15em] uppercase text-[#28292D]/70 dark:text-white/70 mb-2 block"
                  style={{ fontWeight: 600 }}
                >
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full bg-white dark:bg-[#28292D] border-2 border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] px-5 py-4 font-['Archivo',sans-serif] text-[14px] text-[#28292D] dark:text-white outline-none transition-colors"
                  style={{ fontWeight: 400 }}
                >
                  <option>Brand Strategy</option>
                  <option>Website Design</option>
                  <option>E-commerce</option>
                  <option>Mobile App</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-['Archivo',sans-serif] text-[11px] tracking-[0.15em] uppercase text-[#28292D]/70 dark:text-white/70 mb-2 block"
                  style={{ fontWeight: 600 }}
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white dark:bg-[#28292D] border-2 border-[#28292D]/10 dark:border-white/10 focus:border-[#D52169] px-5 py-4 font-['Archivo',sans-serif] text-[14px] text-[#28292D] dark:text-white outline-none transition-colors resize-none"
                  placeholder="Share your vision with us..."
                  style={{ fontWeight: 400 }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#D52169] text-white px-10 py-5 font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] flex items-center justify-center gap-3 group"
                style={{ fontWeight: 700 }}
              >
                Send Message
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
