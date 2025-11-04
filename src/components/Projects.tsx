import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  services: string[];
  image: string;
  images: string[];
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "ASGARDIA",
      category: "Real Estate Platform",
      year: "2024",
      description:
        "Un proyecto de transformación digital completo que llevó a Asgardia a convertirse en la plataforma de bienes raíces líder en la región. Creamos una experiencia inmersiva que combina diseño elegante con funcionalidad intuitiva.",
      services: ["Brand Strategy", "Website Design", "UX/UI Design", "Development"],
      image:
        "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMDc4MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMDc4MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MDk4NjE2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    {
      id: 2,
      title: "GOLDLINE",
      category: "E-commerce",
      year: "2024",
      description:
        "Diseño de comercio electrónico de lujo que redefinió la experiencia de compra online. Implementamos un sistema de diseño cohesivo que refleja la exclusividad de la marca.",
      services: ["Visual Identity", "E-commerce Design", "Photography Direction"],
      image:
        "https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2MDk4MjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2MDk4MjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MDk4NjE2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    {
      id: 3,
      title: "KANBA",
      category: "SaaS Platform",
      year: "2023",
      description:
        "Plataforma SaaS completa para gestión de proyectos. Diseño centrado en el usuario que simplifica flujos de trabajo complejos manteniendo una estética moderna y profesional.",
      services: ["UX Research", "UI Design", "Prototyping", "Development"],
      image:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYwOTg0NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYwOTg0NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMDc4MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    {
      id: 4,
      title: "UTOSIA",
      category: "Tech Startup",
      year: "2023",
      description:
        "Identidad visual completa para una startup tecnológica innovadora. Desde el concepto hasta la ejecución, creamos una marca que destaca en el competitivo mercado tech.",
      services: ["Brand Identity", "Website Design", "Marketing Assets"],
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MDk4NjE2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MDk4NjE2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2MDk4MjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length,
      );
    }
  };

  return (
    <section
      id="proyectos"
      className="py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span
            className="font-['Archivo',sans-serif] text-[11px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-6 block italic"
            style={{ fontWeight: 400 }}
          >
            (Our Work)
          </span>

          <h2
            className="font-['Archivo',sans-serif] text-[80px] md:text-[120px] lg:text-[180px] leading-[0.85] tracking-[-0.04em] text-[#28292D] dark:text-white mb-8"
            style={{ fontWeight: 900 }}
          >
            PROJECTS
          </h2>

          <p
            className="font-['Archivo',sans-serif] text-[18px] md:text-[28px] text-[#28292D] dark:text-white/90 max-w-[900px] leading-[1.4]"
            style={{ fontWeight: 600 }}
          >
            Explore our portfolio of transformative digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => openModal(project)}
              className="group cursor-pointer relative overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a] min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <motion.div initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
                    <span
                      className="font-['Archivo',sans-serif] text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2 block italic"
                      style={{ fontWeight: 400 }}
                    >
                      ({project.category} - {project.year})
                    </span>
                    <h3
                      className="font-['Archivo',sans-serif] text-[42px] md:text-[52px] leading-[0.9] tracking-[-0.02em] text-white mb-2"
                      style={{ fontWeight: 900 }}
                    >
                      {project.title}
                    </h3>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#D52169] text-white px-6 py-3 font-['Archivo',sans-serif] text-[11px] tracking-[0.1em] uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
                    style={{ fontWeight: 700 }}
                  >
                    View Project →
                  </motion.button>
                </div>

                {/* Number */}
                <div className="absolute top-8 right-8">
                  <span
                    className="font-['Archivo',sans-serif] text-[64px] text-white/10 group-hover:text-white/20 transition-colors"
                    style={{ fontWeight: 900 }}
                  >
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-[#28292D] dark:text-white border-2 border-[#28292D] dark:border-white px-12 py-5 hover:bg-[#28292D] dark:hover:bg-white hover:text-white dark:hover:text-[#28292D] font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer"
            style={{ fontWeight: 700 }}
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>

      {/* Modal Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#1a1a1a] max-w-[1400px] w-full max-h-[90vh] overflow-y-auto rounded-xl relative"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-[#D52169] hover:bg-[#28292D] rounded-full flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="text-white" size={24} />
              </motion.button>

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Gallery Side */}
                <div className="bg-[#0a0a0a] relative min-h-[400px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[600px]">
                  <ImageWithFallback
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#D52169] backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Previous image"
                      >
                        <span className="text-white text-[24px]">←</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#D52169] backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Next image"
                      >
                        <span className="text-white text-[24px]">→</span>
                      </motion.button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span
                      className="text-white font-['Archivo',sans-serif] text-[12px] tracking-[0.1em]"
                      style={{ fontWeight: 600 }}
                    >
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <span
                    className="font-['Archivo',sans-serif] text-[10px] tracking-[0.3em] uppercase text-[#28292D]/50 dark:text-white/50 mb-6 block italic"
                    style={{ fontWeight: 400 }}
                  >
                    ({selectedProject.category} - {selectedProject.year})
                  </span>

                  <h3
                    className="font-['Archivo',sans-serif] text-[56px] md:text-[72px] leading-[0.9] tracking-[-0.02em] text-[#28292D] dark:text-white mb-6"
                    style={{ fontWeight: 900 }}
                  >
                    {selectedProject.title}
                  </h3>

                  <p
                    className="font-['Archivo',sans-serif] text-[16px] md:text-[18px] text-[#28292D]/70 dark:text-white/70 leading-[1.7] mb-10"
                    style={{ fontWeight: 400 }}
                  >
                    {selectedProject.description}
                  </p>

                  {/* Services */}
                  <div className="mb-10">
                    <h4
                      className="font-['Archivo',sans-serif] text-[12px] tracking-[0.2em] uppercase text-[#28292D]/50 dark:text-white/50 mb-4"
                      style={{ fontWeight: 600 }}
                    >
                      Services
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-[#F5F5F5] dark:bg-[#28292D] text-[#28292D] dark:text-white px-4 py-2 font-['Archivo',sans-serif] text-[11px] tracking-[0.05em] uppercase"
                          style={{ fontWeight: 600 }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#D52169] text-white px-10 py-5 font-['Archivo',sans-serif] text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#28292D] w-fit cursor-pointer"
                    style={{ fontWeight: 700 }}
                  >
                    Visit Website →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
