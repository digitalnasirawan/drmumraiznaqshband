import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ChevronRight, Phone, Calendar, 
  MapPin, Shield, AlertTriangle, Sparkles, Activity, Cpu, 
  Layers, CheckCircle, HelpCircle, Building2, Clock, Award,
  FileText, Stethoscope, AlertCircle, Scale, ShieldAlert
} from 'lucide-react';
import { usePageSeo } from '../utils/seo';
import { Link } from '../utils/navigation';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function TotalKneeReplacementPage({ onOpenAppointment }) {
  // B2. Search, Social and Indexing Metadata
  usePageSeo({
    title: "Total Knee Replacement in Lahore | Dr. Mumraiz Naqshband",
    description: "Learn about total knee replacement surgery in Lahore with Prof. Dr. Mumraiz Naqshband, including treatment options, recovery, risks and consultations.",
    canonicalUrl: "/total-knee-replacement/"
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
      `Hello, I would like to book a total knee replacement consultation with Prof. Dr. Mumraiz Naqshband.\n\n` +
      `Name: ${formData.fullName || 'Not provided'}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Preferred Clinic: ${formData.preferredClinic}\n` +
      `Enquiry: ${formData.message || 'Total Knee Replacement Consultation'}`
    );
    window.open(`https://wa.me/923214175761?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white text-brand-dark">
      {/* Breadcrumb Trail */}
      
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
                Total Knee Replacement Surgery in Lahore
              </h1>

              {/* Hero Supporting Copy */}
              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-[1.6]">
                <p>
                  Prof. Dr. Mumraiz Naqshband provides specialist assessment and surgical treatment for patients with advanced knee arthritis, joint damage and persistent knee pain.
                </p>
                <p>
                  Total knee replacement surgery involves replacing damaged knee joint surfaces with artificial components to improve joint function and relieve symptoms in appropriately selected patients.
                </p>
                <p>
                  As a Professor and Consultant Orthopaedic Surgeon with international specialist qualifications, Dr. Mumraiz Salik Naqshband offers knee replacement assessment and treatment planning, including consideration of robotic-assisted techniques using the CORI Surgical System where appropriate.
                </p>
              </div>

              {/* Hero Trust Highlights */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Professional Credentials & Experience
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-semibold text-brand-deep">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Professor & Consultant Orthopaedic Surgeon</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>M.B.C.H.B (New Zealand)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>F.R.A.C.S (Ortho) (Australia)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>F.R.C.S (Trauma & Ortho) (UK)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Over 20 Years of International Experience</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>CORI Robotic-Assisted Knee Replacement Expertise</span>
                  </div>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href="https://wa.me/923214175761?text=Hello%20Prof.%20Dr.%20Mumraiz%20Naqshband's%20clinic%2C%0A%0AI%20would%20like%20to%20book%20a%20Total%20Knee%20Replacement%20(TKR)%20consultation%20at%20BNI%20Lahore.%0APlease%20share%20available%20appointment%20slots."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenAppointment && onOpenAppointment("Total Knee Replacement")}
                  className="bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>

                <a
                  href="#what-is-total-knee-replacement"
                  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src="/assets/images/prof-dr-mumraiz-naqshband-clinical-rounds.jpg"
                    alt="Prof. Dr. Mumraiz Naqshband providing total knee replacement assessment in Lahore."
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white bg-brand-deep/85 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <div className="font-heading font-bold text-base sm:text-lg">
                      Prof. Dr. Mumraiz Naqshband
                    </div>
                    <div className="text-xs text-brand-teal font-medium">
                      Consultant Orthopaedic Surgeon & Joint Arthroplasty Specialist
                    </div>
                    <div className="text-[11px] text-white/80 mt-1">
                      Total Knee Arthroplasty (TKA) | BNI Lahore
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S02 — UNDERSTANDING TOTAL KNEE REPLACEMENT
          Anchor: what-is-total-knee-replacement
          ========================================================================= */}
      <section id="what-is-total-knee-replacement" className="py-16 lg:py-20 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
                Procedure Overview
              </span>
              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
                What Is Total Knee Replacement Surgery?
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-[1.7]">
              <p>
                Total knee replacement, also called total knee arthroplasty (TKA), is an operation in which damaged surfaces of the knee joint are replaced with artificial components.
              </p>
              <p>
                The knee is formed mainly by the lower end of the thigh bone (femur), the upper end of the shin bone (tibia) and the kneecap (patella).
              </p>
              <p>
                During total knee replacement, the surgeon removes or prepares damaged joint surfaces and positions artificial components designed to allow the joint to move and bear weight.
              </p>
              <p>
                The operation is most commonly considered for patients with advanced arthritis and significant symptoms that have not responded adequately to appropriate non-surgical treatment.
              </p>
              <p>
                Total knee replacement does not replace every bone or structure of the knee. It primarily replaces the damaged joint surfaces, with the exact technique depending on the patient's condition and surgical plan.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/knee-osteoarthritis-treatment/"
                className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-deep font-semibold text-sm group"
              >
                <span>Knee Osteoarthritis Treatment</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S03 — WHY TOTAL KNEE REPLACEMENT MAY BE NEEDED
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Clinical Indications
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              When Is Total Knee Replacement Recommended?
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Total knee replacement may be considered when knee joint disease causes significant pain, stiffness or functional limitations.
              </p>
              <p>
                A recommendation for surgery is based on symptoms, clinical examination, imaging findings, previous treatments and the patient's overall health.
              </p>
            </div>
          </div>

          {/* 5 H3 Indication Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Advanced Knee Osteoarthritis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Osteoarthritis can cause progressive damage to the cartilage and other structures of the knee joint. Patients may experience pain, swelling, stiffness and difficulty with movement.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Persistent Knee Pain
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pain that interferes with walking, standing, sleeping or daily activities may be relevant when considering surgical treatment.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Reduced Mobility
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Advanced joint disease can make it difficult to walk, climb stairs or perform routine tasks.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Knee Deformity or Restricted Movement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Some patients develop changes in knee alignment, stiffness or reduced range of movement due to advanced joint disease.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2 md:col-span-2 lg:col-span-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Inadequate Relief from Non-Surgical Treatment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Surgery may be discussed when appropriate non-surgical treatments have not provided sufficient symptom relief.
              </p>
            </div>

          </div>

          {/* Patient Guidance Box */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border text-slate-800 mb-8 space-y-2">
            <div className="font-bold text-sm sm:text-base text-brand-deep">
              Patient Guidance
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Knee pain alone does not mean a patient needs total knee replacement. The decision requires an individual specialist assessment.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/923214175761"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Book a Knee Assessment</span>
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S04 — CONDITIONS TREATED WITH TOTAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Diagnoses & Conditions
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Knee Conditions That May Lead to Total Knee Replacement
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              Total knee replacement may be considered for selected patients with significant damage affecting the knee joint.
            </p>
          </div>

          {/* 5 H3 Diagnostic Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Knee Osteoarthritis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Osteoarthritis is a common reason for knee replacement. It involves degenerative changes in joint cartilage and other knee structures.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Rheumatoid and Other Inflammatory Arthritis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Certain inflammatory joint conditions can cause significant knee damage. Surgical treatment may be considered when the disease is appropriately managed and joint symptoms remain severe.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Post-Traumatic Arthritis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Previous fractures or injuries involving the knee joint may contribute to arthritis and functional limitations later in life.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Severe Degenerative Joint Disease
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Advanced joint degeneration may lead to persistent pain, stiffness and difficulty with movement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm md:col-span-2 lg:col-span-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Selected Complex Joint Conditions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Some patients with significant joint damage or deformity may require individualised reconstructive assessment.
              </p>
            </div>

          </div>

          {/* Clinical Note */}
          <div className="p-4 rounded-xl bg-white border border-brand-border text-xs text-slate-600 leading-relaxed mb-6">
            <strong>Clinical Note:</strong> The specific diagnosis and treatment recommendation must be confirmed by the surgeon.
          </div>

          <div>
            <Link
              to="/arthritis-joint-pain/"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-deep font-semibold text-sm group"
            >
              <span>Arthritis & Joint Pain Management</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S05 — TOTAL KNEE REPLACEMENT VS PARTIAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Procedure Comparison
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Total Knee Replacement vs Partial Knee Replacement
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              Total and partial knee replacement are different surgical options used to treat selected patterns of knee joint damage.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl border border-brand-border shadow-sm overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-light/80 border-b border-brand-border text-brand-deep text-xs sm:text-sm font-heading font-bold">
                    <th className="py-4 px-5 sm:px-6">Feature</th>
                    <th className="py-4 px-5 sm:px-6 text-brand-blue">Total Knee Replacement</th>
                    <th className="py-4 px-5 sm:px-6 text-brand-teal">Partial Knee Replacement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Area Treated</td>
                    <td className="py-4 px-5 sm:px-6">Damaged joint surfaces across the knee as indicated</td>
                    <td className="py-4 px-5 sm:px-6">Damaged surfaces within a suitable part of the knee</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Typical Suitability</td>
                    <td className="py-4 px-5 sm:px-6">More extensive joint disease</td>
                    <td className="py-4 px-5 sm:px-6">Selected patients with localised joint damage</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Structures Preserved</td>
                    <td className="py-4 px-5 sm:px-6">Depends on the surgical technique</td>
                    <td className="py-4 px-5 sm:px-6">More unaffected joint structures may be retained</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Surgical Planning</td>
                    <td className="py-4 px-5 sm:px-6">Based on joint damage and clinical assessment</td>
                    <td className="py-4 px-5 sm:px-6">Requires appropriate joint and ligament conditions</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Treatment Decision</td>
                    <td className="py-4 px-5 sm:px-6">Made after specialist assessment</td>
                    <td className="py-4 px-5 sm:px-6">Made after specialist assessment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sub-block: H3 */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-brand-border space-y-4">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-deep">
              Which Knee Replacement Is Right for You?
            </h3>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                The choice depends on the location and extent of arthritis, ligament function, knee alignment, symptoms and individual circumstances.
              </p>
              <p>
                A surgeon may recommend total knee replacement when partial replacement is not appropriate.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                to="/partial-knee-replacement/"
                className="inline-flex items-center justify-center gap-2 bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition"
              >
                <span>Learn About Partial Knee Replacement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/923214175761"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S06 — CONVENTIONAL AND ROBOTIC-ASSISTED TOTAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Surgical Techniques
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Surgical Approaches to Total Knee Replacement
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              Total knee replacement may be performed using conventional surgical instruments or robotic-assisted technology, depending on the patient's condition, the surgeon's assessment and available equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Conventional Total Knee Replacement */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded inline-block">
                  Established Surgical Technique
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-deep">
                  Conventional Total Knee Replacement
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    In conventional total knee replacement, the surgeon uses established surgical instruments and techniques to prepare the joint and position the replacement components.
                  </p>
                  <p>
                    The surgeon plans and performs the procedure based on the patient's anatomy and clinical requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Robotic-Assisted Total Knee Replacement */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block">
                  Advanced Technology
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-deep">
                  Robotic-Assisted Total Knee Replacement
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    Robotic-assisted total knee replacement uses technology to support selected aspects of surgical planning and execution.
                  </p>
                  <p>
                    Prof. Dr. Mumraiz Naqshband's practice includes robotic-assisted knee replacement using the CORI Surgical System.
                  </p>
                  <p className="font-semibold text-brand-deep">
                    The surgeon remains responsible for the procedure and all clinical decisions.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sub-block: H3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border space-y-4 shadow-sm mb-6">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-deep">
              Does Robotic Assistance Guarantee Better Results?
            </h3>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                No. Robotic assistance provides different planning and surgical tools, but it does not guarantee improved outcomes for every patient.
              </p>
              <p>
                The appropriate approach depends on individual clinical circumstances and should be discussed with the surgeon.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                to="/robotic-assisted-knee-replacement/"
                className="inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
              >
                <span>Explore CORI Robotic-Assisted Knee Replacement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/robotic-knee-replacement/"
                className="inline-flex items-center justify-center gap-2 bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition"
              >
                <span>Robotic Knee Replacement Overview</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S07 — HOW TOTAL KNEE REPLACEMENT SURGERY IS PERFORMED
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Surgical Stages
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              How Is Total Knee Replacement Surgery Performed?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              Total knee replacement involves several stages. The precise surgical technique varies according to the patient's anatomy, joint condition and selected surgical approach.
            </p>
          </div>

          {/* 6 Surgical Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal font-bold font-heading text-sm flex items-center justify-center mb-2">
                01
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Step 1 — Anaesthesia and Surgical Preparation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The patient receives an appropriate form of anaesthesia, and the surgical team prepares the knee for the operation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue font-bold font-heading text-sm flex items-center justify-center mb-2">
                02
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Step 2 — Accessing the Knee Joint
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon makes an incision to access the knee joint and assess the damaged surfaces.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal font-bold font-heading text-sm flex items-center justify-center mb-2">
                03
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Step 3 — Preparing Damaged Joint Surfaces
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon removes or prepares the affected joint surfaces to accommodate the artificial components.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue font-bold font-heading text-sm flex items-center justify-center mb-2">
                04
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Step 4 — Positioning the Knee Replacement Components
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Artificial components are positioned to replace the prepared joint surfaces.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal font-bold font-heading text-sm flex items-center justify-center mb-2">
                05
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Step 5 — Assessing Joint Movement and Stability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon evaluates the reconstructed knee, including relevant aspects of movement, alignment and stability.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue font-bold font-heading text-sm flex items-center justify-center mb-2">
                06
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Step 6 — Wound Closure and Recovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The wound is closed, and the patient is transferred for postoperative monitoring and care.
              </p>
            </div>

          </div>

          {/* Important Note */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong>Important Note:</strong> This is a simplified educational description. The actual technique depends on the surgeon's clinical plan and intraoperative findings.
          </div>

        </div>
      </section>


      {/* =========================================================================
          S08 — KNEE REPLACEMENT IMPLANTS AND MATERIALS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Prosthetic Components
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              What Is a Total Knee Replacement Implant?
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                A total knee replacement implant is made up of artificial components designed to replace damaged joint surfaces.
              </p>
              <p>
                Implants commonly include metal components and a specialised plastic bearing surface.
              </p>
              <p>
                The exact implant design, materials and fixation method depend on the patient's condition, anatomy and the surgeon's treatment plan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            
            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Femoral Component
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The femoral component covers the prepared surface of the lower end of the thigh bone.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Tibial Component
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The tibial component replaces the prepared upper joint surface of the shin bone, typically with a bearing surface between the components.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Patellar Component
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The undersurface of the kneecap may be resurfaced in selected cases, depending on the surgeon's assessment and technique.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Implant Selection
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon considers relevant factors such as joint anatomy, bone quality, stability and individual patient requirements when selecting an implant.
              </p>
            </div>

          </div>

          {/* Patient Information Box */}
          <div className="p-4 rounded-xl bg-white border border-brand-border text-xs text-slate-600 leading-relaxed">
            <strong>Patient Information:</strong> No implant can be guaranteed to last for a specific period. Long-term performance depends on several factors.
          </div>

        </div>
      </section>


      {/* =========================================================================
          S09 — PREPARING FOR TOTAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Preoperative Preparation
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              How to Prepare for Total Knee Replacement Surgery
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              Preparation begins with a specialist consultation and assessment of the patient's knee condition and overall health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Medical Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The clinical team reviews the patient's medical history, current medications and conditions that may affect surgical risk.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Knee Imaging
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                X-rays and other investigations may be recommended to assess joint damage and support surgical planning.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Review of Existing Conditions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conditions such as diabetes, cardiovascular disease or other medical problems may require assessment or optimisation before surgery.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Medication Instructions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients receive individual advice about medication use before surgery. Prescribed medication should not be stopped without appropriate medical guidance.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Preparing the Home
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Arranging assistance, reducing fall hazards and planning for mobility needs may help patients prepare for recovery.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Informed Consent
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon discusses the proposed procedure, risks, benefits, alternatives and expected recovery process.
              </p>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong>Important Note:</strong> Preoperative instructions vary. Patients should follow the advice given by their treating team.
          </div>

        </div>
      </section>


      {/* =========================================================================
          S10 — RECOVERY AFTER TOTAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Postoperative Care
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              What to Expect After Total Knee Replacement
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              Recovery after total knee replacement varies between patients and depends on the procedure, general health, mobility before surgery, rehabilitation and other clinical factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Immediately After Surgery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The clinical team monitors the patient's condition, manages pain and assesses recovery from anaesthesia.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Early Mobilisation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients are generally encouraged to begin appropriate movement when clinically safe and according to the treating team's instructions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Physiotherapy and Rehabilitation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rehabilitation commonly includes exercises to improve knee movement, strength and walking ability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Wound Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients receive instructions on wound care and signs of complications that require medical attention.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Follow-Up Appointments
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Follow-up visits help assess wound healing, knee movement, function and overall recovery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Returning to Daily Activities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The timing of returning to driving, work, exercise and other activities depends on individual recovery and medical advice.
              </p>
            </div>

          </div>

          {/* Patient Guidance Box */}
          <div className="bg-white rounded-2xl p-6 border border-brand-border text-slate-800 mb-8 space-y-1 shadow-sm">
            <div className="font-bold text-sm sm:text-base text-brand-deep">
              Patient Guidance
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              There is no single recovery timeline suitable for everyone. Patients should follow their surgeon's personalised instructions.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/923214175761"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Discuss Knee Replacement Recovery</span>
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S11 — BENEFITS, EXPECTATIONS AND LIMITATIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Outcomes & Expectations
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              What Are the Potential Benefits of Total Knee Replacement?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              For appropriately selected patients, total knee replacement aims to relieve symptoms caused by significant joint damage and improve knee function.
            </p>
            <p className="text-slate-600 text-sm sm:text-base font-semibold">
              Potential benefits may include:
            </p>
          </div>

          {/* 5 Benefits Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Reduction in arthritis-related knee pain</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Improved ability to perform everyday activities</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Improved joint movement or function</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Improved walking ability</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3 sm:col-span-2 lg:col-span-2">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Better quality of life related to reduced joint symptoms</span>
            </div>
          </div>

          {/* Sub-block: H3 */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-brand-border space-y-3">
            <h3 className="font-heading font-bold text-xl text-brand-deep">
              What Should Patients Understand Before Surgery?
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0"></span>
                <span>Results vary between individuals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0"></span>
                <span>Some patients may continue to experience pain, stiffness, swelling or functional limitations after surgery.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0"></span>
                <span>Knee replacement does not restore a completely natural knee, and patients may still need to modify certain activities.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0"></span>
                <span>The surgeon should discuss realistic expectations based on the patient's condition.</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 pt-2 italic">
              Important Note: Do not promise complete pain relief, unrestricted movement, guaranteed recovery or permanent implant function.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S12 — RISKS AND POSSIBLE COMPLICATIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full inline-block">
              Surgical Risks
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Risks of Total Knee Replacement Surgery
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Total knee replacement is a major operation and carries potential risks.
              </p>
              <p className="text-slate-600 text-sm sm:text-base font-semibold">
                These may include:
              </p>
            </div>
          </div>

          {/* 12 Risk Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Infection</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Blood clots</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Bleeding</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Wound healing problems</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Persistent pain</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Knee stiffness</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Nerve or blood vessel injury</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Implant loosening or wear</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Instability</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Fracture</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Anaesthetic complications</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-brand-border flex items-start gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">The possibility of revision surgery</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
            The risk of complications varies according to the patient's health, surgical circumstances and other individual factors.
          </p>

          {/* Sub-block: H3 Red Flags */}
          <div className="bg-amber-50/90 rounded-2xl p-6 border border-amber-200 text-amber-950 mb-6 space-y-2">
            <h3 className="font-heading font-bold text-base sm:text-lg text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>When Should You Seek Urgent Medical Attention?</span>
            </h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              After surgery, seek urgent medical assessment for chest pain, sudden shortness of breath, significant new leg swelling, severe bleeding or other symptoms that may indicate a serious complication.
            </p>
            <p className="text-xs text-amber-800 leading-relaxed pt-1">
              Patients should also contact their treating team promptly if they develop fever, increasing wound redness, drainage or worsening symptoms.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-sm">
            <strong>Medical Disclaimer:</strong> This content is general patient education and does not replace advice from the treating surgeon.
          </div>

        </div>
      </section>


      {/* =========================================================================
          S13 — WHEN TOTAL KNEE REPLACEMENT MAY NOT BE APPROPRIATE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Contraindications & Alternatives
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Is Total Knee Replacement Suitable for Everyone?
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Not everyone with knee arthritis or knee pain needs total knee replacement.
              </p>
              <p>
                The surgeon considers whether the expected benefits of surgery outweigh the potential risks.
              </p>
              <p className="text-slate-600 text-sm sm:text-base font-semibold">
                Factors requiring careful assessment may include:
              </p>
            </div>
          </div>

          {/* 6 Assessment Factors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border">
              <span className="text-slate-700 text-sm font-medium">Mild symptoms that respond to non-surgical treatment</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border">
              <span className="text-slate-700 text-sm font-medium">Active infection</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border">
              <span className="text-slate-700 text-sm font-medium">Medical conditions that increase surgical risk</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border">
              <span className="text-slate-700 text-sm font-medium">Poorly controlled existing health conditions</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border">
              <span className="text-slate-700 text-sm font-medium">Inadequate preparation for postoperative recovery</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border">
              <span className="text-slate-700 text-sm font-medium">Conditions where another procedure may be more appropriate</span>
            </div>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
            The presence of a risk factor does not always mean surgery is impossible. Treatment decisions require individual medical assessment.
          </p>

          <div className="pt-2">
            <Link
              to="/non-surgical-joint-treatment/"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-deep text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
            >
              <span>Explore Non-Surgical Joint Treatment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S14 — MEET YOUR TOTAL KNEE REPLACEMENT SURGEON
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
                Surgical Leadership
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
                Prof. Dr. Mumraiz Naqshband — Knee Replacement Surgeon in Lahore
              </h2>

              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Dr. Mumraiz Salik Naqshband is a Professor and Consultant Orthopaedic Surgeon with international medical and specialist surgical qualifications.
                </p>
                <p>
                  His professional background includes over 20 years of international experience, with clinical interests in knee and hip replacement, robotic-assisted knee surgery, arthroscopy and orthopaedic trauma.
                </p>
                <p>
                  His knee replacement practice includes assessment, treatment planning and selected surgical procedures using conventional or robotic-assisted techniques, where appropriate.
                </p>
              </div>

              {/* 3 H3 Credentials Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                
                {/* H3: Professional Qualifications */}
                <div className="bg-white rounded-2xl p-5 border border-brand-border space-y-2">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Award className="w-4 h-4 text-brand-teal" />
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-brand-deep">
                      Professional Qualifications
                    </h3>
                  </div>
                  <ul className="space-y-1 text-xs sm:text-sm text-slate-700 font-semibold">
                    <li>• M.B.C.H.B (New Zealand)</li>
                    <li>• F.R.A.C.S (Ortho) (Australia)</li>
                    <li>• F.R.C.S (Trauma & Ortho) (UK)</li>
                  </ul>
                </div>

                {/* H3: Professional Role */}
                <div className="bg-white rounded-2xl p-5 border border-brand-border space-y-2">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Building2 className="w-4 h-4 text-brand-teal" />
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-brand-deep">
                      Professional Role
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Professor and Consultant Orthopaedic Surgeon.
                  </p>
                </div>

                {/* H3: Specialist Expertise */}
                <div className="bg-white rounded-2xl p-5 border border-brand-border space-y-2 sm:col-span-2">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Activity className="w-4 h-4 text-brand-teal" />
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-brand-deep">
                      Specialist Expertise
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Knee replacement, robotic-assisted knee replacement using CORI, hip replacement, joint reconstruction and arthroscopic surgery.
                  </p>
                </div>

              </div>

              <div className="pt-2">
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-deep text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
                >
                  <span>About Prof. Dr. Mumraiz Naqshband</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Doctor Photo */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/images/prof-dr-mumraiz-naqshband-portrait.jpg"
                  alt="Prof. Dr. Mumraiz Naqshband, Consultant Orthopaedic Surgeon."
                  className="w-full h-auto object-cover"
                />
                <div className="p-5 bg-white border-t border-slate-100 text-left">
                  <div className="font-heading font-bold text-base text-brand-deep">
                    Prof. Dr. Mumraiz Naqshband
                  </div>
                  <div className="text-xs text-slate-500">
                    Consultant Orthopaedic Surgeon & Knee Arthroplasty Specialist
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S15 — CONSULTATION LOCATIONS IN LAHORE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Clinic Appointments
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Total Knee Replacement Consultation in Lahore
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
              Patients considering total knee replacement can enquire about consultations with Prof. Dr. Mumraiz Naqshband at the following locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Card 1: BNI */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-brand-border flex flex-col justify-between shadow-card hover:shadow-card-hover transition-all">
              <div className="space-y-4">
                {/* H3 */}
                <h3 className="font-heading font-semibold text-xl text-brand-deep">
                  Bashir NeuroSpine Institute (BNI)
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1 Shadman, Lahore, 54000, Pakistan.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Phone: 0321 4175761</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-3">
                <Link
                  to="/bashir-neurospine-institute/"
                  className="py-2.5 px-4 rounded-xl bg-brand-teal hover:bg-brand-tealHover text-white font-semibold text-xs transition"
                >
                  View Bashir NeuroSpine Institute
                </Link>
                <a
                  href="https://wa.me/923214175761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-brand-deep border border-brand-border font-semibold text-xs transition flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Book at BNI</span>
                </a>
              </div>
            </div>

            {/* Card 2: Bahria International Hospitals */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-brand-border flex flex-col justify-between shadow-card hover:shadow-card-hover transition-all">
              <div className="space-y-4">
                {/* H3 */}
                <h3 className="font-heading font-semibold text-xl text-brand-deep">
                  Bahria International Hospitals
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <p className="text-slate-600">
                    Consultation availability and location information can be confirmed through the appointment team.
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Address and Timings: Pending confirmation.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-3">
                <Link
                  to="/bahria-international-hospitals/"
                  className="py-2.5 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition"
                >
                  View Bahria International Hospitals
                </Link>
                <a
                  href="tel:+923214175761"
                  className="py-2.5 px-4 rounded-xl bg-slate-200 hover:bg-slate-300 text-brand-deep font-semibold text-xs transition flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call 0321 4175761</span>
                </a>
              </div>
            </div>

          </div>

          {/* Important Distinction Note */}
          <div className="bg-brand-light/70 rounded-2xl p-6 border border-brand-border text-slate-800 mb-8 space-y-1">
            <div className="font-bold text-sm sm:text-base text-brand-deep">
              Important Note
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The hospital where surgery is performed may differ from the consultation location. Confirm the operating facility directly.
            </p>
          </div>

          <div className="text-left">
            <Link
              to="/clinic-locations/"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-deep font-semibold text-sm group"
            >
              <span>View Clinic Locations</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S16 — FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Patient Information
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Frequently Asked Questions About Total Knee Replacement
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What is total knee replacement surgery?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Total knee replacement is a surgical procedure in which damaged knee joint surfaces are replaced with artificial components to treat significant joint damage and improve function in appropriately selected patients.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>When is total knee replacement recommended?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                It may be considered when advanced knee arthritis or joint damage causes persistent pain and functional limitations despite appropriate non-surgical treatment.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Is total knee replacement the same as total knee arthroplasty?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Yes. Total knee replacement and total knee arthroplasty are commonly used terms for the same procedure.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Does total knee replacement remove the entire knee?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                No. The operation primarily replaces damaged joint surfaces rather than removing the entire knee.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What is the difference between total and partial knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Total knee replacement treats more extensive joint damage, while partial knee replacement treats selected localised damage when the patient's joint condition meets the relevant criteria.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Can total knee replacement be performed with robotic assistance?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Yes. Selected total knee replacement procedures can be performed using robotic-assisted technology, depending on the system, surgical plan and patient suitability.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Does Prof. Dr. Mumraiz Naqshband offer robotic-assisted knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Yes. His practice includes robotic-assisted knee replacement using the CORI Surgical System. The appropriate procedure is determined after clinical assessment.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How long does total knee replacement surgery take?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                The duration varies depending on the procedure, patient and surgical circumstances. The treating team can provide an individual estimate.
              </p>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How long does recovery take?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Recovery differs between patients. Rehabilitation, general health and the type of procedure all influence recovery milestones.
              </p>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Will I need physiotherapy after surgery?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Rehabilitation and exercises are commonly recommended after total knee replacement to support movement, strength and functional recovery.
              </p>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How long does a knee replacement implant last?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Implant longevity varies. It depends on the implant, patient factors, activity level and other clinical circumstances. No specific lifespan can be guaranteed.
              </p>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What are the risks of total knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Potential risks include infection, blood clots, stiffness, persistent pain, implant-related complications and other surgical or anaesthetic complications.
              </p>
            </details>

            {/* FAQ 13 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Is total knee replacement suitable for older adults?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Age alone does not determine suitability. The surgeon considers general health, symptoms, joint condition, functional needs and surgical risks.
              </p>
            </details>

            {/* FAQ 14 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Where can I consult Prof. Dr. Mumraiz Naqshband?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Consultation enquiries can be made for Bashir NeuroSpine Institute, Jail Road, Shadman, Lahore, and Bahria International Hospitals. Confirm appointment availability and location when booking.
              </p>
            </details>

            {/* FAQ 15 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How can I book a total knee replacement consultation?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Call 0321 4175761 or contact the appointment team through WhatsApp at https://wa.me/923214175761.
              </p>
            </details>

          </div>

          <div className="mt-10 text-center">
            <Link
              to="/faqs/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-deep transition"
            >
              <span>View All Frequently Asked Questions</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S17 & B5.5 / B5.6 — FINAL APPOINTMENT CTA & ENQUIRY FORM
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-brand-light/60 text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
                Surgical Consultation
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold font-heading text-brand-deep leading-[1.2]">
                Book a Total Knee Replacement Consultation in Lahore
              </h2>

              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  If persistent knee pain, advanced arthritis or reduced mobility is affecting your daily activities, a specialist orthopaedic consultation can help determine whether total knee replacement or another treatment may be appropriate.
                </p>
                <p>
                  Consult Prof. Dr. Mumraiz Naqshband to discuss your knee condition, surgical options, potential risks and expected recovery.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/923214175761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </a>

                <a
                  href="tel:+923214175761"
                  className="bg-white hover:bg-slate-50 border border-brand-border text-brand-deep px-6 py-3.5 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Call 0321 4175761</span>
                </a>
              </div>

              {/* Supporting Text */}
              <p className="text-xs text-slate-500 pt-1">
                Please confirm the clinic location and appointment availability when booking.
              </p>
            </div>

            {/* Right Column: Enquiry Form (B5.6) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-border">
                
                <h3 className="text-xl font-bold font-heading text-brand-deep mb-1">
                  Book a Total Knee Replacement Consultation
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Please complete the form below to reach our appointment desk.
                </p>

                {formSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold font-heading text-brand-deep">
                      Enquiry Received
                    </h4>
                    {/* Approved Success Message */}
                    <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for your enquiry. Your message has been received. Our appointment team will contact you regarding consultation arrangements.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={handleWhatsAppBooking}
                        className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-md inline-flex items-center gap-2"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Confirm via WhatsApp Direct</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-sm transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                          Phone Number *
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

                    <div>
                      <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                        Preferred Clinic Location *
                      </label>
                      <select
                        value={formData.preferredClinic}
                        onChange={(e) => setFormData({ ...formData, preferredClinic: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-sm bg-white transition"
                      >
                        <option value="BNI - Bashir NeuroSpine Institute, Lahore">
                          BNI - Bashir NeuroSpine Institute (18 Jail Rd, Shadman 1, Lahore)
                        </option>
                        <option value="Bahria International Hospitals, Lahore">
                          Bahria International Hospitals (Takbeer Block Sector B, Bahria Town, Lahore)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                        Appointment Enquiry / Symptoms *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Please briefly outline your knee symptoms, previous treatments or enquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-sm transition"
                      ></textarea>
                    </div>

                    {/* Privacy Acknowledgement Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={formData.privacyAcknowledged}
                          onChange={(e) => setFormData({ ...formData, privacyAcknowledged: e.target.checked })}
                          className="mt-1 w-4 h-4 rounded text-brand-teal focus:ring-brand-teal border-brand-border"
                        />
                        <span className="text-xs text-slate-600 leading-normal">
                          I acknowledge that information submitted through this form will be handled according to the website's{' '}
                          <Link to="/privacy-policy/" className="text-brand-blue underline hover:text-brand-deep">
                            Privacy Policy
                          </Link>.
                        </span>
                      </label>
                    </div>

                    {/* Privacy Note */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                      Please avoid submitting detailed medical records or sensitive health documents through the general enquiry form. Information submitted will be handled according to the website's{' '}
                      <Link to="/privacy-policy/" className="text-brand-blue underline">
                        privacy policy
                      </Link>.
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 bg-brand-teal hover:bg-brand-tealHover text-white font-semibold py-3 px-6 rounded-xl shadow-md transition text-xs sm:text-sm flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Submit Consultation Enquiry</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition text-xs sm:text-sm flex items-center justify-center gap-2"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Enquire via WhatsApp</span>
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
