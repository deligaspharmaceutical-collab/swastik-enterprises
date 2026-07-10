"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    phone: "",
    product: "wood-adhesives",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />

        <main className="flex-1">
          {/* Hero Banner Section */}
          <section className="relative overflow-hidden bg-brand-dark py-20 text-white md:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.15),transparent_50%)]" />
            <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
              <div className="max-w-3xl">
                <span className="font-display text-xs font-extrabold tracking-wider text-brand-orange uppercase">
                  Get In Touch
                </span>
                <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl text-white">
                  Contact Us
                </h1>
                <p className="mt-6 font-body text-lg text-zinc-300 leading-relaxed">
                  Have questions about our formulations, custom configurations, or product delivery? Speak directly with our sales and technical support teams.
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Form & Details split grid */}
          <section className="py-16 md:py-24 bg-brand-light-gray">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                
                {/* Left Column: Direct Info cards */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <h2 className="font-display text-2xl font-black text-brand-dark sm:text-3xl">
                      Swastik Headquarters
                    </h2>
                    <p className="mt-3 font-body text-sm text-zinc-600">
                      Reach out to us or visit our industrial plant location in Uttar Pradesh.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Address Card */}
                    <div className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <div className="rounded-xl bg-brand-orange/5 p-3 h-fit text-brand-orange shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-brand-dark text-lg mb-1">Our Plant Address</h4>
                        <p className="font-body text-sm text-zinc-600 leading-relaxed">
                          Tronica City, Loni,<br />
                          Ghaziabad – 201102, U.P., India
                        </p>
                      </div>
                    </div>

                    {/* Phone Card */}
                    <div className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <div className="rounded-xl bg-brand-orange/5 p-3 h-fit text-brand-orange shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-brand-dark text-lg mb-1">Phone Number</h4>
                        <a href="tel:+918882024111" className="font-body text-sm text-zinc-600 hover:text-brand-orange transition-colors">
                          +91 8882 024 111
                        </a>
                        <p className="text-[10px] text-zinc-400 mt-1">Mon - Sat: 9 AM - 6 PM</p>
                      </div>
                    </div>

                    {/* Email Card */}
                    <div className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <div className="rounded-xl bg-brand-orange/5 p-3 h-fit text-brand-orange shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-brand-dark text-lg mb-1">Email Inquiries</h4>
                        <a href="mailto:info@swastikenterprises.in" className="font-body text-sm text-zinc-600 hover:text-brand-orange transition-colors break-all">
                          info@swastikenterprises.in
                        </a>
                      </div>
                    </div>

                    {/* Hours Card */}
                    <div className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <div className="rounded-xl bg-brand-orange/5 p-3 h-fit text-brand-orange shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-brand-dark text-lg mb-1">Operating Hours</h4>
                        <p className="font-body text-sm text-zinc-600 leading-relaxed">
                          Monday – Saturday: 9:00 AM – 6:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                      <div className="rounded-full bg-green-50 p-4 text-green-500 animate-scale-in">
                        <CheckCircle2 className="h-16 w-16" />
                      </div>
                      <h3 className="font-display text-2xl font-black text-brand-dark">
                        Message Sent Successfully!
                      </h3>
                      <p className="font-body text-sm text-zinc-600 max-w-sm">
                        Thank you for contacting Swastik Enterprises. Our industrial support team will review your inquiry and get back to you within 24 business hours.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ name: "", email: "", org: "", phone: "", product: "wood-adhesives", message: "" });
                        }}
                        className="font-display text-xs font-bold text-brand-orange underline hover:text-brand-orange-hover"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="font-display text-2xl font-black text-brand-dark mb-2">
                          Send Us a Message
                        </h3>
                        <p className="font-body text-sm text-zinc-500">
                          Complete the form below to request product pricing, samples, or technical specifications.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="font-display text-xs font-bold text-brand-dark uppercase">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="rounded-xl border border-gray-200 bg-zinc-50 px-4 py-3 text-sm text-brand-dark font-sans placeholder-gray-400 focus:border-brand-orange focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="font-display text-xs font-bold text-brand-dark uppercase">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className="rounded-xl border border-gray-200 bg-zinc-50 px-4 py-3 text-sm text-brand-dark font-sans placeholder-gray-400 focus:border-brand-orange focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Organization */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="org" className="font-display text-xs font-bold text-brand-dark uppercase">
                            Company / Organization *
                          </label>
                          <input
                            type="text"
                            id="org"
                            name="org"
                            required
                            value={formData.org}
                            onChange={handleInputChange}
                            placeholder="Enter Company Name"
                            className="rounded-xl border border-gray-200 bg-zinc-50 px-4 py-3 text-sm text-brand-dark font-sans placeholder-gray-400 focus:border-brand-orange focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="phone" className="font-display text-xs font-bold text-brand-dark uppercase">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="rounded-xl border border-gray-200 bg-zinc-50 px-4 py-3 text-sm text-brand-dark font-sans placeholder-gray-400 focus:border-brand-orange focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Product Selection */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="product" className="font-display text-xs font-bold text-brand-dark uppercase">
                          Product Group of Interest
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleInputChange}
                          className="rounded-xl border border-gray-200 bg-zinc-50 px-4 py-3 text-sm text-brand-dark font-sans focus:border-brand-orange focus:bg-white focus:outline-none transition-colors"
                        >
                          <option value="wood-adhesives">Wood Adhesives</option>
                          <option value="lamination-adhesives">Lamination Adhesives</option>
                          <option value="coatings">Coatings</option>
                          <option value="heat-seal-coatings">Heat Seal Coatings</option>
                          <option value="specialty-adhesives">Specialty Adhesives / Custom Formulations</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-display text-xs font-bold text-brand-dark uppercase">
                          Message / Technical Requirements *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please describe your specific bonding or coating application..."
                          className="rounded-xl border border-gray-200 bg-zinc-50 px-4 py-3 text-sm text-brand-dark font-sans placeholder-gray-400 focus:border-brand-orange focus:bg-white focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange py-4 font-display text-sm font-bold text-white transition-all hover:bg-brand-orange-hover hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                      >
                        Send Inquiry Message
                        <Send className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
