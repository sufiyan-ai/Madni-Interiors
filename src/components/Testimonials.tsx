"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  // Muslim (40%)
  {
    text: "Madni Interiors redefined our home. The attention to detail, the choice of materials, the warmth in every room — truly a masterclass in interior design.",
    image: "https://i.pravatar.cc/150?u=ayesha_khan_01",
    name: "Ayesha Khan",
    role: "Homeowner, Mumbai",
  },
  {
    text: "From the very first consultation, the team understood exactly what we wanted. Our modular kitchen is now the heart of our home. Absolutely stunning.",
    image: "https://i.pravatar.cc/150?u=zubair_ahmed_02",
    name: "Zubair Ahmed",
    role: "Business Owner, Pune",
  },
  {
    text: "The transformation was beyond what we imagined. Every corner feels curated, every material feels premium. Madni Interiors is in a class of their own.",
    image: "https://i.pravatar.cc/150?u=owais_khan_03",
    name: "Owais Khan",
    role: "Homeowner, Navi Mumbai",
  },
  // Hindu (40%)
  {
    text: "I've worked with several interior firms but none match the professionalism and aesthetic sense of Madni Interiors. Our living space is now our favourite place.",
    image: "https://i.pravatar.cc/150?u=priya_sharma_04",
    name: "Priya Sharma",
    role: "IT Professional, Bangalore",
  },
  {
    text: "The whole process was seamless — design, execution, finishing. Not a single detail was overlooked. I highly recommend them to anyone serious about quality.",
    image: "https://i.pravatar.cc/150?u=rajesh_mehta_05",
    name: "Rajesh Mehta",
    role: "Real Estate Developer",
  },
  {
    text: "Our bedroom makeover was delivered exactly on schedule and it's absolutely beautiful. The team is responsive, creative, and genuinely passionate about their craft.",
    image: "https://i.pravatar.cc/150?u=ananya_desai_06",
    name: "Ananya Desai",
    role: "Interior Enthusiast, Hyderabad",
  },
  {
    text: "Madni Interiors turned our bare flat into a warm, elegant home. The concept-to-completion approach gave us total peace of mind throughout.",
    image: "https://i.pravatar.cc/150?u=vikram_iyer_07",
    name: "Vikram Iyer",
    role: "Doctor, Chennai",
  },
  // Christian (10%)
  {
    text: "I was blown away by how well they translated my mood board into reality. The kitchen island is a showstopper every time we have guests. Worth every rupee.",
    image: "https://i.pravatar.cc/150?u=maria_dsousa_08",
    name: "Maria D'Souza",
    role: "Entrepreneur, Goa",
  },
];

const TestimonialCard = ({
  text,
  image,
  name,
  role,
}: (typeof testimonials)[0]) => (
  <div className="p-6 sm:p-7 rounded-2xl border border-gray-100 shadow-md shadow-[#1f3d2b]/5 max-w-xs w-full bg-white group hover:border-amber-200 hover:shadow-amber-100/40 transition-all duration-300">
    <Quote className="w-7 h-7 text-amber-400/60 mb-3 flex-shrink-0" />
    {/* Lora italic for the quote text */}
    <p className="font-lora-italic text-gray-700 text-sm sm:text-[15px] leading-relaxed">
      &ldquo;{text}&rdquo;
    </p>
    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={name}
        width={44}
        height={44}
        className="rounded-full border-2 border-amber-400/30 object-cover w-11 h-11 flex-shrink-0"
      />
      <div>
        {/* EB Garamond for the name */}
        <p className="font-serif font-semibold text-gray-900 text-sm leading-tight">{name}</p>
        <p className="text-gray-400 text-xs mt-0.5">{role}</p>
      </div>
    </div>
  </div>
);

export const TestimonialsColumn = ({
  testimonials: items,
  duration = 25,
  className = "",
}: {
  testimonials: typeof testimonials;
  duration?: number;
  className?: string;
}) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      className="flex flex-col gap-5 pb-5"
    >
      {[0, 1].map((key) => (
        <React.Fragment key={key}>
          {items.map((t, i) => (
            <TestimonialCard key={`${key}-${i}`} {...t} />
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export function Testimonials() {
  const col1 = testimonials.slice(0, 4);
  const col2 = testimonials.slice(4);

  return (
    <section className="py-20 sm:py-28 bg-[#faf8f5]/40 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-14 sm:mb-16">
          {/* STIX Two Text for label */}
          <p className="font-stix text-amber-500 text-sm tracking-[0.25em] uppercase mb-3">
            Client Stories
          </p>
          {/* EB Garamond for main heading */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#122419] mb-4">
            What Our Clients Say
          </h2>
          {/* Lora italic for subtitle */}
          <p className="font-lora-italic text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Trusted by homeowners, developers, and design enthusiasts across India.
          </p>
        </div>

        <div
          className="flex justify-center gap-5 sm:gap-6 max-h-[600px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <TestimonialsColumn testimonials={col1} duration={30} />
          <TestimonialsColumn testimonials={col2} duration={24} className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
