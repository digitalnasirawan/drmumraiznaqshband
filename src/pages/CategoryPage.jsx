import React, { useState } from 'react';
import { 
  ChevronRight, CheckCircle2, ArrowRight, Calendar, Sparkles, 
  Phone, MapPin, Clock, ShieldCheck, Award, HelpCircle, ChevronDown, ExternalLink
} from 'lucide-react';
import { Link } from '../utils/navigation';
import { usePageSeo } from '../utils/seo';
import { DOCTOR_INFO, CLINIC_LOCATIONS } from '../data/siteData';
import { WhatsAppIcon } from '../components/SocialIcons';

// Default FAQs tailored per category for Local SEO and patient reassurance
const DEFAULT_CATEGORY_FAQS = {
  'hip-replacement': [
    {
      q: "Where does Prof. Dr. Mumraiz Naqshband perform hip replacement surgery in Lahore?",
      a: "Consultations and surgical procedures are conducted at Bashir NeuroSpine Institute (BNI), located at 18 Jail Road, Shadman 1, Lahore. BNI features modern orthopaedic operating suites, advanced imaging, and specialized post-operative care."
    },
    {
      q: "When is hip replacement surgery recommended?",
      a: "Hip replacement is typically considered when severe hip arthritis, avascular necrosis (AVN), or traumatic joint damage causes persistent groin, thigh, or hip pain that limits walking, sleep, and daily activities, and when conservative treatments no longer provide relief."
    },
    {
      q: "What is the expected recovery timeline after hip replacement?",
      a: "Under structured rehabilitation, patients are encouraged to mobilize with support within 24 hours of surgery. Most patients return to light daily activities within 4 to 6 weeks, with continuing strength and mobility gains over subsequent months."
    },
    {
      q: "How can I book an assessment for hip pain or replacement?",
      a: "You can book directly via WhatsApp at 0321 4175761 or use our online appointment form. Please bring your existing pelvic and hip X-rays or MRI scans to your consultation."
    }
  ],
  'sports-injuries': [
    {
      q: "How are ACL and meniscus tears assessed in Lahore?",
      a: "Prof. Dr. Mumraiz Naqshband performs a thorough physical joint examination, pivot-shift testing, and comprehensive review of knee MRI scans at BNI Lahore to determine the exact extent of ligament, cartilage, or meniscus damage."
    },
    {
      q: "Do all sports injuries require surgery?",
      a: "No. Many partial tears, mild sprains, and early meniscus conditions respond well to structured physical therapy, activity modification, and targeted rehabilitation. Surgery is recommended when joint instability, locking, or complete tears affect function."
    },
    {
      q: "What is arthroscopic knee surgery for sports injuries?",
      a: "Arthroscopy is a minimally invasive technique utilizing a miniature camera (arthroscope) and specialized micro-instruments through tiny incisions. This results in minimal tissue trauma, reduced post-operative pain, and faster return to activity."
    },
    {
      q: "How do I schedule an urgent sports injury evaluation?",
      a: "Contact our clinic desk via WhatsApp at 0321 4175761. We arrange prompt evaluations for acute knee swelling, locking, and sports trauma at BNI Shadman, Lahore."
    }
  ],
  'arthroscopy': [
    {
      q: "What are the primary benefits of minimally invasive arthroscopic surgery?",
      a: "Arthroscopic procedures involve minimal incision size (keyhole surgery), reduced blood loss, preservation of healthy surrounding tissue, lower risk of wound complications, and significantly quicker post-operative recovery compared to open surgery."
    },
    {
      q: "Which joints can be treated with arthroscopy at BNI Lahore?",
      a: "Prof. Dr. Mumraiz Naqshband specializes in knee arthroscopy (meniscus repair, ACL reconstruction, loose body removal) and shoulder arthroscopy (rotator cuff repair, labral reconstruction, impingement decompression)."
    },
    {
      q: "Is arthroscopic surgery done as a day case?",
      a: "Many arthroscopic procedures are performed as day-care or short-stay procedures, allowing patients to return home the same day or following morning with structured rehabilitation instructions."
    },
    {
      q: "What diagnostics are required prior to arthroscopy?",
      a: "A high-resolution MRI scan and clinical examination by an orthopaedic surgeon are essential to confirm the diagnosis and plan precise surgical entry points."
    }
  ],
  'shoulder-disorders': [
    {
      q: "What causes chronic shoulder pain and stiffness?",
      a: "Common causes include rotator cuff tears, subacromial impingement, frozen shoulder (adhesive capsulitis), shoulder instability/dislocations, and osteoarthritis. Accurate clinical testing and MRI imaging are essential to pinpoint the root cause."
    },
    {
      q: "Can rotator cuff tears heal without surgery?",
      a: "Partial tears and early tendinopathy frequently improve with supervised physical therapy, anti-inflammatory care, and targeted injections. Full-thickness tears with significant weakness or ongoing pain may benefit from arthroscopic surgical repair."
    },
    {
      q: "Where can I consult Dr. Mumraiz Naqshband for shoulder pain in Lahore?",
      a: "Consultations are held at Bashir NeuroSpine Institute (BNI), 18 Jail Road, Shadman 1, Lahore. Appointments can be scheduled by calling or messaging 0321 4175761."
    }
  ],
  'fractures-trauma': [
    {
      q: "What types of orthopaedic trauma does Prof. Dr. Mumraiz Naqshband treat?",
      a: "His practice encompasses complex bone fractures, peri-articular fractures (injuries near or into joints), non-unions, malunions, and multi-trauma reconstruction following road traffic accidents or sports injuries."
    },
    {
      q: "What is surgical fixation of a fracture?",
      a: "Surgical fixation (ORIF) utilizes biocompatible titanium plates, screws, or intramedullary rods to accurately realign fractured bone fragments and hold them rigidly in place, supporting early mobilization and optimal bone healing."
    },
    {
      q: "How soon after an injury should I seek specialist orthopaedic care?",
      a: "Suspected fractures and severe joint injuries should be assessed promptly to prevent displacement, compartment issues, or nerve and vascular compromise."
    }
  ],
  'arthritis-joint-pain': [
    {
      q: "What is the difference between non-surgical care and joint replacement for arthritis?",
      a: "Non-surgical management includes weight management, targeted strengthening, physical therapy, joint injections, and lifestyle modification to reduce symptoms. Joint replacement is reserved for advanced joint destruction when non-surgical measures no longer control pain."
    },
    {
      q: "How does Prof. Dr. Mumraiz Naqshband evaluate knee and hip arthritis?",
      a: "Evaluation includes a comprehensive physical assessment, weight-bearing digital X-rays to assess joint space loss and bone spurs, review of mobility and pain levels, and discussion of tailored treatment options."
    },
    {
      q: "Are consultations available for second opinions on joint replacement?",
      a: "Yes. Many patients visit BNI Lahore to seek an honest, evidence-based second opinion regarding whether surgery is truly required or if conservative treatment remains a viable option."
    }
  ]
};

