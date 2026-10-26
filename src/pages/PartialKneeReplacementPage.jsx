import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ChevronRight, Phone, Calendar, 
  MapPin, Shield, AlertTriangle, Sparkles, Activity, Cpu, 
  Layers, CheckCircle, HelpCircle, Building2, Clock, Award,
  FileText, Stethoscope, AlertCircle, Scale, ShieldAlert
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageSeo } from '../utils/seo';
import { Link } from '../utils/navigation';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function PartialKneeReplacementPage({ onOpenAppointment }) {
  // B2. Search, Social and Indexing Metadata
  usePageSeo({
    title: "Partial Knee Replacement Lahore | Dr. Mumraiz Naqshband",
    description: "Learn about partial knee replacement in Lahore with Prof. Dr. Mumraiz Naqshband, including suitable candidates, surgical options, recovery and risks.",
    canonicalUrl: "/partial-knee-replacement/"
  });

  // State for Consultation Form (B5.6)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredClinic: 'BNI - Bashir NeuroSpine Institute, Lahore',
    message: '',
    privacyAcknowledged: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyAcknowledged) return;
    setFormSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello, I would like to book a partial knee replacement consultation with Prof. Dr. Mumraiz Naqshband.\n\n` +
      `Name: ${formData.fullName || 'Not provided'}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Preferred Clinic: ${formData.preferredClinic}\n` +
      `Enquiry: ${formData.message || 'Partial Knee Replacement Consultation'}`
    );
    window.open(`https://wa.me/923214175761?text=${text}`, '_blank');
  };

  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ Data (S16)
  const faqs = [
    {
      q: "What is partial knee replacement surgery?",
      a: "Partial knee replacement is an operation that replaces damaged joint surfaces within a suitable part of the knee while retaining more unaffected joint structures."
    },
    {
      q: "Is partial knee replacement the same as unicompartmental knee replacement?",
      a: "Unicompartmental knee replacement is a common type of partial knee replacement that treats one of the main tibiofemoral compartments of the knee."
    },
    {
      q: "Who is a suitable candidate for partial knee replacement?",
      a: "Selected patients with arthritis mainly affecting a suitable compartment of the knee may be candidates. Ligament function, alignment, movement and other clinical factors are assessed."
    },
    {
      q: "What is the difference between partial and total knee replacement?",
      a: "Partial knee replacement treats selected localised joint damage, while total knee replacement treats more extensive joint surface damage."
    },
    {
      q: "Is partial knee replacement better than total knee replacement?",
      a: "Neither procedure is automatically better for everyone. The most appropriate choice depends on the patient's joint condition and clinical requirements."
    },
    {
      q: "Can partial knee replacement be performed robotically?",
      a: "Selected partial knee replacement procedures can be performed with robotic assistance, depending on the available system and patient suitability."
    },
    {
      q: "Does Prof. Dr. Mumraiz Naqshband use CORI technology?",
      a: "Yes. His practice includes robotic-assisted knee replacement using the CORI Surgical System. The suitability and availability of a specific partial knee replacement procedure should be confirmed during consultation."
    },
    {
      q: "How long does partial knee replacement surgery take?",
      a: "The duration varies according to the procedure, patient and surgical circumstances. The treating team can provide an individual estimate."
    },
    {
      q: "Is recovery faster after partial knee replacement?",
      a: "Recovery may differ from total knee replacement, but faster recovery cannot be guaranteed for every patient."
    },
    {
      q: "Will I need physiotherapy after partial knee replacement?",
      a: "Rehabilitation and exercises are commonly recommended to support movement, strength and functional recovery."
    },
    {
      q: "Can arthritis develop in the rest of the knee after partial replacement?",
      a: "Yes. Arthritis may progress in other compartments of the knee over time, potentially affecting symptoms or the need for further treatment."
    },
    {
      q: "Can a partial knee replacement be converted to a total knee replacement?",
      a: "In selected circumstances, further surgery may involve conversion to total knee replacement. The appropriate approach depends on the reason for revision and the condition of the joint."
    },
    {
      q: "How long does a partial knee replacement implant last?",
      a: "Implant longevity varies depending on the implant, patient factors, activity and surgical circumstances. No specific lifespan can be guaranteed."
    },
    {
      q: "What are the risks of partial knee replacement?",
      a: "Potential risks include infection, blood clots, stiffness, persistent pain, implant complications, progression of arthritis and the possibility of further surgery."
    },
    {
      q: "How can I book a partial knee replacement consultation in Lahore?",
      a: "Call 0321 4175761 or use WhatsApp at https://wa.me/923214175761 to enquire about appointments with Prof. Dr. Mumraiz Naqshband."
    }
  ];

  return (
    <div className="bg-white text-brand-dark">
      {/* Breadcrumb Trail */}
      <Breadcrumb 
        items={[
          { label: "Services", url: "/services/" },
          { label: "Robotic Knee Replacement", url: "/robotic-knee-replacement/" },
          { label: "Partial Knee Replacement", url: "/partial-knee-replacement/" }
        ]} 
      />

      {/* =========================================================================
          S01 — HERO SECTION
          ========================================================================= */}
      <section className="relative bg-white py-12 lg:py-20 border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-border text-brand-blue text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>Specialist Knee Replacement Surgery | Lahore</span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-brand-deep tracking-tight leading-[1.2]">
                Partial Knee Replacement Surgery in Lahore
              </h1>

              {/* Hero Supporting Copy */}
              <div className="space-y-4 text-base sm:text-lg text-brand-dark/80 font-normal leading-relaxed">
                <p>
                  Prof. Dr. Mumraiz Naqshband provides specialist assessment and surgical treatment planning for patients with knee arthritis and joint damage.
                </p>
                <p>
                  Partial knee replacement, also known as unicompartmental knee replacement, may be an option when arthritis affects a suitable part of the knee while other joint structures remain sufficiently healthy.
                </p>
                <p>
                  The procedure replaces the damaged joint surfaces within the affected compartment rather than replacing all the main joint surfaces.
                </p>
                <p className="text-brand-dark font-medium">
                  A specialist consultation is necessary to determine whether partial knee replacement, total knee replacement or non-surgical management is most appropriate.
                </p>
              </div>

              {/* Hero Trust Highlights */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3">
                  Surgical Leadership & Credentials
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2.5 text-sm text-brand-dark font-medium bg-brand-light/60 p-2.5 rounded-lg border border-brand-border/40">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Professor & Consultant Orthopaedic Surgeon</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-brand-dark font-medium bg-brand-light/60 p-2.5 rounded-lg border border-brand-border/40">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>M.B.C.H.B (New Zealand)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-brand-dark font-medium bg-brand-light/60 p-2.5 rounded-lg border border-brand-border/40">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>F.R.A.C.S (Ortho) (Australia)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-brand-dark font-medium bg-brand-light/60 p-2.5 rounded-lg border border-brand-border/40">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>F.R.C.S (Trauma & Ortho) (UK)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-brand-dark font-medium bg-brand-light/60 p-2.5 rounded-lg border border-brand-border/40">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Over 20 Years of International Experience</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-brand-dark font-medium bg-brand-light/60 p-2.5 rounded-lg border border-brand-border/40">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Knee Replacement & CORI Robotic-Assisted Surgery Expertise</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://wa.me/923214175761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-brand-teal text-white font-semibold text-base shadow-md hover:bg-brand-teal/90 transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Book a Knee Consultation</span>
                </a>
                <a
                  href="#what-is-partial-knee-replacement"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-brand-light text-brand-blue font-semibold text-base border border-brand-border hover:bg-white hover:border-brand-teal transition-all"
                >
                  <span>Learn About Partial Knee Replacement</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-border bg-brand-light">
                <img
                  src="/assets/images/prof-dr-mumraiz-naqshband-portrait.jpg"
                  alt="Prof. Dr. Mumraiz Naqshband, Consultant Orthopaedic Surgeon"
                  className="w-full h-auto object-cover object-center max-h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left">
                  <p className="text-xs uppercase font-bold tracking-wider text-brand-teal">Consultant Knee & Orthopaedic Surgeon</p>
                  <p className="text-xl font-bold font-heading">Prof. Dr. Mumraiz Naqshband</p>
                  <p className="text-xs text-white/80 mt-1">Specialist Unicompartmental & CORI Robotic-Assisted Knee Surgery</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          S02 — UNDERSTANDING PARTIAL KNEE REPLACEMENT
          ========================================================================= */}
      <section id="what-is-partial-knee-replacement" className="py-16 bg-brand-light/30 border-b border-brand-border/60 text-left scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-6">
              What Is Partial Knee Replacement?
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              <p>
                Partial knee replacement is an operation in which damaged joint surfaces within a suitable part of the knee are replaced with artificial components.
              </p>
              <p>
                It is commonly called unicompartmental knee replacement or unicompartmental knee arthroplasty.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Medial */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-teal font-bold font-heading">
                01
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-deep">Medial Compartment</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The inner part of the knee joint. This is the compartment most frequently affected by localized osteoarthritis.
              </p>
            </div>

            {/* Lateral */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-teal font-bold font-heading">
                02
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-deep">Lateral Compartment</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The outer part of the knee joint, which can also undergo isolated wear in selected patient presentations.
              </p>
            </div>

            {/* Patellofemoral */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-teal font-bold font-heading">
                03
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-deep">Patellofemoral Compartment</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The joint between the kneecap (patella) and the thigh bone (femoral trochlea).
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-4 max-w-4xl">
            <p className="text-base text-brand-dark/90 leading-relaxed">
              Unicompartmental knee replacement generally treats either the medial or lateral tibiofemoral compartment.
            </p>
            <p className="text-base text-brand-dark/90 leading-relaxed">
              In appropriately selected patients, the procedure can preserve more of the unaffected joint structures than total knee replacement.
            </p>
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm">
              <p className="font-semibold mb-1">Clinical Assessment Requirement:</p>
              <p>
                Partial knee replacement is not suitable for every patient with arthritis. The location of joint damage, ligament function, alignment and other clinical factors must be assessed.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/total-knee-replacement/"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-teal transition-colors"
              >
                <span>Learn about Total Knee Replacement for more extensive joint wear</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S03 — WHO MAY NEED PARTIAL KNEE REPLACEMENT?
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              When Might Partial Knee Replacement Be Recommended?
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              Partial knee replacement may be considered when arthritis causes significant symptoms but the damage is mainly confined to a suitable compartment of the knee.
            </p>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed mt-2">
              The decision depends on a specialist examination, imaging and assessment of the patient's overall condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* 1 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold">1</div>
              <h3 className="text-lg font-bold font-heading text-brand-deep">Localised Knee Osteoarthritis</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Some patients develop osteoarthritis predominantly affecting one compartment of the knee. When the pattern of damage meets the relevant surgical criteria, partial replacement may be considered.
              </p>
            </div>

            {/* 2 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold">2</div>
              <h3 className="text-lg font-bold font-heading text-brand-deep">Persistent Knee Pain</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Pain that affects walking, standing, stair climbing or daily activities may contribute to the decision to consider surgery.
              </p>
            </div>

            {/* 3 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold">3</div>
              <h3 className="text-lg font-bold font-heading text-brand-deep">Inadequate Relief from Non-Surgical Treatment</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Surgery may be discussed when appropriate treatments such as exercise therapy, medication or other conservative measures have not provided sufficient relief.
              </p>
            </div>

            {/* 4 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold">4</div>
              <h3 className="text-lg font-bold font-heading text-brand-deep">Suitable Ligament Function</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The stability and function of the knee ligaments are important considerations in selecting patients for partial knee replacement.
              </p>
            </div>

            {/* 5 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold">5</div>
              <h3 className="text-lg font-bold font-heading text-brand-deep">Appropriate Knee Alignment and Movement</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The surgeon assesses knee alignment, range of motion and other anatomical factors before recommending a procedure.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-brand-light border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-brand-deep">Patient Guidance:</p>
              <p className="text-sm text-brand-dark/80">
                Not every patient with arthritis limited to one compartment is suitable for partial knee replacement. A specialist assessment is required.
              </p>
            </div>
            <a
              href="https://wa.me/923214175761"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-teal text-white font-semibold text-sm shrink-0 shadow-sm hover:bg-brand-teal/90 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Book a Partial Knee Replacement Assessment</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S04 — TYPES OF PARTIAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 bg-brand-light/30 border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              Types of Partial Knee Replacement Surgery
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              The type of partial knee replacement depends on which area of the knee is affected and the patient's joint condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Medial UKR */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-lg font-bold font-heading text-brand-deep">
                Medial Unicompartmental Knee Replacement
              </h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The medial compartment is located on the inner side of the knee. Medial unicompartmental knee replacement may be considered when arthritis is primarily confined to this area and other surgical criteria are met.
              </p>
            </div>

            {/* Lateral UKR */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-lg font-bold font-heading text-brand-deep">
                Lateral Unicompartmental Knee Replacement
              </h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The lateral compartment is located on the outer side of the knee. Lateral unicompartmental knee replacement may be considered for selected patients with suitable lateral compartment disease.
              </p>
            </div>

            {/* Patellofemoral */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-lg font-bold font-heading text-brand-deep">
                Patellofemoral Joint Replacement
              </h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Patellofemoral replacement treats selected damage involving the joint between the kneecap and the thigh bone. It is a distinct type of partial joint replacement and is not the same as medial or lateral unicompartmental knee replacement.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3 max-w-4xl">
            <h3 className="text-base font-bold font-heading text-brand-deep">
              Which Procedure Is Appropriate?
            </h3>
            <p className="text-sm text-brand-dark/80 leading-relaxed">
              The surgeon considers the location and severity of arthritis, ligament stability, joint alignment, movement and other factors when recommending treatment.
            </p>
            <p className="text-xs text-brand-muted italic pt-1 border-t border-brand-border/50">
              Clinical Verification Note: Confirm which partial knee replacement procedures are currently performed by the doctor before presenting each as an available service.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S05 — PARTIAL VS TOTAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              Partial Knee Replacement vs Total Knee Replacement
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              Both procedures aim to treat damaged knee joint surfaces, but they differ in the amount of joint surface replaced and the patients for whom they are appropriate.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-xl border border-brand-border shadow-sm mb-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-deep text-white text-sm sm:text-base font-heading">
                  <th className="p-4 sm:p-5 font-semibold">Feature</th>
                  <th className="p-4 sm:p-5 font-semibold">Partial Knee Replacement</th>
                  <th className="p-4 sm:p-5 font-semibold">Total Knee Replacement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border text-sm sm:text-base text-brand-dark/90">
                <tr className="hover:bg-brand-light/30">
                  <td className="p-4 sm:p-5 font-bold text-brand-deep bg-brand-light/40">Area Replaced</td>
                  <td className="p-4 sm:p-5">Selected damaged compartment</td>
                  <td className="p-4 sm:p-5">More extensive joint surfaces</td>
                </tr>
                <tr className="hover:bg-brand-light/30">
                  <td className="p-4 sm:p-5 font-bold text-brand-deep bg-brand-light/40">Typical Indication</td>
                  <td className="p-4 sm:p-5">Suitable localised arthritis</td>
                  <td className="p-4 sm:p-5">More extensive joint disease</td>
                </tr>
                <tr className="hover:bg-brand-light/30">
                  <td className="p-4 sm:p-5 font-bold text-brand-deep bg-brand-light/40">Joint Structures Preserved</td>
                  <td className="p-4 sm:p-5">More unaffected structures may remain</td>
                  <td className="p-4 sm:p-5">Depends on the surgical technique</td>
                </tr>
                <tr className="hover:bg-brand-light/30">
                  <td className="p-4 sm:p-5 font-bold text-brand-deep bg-brand-light/40">Patient Selection</td>
                  <td className="p-4 sm:p-5">Requires specific anatomical and clinical criteria</td>
                  <td className="p-4 sm:p-5">Appropriate for a broader range of advanced joint disease</td>
                </tr>
                <tr className="hover:bg-brand-light/30">
                  <td className="p-4 sm:p-5 font-bold text-brand-deep bg-brand-light/40">Recovery</td>
                  <td className="p-4 sm:p-5">May differ between procedures and patients</td>
                  <td className="p-4 sm:p-5">Depends on procedure and individual factors</td>
                </tr>
                <tr className="hover:bg-brand-light/30">
                  <td className="p-4 sm:p-5 font-bold text-brand-deep bg-brand-light/40">Future Surgery</td>
                  <td className="p-4 sm:p-5">Further surgery may be needed if arthritis progresses or complications develop</td>
                  <td className="p-4 sm:p-5">Revision may be needed for implant-related or other problems</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Subheading & Guidance */}
          <div className="p-6 rounded-xl bg-brand-light/40 border border-brand-border space-y-4 max-w-4xl">
            <h3 className="text-lg font-bold font-heading text-brand-deep">
              Is Partial Knee Replacement Always Better?
            </h3>
            <p className="text-base text-brand-dark/80 leading-relaxed">
              No. Partial knee replacement can be an appropriate option for selected patients, but it is not automatically preferable to total knee replacement. The choice depends on the pattern of joint damage, clinical findings and expected benefits and risks.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/total-knee-replacement/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-brand-border text-brand-blue font-semibold text-sm hover:border-brand-teal transition-all shadow-sm"
              >
                <span>Learn About Total Knee Replacement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/923214175761"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-teal text-white font-semibold text-sm shadow-sm hover:bg-brand-teal/90 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Book a Knee Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S06 — ROBOTIC-ASSISTED PARTIAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 bg-brand-light/30 border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              Can Partial Knee Replacement Be Performed with Robotic Assistance?
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              <p>
                Selected partial knee replacement procedures can be performed using robotic-assisted technology.
              </p>
              <p>
                Robotic systems can support aspects of surgical planning, assessment of knee anatomy and preparation of joint surfaces.
              </p>
              <p>
                Prof. Dr. Mumraiz Naqshband performs robotic-assisted knee replacement using the CORI Surgical System.
              </p>
              <p className="text-brand-dark font-medium">
                The specific suitability of CORI-assisted partial knee replacement depends on the patient's condition, the procedure required and the system configuration available.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Planning */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <Cpu className="w-6 h-6 text-brand-teal" />
              <h3 className="text-lg font-bold font-heading text-brand-deep">Surgical Planning</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Robotic-assisted technology can provide information to support the surgeon's plan.
              </p>
            </div>

            {/* Preparation */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <Layers className="w-6 h-6 text-brand-teal" />
              <h3 className="text-lg font-bold font-heading text-brand-deep">Guided Bone Preparation</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The system can assist with selected bone preparation steps according to the surgical plan.
              </p>
            </div>

            {/* Surgeon-Led */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <Activity className="w-6 h-6 text-brand-teal" />
              <h3 className="text-lg font-bold font-heading text-brand-deep">Surgeon-Led Operation</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The surgeon remains responsible for the procedure and all clinical decisions.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-4 max-w-4xl">
            <h3 className="text-base font-bold font-heading text-brand-deep">
              Does Robotic Assistance Guarantee Better Results?
            </h3>
            <p className="text-sm text-brand-dark/80 leading-relaxed">
              No. Robotic assistance provides additional surgical tools but does not guarantee improved outcomes, faster recovery or longer implant life.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/robotic-assisted-knee-replacement/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-deep text-white font-semibold text-sm hover:bg-brand-deep/90 transition-all shadow-sm"
              >
                <span>Explore CORI Robotic-Assisted Knee Replacement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/robotic-knee-replacement/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-light text-brand-blue border border-brand-border font-semibold text-sm hover:bg-white transition-all shadow-sm"
              >
                <span>Robotic Knee Replacement Overview</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-brand-muted italic pt-2 border-t border-brand-border/50">
              Verification Note: Confirm that the doctor's current CORI system supports and is used for the partial knee replacement applications described before publishing procedure-specific availability claims.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S07 — HOW PARTIAL KNEE REPLACEMENT SURGERY IS PERFORMED
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              How Is Partial Knee Replacement Surgery Performed?
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              <p>
                Partial knee replacement involves replacing the damaged surfaces within the affected knee compartment.
              </p>
              <p>
                The exact surgical technique depends on the patient's anatomy, implant design and selected surgical approach.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Step 1 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-9 h-9 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold text-sm">1</div>
              <h3 className="text-base font-bold font-heading text-brand-deep">Step 1 — Anaesthesia and Preparation</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The patient receives appropriate anaesthesia, and the surgical team prepares the knee for the operation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-9 h-9 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold text-sm">2</div>
              <h3 className="text-base font-bold font-heading text-brand-deep">Step 2 — Accessing the Joint</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The surgeon makes an incision to access the affected part of the knee.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-9 h-9 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold text-sm">3</div>
              <h3 className="text-base font-bold font-heading text-brand-deep">Step 3 — Assessing the Joint</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The surgeon assesses the damaged compartment and the condition of relevant surrounding structures.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-9 h-9 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold text-sm">4</div>
              <h3 className="text-base font-bold font-heading text-brand-deep">Step 4 — Preparing the Damaged Surfaces</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The affected joint surfaces are prepared to accommodate the replacement components.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-9 h-9 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold text-sm">5</div>
              <h3 className="text-base font-bold font-heading text-brand-deep">Step 5 — Implant Placement</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The surgeon positions the artificial components and assesses their fit and function.
              </p>
            </div>

            {/* Step 6 */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <div className="w-9 h-9 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold text-sm">6</div>
              <h3 className="text-base font-bold font-heading text-brand-deep">Step 6 — Final Assessment and Closure</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The surgeon evaluates the reconstructed joint, completes the procedure and closes the wound.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-brand-light border border-brand-border text-xs text-brand-dark/80 max-w-4xl">
            <span className="font-semibold text-brand-deep">Important Note:</span> This is a simplified educational overview. The actual procedure may differ according to clinical findings and surgical technique.
          </div>
        </div>
      </section>

      {/* =========================================================================
          S08 — PARTIAL KNEE REPLACEMENT IMPLANTS
          ========================================================================= */}
      <section className="py-16 bg-brand-light/30 border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              What Implants Are Used in Partial Knee Replacement?
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              <p>
                Partial knee replacement uses artificial components designed to replace damaged surfaces within the affected compartment.
              </p>
              <p>
                The components commonly include metal surfaces and a specialised plastic bearing.
              </p>
              <p>
                The exact implant design depends on the patient's anatomy, joint condition and the surgeon's treatment plan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Femoral */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-base font-bold font-heading text-brand-deep">Femoral Component</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The femoral component replaces the prepared surface of the affected part of the thigh bone.
              </p>
            </div>

            {/* Tibial */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-base font-bold font-heading text-brand-deep">Tibial Component</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The tibial component replaces the corresponding prepared surface of the shin bone.
              </p>
            </div>

            {/* Bearing */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-base font-bold font-heading text-brand-deep">Bearing Surface</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                A specialised bearing surface helps the artificial components move against one another.
              </p>
            </div>

            {/* Selection */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-base font-bold font-heading text-brand-deep">Implant Selection</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The surgeon considers joint anatomy, stability, bone quality and other relevant factors when choosing an implant.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm max-w-4xl">
            <span className="font-semibold">Patient Information:</span> No implant can be guaranteed to last for a particular period. Implant performance varies according to patient and surgical factors.
          </div>
        </div>
      </section>

      {/* =========================================================================
          S09 — PREPARING FOR PARTIAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              How to Prepare for Partial Knee Replacement Surgery
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              Preparation for surgery begins with a detailed assessment of the patient's knee condition and general health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* History */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <FileText className="w-6 h-6 text-brand-teal" />
              <h3 className="text-base font-bold font-heading text-brand-deep">Medical History and Examination</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The surgeon reviews symptoms, previous injuries, existing medical conditions and treatment history.
              </p>
            </div>

            {/* Imaging */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <Activity className="w-6 h-6 text-brand-teal" />
              <h3 className="text-base font-bold font-heading text-brand-deep">Imaging</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                X-rays and other investigations may be used to assess the location and extent of joint damage.
              </p>
            </div>

            {/* Suitability */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <Stethoscope className="w-6 h-6 text-brand-teal" />
              <h3 className="text-base font-bold font-heading text-brand-deep">Assessment of Surgical Suitability</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The surgeon evaluates knee alignment, ligament function, movement and other factors relevant to partial knee replacement.
              </p>
            </div>

            {/* Fitness */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <CheckCircle className="w-6 h-6 text-brand-teal" />
              <h3 className="text-base font-bold font-heading text-brand-deep">Medical Fitness</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Existing health conditions and medications may require review before surgery.
              </p>
            </div>

            {/* Recovery Planning */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <Clock className="w-6 h-6 text-brand-teal" />
              <h3 className="text-base font-bold font-heading text-brand-deep">Recovery Planning</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Patients may be advised to arrange assistance at home and prepare for postoperative mobility and rehabilitation.
              </p>
            </div>

            {/* Consent */}
            <div className="p-6 rounded-xl bg-brand-light/30 border border-brand-border/60 space-y-3">
              <Shield className="w-6 h-6 text-brand-teal" />
              <h3 className="text-base font-bold font-heading text-brand-deep">Informed Consent</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The surgeon explains the proposed procedure, potential benefits, risks, alternatives and expected recovery.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-brand-light border border-brand-border text-xs text-brand-dark/80 max-w-4xl">
            <span className="font-semibold text-brand-deep">Important Note:</span> Patients should follow the specific preoperative instructions provided by their treating team.
          </div>
        </div>
      </section>

      {/* =========================================================================
          S10 — RECOVERY AFTER PARTIAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 bg-brand-light/30 border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              Recovery After Partial Knee Replacement Surgery
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              <p>
                Recovery following partial knee replacement varies between patients.
              </p>
              <p>
                The procedure preserves more unaffected joint structures than total knee replacement in suitable cases, but recovery still requires appropriate postoperative care and rehabilitation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Early Care */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-base font-bold font-heading text-brand-deep">Early Postoperative Care</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The clinical team monitors the patient's condition, manages pain and provides instructions about movement and wound care.
              </p>
            </div>

            {/* Mobilisation */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-base font-bold font-heading text-brand-deep">Walking and Mobilisation</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Patients are encouraged to begin appropriate movement when clinically safe and according to their surgeon's instructions.
              </p>
            </div>

            {/* Physiotherapy */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-base font-bold font-heading text-brand-deep">Physiotherapy</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Rehabilitation may include exercises to improve knee movement, strength, balance and walking ability.
              </p>
            </div>

            {/* Wound Care */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-base font-bold font-heading text-brand-deep">Wound Care</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Patients receive guidance on wound care and signs of infection or other complications.
              </p>
            </div>

            {/* Follow-Up */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-base font-bold font-heading text-brand-deep">Follow-Up Appointments</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Follow-up visits allow the surgical team to assess recovery, knee function and any concerns.
              </p>
            </div>

            {/* Daily Activities */}
            <div className="p-6 rounded-xl bg-white border border-brand-border/80 shadow-sm space-y-3">
              <h3 className="text-base font-bold font-heading text-brand-deep">Returning to Daily Activities</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                The timing of returning to work, driving, exercise and other activities depends on the patient's recovery and medical advice.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-brand-deep">Patient Guidance:</p>
              <p className="text-sm text-brand-dark/80">
                Partial knee replacement may involve a different recovery course from total knee replacement, but faster recovery is not guaranteed for every patient.
              </p>
            </div>
            <a
              href="https://wa.me/923214175761"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-teal text-white font-semibold text-sm shrink-0 shadow-sm hover:bg-brand-teal/90 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Discuss Partial Knee Replacement Recovery</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S11 — POTENTIAL BENEFITS AND LIMITATIONS
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              Potential Benefits of Partial Knee Replacement
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              For appropriately selected patients, partial knee replacement aims to treat the damaged compartment while retaining more unaffected joint structures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Benefits Column */}
            <div className="p-6 sm:p-8 rounded-xl bg-teal-50/50 border border-teal-100 space-y-4">
              <h3 className="text-lg font-bold font-heading text-brand-deep">
                Potential Benefits May Include:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm sm:text-base text-brand-dark/90">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Relief of arthritis-related knee pain</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-brand-dark/90">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Improved knee function</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-brand-dark/90">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Improved ability to perform everyday activities</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-brand-dark/90">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span>Preservation of unaffected joint surfaces and structures</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-brand-dark/90">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span>A treatment approach tailored to localised joint damage</span>
                </li>
              </ul>
            </div>

            {/* Limitations Column */}
            <div className="p-6 sm:p-8 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-4">
              <h3 className="text-lg font-bold font-heading text-amber-950">
                Important Limitations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm sm:text-base text-amber-900">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Partial knee replacement is not suitable for all patterns of knee arthritis.</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-amber-900">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Arthritis may progress in other parts of the knee over time.</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-amber-900">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Some patients may continue to experience pain, stiffness or functional limitations after surgery.</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-amber-900">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Further surgery may be required if the implant develops complications or joint disease progresses.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-brand-light border border-brand-border text-xs text-brand-dark/80 max-w-4xl">
            <span className="font-semibold text-brand-deep">Important Note:</span> The procedure does not guarantee complete pain relief, unrestricted movement or permanent implant function.
          </div>
        </div>
      </section>

      {/* =========================================================================
          S12 — RISKS AND POSSIBLE COMPLICATIONS
          ========================================================================= */}
      <section className="py-16 bg-brand-light/30 border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              Risks of Partial Knee Replacement Surgery
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              Partial knee replacement is a surgical procedure and carries potential risks. These may include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              "Infection",
              "Blood clots",
              "Bleeding",
              "Wound healing problems",
              "Persistent pain",
              "Knee stiffness",
              "Nerve or blood vessel injury",
              "Implant loosening or wear",
              "Implant instability",
              "Progression of arthritis in other compartments",
              "Fracture",
              "Anaesthetic complications",
              "The need for further surgery or conversion to total knee replacement"
            ].map((risk, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white border border-brand-border/70 text-sm text-brand-dark">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{risk}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-brand-dark/80 mb-8">
            The likelihood of complications depends on individual health, surgical circumstances and other factors.
          </p>

          {/* Urgent Medical Attention Alert Box */}
          <div className="p-6 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-3 mb-6 max-w-4xl">
            <div className="flex items-center gap-2 font-bold text-base text-red-900">
              <ShieldAlert className="w-5 h-5 text-red-600" />
              <h3>When to Seek Urgent Medical Attention</h3>
            </div>
            <p className="text-sm leading-relaxed text-red-900/90">
              After surgery, urgent medical assessment is needed for symptoms such as chest pain, sudden breathlessness, severe new leg swelling or significant bleeding.
            </p>
            <p className="text-sm leading-relaxed text-red-900/90">
              Patients should contact their treating team promptly for fever, increasing wound redness, drainage or worsening symptoms.
            </p>
          </div>

          <p className="text-xs text-brand-muted italic">
            Medical Disclaimer: This information is for general education and does not replace personalised medical advice.
          </p>
        </div>
      </section>

      {/* =========================================================================
          S13 — WHEN PARTIAL KNEE REPLACEMENT MAY NOT BE SUITABLE
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              Who May Not Be Suitable for Partial Knee Replacement?
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              Partial knee replacement is not appropriate for every patient with knee arthritis. Factors that may make the procedure unsuitable or require further assessment include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl">
            {[
              "Arthritis affecting multiple compartments of the knee",
              "Certain patterns of ligament instability",
              "Significant knee deformity that cannot be appropriately addressed",
              "Active infection",
              "Some inflammatory joint conditions",
              "Medical conditions that substantially increase surgical risk",
              "Joint anatomy or movement that does not meet the requirements of the proposed procedure"
            ].map((factor, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-brand-light/40 border border-brand-border text-sm text-brand-dark">
                <AlertCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>{factor}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-brand-dark/80 mb-8 max-w-4xl">
            These factors do not replace individual assessment. The surgeon determines the most appropriate treatment based on the full clinical picture.
          </p>

          <div className="p-6 rounded-xl bg-brand-light border border-brand-border space-y-4 max-w-4xl">
            <h3 className="text-base font-bold font-heading text-brand-deep">What Are the Alternatives?</h3>
            <p className="text-sm text-brand-dark/80 leading-relaxed">
              Depending on the patient's condition, alternatives may include non-surgical treatment, joint preservation procedures or total knee replacement.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/total-knee-replacement/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-deep text-white font-semibold text-sm hover:bg-brand-deep/90 transition-all shadow-sm"
              >
                <span>Total Knee Replacement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/non-surgical-joint-treatment/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-brand-border text-brand-blue font-semibold text-sm hover:border-brand-teal transition-all shadow-sm"
              >
                <span>Non-Surgical Joint Treatment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S14 — MEET YOUR PARTIAL KNEE REPLACEMENT SURGEON
          ========================================================================= */}
      <section className="py-16 bg-brand-light/30 border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-brand-border bg-white">
                <img
                  src="/assets/images/prof-dr-mumraiz-naqshband-portrait.jpg"
                  alt="Prof. Dr. Mumraiz Naqshband, Consultant Orthopaedic Surgeon"
                  className="w-full h-auto object-cover object-center max-h-[480px]"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand-border text-brand-blue text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-brand-teal" />
                <span>Specialist Consultant Surgeon</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                Prof. Dr. Mumraiz Naqshband — Knee Replacement Surgeon in Lahore
              </h2>

              <div className="space-y-4 text-base text-brand-dark/80 leading-relaxed">
                <p>
                  Dr. Mumraiz Salik Naqshband is a Professor and Consultant Orthopaedic Surgeon with international medical and specialist surgical qualifications.
                </p>
                <p>
                  His professional background includes over 20 years of international experience and specialist interests in joint replacement, robotic-assisted knee surgery, arthroscopy and orthopaedic trauma.
                </p>
                <p>
                  His knee replacement practice includes assessment of patients with arthritis and joint damage to determine appropriate surgical or non-surgical treatment options.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-brand-border/80 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Qualifications</h3>
                  <p className="text-xs sm:text-sm text-brand-dark font-medium leading-relaxed">
                    M.B.C.H.B (New Zealand)<br />
                    F.R.A.C.S (Ortho) (Australia)<br />
                    F.R.C.S (Trauma & Ortho) (UK)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-border/80 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Professional Role</h3>
                  <p className="text-xs sm:text-sm text-brand-dark font-medium leading-relaxed">
                    Professor and Consultant Orthopaedic Surgeon.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-border/80 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Specialist Interests</h3>
                  <p className="text-xs sm:text-sm text-brand-dark font-medium leading-relaxed">
                    Knee replacement, robotic-assisted knee replacement using CORI, hip replacement, joint reconstruction and arthroscopic surgery.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-deep text-white font-semibold text-sm hover:bg-brand-deep/90 transition-all shadow-sm"
                >
                  <span>About Prof. Dr. Mumraiz Naqshband</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          S15 — CONSULTATION LOCATIONS IN LAHORE
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              Partial Knee Replacement Consultation in Lahore
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              Patients considering partial knee replacement can enquire about specialist orthopaedic consultations with Prof. Dr. Mumraiz Naqshband.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* BNI */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-light/30 border border-brand-border shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-brand-deep font-bold font-heading text-lg sm:text-xl">
                <Building2 className="w-5 h-5 text-brand-teal" />
                <h3>Bashir NeuroSpine Institute (BNI)</h3>
              </div>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                <span className="font-semibold text-brand-dark">Address:</span> BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1 Shadman, Lahore, 54000, Pakistan.
              </p>
              <p className="text-sm text-brand-dark/80">
                <span className="font-semibold text-brand-dark">Phone:</span> 0321 4175761
              </p>
              <div className="pt-2">
                <Link
                  to="/bashir-neurospine-institute/"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-teal transition-colors"
                >
                  <span>View Bashir NeuroSpine Institute</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Bahria */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-light/30 border border-brand-border shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-brand-deep font-bold font-heading text-lg sm:text-xl">
                <Building2 className="w-5 h-5 text-brand-teal" />
                <h3>Bahria International Hospitals</h3>
              </div>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Consultation schedules and clinic details can be confirmed through the appointment team.
              </p>
              <p className="text-sm text-brand-dark/80">
                <span className="font-semibold text-brand-dark">Address and Timings:</span> Pending confirmation.
              </p>
              <div className="pt-2">
                <Link
                  to="/bahria-international-hospitals/"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-teal transition-colors"
                >
                  <span>View Bahria International Hospitals</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-brand-light border border-brand-border">
            <p className="text-xs sm:text-sm text-brand-dark/80">
              <span className="font-semibold text-brand-deep">Important Note:</span> The surgical facility may differ from the consultation location. Confirm the hospital where surgery is performed directly.
            </p>
            <Link
              to="/clinic-locations/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-teal shrink-0"
            >
              <span>View Clinic Locations</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S16 — FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 bg-brand-light/30 border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep mb-4">
              Frequently Asked Questions About Partial Knee Replacement
            </h2>
            <p className="text-base text-brand-dark/80">
              Detailed answers to common questions regarding unicompartmental knee replacement, candidate suitability, recovery, and surgical options.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mb-10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-xl border border-brand-border bg-white shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-brand-deep hover:text-brand-teal transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronRight 
                      className={`w-5 h-5 text-brand-teal shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-brand-dark/80 leading-relaxed border-t border-brand-border/40 bg-brand-light/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              to="/faqs/"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-teal transition-colors"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          S17 — FINAL APPOINTMENT CTA & CONSULTATION FORM (B5.5 & B5.6)
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand-border text-brand-blue text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                <span>Consultation Booking</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-brand-deep leading-tight">
                Book a Partial Knee Replacement Consultation in Lahore
              </h2>

              <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
                If knee arthritis or persistent joint pain is affecting your mobility, a specialist consultation can help determine whether partial knee replacement, total knee replacement or non-surgical treatment may be appropriate.
              </p>

              <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
                Consult Prof. Dr. Mumraiz Naqshband to discuss your symptoms, diagnosis and available treatment options.
              </p>

              <div className="pt-2 space-y-3">
                <p className="text-xs text-brand-muted">
                  Please confirm the consultation location and appointment availability when booking.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/923214175761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-brand-teal text-white font-semibold text-base shadow-md hover:bg-brand-teal/90 transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    <span>Book an Appointment</span>
                  </a>
                  <a
                    href="tel:+923214175761"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-brand-light text-brand-blue border border-brand-border font-semibold text-base hover:bg-white transition-all"
                  >
                    <Phone className="w-4 h-4 text-brand-teal" />
                    <span>Call 0321 4175761</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Consultation Form Column (B5.6) */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-brand-light/40 border border-brand-border shadow-sm">
                <h3 className="text-xl font-bold font-heading text-brand-deep mb-2">
                  Request an Appointment Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mb-6">
                  Fill in your details below and our appointment team will assist you with scheduling.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-teal-50 border border-brand-teal/30 text-center space-y-4">
                    <CheckCircle className="w-12 h-12 text-brand-teal mx-auto" />
                    <p className="text-base font-semibold text-brand-deep">
                      Thank you for your enquiry. Your message has been received. Our appointment team will contact you regarding consultation arrangements.
                    </p>
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-teal text-white font-semibold text-sm shadow-sm hover:bg-brand-teal/90 transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Continue via WhatsApp for Faster Assistance</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-deep mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Muhammad Usman"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-deep mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0321 1234567"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-deep mb-1.5">
                        Preferred Clinic Location
                      </label>
                      <select
                        value={formData.preferredClinic}
                        onChange={(e) => setFormData({ ...formData, preferredClinic: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      >
                        <option value="BNI - Bashir NeuroSpine Institute, Lahore">BNI - Bashir NeuroSpine Institute, Lahore</option>
                        <option value="Bahria International Hospitals, Lahore">Bahria International Hospitals, Lahore</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-deep mb-1.5">
                        Appointment Enquiry
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your knee pain, previous diagnosis, or query..."
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      />
                    </div>

                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        checked={formData.privacyAcknowledged}
                        onChange={(e) => setFormData({ ...formData, privacyAcknowledged: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-brand-border text-brand-teal focus:ring-brand-teal"
                      />
                      <label htmlFor="privacy" className="text-xs text-brand-dark/80 leading-normal">
                        I agree to the processing of my contact details in accordance with the{' '}
                        <Link to="/privacy-policy/" className="text-brand-blue underline hover:text-brand-teal">
                          Privacy Policy
                        </Link>.
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-brand-deep text-white font-semibold text-sm hover:bg-brand-deep/90 transition-all shadow-sm"
                      >
                        Submit Consultation Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
