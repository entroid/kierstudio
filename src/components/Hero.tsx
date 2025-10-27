import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeContext";

export function Hero() {
  const { accessibility } = useTheme();
  
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">      
      <div className="max-w-[1800px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative bg-[#1a1a1a] dark:bg-black overflow-hidden"
          >
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667201698408-0c06e55b3da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MTA3NzI4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kier Studio Design Mockups"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            
            {/* Diagonal stripes overlay effect */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.8 }}
                  className="absolute h-full w-12 bg-white/10"
                  style={{
                    left: `${i * 5}%`,
                    transform: "skewX(-15deg)",
                  }}
                />
              ))}
            </div>

            {/* Floating mockups text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -8 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white/20 font-['Archivo',sans-serif] text-[120px] uppercase tracking-tight pointer-events-none"
                style={{ fontWeight: 900 }}
              >
                MOCKUP
              </motion.div>
            </div>

            {/* Small logo top left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-8 left-8 text-white font-['Archivo',sans-serif] text-[24px] tracking-wider"
              style={{ fontWeight: 800 }}
            >
              KIER
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center px-8 lg:px-20 bg-white dark:bg-[#0a0a0a]"
          >
            <div className="max-w-[700px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <span className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 italic" style={{ fontWeight: 400 }}>
                  (Based in Buenos Aires)
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <h1 className="font-['Archivo',sans-serif] text-[80px] md:text-[120px] lg:text-[140px] leading-[0.85] tracking-[-0.03em] text-[#28292D] dark:text-white mb-6" style={{ fontWeight: 900 }}>
                  ©KIER
                  <br />
                  STUDIO
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="font-['Archivo',sans-serif] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] text-[#28292D] dark:text-white/90 mb-6" style={{ fontWeight: 600 }}>
                  Crafting impactful brands and websites that drive growth and success.
                </h2>
                <p className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/60 leading-[1.7] max-w-[550px]" style={{ fontWeight: 400 }}>
                  Visión integral para guiar un proceso de transformación entendiendo los objetivos de tu empresa, la tecnología necesaria y el rumbo a seguir.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D52169] text-white px-10 py-5 font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D]" style={{ fontWeight: 700 }}
                >
                  Let's Talk →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-[#28292D] dark:text-white border-2 border-[#28292D] dark:border-white px-10 py-5 hover:bg-[#28292D] dark:hover:bg-white hover:text-white dark:hover:text-[#28292D] font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300" style={{ fontWeight: 700 }}
                >
                  View Work
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
