import React from 'react';
import { MapPin, Phone, Clock, CheckCircle2, Calendar, AlertCircle, ExternalLink } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from '../utils/navigation';
import { usePageSeo } from '../utils/seo';
import { CLINIC_LOCATIONS, DOCTOR_INFO } from '../data/siteData';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function BahriaClinicPage({ onOpenAppointment }) {
  const clinic = CLINIC_LOCATIONS.find(c => c.id === 'bahria') || CLINIC_LOCATIONS[1];

  usePageSeo({
    title: "Bahria International Hospitals Clinic | Prof. Dr. Mumraiz Naqshband",
    description: "Consultant chambers of Prof. Dr. Mumraiz Naqshband at Bahria International Hospitals, Takbeer Block Sector B, Bahria Town, Lahore. Orthopaedic and joint consultation.",
    canonicalUrl: "/bahria-international-hospitals/"
  });

  return (
    <div className="bg-white">
      {/* Strict flat URL breadcrumb conforming to Section 16 */}
      <Breadcrumb
        items={[
          { label: "Locations", url: "/clinic-locations/" },
          { label: "Bahria International Hospitals", url: "/bahria-international-hospitals/" },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-deep to-[#0e2c47] text-white py-14 lg:py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-xs font-semibold">
              <span>Hospital Consultant Clinic</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Bahria International Hospitals
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Takbeer Block Sector B Bahria Town, Lahore, 55150. Additional consultant chamber for patients in Southern Lahore and Bahria Town vicinity.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Notice */}
      <section className="py-4 bg-amber-50 border-b border-amber-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Schedule Notice:</strong> Consultation days and operational hours at Bahria International Hospitals are currently pending administrative verification. Please call our central helpline (<strong>0321 4175761</strong>) before traveling to confirm the exact upcoming clinic schedule.
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-16 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
                  About Bahria International Hospitals Clinic
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  Bahria International Hospital Lahore is a tertiary healthcare center providing advanced multi-specialty care. <strong>Prof. Dr. Mumraiz Naqshband</strong> provides consultant orthopaedic services, second opinions, and joint reconstruction assessments for residents of Bahria Town and surrounding areas.
                </p>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-brand-light/70 border border-brand-border space-y-4">
                <h3 className="font-heading font-bold text-base text-brand-deep">
                  Contact & Operational Information
                </h3>
                
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <strong>Full Address:</strong> {clinic.address}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                    <div>
                      <strong>Appointment Helpline:</strong> <a href={`tel:${DOCTOR_INFO.phoneTel}`} className="text-brand-blue font-bold hover:underline">{clinic.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <strong>Consultation Timing:</strong> <em>Pending operational verification (By prior appointment)</em>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div>
                <h3 className="font-heading font-bold text-lg text-brand-deep mb-4">
                  Hospital Facilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {clinic.facilities.map((fac, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="font-heading font-bold text-lg text-brand-deep mb-3">
                  Location Map
                </h3>
                <div className="h-[340px] rounded-2xl overflow-hidden border border-brand-border bg-slate-100">
                  <iframe
                    title="Bahria Hospital Location Map"
                    src={clinic.mapEmbedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-xl space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  Appointment Verification
                </span>
                <h3 className="text-xl font-bold font-heading text-brand-deep">
                  Book at Bahria Hospital
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Call our central coordinator to register your request and receive confirmed consultation hours.
                </p>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => onOpenAppointment && onOpenAppointment('Bahria International Hospitals')}
                    className="w-full py-3.5 px-4 rounded-xl bg-brand-teal hover:bg-brand-tealHover text-white font-semibold text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire for Bahria Hospital</span>
                  </button>

                  <a
                    href={DOCTOR_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Central Desk</span>
                  </a>

                  <a
                    href={`tel:${DOCTOR_INFO.phoneTel}`}
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-blue" />
                    <span>Call: {DOCTOR_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
