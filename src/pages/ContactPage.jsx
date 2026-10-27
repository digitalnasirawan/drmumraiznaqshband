import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, 
  Calendar, CheckCircle, Send, ExternalLink 
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageSeo } from '../utils/seo';
import { DOCTOR_INFO, CLINIC_LOCATIONS } from '../data/siteData';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function ContactPage({ onOpenAppointment }) {
  usePageSeo({
    title: "Contact & Appointment Bookings | Prof. Dr. Mumraiz Naqshband",
    description: "Contact the clinic of Prof. Dr. Mumraiz Naqshband in Lahore. Call 0321 4175761 or message via WhatsApp to schedule an orthopaedic or robotic knee consultation.",
    canonicalUrl: "/contact/"
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    clinic: 'bni',
    service: 'Robotic Knee Replacement (CORI)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const clinicName = CLINIC_LOCATIONS.find(c => c.id === formData.clinic)?.name || 'BNI - Bashir NeuroSpine Institute';
    const text = `Hello Prof. Dr. Mumraiz Naqshband's Clinic,%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Patient')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Provided')}%0A*Clinic:* ${encodeURIComponent(clinicName)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Message:* ${encodeURIComponent(formData.message || 'Consultation inquiry')}`;
    window.open(`https://wa.me/923214175761?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: "Contact", url: "/contact/" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-deep to-[#0e2c47] text-white py-14 lg:py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/10 text-brand-teal inline-block">
              Clinic Communication Desk
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Contact Prof. Dr. Mumraiz Naqshband
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              We welcome patient appointment requests, surgical second opinions, and general clinical inquiries at our Lahore clinics.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-12 bg-brand-light border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Telephone</div>
                <a href={`tel:${DOCTOR_INFO.phoneTel}`} className="text-lg font-bold text-brand-deep hover:text-brand-blue block mt-1">
                  {DOCTOR_INFO.phone}
                </a>
                <div className="text-xs text-slate-500 mt-1">
                  International: {DOCTOR_INFO.phoneInternational}
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">WhatsApp Helpline</div>
                <a 
                  href={DOCTOR_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-emerald-800 hover:underline block mt-1"
                >
                  {DOCTOR_INFO.phone}
                </a>
                <div className="text-xs text-slate-500 mt-1">
                  Fastest response for appointments & reports
                </div>
              </div>
            </div>

            {/* Primary Address */}
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-deep text-white flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinic Location</div>
                <div className="text-sm font-bold text-brand-deep mt-1">
                  BNI - Bashir NeuroSpine Institute
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  18 Jail Rd, Shadman 1, Lahore, 54000
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Form & Location Map Section */}
      <section className="py-16 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-brand-border shadow-xl">
              <div className="border-b border-brand-border pb-4 mb-6">
                <h2 className="text-2xl font-bold font-heading text-brand-deep">
                  Send a Message / Consultation Request
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your details below and our clinical coordinator will reach out to confirm your booking.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-deep">Message Dispatched</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry has been registered. Our clinic desk will contact you at <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-md"
                  >
                    Open in WhatsApp Direct
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Muhammad Usman"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-sm transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                        Phone Number / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0321 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                        Preferred Location *
                      </label>
                      <select
                        value={formData.clinic}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-sm bg-white transition"
                      >
                        <option value="bni">BNI - Bashir NeuroSpine Institute (Jail Rd)</option>
                        <option value="bahria">Bahria International Hospitals (Bahria Town)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                        Treatment / Specialty
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-sm bg-white transition"
                      >
                        <option value="Robotic Knee Replacement (CORI)">Robotic Knee Replacement (CORI)</option>
                        <option value="Total Knee Replacement">Total Knee Replacement</option>
                        <option value="Total Hip Replacement">Total Hip Replacement</option>
                        <option value="ACL / Sports Ligament Reconstruction">ACL / Sports Ligament Reconstruction</option>
                        <option value="Arthroscopic Joint Surgery">Arthroscopic Joint Surgery</option>
                        <option value="Shoulder Pain Assessment">Shoulder Pain Assessment</option>
                        <option value="Fracture & Trauma Assessment">Fracture & Trauma Assessment</option>
                        <option value="Second Opinion Evaluation">Second Opinion Evaluation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                      Message / Medical Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Brief details about current symptoms, diagnosis or past surgeries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-sm transition"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-brand-teal hover:bg-brand-tealHover text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Inquire via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar / Map Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-50 rounded-3xl p-6 border border-brand-border space-y-4">
                <h3 className="font-heading font-bold text-lg text-brand-deep">
                  BNI Location Map
                </h3>
                <div className="h-[280px] rounded-2xl overflow-hidden border border-brand-border bg-slate-200">
                  <iframe
                    title="BNI Map"
                    src={CLINIC_LOCATIONS[0].mapEmbedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="text-right">
                  <a
                    href={CLINIC_LOCATIONS[0].googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Consultation Policy */}
              <div className="bg-brand-light/70 rounded-2xl p-5 border border-brand-border space-y-2 text-xs text-slate-700">
                <div className="font-bold text-brand-deep text-sm">
                  Consultation Notice:
                </div>
                <p>
                  To provide focused attention to every surgical candidate, consultations are conducted on prior appointment. Please bring your latest radiological investigations (MRI, CT, or digital X-rays) to your visit.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
