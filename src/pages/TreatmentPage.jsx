import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, Calendar, Phone, 
  ShieldCheck, Clock, UserCheck, HelpCircle, ChevronRight, 
  ChevronDown, MapPin, Sparkles, FileText, ExternalLink
} from 'lucide-react';
import { Link } from '../utils/navigation';
import { usePageSeo } from '../utils/seo';
import { DOCTOR_INFO, CLINIC_LOCATIONS } from '../data/siteData';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function TreatmentPage({ treatment, category, onOpenAppointment }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  usePageSeo({
    title: treatment ? `${treatment.title} in Lahore | Prof. Dr. Mumraiz Naqshband` : '',
    description: treatment ? `${treatment.lead} Specialist orthopaedic care and surgery in Lahore, Pakistan by Prof. Dr. Mumraiz Naqshband at BNI - Bashir NeuroSpine Institute.` : '',
    canonicalUrl: treatment ? treatment.slug : ''
  });

  if (!treatment || !category) return null;

  const bniLocation = CLINIC_LOCATIONS.find(c => c.id === 'bni') || CLINIC_LOCATIONS[0];

  const whatsAppText = encodeURIComponent(
    `Hello Prof. Dr. Mumraiz Naqshband's clinic,\n\n` +
    `I would like to book an appointment for ${treatment.title} at BNI Lahore.\n` +
    `Please share the consultation schedule and available appointment slots.`
  );
  const whatsAppUrl = `https://wa.me/923214175761?text=${whatsAppText}`;

  // Localized Procedure FAQs
  const treatmentFaqs = [
    {
      q: `How is ${treatment.title} evaluated at BNI Lahore?`,
      a: `Evaluation begins with an in-depth clinical consultation with Prof. Dr. Mumraiz Naqshband, reviewing your symptom history, range of motion, and digital diagnostics (weight-bearing X-rays or high-resolution MRI). Non-surgical and surgical options are thoroughly explained.`
    },
    {
      q: `What are the primary indications for ${treatment.title}?`,
      a: treatment.candidates 
        ? `${treatment.candidates} Suitability is confirmed following a detailed physical examination and imaging review at our clinic in Shadman, Lahore.`
        : `Recommended for patients with persistent joint pain, structural damage, functional limitation, or instability that has not responded adequately to conservative care.`
    },
    {
      q: `What is the recovery protocol after ${treatment.title}?`,
      a: `Patients receive a structured post-procedure rehabilitation roadmap. Early mobilization under supervised physical therapy is initiated to restore muscle strength, flexibility, and painless movement while protecting tissue repair.`
    },
    {
      q: `How do I prepare for my consultation in Lahore?`,
      a: `Please bring your previous joint X-rays, MRI scans, laboratory reports, and a summary of current medications to your appointment at Bashir NeuroSpine Institute, 18 Jail Road, Shadman 1, Lahore.`
    }
  ];

  return (
    <div className="bg-white text-left">
      
      {/* =========================================================================
          HERO BANNER — CRO & LOCAL SEO
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-brand-deep via-[#0d3353] to-brand-deep text-white py-14 lg:py-20 text-left overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold backdrop-blur-sm border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>{category.shortTitle || category.title} • Lahore, Pakistan</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.2]">
                {treatment.title} in Lahore
              </h1>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
                {treatment.lead} Consult with <strong>Prof. Dr. Mumraiz Naqshband</strong> at <strong>Bashir NeuroSpine Institute (BNI)</strong>, Shadman 1, Lahore.
              </p>

              {/* Dual Primary Conversion Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Book via WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenAppointment && onOpenAppointment(treatment.title)}
                  className="inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>

                <a
                  href={`tel:${DOCTOR_INFO.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {DOCTOR_INFO.phone}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>MBChB (NZ), FRACS (Aus), FRCS (UK)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Professor at KEMU</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>BNI Shadman, Lahore</span>
                </div>
              </div>
            </div>

            {/* Right Column: Surgeon Trust Profile Card */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-3.5 text-left shadow-lg">
                <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                  <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                    Consulting Surgeon
                  </span>
                  <span className="text-[11px] text-white/60">
                    Lahore, Pakistan
                  </span>
                </div>

                <div className="text-lg font-bold text-white font-heading">
                  Prof. Dr. Mumraiz Naqshband
                </div>

                <div className="text-xs text-white/80 space-y-1.5">
                  <div>• <strong>Professor of Orthopaedic Surgery</strong> at King Edward Medical University (KEMU)</div>
                  <div>• <strong>Fellowships:</strong> FRACS Ortho (Australia), FRCS Trauma & Ortho (UK)</div>
                  <div>• <strong>Location:</strong> BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore</div>
                  <div>• <strong>Experience:</strong> Over 20 years international clinical practice</div>
                </div>

                <div className="pt-2">
                  <a
                    href={bniLocation.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/20 flex items-center justify-center gap-1.5 transition"
                  >
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View BNI Clinic on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          CLINICAL DETAILS & REHABILITATION SECTION
          ========================================================================= */}
      <section className="py-16 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Overview */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-semibold">
                  <span>Procedure Guide</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                  Clinical Overview & Surgical Approach in Lahore
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  {treatment.overview}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Conducted according to international surgical protocols approved by the <strong>Royal Australasian College of Surgeons (Australia)</strong> and <strong>Royal College of Surgeons (UK)</strong>. Every intervention is customized to your anatomical profile, degree of joint wear, and personal functional goals.
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
                    Who Is a Suitable Candidate for this Procedure?
                  </h3>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {treatment.candidates}
                    </p>
                    <div className="text-xs text-slate-500 pt-3 border-t border-slate-200">
                      <strong>Diagnostic Assessment Note:</strong> A formal clinical consultation, range-of-motion examination, and diagnostic imaging review (weight-bearing X-rays or high-resolution MRI) by Prof. Dr. Mumraiz Naqshband are required to confirm suitability.
                    </div>
                  </div>
                </div>
              )}

              {/* Post-Op Recovery & Rehabilitation */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-heading text-brand-deep">
                  Structured Recovery Roadmap & Rehabilitation
                </h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    Optimal long-term joint function depends on structured post-procedure rehabilitation. At Bashir NeuroSpine Institute, our dedicated orthopaedic team guides patients through clear milestones:
                  </p>
                  <ul className="space-y-3 pl-1">
                    <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Early Mobilization:</strong> Under guided supervision, patients begin safe joint movement within 24 hours of surgery to stimulate blood circulation and prevent joint stiffness.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Targeted Physical Therapy:</strong> Progressive range-of-motion and muscle strengthening exercises tailored to your individual anatomical recovery timeline.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Regular Follow-Up Consultations:</strong> Scheduled radiographic and clinical checks at BNI Lahore to ensure optimal implant stability, tissue healing, and painless walking.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Procedure FAQs */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <h3 className="text-xl font-bold font-heading text-brand-deep">
                  Frequently Asked Questions About {treatment.title}
                </h3>
                <div className="space-y-3">
                  {treatmentFaqs.map((faq, fIdx) => {
                    const isOpen = openFaq === fIdx;
                    return (
                      <div
                        key={fIdx}
                        className="rounded-2xl border border-brand-border bg-slate-50 overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => toggleFaq(fIdx)}
                          className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-brand-deep hover:text-brand-blue transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-brand-teal shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Consultation Desk Box */}
              <div className="bg-brand-light/90 rounded-3xl p-6 sm:p-7 border border-brand-border shadow-sm space-y-5 text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue">
                  <ShieldCheck className="w-4 h-4 text-brand-teal" />
                  <span>Consultation Desk</span>
                </div>

                <h4 className="font-heading font-bold text-lg text-brand-deep">
                  Consult with Prof. Dr. Mumraiz Naqshband
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Book an in-person assessment for <strong>{treatment.title}</strong> in Lahore.
                </p>

                <div className="space-y-2.5 pt-1">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenAppointment && onOpenAppointment(treatment.title)}
                    className="w-full py-3.5 px-4 rounded-xl bg-brand-teal hover:bg-brand-tealHover text-white font-semibold text-xs sm:text-sm transition shadow-sm flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Appointment</span>
                  </button>

                  <a
                    href={`tel:${DOCTOR_INFO.phoneTel}`}
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-brand-deep font-semibold text-xs border border-brand-border transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-teal" />
                    <span>Call: {DOCTOR_INFO.phone}</span>
                  </a>
                </div>

                <div className="text-xs text-slate-500 pt-3 border-t border-brand-border/60 space-y-1">
                  <div><strong>Clinic:</strong> Bashir NeuroSpine Institute (BNI)</div>
                  <div><strong>Address:</strong> 18 Jail Rd, Shadman 1, Lahore</div>
                  <div><strong>Hours:</strong> Mon - Sat: By Prior Consultation</div>
                </div>
              </div>

              {/* What to Bring Checklist */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-brand-border space-y-3 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-deep uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-brand-teal" />
                  <span>What to Bring to Consultation</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                    <span>Existing digital X-rays or MRI films/CDs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                    <span>List of previous treatments or medications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                    <span>Summary of symptom onset and limitations</span>
                  </li>
                </ul>
              </div>

              {/* Related Treatments in this Category */}
              <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-sm space-y-4 text-left">
                <h4 className="font-heading font-bold text-base text-brand-deep">
                  Other {category.shortTitle || category.title} Treatments
                </h4>

                <div className="space-y-1.5">
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

                <div className="pt-2 border-t border-slate-100">
                  <Link
                    to={category.slug}
                    className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All {category.shortTitle || category.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CONVERSION BANNER
          ========================================================================= */}
      <section className="py-14 bg-brand-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Schedule Your Consultation for {treatment.title}
          </h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto leading-relaxed">
            Consult directly with Prof. Dr. Mumraiz Naqshband at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenAppointment && onOpenAppointment(treatment.title)}
              className="w-full sm:w-auto bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition shadow-md"
            >
              Book Appointment Now
            </button>
            <Link
              to={category.slug}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-white/20 transition"
            >
              Back to {category.shortTitle || category.title}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
