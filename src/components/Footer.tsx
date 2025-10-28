import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Mail, label: "Email", href: "mailto:hello@kierstudio.com" },
  ];

  const footerLinks = {
    Services: ["Brand Strategy", "Website Design", "UX/UI Design", "Development", "E-commerce"],
    Company: ["About Us", "Our Process", "Case Studies", "Careers", "Blog"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR Compliance"],
  };

  return (
    <footer className="bg-[#28292D] dark:bg-black text-white pt-32 pb-8 transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 pb-20 border-b border-white/10">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-['Archivo',sans-serif] text-[64px] md:text-[96px] leading-[0.85] tracking-[-0.03em] text-white mb-8"
              style={{ fontWeight: 900 }}
            >
              ©KIER
              <br />
              STUDIO
            </motion.h2>

            <p className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-white/70 leading-[1.7] mb-8 max-w-[500px]" style={{ fontWeight: 400 }}>
              Crafting impactful brands and websites that drive growth and success. Based in Buenos Aires, working globally.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
              >
                <MapPin size={18} />
                <span className="font-['Archivo',sans-serif] text-[14px]" style={{ fontWeight: 400 }}>
                  Buenos Aires, Argentina
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
              >
                <Mail size={18} />
                <span className="font-['Archivo',sans-serif] text-[14px]" style={{ fontWeight: 400 }}>
                  hello@kierstudio.com
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
              >
                <Phone size={18} />
                <span className="font-['Archivo',sans-serif] text-[14px]" style={{ fontWeight: 400 }}>
                  +54 9 11 2345 6789
                </span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 border-2 border-white/20 hover:border-[#D52169] hover:bg-[#D52169] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-['Archivo',sans-serif] text-[13px] tracking-[0.15em] uppercase text-white mb-6" style={{ fontWeight: 700 }}>
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href="#"
                        className="font-['Archivo',sans-serif] text-[14px] text-white/60 hover:text-[#D52169] transition-colors cursor-pointer"
                        style={{ fontWeight: 400 }}
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 border-b border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <span className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-white/50 mb-4 block italic" style={{ fontWeight: 400 }}>
                (Stay Updated)
              </span>
              <h3 className="font-['Archivo',sans-serif] text-[32px] md:text-[48px] text-white leading-[1.1] mb-3" style={{ fontWeight: 800 }}>
                Subscribe to our newsletter
              </h3>
              <p className="font-['Archivo',sans-serif] text-[14px] text-white/60" style={{ fontWeight: 400 }}>
                Get the latest updates on design trends and our work.
              </p>
            </div>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border-2 border-white/20 focus:border-[#D52169] px-6 py-4 font-['Archivo',sans-serif] text-[14px] text-white placeholder:text-white/40 outline-none transition-colors"
                style={{ fontWeight: 400 }}
              />
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D52169] text-white px-8 py-4 font-['Archivo',sans-serif] text-[12px] tracking-[0.1em] uppercase hover:bg-white hover:text-[#28292D] transition-all duration-300 cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                Subscribe →
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Archivo',sans-serif] text-[12px] text-white/40" style={{ fontWeight: 400 }}>
            © {currentYear} Kier Studio. All rights reserved.
          </p>

          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="font-['Archivo',sans-serif] text-[12px] text-white/40 hover:text-[#D52169] transition-colors cursor-pointer"
              style={{ fontWeight: 400 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="font-['Archivo',sans-serif] text-[12px] text-white/40 hover:text-[#D52169] transition-colors"
              style={{ fontWeight: 400 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="font-['Archivo',sans-serif] text-[12px] text-white/40 hover:text-[#D52169] transition-colors"
              style={{ fontWeight: 400 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </div>

        {/* Scroll to top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-32 left-8 w-14 h-14 bg-[#D52169] hover:bg-white hover:text-[#28292D] rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl z-40 cursor-pointer"
          aria-label="Scroll to top"
        >
          <span className="text-white hover:text-[#28292D] text-[24px] transition-colors">↑</span>
        </motion.button>
      </div>
    </footer>
  );
}
