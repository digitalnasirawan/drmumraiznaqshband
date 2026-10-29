import React from 'react';
import { MapPin, Phone, Clock, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from '../utils/navigation';
import { usePageSeo } from '../utils/seo';
import { CLINIC_LOCATIONS, DOCTOR_INFO } from '../data/siteData';

export default function ClinicLocationsPage({ onOpenAppointment }) {
  usePageSeo({
    title: "Clinic Locations in Lahore | Prof. Dr. Mumraiz Naqshband",
    description: "Official clinic locations for Prof. Dr. Mumraiz Naqshband in Lahore: BNI - Bashir NeuroSpine Institute (Jail Rd) and Bahria International Hospitals (Bahria Town).",
    canonicalUrl: "/clinic-locations/"
  });

  return (
    <div className="bg-white">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-deep to-[#0e2c47] text-white py-14 lg:py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/10 text-brand-teal inline-block">
              Hospital & Clinic Locations
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Our Consultation Clinics in Lahore
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Prof. Dr. Mumraiz Naqshband consults patients at two premier medical facilities in Lahore, equipped with modern diagnostics, dedicated orthopaedic theatres, and in-house physiotherapy.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Detailed Cards */}
      <section className="py-16 bg-slate-50 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {CLINIC_LOCATIONS.map((clinic, idx) => (
            <div
              key={clinic.id}
              className="bg-white rounded-3xl border border-brand-border shadow-card overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Details Column */}
                <div className="lg:col-span-6 p-7 sm:p-10 space-y-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                        {clinic.type}
                      </span>
                      
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
                      {clinic.name}
                    </h2>

                    <div className="space-y-3.5 text-sm text-slate-600">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                        <span><strong>Address:</strong> {clinic.address}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                        <span><strong>Phone:</strong> <a href={`tel:${DOCTOR_INFO.phoneTel}`} className="text-brand-blue font-semibold hover:underline">{clinic.phone}</a></span>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                        <span><strong>Schedule:</strong> {clinic.timing}</span>
                      </div>
                    </div>

                    {/* Facilities Checklist */}
                    <div className="pt-6 border-t border-slate-100 mt-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Facility Highlights:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {clinic.facilities.map((f, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-3">
                    <Link
                      to={clinic.slug}
                      className="py-3 px-5 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition flex items-center gap-1.5"
                    >
                      <span>Detailed Clinic Page</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => onOpenAppointment && onOpenAppointment(clinic.name)}
                      className="py-3 px-5 rounded-xl bg-brand-teal hover:bg-brand-tealHover text-white font-semibold text-xs transition shadow-md"
                    >
                      Book at this Location
                    </button>

                    <a
                      href={clinic.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl border border-brand-border text-slate-600 hover:text-brand-deep text-xs font-semibold transition flex items-center gap-1"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Map Column */}
                <div className="lg:col-span-6 h-[380px] lg:h-auto min-h-[380px] bg-slate-100 relative">
                  <iframe
                    title={`${clinic.name} Location Map`}
                    src={clinic.mapEmbedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
