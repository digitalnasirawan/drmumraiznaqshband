import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ChevronRight, Phone, Calendar, 
  MapPin, Shield, AlertTriangle, Sparkles, Activity, Cpu, 
  Layers, CheckCircle, HelpCircle, Building2, Clock, Award,
  FileText, Stethoscope, AlertCircle
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageSeo } from '../utils/seo';
import { Link } from '../utils/navigation';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function CoriRoboticKneePage({ onOpenAppointment }) {
  // B2. Search, Social and Indexing Metadata
  usePageSeo({
    title: "CORI Robotic Knee Replacement Lahore | Dr. Mumraiz Naqshband",
    description: "Learn how the CORI Surgical System supports robotic-assisted knee replacement, who may be suitable, what to expect and how to consult Dr. Mumraiz Naqshband.",
    canonicalUrl: "/robotic-assisted-knee-replacement/"
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
      `Hello, I would like to consult Prof. Dr. Mumraiz Naqshband regarding CORI Robotic-Assisted Knee Replacement.\n\n` +
      `Name: ${formData.fullName || 'Not provided'}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Preferred Clinic: ${formData.preferredClinic}\n` +
      `Enquiry: ${formData.message || 'CORI Robotic Knee Replacement'}`
    );
    window.open(`https://wa.me/923214175761?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white text-brand-dark">
      {/* Breadcrumb Trail */}
      <Breadcrumb 
        items={[
          { label: "Services", url: "/services/" },
          { label: "Robotic Knee Replacement", url: "/robotic-knee-replacement/" },
          { label: "CORI Robotic-Assisted Knee Replacement", url: "/robotic-assisted-knee-replacement/" }
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
                <Cpu className="w-3.5 h-3.5 text-brand-teal" />
                <span>CORI Surgical System | Robotic-Assisted Knee Replacement</span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-brand-deep tracking-tight leading-[1.2]">
                CORI Robotic-Assisted Knee Replacement in Lahore
              </h1>

              {/* Intro / Supporting Copy */}
              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-[1.6]">
                <p>
                  Prof. Dr. Mumraiz Naqshband performs robotic-assisted knee replacement using the CORI Surgical System, a technology designed to support the surgeon during selected aspects of knee replacement surgery.
                </p>
                <p>
                  The system assists with surgical planning, assessment of knee anatomy and guided bone preparation. The surgeon remains responsible for the procedure and makes the clinical decisions throughout the operation.
                </p>
                <p>
                  If you are considering knee replacement for arthritis or significant joint damage, a specialist assessment can help determine which treatment approach may be appropriate.
                </p>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/923214175761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-teal hover:bg-brand-tealHover text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book a Knee Consultation</span>
                </a>

                <a
                  href="#how-cori-works"
                  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                >
                  <span>How CORI Works</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Smith+Nephew CORI System</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Surgeon-Controlled Platform</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>CT-Free 3D Joint Mapping</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src="/assets/images/prof-dr-mumraiz-naqshband-clinical-rounds.jpg"
                    alt="CORI robotic-assisted knee replacement system used in orthopaedic surgery, if accurately shown."
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white bg-brand-deep/85 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <div className="font-heading font-bold text-base sm:text-lg">
                      CORI Surgical Platform
                    </div>
                    <div className="text-xs text-brand-teal font-medium">
                      Smith+Nephew Robotic-Assisted Arthroplasty
                    </div>
                    <div className="text-[11px] text-white/80 mt-1">
                      Consultation with Prof. Dr. Mumraiz Naqshband | Lahore
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S02 — UNDERSTANDING CORI TECHNOLOGY
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
                Technology Overview
              </span>
              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
                What Is the CORI Surgical System?
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-[1.7]">
              <p>
                The CORI Surgical System is a robotic-assisted technology developed by Smith+Nephew for use in selected knee replacement procedures.
              </p>
              <p>
                It is designed to support the surgeon in planning and carrying out aspects of the operation, including assessing knee anatomy and guiding bone preparation.
              </p>
              <p>
                The system uses information collected during surgery to help the surgeon plan the positioning of replacement components according to the patient's anatomy and the surgical requirements.
              </p>
              <p>
                CORI is a surgeon-controlled system. It does not independently decide which operation a patient needs or perform the procedure without the surgeon.
              </p>
              <p>
                The suitability of CORI-assisted surgery depends on the type of knee replacement, the patient's condition and the system's supported applications.
              </p>
            </div>

            {/* Sub-block: H3 */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-3 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                What Does Robotic Assistance Mean?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In knee replacement surgery, robotic assistance refers to technology that helps the surgeon plan or execute selected parts of the operation.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The surgeon remains in control of the procedure, interprets the information provided by the system and makes the clinical decisions.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/robotic-knee-replacement/"
                className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-deep font-semibold text-sm group"
              >
                <span>Robotic Knee Replacement Overview</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S03 — HOW CORI-ASSISTED KNEE REPLACEMENT WORKS
          Anchor: how-cori-works
          ========================================================================= */}
      <section id="how-cori-works" className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Surgical Workflow
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              How Does CORI Robotic-Assisted Knee Replacement Work?
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                CORI-assisted knee replacement combines the surgeon's expertise with technology that provides information and guidance during selected stages of surgery.
              </p>
              <p>
                The exact workflow depends on the type of knee replacement being performed and the system configuration used.
              </p>
            </div>
          </div>

          {/* Five Sequential Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal font-bold font-heading text-sm flex items-center justify-center mb-4">
                  01
                </div>
                {/* H3 */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Step 1 — Assessment of the Knee
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  During the procedure, the surgeon assesses the knee and uses the system to collect information relevant to the surgical plan.
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  This information helps describe aspects of the patient's knee anatomy and joint condition.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue font-bold font-heading text-sm flex items-center justify-center mb-4">
                  02
                </div>
                {/* H3 */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Step 2 — Surgical Planning
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The surgeon uses the available information to plan the procedure, including relevant considerations for implant positioning and knee alignment.
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  The surgical plan is reviewed and adjusted according to the patient's anatomy and clinical requirements.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal font-bold font-heading text-sm flex items-center justify-center mb-4">
                  03
                </div>
                {/* H3 */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Step 3 — Guided Bone Preparation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The CORI system assists with bone preparation according to the selected surgical plan.
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  The surgeon operates the instruments and remains responsible for the procedure.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue font-bold font-heading text-sm flex items-center justify-center mb-4">
                  04
                </div>
                {/* H3 */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Step 4 — Implant Placement
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The surgeon places the knee replacement components and assesses their positioning and the function of the joint.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal font-bold font-heading text-sm flex items-center justify-center mb-4">
                  05
                </div>
                {/* H3 */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Step 5 — Final Assessment and Closure
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The surgeon evaluates the reconstructed joint, completes the procedure and closes the surgical wound according to the planned approach.
                </p>
              </div>
            </div>

          </div>

          {/* Clinical Note */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong>Clinical Note:</strong> This is a simplified educational overview. The exact workflow, supported features and sequence must be reviewed by the operating surgeon before publication.
          </div>

        </div>
      </section>


      {/* =========================================================================
          S04 — CORI SURGICAL PLANNING AND TECHNOLOGY FEATURES
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Platform Features
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Key Features of CORI-Assisted Knee Replacement
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              The CORI system provides technology intended to support the surgeon during knee replacement surgery.
            </p>
          </div>

          {/* 5 H3 Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center mb-2">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Intraoperative Anatomical Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The system can use information gathered during the operation to support assessment of the knee and development of the surgical plan.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-2">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Patient-Specific Surgical Planning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Planning can take account of the patient's knee anatomy and relevant surgical considerations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center mb-2">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Guided Bone Preparation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The system provides assistance during selected bone preparation steps according to the surgical plan.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-2">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Intraoperative Plan Review
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon can review relevant information during surgery and make clinical adjustments when appropriate.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center mb-2">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Surgeon-Controlled Operation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon directs the operation and is responsible for interpreting the information provided by the technology.
              </p>
            </div>

          </div>

          {/* Important Limitation Box */}
          <div className="bg-white rounded-2xl p-6 border border-brand-border text-slate-800 mb-8 space-y-2 shadow-sm">
            <div className="font-bold text-sm sm:text-base text-brand-deep flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>Important Limitation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Technological capabilities do not establish that CORI-assisted knee replacement is superior for every patient. Claims about precision, outcomes, recovery or implant longevity require appropriately relevant clinical evidence.
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
              <span>Discuss CORI-Assisted Surgery</span>
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S05 — WHO MAY BE SUITABLE FOR CORI-ASSISTED KNEE REPLACEMENT?
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Clinical Assessment
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Who May Be Considered for CORI Robotic Knee Replacement?
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                CORI-assisted knee replacement may be considered for selected patients who require knee replacement surgery.
              </p>
              <p>
                A recommendation for surgery depends on the underlying diagnosis, symptoms, joint damage, overall health and response to appropriate non-surgical treatment.
              </p>
            </div>
          </div>

          {/* 5 H3 Eligibility Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Advanced Knee Osteoarthritis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients with advanced osteoarthritis may experience persistent pain, stiffness and reduced mobility.
              </p>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                When symptoms remain significant despite appropriate non-surgical treatment, knee replacement may be considered.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Significant Joint Damage
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Some patients develop substantial joint damage that affects movement and daily function.
              </p>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                The surgeon assesses the extent of damage and whether replacement surgery is appropriate.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Persistent Functional Limitations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Difficulty walking, standing, climbing stairs or carrying out routine activities may be relevant when considering treatment options.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Suitability for a Supported Procedure
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon must confirm that the planned procedure is appropriate for the patient's condition and supported by the available CORI system configuration.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2 md:col-span-2 lg:col-span-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Overall Medical Fitness
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                General health, existing medical conditions and surgical risk factors are considered before recommending an operation.
              </p>
            </div>

          </div>

          {/* Patient Guidance Box */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border text-slate-800 mb-8 space-y-2">
            <div className="font-bold text-sm sm:text-base text-brand-deep">
              Patient Guidance
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Not everyone with knee arthritis requires surgery, and not every patient who needs knee replacement is necessarily suitable for robotic assistance.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/knee-osteoarthritis-treatment/"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-deep text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
            >
              <span>Knee Osteoarthritis Treatment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S06 — TOTAL AND PARTIAL KNEE REPLACEMENT WITH CORI
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Surgical Applications
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              CORI Technology in Total and Partial Knee Replacement
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Knee replacement procedures differ according to the areas of the joint that need treatment.
              </p>
              <p>
                Robotic assistance may be used in selected total or partial knee replacement procedures, subject to the system's supported applications and the surgeon's assessment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Total Knee Replacement */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded border border-blue-100 inline-block">
                  Complete Joint Resurfacing
                </span>
                {/* H3 */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-deep">
                  Total Knee Replacement
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Total knee replacement involves replacing the damaged joint surfaces of the knee with artificial components.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  It may be considered when significant joint disease affects multiple areas of the knee and the patient meets the relevant surgical criteria.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/total-knee-replacement/"
                  className="w-full py-3 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition flex items-center justify-center gap-2"
                >
                  <span>Total Knee Replacement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Partial Knee Replacement */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block">
                  Compartment-Specific Resurfacing
                </span>
                {/* H3 */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-deep">
                  Partial Knee Replacement
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Partial knee replacement involves replacing the damaged surfaces within a suitable part of the knee while retaining structures that do not require replacement.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  It may be considered when the pattern of joint damage and other clinical factors make the procedure appropriate.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/partial-knee-replacement/"
                  className="w-full py-3 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition flex items-center justify-center gap-2"
                >
                  <span>Partial Knee Replacement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* H3: Which Procedure Is Appropriate? */}
          <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-3 shadow-sm">
            <h3 className="font-heading font-semibold text-lg text-brand-deep">
              Which Procedure Is Appropriate?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The surgeon considers the extent of arthritis, ligament function, knee alignment, symptoms and other clinical factors when recommending a procedure.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Robotic assistance is a surgical tool and does not determine whether total or partial knee replacement is required.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S07 — BENEFITS AND LIMITATIONS OF ROBOTIC ASSISTANCE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Balanced Evidence
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Potential Benefits and Limitations of CORI-Assisted Surgery
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              Robotic-assisted systems are designed to provide information and technical support during selected stages of knee replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Potential Advantages */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-brand-border space-y-4">
              <h3 className="font-heading font-bold text-xl text-brand-deep flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                <span>Potential Advantages of the Technology</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                CORI-assisted surgery may provide the surgeon with:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0"></span>
                  <span>Additional information for surgical planning</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0"></span>
                  <span>Intraoperative assessment of knee anatomy</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0"></span>
                  <span>Assistance with planned bone preparation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0"></span>
                  <span>Tools to review aspects of component positioning</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0"></span>
                  <span>Opportunities to assess and adjust the surgical plan</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 pt-2 italic">
                These are technology-related capabilities, not guarantees of improved patient outcomes.
              </p>
            </div>

            {/* Important Limitations */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-brand-border space-y-4">
              <h3 className="font-heading font-bold text-xl text-brand-deep flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <span>Important Limitations</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>Robotic assistance does not eliminate surgical risks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>It does not guarantee pain relief or faster recovery.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>It does not guarantee a longer-lasting implant.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>Not every patient or procedure is suitable.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>The quality of treatment depends on multiple factors, including surgical judgement, patient health and rehabilitation.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Sub-block: H3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border space-y-3 shadow-sm">
            <h3 className="font-heading font-bold text-xl text-brand-deep">
              Does Robotic Assistance Guarantee Better Results?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              No. Robotic assistance provides additional tools for the surgeon, but individual outcomes vary.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The available evidence, expected benefits and limitations should be discussed in relation to the patient's circumstances and the procedure being considered.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/923214175761"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Book a Specialist Consultation</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S08 — PREPARING FOR CORI-ASSISTED KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Preoperative Pathway
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              How to Prepare for Robotic-Assisted Knee Replacement
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              Preparation for knee replacement begins with a detailed consultation and assessment of the patient's overall health and knee condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Clinical Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon reviews symptoms, medical history, previous treatments and the impact of knee pain on daily activities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Imaging and Investigations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                X-rays and other investigations may be recommended to evaluate the joint and support treatment planning.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Medical Fitness Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients may require assessment of existing medical conditions, medications and factors that could affect surgical risk.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Medication Review
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The clinical team may provide instructions about medications before surgery. Patients should not stop prescribed medicines without advice from their treating clinician.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Planning for Recovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients may be advised to prepare their home environment, arrange assistance and discuss rehabilitation needs before surgery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Informed Consent
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before surgery, the surgeon should explain the proposed procedure, potential benefits, risks, alternatives and expected recovery process.
              </p>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-white border border-brand-border text-xs text-slate-600 leading-relaxed">
            <strong>Important Note:</strong> Individual preparation instructions may differ. Patients should follow the specific advice provided by their treating team.
          </div>

        </div>
      </section>


      {/* =========================================================================
          S09 — WHAT TO EXPECT DURING SURGERY
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
                Day of Surgery
              </span>
              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
                What Happens During CORI-Assisted Knee Replacement Surgery?
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-[1.7]">
              <p>
                The surgical team prepares the patient for the planned procedure, including appropriate anaesthesia and monitoring.
              </p>
              <p>
                The surgeon accesses the knee joint and assesses the affected structures.
              </p>
              <p>
                The CORI system is used during selected stages of the operation to support surgical planning and guided bone preparation.
              </p>
              <p>
                The surgeon prepares the relevant joint surfaces, places the artificial components and assesses the reconstructed joint.
              </p>
              <p>
                After the procedure is completed, the wound is closed and the patient is monitored during the initial recovery period.
              </p>
              <p>
                The precise technique and sequence depend on whether a total or partial knee replacement is performed, the patient's anatomy and the surgeon's clinical decisions.
              </p>
            </div>

            {/* Patient Information Notice */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-brand-border text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Patient Information:</strong> The CORI system does not perform the operation independently. The surgeon remains in control throughout.
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S10 — RECOVERY AND REHABILITATION
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Postoperative Care
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Recovery After CORI Robotic Knee Replacement
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Recovery after knee replacement varies from patient to patient.
              </p>
              <p>
                Factors affecting recovery include the type of procedure, general health, preoperative mobility, pain control, complications and participation in rehabilitation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Early Postoperative Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The clinical team monitors recovery, manages pain and assesses the patient's condition after surgery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Mobilisation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients are usually encouraged to begin appropriate movement according to the surgeon's instructions and their clinical condition.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Physiotherapy and Exercises
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rehabilitation may include exercises designed to improve movement, strength and everyday function.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Wound Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients receive instructions about wound care, warning signs and when to seek medical advice.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Follow-Up Appointments
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Follow-up visits help assess wound healing, knee movement, recovery progress and any concerns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Returning to Daily Activities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The timing of returning to work, driving, exercise and other activities depends on the individual patient's recovery and the treating team's advice.
              </p>
            </div>

          </div>

          {/* Important Note Box */}
          <div className="bg-white rounded-2xl p-6 border border-brand-border text-slate-800 mb-8 space-y-1 shadow-sm">
            <div className="font-bold text-sm sm:text-base text-brand-deep">
              Important Note
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Robotic assistance does not guarantee a shorter hospital stay, faster recovery or reduced pain.
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
          S11 — RISKS AND POSSIBLE COMPLICATIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full inline-block">
              Surgical Risks
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Risks of CORI-Assisted Knee Replacement
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                CORI-assisted knee replacement is a major surgical procedure and carries risks similar to those associated with knee replacement surgery more generally.
              </p>
              <p className="text-slate-600 text-sm sm:text-base font-semibold">
                Potential complications include:
              </p>
            </div>
          </div>

          {/* 11 Complication Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Infection</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Blood clots</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Bleeding</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Wound healing problems</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Stiffness or restricted movement</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Persistent pain</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Nerve or blood vessel injury</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Implant loosening, wear or instability</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Anaesthetic complications</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Fracture or other procedure-related injury</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">The need for further surgery</span>
            </div>
          </div>

          <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
            <p>
              Technology-related or instrument-related issues may also occur, and the surgical team must be prepared to manage them.
            </p>
            <p>
              The likelihood of complications varies according to the patient's health, procedure and clinical circumstances.
            </p>
          </div>

          {/* Sub-block: H3 Red Flags */}
          <div className="bg-amber-50/90 rounded-2xl p-6 border border-amber-200 text-amber-950 mb-6 space-y-2">
            <h3 className="font-heading font-bold text-base sm:text-lg text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>When to Seek Urgent Medical Attention After Surgery</span>
            </h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Patients should seek urgent medical assessment for symptoms such as chest pain, sudden breathlessness, severe new leg swelling, significant bleeding, or signs of serious infection.
            </p>
            <p className="text-xs text-amber-800 leading-relaxed pt-1">
              Follow the hospital's postoperative instructions and emergency care guidance.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
            <strong>Medical Disclaimer:</strong> This information is educational and does not replace personalised advice from the treating surgeon.
          </div>

        </div>
      </section>


      {/* =========================================================================
          S12 — MEET YOUR ROBOTIC KNEE REPLACEMENT SURGEON
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
                Lead Specialist
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
                Prof. Dr. Mumraiz Naqshband — Robotic Knee Replacement Surgeon in Lahore
              </h2>

              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Dr. Mumraiz Salik Naqshband is a Professor and Consultant Orthopaedic Surgeon with international qualifications from New Zealand, Australia and the United Kingdom.
                </p>
                <p>
                  He has over 20 years of international experience and specialist interests in joint replacement, arthroscopy and orthopaedic trauma.
                </p>
                <p>
                  His orthopaedic practice includes robotic-assisted knee replacement using the CORI Surgical System.
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

                {/* H3: Specialist Interests */}
                <div className="bg-white rounded-2xl p-5 border border-brand-border space-y-2 sm:col-span-2">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Activity className="w-4 h-4 text-brand-teal" />
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-brand-deep">
                      Specialist Interests
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Robotic-assisted knee replacement, total and partial knee replacement, revision surgery, hip replacement, arthroscopy and orthopaedic trauma.
                  </p>
                </div>

              </div>

              {/* Verification Note */}
              <p className="text-xs text-slate-500 pt-1">
                * Verification Note: The claim that he is the only expert in Pakistan performing CORI robotic knee replacement requires independent supporting evidence before publication.
              </p>

              <div className="pt-2">
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-deep text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
                >
                  <span>Learn More About Prof. Dr. Mumraiz Naqshband</span>
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
                    Consultant Orthopaedic Surgeon & Robotic Specialist
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S13 — CONSULTATION LOCATIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Clinic Consultations
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              CORI Robotic Knee Replacement Consultation in Lahore
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
              Patients considering knee replacement can enquire about specialist consultations with Prof. Dr. Mumraiz Naqshband in Lahore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Card 1: BNI */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-brand-border flex flex-col justify-between shadow-card hover:shadow-card-hover transition-all">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2.5 py-1 rounded border border-teal-100">
                  Primary Clinic
                </span>
                
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
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded border border-slate-200">
                  Hospital Consultation Chamber
                </span>

                {/* H3 */}
                <h3 className="font-heading font-semibold text-xl text-brand-deep">
                  Bahria International Hospitals
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <p className="text-slate-600">
                    For consultation schedules and location information, please contact the appointment team.
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Address: Pending confirmation.</span>
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
              The hospital where CORI-assisted surgery is performed must be confirmed separately. Do not imply that every consultation location has CORI equipment.
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
          S14 — FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Patient Information
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Frequently Asked Questions About CORI Knee Replacement
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What is CORI robotic-assisted knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                CORI robotic-assisted knee replacement uses a surgeon-controlled robotic-assisted system to support selected stages of knee replacement surgery, including planning and bone preparation.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Does the CORI system perform surgery automatically?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                No. The surgeon remains responsible for the operation and makes the clinical decisions throughout the procedure.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Does CORI robotic knee replacement require a CT scan?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                The CORI system supports image-free intraoperative planning workflows for certain applications, meaning a preoperative CT scan is not routinely required solely for that workflow. However, imaging requirements depend on the patient's condition and the surgeon's assessment.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Can CORI be used for partial knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                CORI technology supports selected knee replacement applications, including certain partial knee replacement procedures. Suitability and current availability must be confirmed by the surgeon.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Can CORI be used for total knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                CORI technology supports selected total knee replacement applications. Whether it is suitable depends on the patient's condition and the system configuration being used.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Is CORI knee replacement safer than conventional surgery?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Robotic assistance provides different surgical tools, but it does not eliminate complications or guarantee greater safety. The risks and potential benefits should be discussed with the surgeon.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Is recovery faster with robotic-assisted knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Recovery varies between patients. Robotic assistance does not guarantee faster recovery, less pain or a shorter hospital stay.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Will robotic-assisted knee replacement last longer?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Implant longevity depends on many factors, including the implant, patient health, activity level and surgical circumstances. Robotic assistance does not guarantee longer implant life.
              </p>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Who is a suitable candidate for CORI knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Selected patients who require knee replacement may be suitable. The surgeon considers the diagnosis, joint condition, overall health and planned procedure.
              </p>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Does Prof. Dr. Mumraiz Naqshband use the CORI Surgical System?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Yes. His approved service information states that he performs robotic-assisted knee replacement using the CORI Surgical System.
              </p>
            </details>

            {/* FAQ 11 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Where is CORI robotic knee replacement surgery performed?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                The surgical facility should be confirmed directly with the appointment team. Consultation locations and operating facilities may differ.
              </p>
            </details>

            {/* FAQ 12 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How can I book a consultation?</span>
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
          S15 & B5.5 / B5.6 — FINAL APPOINTMENT CTA & ENQUIRY FORM
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-brand-light/60 text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
                Specialist Consultation
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold font-heading text-brand-deep leading-[1.2]">
                Discuss CORI Robotic Knee Replacement with a Specialist
              </h2>

              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  If you are considering knee replacement because of persistent knee pain, advanced arthritis or reduced mobility, a specialist consultation can help you understand whether surgery is appropriate and which treatment options may be suitable.
                </p>
                <p>
                  Consult Prof. Dr. Mumraiz Naqshband to discuss your knee condition, available surgical approaches and the potential role of CORI robotic assistance.
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
                Please confirm consultation availability and the clinic location when booking.
              </p>
            </div>

            {/* Right Column: Enquiry Form (B5.6) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-border">
                
                <h3 className="text-xl font-bold font-heading text-brand-deep mb-1">
                  Book a CORI Robotic Knee Replacement Consultation
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
                        Appointment Enquiry *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Please briefly outline your knee condition or appointment enquiry..."
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
