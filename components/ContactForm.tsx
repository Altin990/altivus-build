"use client";

import { useState, FormEvent } from "react";

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  city?: string;
  message?: string;
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.company.trim()) e.company = "Company name is required.";
    if (!form.city.trim()) e.city = "City / market is required.";
    if (!form.message.trim()) e.message = "Please tell us a bit about your business.";
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate async submission (replace with real endpoint)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const field = (id: keyof typeof form) =>
    `w-full bg-obsidian border ${
      errors[id as keyof FieldErrors] ? "border-red-500/60" : "border-gold/15 focus:border-gold/50"
    } rounded-sm px-4 py-3 font-cormorant text-parchment text-base placeholder:text-parchment/25 outline-none transition-colors duration-300`;

  if (submitted) {
    return (
      <div className="border border-gold/25 rounded-sm p-12 text-center relative min-h-[400px] flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/50" />
        <div className="w-14 h-14 rounded-sm border border-gold/30 flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-cinzel text-2xl text-parchment mb-3">Message Received</h3>
        <p className="font-cormorant text-parchment/55 text-lg italic max-w-sm">
          Thank you, {form.name.split(" ")[0]}. We&apos;ll review your information and reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="font-cinzel text-xs tracking-[0.15em] text-gold/60 uppercase block mb-2">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={field("name")}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="font-cormorant text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="font-cinzel text-xs tracking-[0.15em] text-gold/60 uppercase block mb-2">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="john@roofingco.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={field("email")}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="font-cormorant text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="font-cinzel text-xs tracking-[0.15em] text-gold/60 uppercase block mb-2">
            Company Name <span className="text-gold">*</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Apex Roofing LLC"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={field("company")}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && (
            <p id="company-error" className="font-cormorant text-red-400 text-sm mt-1">{errors.company}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="font-cinzel text-xs tracking-[0.15em] text-gold/60 uppercase block mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={field("phone")}
          />
        </div>
      </div>

      {/* City */}
      <div>
        <label htmlFor="city" className="font-cinzel text-xs tracking-[0.15em] text-gold/60 uppercase block mb-2">
          Primary Market / City <span className="text-gold">*</span>
        </label>
        <input
          id="city"
          type="text"
          placeholder="Dallas, TX"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          className={field("city")}
          aria-describedby={errors.city ? "city-error" : undefined}
        />
        {errors.city && (
          <p id="city-error" className="font-cormorant text-red-400 text-sm mt-1">{errors.city}</p>
        )}
      </div>

      {/* Service interest */}
      <div>
        <label htmlFor="service" className="font-cinzel text-xs tracking-[0.15em] text-gold/60 uppercase block mb-2">
          Service Interest
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full bg-obsidian border border-gold/15 focus:border-gold/50 rounded-sm px-4 py-3 font-cormorant text-parchment text-base outline-none transition-colors duration-300 cursor-pointer"
        >
          <option value="">Select a service...</option>
          <option value="website">Website Design & Development</option>
          <option value="seo">Local SEO</option>
          <option value="ads">Google & Meta Ads</option>
          <option value="full">Full Growth Package</option>
          <option value="audit">Just the Free Audit</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="font-cinzel text-xs tracking-[0.15em] text-gold/60 uppercase block mb-2">
          Tell Us About Your Business <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="How many crews do you run? Which markets do you serve? What's your biggest challenge right now?"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${field("message")} resize-none`}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="font-cormorant text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full py-4 text-sm rounded-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send My Inquiry"
        )}
      </button>

      <p className="font-cormorant text-parchment/30 text-sm text-center italic">
        No spam. No pressure. We&apos;ll reach out within 24 hours.
      </p>
    </form>
  );
}