export default function CategoryPage({ category, onOpenAppointment }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  usePageSeo({
    title: category ? `${category.title} in Lahore | Prof. Dr. Mumraiz Naqshband` : '',
    description: category ? `${category.summary} Specialist orthopaedic consultation and advanced treatment at BNI - Bashir NeuroSpine Institute, Lahore by Prof. Dr. Mumraiz Naqshband (FRACS, FRCS).` : '',
    canonicalUrl: category ? category.slug : ''
  });

  if (!category) return null;

  const bniLocation = CLINIC_LOCATIONS.find(c => c.id === 'bni') || CLINIC_LOCATIONS[0];
  const faqs = DEFAULT_CATEGORY_FAQS[category.id] || DEFAULT_CATEGORY_FAQS['hip-replacement'];

  const whatsAppText = encodeURIComponent(
    `Hello Prof. Dr. Mumraiz Naqshband's clinic,\n\n` +
    `I would like to book an appointment for ${category.title} at BNI Lahore.\n` +
    `Please share the consultation schedule and available appointment slots.`
  );
  const whatsAppUrl = `https://wa.me/923214175761?text=${whatsAppText}`;

  return (
    <div className="bg-white text-left">
      
      {/* =========================================================================
          HERO BANNER — HIGH-CONVERSION & LOCAL SEO
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-brand-deep via-[#0d3353] to-brand-deep text-white py-14 lg:py-20 text-left overflow-hidden">
        <div className="absolute inset-0 bg-radial-pattern opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            
            {/* Category Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
              <span>{category.badge || "Specialist Orthopaedic Care in Lahore"}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-heading text-white tracking-tight leading-[1.2]">
              {category.title} in Lahore
            </h1>

            {/* Lead Description */}
            <p className="text-white/85 text-base sm:text-lg leading-[1.7] max-w-3xl">
              {category.summary} Consult with <strong>Prof. Dr. Mumraiz Naqshband</strong>, Consultant Orthopaedic Surgeon at <strong>Bashir NeuroSpine Institute (BNI)</strong>, 18 Jail Road, Shadman 1, Lahore.
            </p>

            {/* Dual High-Conversion CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Book Consultation via WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenAppointment && onOpenAppointment(category.title)}
                className="inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-md transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Appointment</span>
              </button>

              <a
                href={`tel:${DOCTOR_INFO.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {DOCTOR_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/15 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>MBChB (NZ), FRACS (Aus)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>FRCS Trauma & Ortho (UK)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Professor at KEMU</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>BNI Shadman, Lahore</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          CLINICAL HIGHLIGHT & LOCAL AUTHORITY SECTION
          ========================================================================= */}
      <section className="py-12 bg-brand-light/40 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
                Evidence-Based Orthopaedic Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                Why Consult Prof. Dr. Mumraiz Naqshband for {category.shortTitle || category.title}?
              </h2>
              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  With more than 20 years of international orthopaedic training and surgical practice across New Zealand, Australia, the United Kingdom, and Pakistan, Prof. Dr. Mumraiz Naqshband brings rigorous clinical standards to every consultation.
                </p>
                <p>
                  Patients presenting with joint pain or functional limitation at our clinic in <strong>Bashir NeuroSpine Institute, Lahore</strong> undergo a comprehensive clinical examination, review of high-resolution digital imaging (X-rays and MRI scans), and open discussion of all suitable non-surgical and surgical options.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-brand-deep">Consultation Location</h3>
                    <p className="text-xs text-slate-500">Shadman 1, Jail Road, Lahore</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                    <span>Bashir NeuroSpine Institute (BNI), 18 Jail Rd, Shadman 1, Lahore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                    <span>Monday - Saturday: By Prior Appointment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                    <span>Appointment Helpline: 0321 4175761</span>
                  </div>
                </div>

                <a
                  href={bniLocation.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-brand-blue hover:text-brand-deep font-semibold text-xs border border-brand-border flex items-center justify-center gap-1.5 transition"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          TREATMENTS LIST GRID
          ========================================================================= */}
      <section className="py-16 bg-slate-50 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Procedures & Treatments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
              Specialist Treatments in {category.shortTitle || category.title}
            </h2>
            <p className="text-slate-600 text-sm">
              Explore specialized orthopaedic surgical and non-surgical procedures provided by Prof. Dr. Mumraiz Naqshband in Lahore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.treatments.map((treatment, idx) => {
              const itemWhatsAppText = encodeURIComponent(
                `Hello Prof. Dr. Mumraiz Naqshband's clinic,\n\n` +
                `I would like to inquire about ${treatment.title} in Lahore.\n` +
                `Please let me know how to schedule an appointment.`
              );

              return (
                <div
                  key={treatment.slug}
                  className="bg-white rounded-3xl p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                        Procedure 0{idx + 1}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        BNI Lahore
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-brand-deep group-hover:text-brand-blue transition-colors mb-2">
                      <Link to={treatment.slug}>
                        {treatment.title}
                      </Link>
                    </h3>

                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                      {treatment.lead}
                    </p>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-6">
                      {treatment.overview}
                    </p>

                    {treatment.benefits && (
                      <div className="border-t border-slate-100 pt-3 mb-5 space-y-1.5">
                        {treatment.benefits.slice(0, 3).map((b, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <Link
                      to={treatment.slug}
                      className="flex-1 py-3 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Read Treatment Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/923214175761?text=${itemWhatsAppText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 transition-colors flex items-center justify-center gap-1.5 text-xs font-semibold"
                      title="Enquire on WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SPECIALTY FREQUENTLY ASKED QUESTIONS (FAQS)
          ========================================================================= */}
      <section className="py-16 bg-white border-t border-brand-border text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              Patient Information & FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
              Frequently Asked Questions About {category.shortTitle || category.title}
            </h2>
            <p className="text-slate-600 text-sm">
              Key information regarding diagnosis, candidate selection, surgical techniques, and recovery in Lahore.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-brand-border bg-slate-50/70 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-base sm:text-lg text-brand-deep hover:text-brand-blue transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-teal shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          BOTTOM HIGH-CONVERSION CTA SECTION
          ========================================================================= */}
      <section className="py-16 bg-gradient-to-br from-brand-deep via-[#0d3353] to-brand-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Consultation Desk at BNI Lahore</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white">
            Schedule an Evaluation for {category.shortTitle || category.title}
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Receive specialist orthopaedic assessment, diagnostic imaging review, and personalized treatment planning from <strong>Prof. Dr. Mumraiz Naqshband</strong> at Bashir NeuroSpine Institute (BNI), 18 Jail Road, Shadman 1, Lahore.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3.5">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Book Consultation on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenAppointment && onOpenAppointment(category.title)}
              className="w-full sm:w-auto bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition shadow-md"
            >
              Request Online Appointment
            </button>

            <Link
              to="/services/"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-sm border border-white/20 transition"
            >
              View All Services
            </Link>
          </div>

          <div className="pt-4 text-xs text-white/60">
            Appointment Helpline: <a href={`tel:${DOCTOR_INFO.phoneTel}`} className="text-emerald-400 hover:underline font-semibold">{DOCTOR_INFO.phone}</a> • 18 Jail Rd, Shadman 1, Lahore
          </div>
        </div>
      </section>

    </div>
  );
}
