"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import Image from "next/image";

type Category = "All" | "Kitchen" | "Bedroom" | "Living Room";

const portfolioItems = [
  {
    id: 1,
    title: "Modern Modular Kitchen",
    category: "Kitchen" as Category,
    image: "/portfolio-1.jpg",
    description:
      "A sleek, modern kitchen featuring high-gloss cabinetry, integrated appliances, and warm ambient lighting.",
    features: ["Custom Cabinetry", "Integrated Appliances", "Ambient Lighting"],
  },
  {
    id: 2,
    title: "Luxurious Master Bedroom",
    category: "Bedroom" as Category,
    image: "/portfolio-2.jpg",
    description:
      "A serene master bedroom with plush upholstered headboard, layered textures, and soft gold accents.",
    features: ["Upholstered Headboard", "Walk-in Wardrobe", "Mood Lighting"],
  },
  {
    id: 3,
    title: "Contemporary Living Room",
    category: "Living Room" as Category,
    image: "/portfolio-3.jpg",
    description:
      "An open-plan living space with high ceilings, a statement sofa set, and curated art installations.",
    features: ["Statement Sofa", "Art Curation", "Open-plan Layout"],
  },
  {
    id: 4,
    title: "Cinematic Home Interior",
    category: "Living Room" as Category,
    image: "/hero-bg.jpg",
    description:
      "A dramatic residential space with cinematic lighting, floor-to-ceiling windows, and premium finishes.",
    features: ["Floor-to-Ceiling Glass", "Premium Finishes", "Statement Lighting"],
  },
  {
    id: 5,
    title: "Classic Vintage Study",
    category: "Bedroom" as Category,
    image: "/hero-card.jpg",
    description:
      "A richly decorated study with dark wood tones, leather accents, and bespoke shelving.",
    features: ["Bespoke Shelving", "Leather Accents", "Dark Wood Tones"],
  },
  {
    id: 6,
    title: "Premium Interior Suite",
    category: "Kitchen" as Category,
    image: "/portfolio-4.jpg",
    description:
      "A full-home interior project delivered with meticulous attention to detail and client satisfaction.",
    features: ["End-to-End Design", "Custom Furniture", "Premium Materials"],
  },
];

const categories: Category[] = ["All", "Kitchen", "Bedroom", "Living Room"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === activeCategory);

  return (
    <section className="py-20 sm:py-24 bg-gray-50/40" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="font-stix text-amber-500 text-sm tracking-[0.25em] uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#122419] mb-4">
            From Concept to Creation,{" "}
            <em className="not-italic text-amber-500">We Handle Everything</em>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-8" />

          {/* Category filters — scrollable on mobile */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-800 border border-gray-200 hover:border-amber-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                      Tap to view →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-white w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 h-56 sm:h-72 md:h-auto relative flex-shrink-0">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 sm:p-8 md:p-10 relative flex flex-col justify-center">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-amber-500 font-semibold uppercase tracking-wider text-xs mb-2 block">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-3">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  {selectedItem.description}
                </p>
                <div className="space-y-2">
                  {selectedItem.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
