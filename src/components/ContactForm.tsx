"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, PhoneCall, Mail, MapPin, MessageSquare } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-[#faf8f5] border border-gray-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none text-sm text-gray-800 placeholder:text-gray-400";

const labelClass = "block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5";

export function ContactForm() {
  const [activeTab, setActiveTab] = useState<"message" | "callback">("message");

  return (
    <section className="py-20 sm:py-28 bg-white/40" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="font-stix text-amber-500 text-sm tracking-[0.25em] uppercase mb-3">
            Start a Conversation
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#122419] mb-4">
            Let&apos;s Design Together
          </h2>
          <p className="font-lora-italic text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Every great interior begins with a single conversation. Reach out and let&apos;s talk about your space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-14 items-start">

          {/* ── Left sidebar ── */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f3d2b] mb-3">
                We&apos;d love to hear from you
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Whether you&apos;re planning a full home renovation or just a single room refresh, our team is ready to listen and create.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  Icon: Mail,
                  label: "Email Us",
                  value: "info@madniinteriors.com",
                  href: "mailto:info@madniinteriors.com",
                },
                {
                  Icon: PhoneCall,
                  label: "Call / WhatsApp",
                  value: "+91 91374 11893",
                  href: "https://wa.me/919137411893",
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Premium Design Studio",
                  href: undefined,
                },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1f3d2b]/8 flex items-center justify-center flex-shrink-0 border border-[#1f3d2b]/10">
                    <Icon className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[#1f3d2b] font-medium text-sm hover:text-amber-500 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#1f3d2b] font-medium text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA banner */}
            <div className="rounded-2xl bg-[#122419] p-6 text-white">
              <MessageSquare className="w-6 h-6 text-amber-400 mb-3" />
              <p className="font-serif text-lg font-semibold mb-1">Prefer WhatsApp?</p>
              <p className="text-white/60 text-sm mb-4">
                Chat with us directly for a faster response.
              </p>
              <a
                href="https://wa.me/919137411893"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-amber-500 text-white font-semibold rounded-lg text-sm hover:bg-amber-600 transition-colors"
              >
                Open WhatsApp →
              </a>
            </div>
          </div>

          {/* ── Right form card ── */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg shadow-gray-100 border border-gray-100/80 overflow-hidden">

            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              {(["message", "callback"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    activeTab === tab
                      ? "bg-[#122419] text-amber-400"
                      : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab === "message" ? (
                    <><Send className="w-3.5 h-3.5" /> Send a Message</>
                  ) : (
                    <><PhoneCall className="w-3.5 h-3.5" /> Request Callback</>
                  )}
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <AnimatePresence mode="wait">
                {activeTab === "message" ? (
                  <motion.form
                    key="message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="msg-name" className={labelClass}>Full Name</label>
                        <input type="text" id="msg-name" className={inputClass} placeholder="Ayesha Khan" />
                      </div>
                      <div>
                        <label htmlFor="msg-email" className={labelClass}>Email Address</label>
                        <input type="email" id="msg-email" className={inputClass} placeholder="you@example.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="msg-subject" className={labelClass}>Project Type</label>
                      <select id="msg-subject" className={`${inputClass} cursor-pointer appearance-none`}>
                        <option value="">Select a project type...</option>
                        <option>Modular Kitchen</option>
                        <option>Bedroom Design</option>
                        <option>Living Room</option>
                        <option>Full Home Interior</option>
                        <option>Commercial Space</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="msg-body" className={labelClass}>Your Message</label>
                      <textarea
                        id="msg-body"
                        rows={4}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your vision, budget, or timeline..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#122419] text-amber-400 font-bold rounded-xl hover:bg-[#1f3d2b] transition-colors uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </motion.form>
                ) : (
                  <motion.form
                    key="callback"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cb-name" className={labelClass}>Full Name</label>
                        <input type="text" id="cb-name" className={inputClass} placeholder="Rajesh Mehta" />
                      </div>
                      <div>
                        <label htmlFor="cb-phone" className={labelClass}>Phone / WhatsApp</label>
                        <input type="tel" id="cb-phone" className={inputClass} placeholder="+91 98000 00000" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cb-time" className={labelClass}>Best Time to Call</label>
                      <select id="cb-time" className={`${inputClass} cursor-pointer appearance-none`}>
                        <option>Morning — 9 AM to 12 PM</option>
                        <option>Afternoon — 12 PM to 5 PM</option>
                        <option>Evening — 5 PM to 8 PM</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cb-interest" className={labelClass}>I&apos;m interested in</label>
                      <select id="cb-interest" className={`${inputClass} cursor-pointer appearance-none`}>
                        <option value="">Choose a service...</option>
                        <option>Modular Kitchen</option>
                        <option>Bedroom Design</option>
                        <option>Living Room</option>
                        <option>Full Home Interior</option>
                        <option>Commercial Space</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cb-note" className={labelClass}>Anything else? (optional)</label>
                      <textarea
                        id="cb-note"
                        rows={3}
                        className={`${inputClass} resize-none`}
                        placeholder="Budget range, area size, deadline..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#122419] text-amber-400 font-bold rounded-xl hover:bg-[#1f3d2b] transition-colors uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" /> Request Callback
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
