"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Setup generic form submission handler or API hook here.
    alert("In a production environment, this will dispatch the details or integrate with an email API.");
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6"
          >
            Start Your <span className="text-zinc-600">Project</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zinc-400 font-light"
          >
            Engineering excellence designed and executed for you. <br className="hidden md:block"/> Connect with our technical team today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-outfit font-bold text-white mb-6">Contact Information</h3>
              <p className="text-zinc-400 font-light mb-8">
                Whether you have an architectural vision ready for execution or need comprehensive consulting, our lead engineers are ready to assist.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Headquarters</h3>
                  <p className="text-zinc-400 text-sm">Leof. Kifisias 124<br />Marousi 151 25, Athens, Greece</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email inquiries</h3>
                  <a href="mailto:info@armakat.gr" className="text-zinc-400 text-sm hover:text-white transition-colors">info@armakat.gr</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <a href="tel:+302101234567" className="text-zinc-400 text-sm hover:text-white transition-colors">+30 210 123 4567</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300 block">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300 block">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-zinc-300 block">Service of Interest</label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-zinc-300 focus:outline-none focus:border-zinc-500 transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="studies">Studies & Technical Design</option>
                    <option value="construction">Construction & Renovation</option>
                    <option value="management">Construction Management</option>
                    <option value="energy">Photovoltaics & Energy</option>
                    <option value="smart-home">Smart Home Automation</option>
                    <option value="bim">BIM Consulting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300 block">Project Details</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full group flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all active:scale-[0.98]"
                >
                  <span>Send Request</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
