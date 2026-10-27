import React from 'react';
import { 
  CheckCircle2, ArrowRight, Calendar, Phone, 
  ShieldCheck, Clock, UserCheck, HelpCircle, ChevronRight 
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from '../utils/navigation';
import { usePageSeo } from '../utils/seo';
import { DOCTOR_INFO } from '../data/siteData';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function TreatmentPage({ treatment, category, onOpenAppointment }) {
  usePageSeo({
    title: treatment ? `${treatment.title} in Lahore | Prof. Dr. Mumraiz Naqshband` : '',
    description: treatment ? `${treatment.lead} Expert orthopaedic surgery and care by Prof. Dr. Mumraiz Naqshband at BNI Lahore.` : '',
    canonicalUrl: treatment ? treatment.slug : ''
  });

  if (!treatment || !category) return null;

  return (
    <div className="bg-white">
      {/* Strict flat URL breadcrumb hierarchy conforming to Section 16 */}
      <Breadcrumb
        items={[
          { label: "Services", url: "/services/" },
          { label: category.shortTitle || category.title, url: category.slug },
          { label: treatment.title, url: treatment.slug },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-deep to-[#0e2c47] text-white py-14 lg:py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-xs font-semibold">
                <span>{category.shortTitle || category.title}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {treatment.title}
              </h1>

              <p className="text-emerald-300 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
                {treatment.lead}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenAppointment && onOpenAppointment(treatment.title)}
                  className="bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition shadow-lg flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for this Procedure</span>
                </button>

                <a
                  href={`tel:${DOCTOR_INFO.phoneTel}`}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {DOCTOR_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-3 text-left">
                <div className="text-xs font-bold text-white/70 uppercase tracking-wider">
                  Surgeon In Charge
                </div>
                <div className="text-base font-bold text-white">
                  Prof. Dr. Mumraiz Naqshband
                </div>
                <div className="text-xs text-white/80 space-y-1">
                  <div>• Professor of Orthopaedic Surgery (KEMU)</div>
                  <div>• MBChB (NZ), FRACS (Aus), FRCS (UK)</div>
                  <div>• BNI - Bashir NeuroSpine Institute, Lahore</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clinical Details Body */}
      <section className="py-16 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                  Clinical Overview & Surgical Approach
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  {treatment.overview}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Conducted according to international surgical protocols approved by the Royal Australasian College of Surgeons (Australia) and Royal College of Surgeons (UK). Every intervention is customized to your anatomical profile, degree of degenerative wear, and physical recovery expectations.
                </p>
              </div>

              {/* Key Benefits */}
              {treatment.benefits && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-brand-deep">
                    Key Clinical Benefits & Advantages
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {treatment.benefits.map((b, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-brand-light/70 border border-brand-border flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-brand-deep leading-snug">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Candidacy / Indications */}
              {treatment.candidates && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-brand-deep">
                    Who Is a Candidate for this Treatment?
                  </h3>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {treatment.candidates}
                    </p>
                    <p className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                      * A formal clinical examination and diagnostic review (X-ray or MRI) by Prof. Dr. Mumraiz Naqshband are required to confirm suitability.
                    </p>
                  </div>
                </div>
              )}

              {/* Post-Op Recovery & Rehabilitation */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-heading text-brand-deep">
                  Recovery Roadmap & Rehabilitation
                </h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    A successful surgical outcome depends on coordinated post-operative care. Our dedicated clinical team at Bashir NeuroSpine Institute provides structured rehabilitation protocols:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0"></span>
                      <span><strong>Early Mobilization:</strong> Under guided supervision, patients are typically mobilized within 24 hours of surgery to stimulate circulation and prevent stiffness.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0"></span>
                      <span><strong>Physical Therapy:</strong> Progressive range-of-motion and muscle strengthening exercises tailored to your recovery milestones.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0"></span>
                      <span><strong>Follow-Up Consultations:</strong> Scheduled radiographic checks to ensure optimal implant stability, tissue healing, and painless walking.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Booking Box */}
              <div className="bg-brand-light/90 rounded-3xl p-6 border border-brand-border shadow-sm space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue">
                  <ShieldCheck className="w-4 h-4 text-brand-teal" />
                  <span>Consultation Desk</span>
                </div>

                <h4 className="font-heading font-bold text-lg text-brand-deep">
                  Consult with Prof. Dr. Mumraiz Naqshband
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Schedule your consultation for {treatment.title} in Lahore.
                </p>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onOpenAppointment && onOpenAppointment(treatment.title)}
                    className="w-full py-3 px-4 rounded-xl bg-brand-teal hover:bg-brand-tealHover text-white font-semibold text-xs transition shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </button>

                  <a
                    href={DOCTOR_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>

                <div className="text-[11px] text-slate-500 pt-2 border-t border-brand-border/60">
                  <strong>Location:</strong> BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore
                </div>
              </div>

              {/* Related Treatments in this Category */}
              <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm space-y-4 text-left">
                <h4 className="font-heading font-bold text-base text-brand-deep">
                  Other {category.shortTitle || category.title} Treatments
                </h4>

                <div className="space-y-2">
                  {category.treatments
                    .filter(t => t.slug !== treatment.slug)
                    .map((other) => (
                      <Link
                        key={other.slug}
                        to={other.slug}
                        className="block p-2.5 rounded-xl hover:bg-brand-light text-slate-700 hover:text-brand-blue text-xs font-medium transition group border border-transparent hover:border-brand-border"
                      >
                        <div className="flex items-center justify-between">
                          <span className="truncate">{other.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-blue shrink-0" />
                        </div>
                      </Link>
                    ))}
                </div>

                <div className="pt-2">
                  <Link
                    to={category.slug}
                    className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Category Master Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
