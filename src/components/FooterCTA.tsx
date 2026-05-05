"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function FooterCTA() {
  return (
    <footer className="bg-[#122419]/90 text-white pt-20 pb-10 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-amber-500 mb-4">Let's Design Your Dream Space</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Ready to transform your home? Reach out to us for a free consultation and let's start bringing your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="https://wa.me/919137411893"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-sm text-center hover:bg-amber-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Now
              </motion.a>
              <motion.a 
                href="tel:+919137411893"
                className="px-6 py-3 bg-transparent border border-amber-500 text-amber-500 font-semibold rounded-sm text-center hover:bg-amber-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-amber-500 mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <a href="https://wa.me/919137411893" className="hover:text-amber-500 transition-colors">
                  +91 9137411893
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <a href="mailto:info@madniinteriors.com" className="hover:text-amber-500 transition-colors">
                  info@madniinteriors.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Premium Design Studio<br/>
                  Serving Discerning Clients
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-amber-500 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-amber-500 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-amber-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact-form" className="text-gray-300 hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-amber-500/30 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            <span className="font-serif font-bold text-amber-500 text-base mr-2">Madni Interiors</span> 
            Crafting Spaces That Inspire.
          </p>
          <div className="flex flex-col items-end">
            <p>&copy; {new Date().getFullYear()} Madni Interior Designer. All rights reserved.</p>
            <p className="mt-1 text-amber-500/80 font-medium">Demo Presented by Sufiyan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
