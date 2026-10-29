import React from 'react';
import { MapPin, Phone, Clock, CheckCircle2, Calendar, ExternalLink } from 'lucide-react';
import { Link } from '../utils/navigation';
import { usePageSeo } from '../utils/seo';
import { CLINIC_LOCATIONS, DOCTOR_INFO } from '../data/siteData';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function BashirClinicPage({ onOpenAppointment }) {
  const clinic = CLINIC_LOCATIONS.find(c => c.id === 'bni') || CLINIC_LOCATIONS[0];

  usePageSeo({
    title: "Bashir NeuroSpine Institute (BNI) Clinic | Prof. Dr. Mumraiz Naqshband",
    description: "Clinic location of Prof. Dr. Mumraiz Naqshband at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore. Orthopaedic and robotic joint replacement clinic.",
    canonicalUrl: "/bashir-neurospine-institute/"
  });

  return (
    <div className="bg-white">
      {/* Flat URL breadcrumb conforming to Section 16 */}
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-deep to-[#0e2c47] text-white py-14 lg:py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-xs font-semibold">
              <span>Consultation & Surgical Center</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Bashir NeuroSpine Institute (BNI)
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              18 Jail Rd, Shadman 1, Lahore, 54000, Pakistan. The primary orthopaedic and robotic joint replacement clinic for Prof. Dr. Mumraiz Naqshband.
            </p>
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
                  About Bashir NeuroSpine Institute (BNI)
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  Bashir NeuroSpine Institute (BNI) serves as the main facility where <strong>Prof. Dr. Mumraiz Naqshband</strong> evaluates outpatient cases, provides second opinions, and performs robotic-assisted joint replacements and arthroscopic surgeries.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The facility is equipped with dedicated laminar airflow operating suites, modern digital imaging, and an in-house orthopaedic physical therapy department to ensure seamless post-operative rehabilitation.
                </p>
              </div>

              {/* Key Location Facts */}
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
                      <strong>Consultation Timing:</strong> Monday to Saturday: By Prior Appointment
                    </div>
                  </div>
                </div>
              </div>

              {/* Facility Checklist */}
              <div>
                <h3 className="font-heading font-bold text-lg text-brand-deep mb-4">
                  On-Site Medical Facilities
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

              {/* Map embed */}
              <div>
                <h3 className="font-heading font-bold text-lg text-brand-deep mb-3">
                  Location Map & Driving Directions
                </h3>
                <div className="h-[340px] rounded-2xl overflow-hidden border border-brand-border bg-slate-100">
                  <iframe
                    title="BNI Location Map"
                    src={clinic.mapEmbedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="mt-2 text-right">
                  <a
                    href={clinic.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-xl space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  Priority Booking
                </span>
                <h3 className="text-xl font-bold font-heading text-brand-deep">
                  Book Consultation at BNI
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To avoid waiting time, all consultations with Prof. Dr. Mumraiz Naqshband are scheduled in advance.
                </p>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => onOpenAppointment && onOpenAppointment('BNI - Bashir NeuroSpine Institute')}
                    className="w-full py-3.5 px-4 rounded-xl bg-brand-teal hover:bg-brand-tealHover text-white font-semibold text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request BNI Appointment</span>
                  </button>

                  <a
                    href={DOCTOR_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Clinic Desk</span>
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
