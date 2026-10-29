import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ChevronRight, Phone, Calendar, 
  MapPin, Shield, AlertTriangle, Sparkles, Activity, Cpu, 
  Layers, CheckCircle, HelpCircle, Building2, Clock, Award,
  HelpCircleIcon, Scale, FileText, Stethoscope
} from 'lucide-react';
import { usePageSeo } from '../utils/seo';
import { Link } from '../utils/navigation';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function RoboticKneeCategoryPage({ onOpenAppointment }) {
  // B2. Search, Social and Indexing Metadata
  usePageSeo({
    title: "Robotic Knee Replacement in Lahore | Dr. Mumraiz Naqshband",
    description: "Explore robotic knee replacement in Lahore with Prof. Dr. Mumraiz Naqshband. Learn about CORI-assisted surgery, knee replacement options and consultations.",
    canonicalUrl: "/robotic-knee-replacement/"
  });

  // State for Appointment Enquiry Form (B5.6)
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
      `Hello, I would like to book a robotic knee replacement consultation with Prof. Dr. Mumraiz Naqshband.\n\n` +
      `Name: ${formData.fullName || 'Not provided'}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Clinic: ${formData.preferredClinic}\n` +
      `Enquiry: ${formData.message || 'Robotic Knee Replacement Consultation'}`
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
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-border text-brand-blue text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>CORI Robotic-Assisted Knee Replacement | Lahore</span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-brand-deep tracking-tight leading-[1.2]">
                Robotic Knee Replacement Surgery in Lahore
              </h1>

              {/* Hero Supporting Copy */}
              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-[1.6]">
                <p>
                  Prof. Dr. Mumraiz Naqshband provides robotic-assisted knee replacement surgery using the CORI Surgical System in Lahore, Pakistan.
                </p>
                <p>
                  As a Professor and Consultant Orthopaedic Surgeon with international specialist qualifications, he assesses patients with knee arthritis, joint damage and mobility problems to determine suitable treatment options.
                </p>
                <p>
                  Robotic-assisted technology supports aspects of surgical planning and execution, while the surgeon remains responsible for the operation and all clinical decisions.
                </p>
              </div>

              {/* Hero Trust Highlights */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Professional Distinction & Credentials
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
                    <span>CORI Robotic-Assisted Knee Replacement</span>
                  </div>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href="https://wa.me/923214175761?text=Hello%20Prof.%20Dr.%20Mumraiz%20Naqshband's%20clinic%2C%0A%0AI%20would%20like%20to%20book%20a%20Robotic%20Knee%20Replacement%20consultation%20at%20BNI%20Lahore.%0APlease%20share%20available%20appointment%20slots."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenAppointment && onOpenAppointment("Robotic Knee Replacement")}
                  className="bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>

                <a
                  href="#knee-replacement-treatments"
                  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Treatments</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Hero Image Column (Shown before content on mobile, pure image without text or buttons) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-border bg-slate-100 aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src="/assets/images/prof-dr-mumraiz-naqshband-clinical-rounds.jpg"
                    alt="Prof. Dr. Mumraiz Naqshband with robotic-assisted knee replacement technology."
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S02 — INTRODUCTION TO ROBOTIC KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
                Procedure Overview
              </span>
              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
                What Is Robotic Knee Replacement?
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-[1.7]">
              <p>
                Robotic knee replacement is a form of knee replacement surgery in which the surgeon uses robotic-assisted technology to support selected aspects of surgical planning and execution.
              </p>
              <p>
                During knee replacement, damaged joint surfaces are prepared and replaced with artificial components designed to restore the joint's function.
              </p>
              <p>
                Robotic-assisted systems can provide additional information to support the surgeon when planning the procedure and positioning the replacement components.
              </p>
              <p>
                The surgeon remains in control of the operation. Robotic technology does not independently perform the surgery or replace the surgeon's judgement.
              </p>
              <p>
                Knee replacement may be considered for patients with significant joint damage, persistent pain and functional limitations when appropriate non-surgical treatment has not provided sufficient relief.
              </p>
              <p>
                The suitability of robotic-assisted surgery depends on the patient's condition and the surgeon's clinical assessment.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/robotic-assisted-knee-replacement/"
                className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-deep font-semibold text-sm group"
              >
                <span>Robotic-Assisted Knee Replacement</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S03 — THE CORI SURGICAL SYSTEM
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Surgical Platform
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              CORI Robotic-Assisted Knee Replacement Technology
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                The CORI Surgical System is a robotic-assisted technology used in selected knee replacement procedures.
              </p>
              <p>
                It provides tools that help the surgeon assess knee anatomy, plan aspects of the procedure and guide bone preparation according to the surgical plan.
              </p>
              <p>
                The technology supports intraoperative planning and allows the surgeon to assess relevant information during the operation.
              </p>
              <p>
                The CORI system is designed to assist the surgeon rather than operate independently.
              </p>
            </div>
          </div>

          {/* 4 H3 Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Surgical Planning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Robotic-assisted technology can support the development and assessment of a patient-specific surgical plan.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Assessment During Surgery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The system provides information that assists the surgeon in evaluating aspects of knee anatomy and alignment during the procedure.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Guided Bone Preparation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The technology supports controlled bone preparation according to the surgeon's selected plan and the system's capabilities.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Surgeon-Led Procedure
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon makes the clinical decisions and performs the operation, using robotic assistance as a surgical tool.
              </p>
            </div>

          </div>

          {/* Important Patient Information Box */}
          <div className="bg-brand-light/70 rounded-2xl p-6 border border-brand-border text-slate-800 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-brand-teal shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-sm sm:text-base text-brand-deep">
                Important Patient Information
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Robotic-assisted knee replacement does not guarantee a particular outcome. Recovery, complications, implant performance and long-term results depend on several factors, including the patient's health, diagnosis, procedure and rehabilitation.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/robotic-assisted-knee-replacement/"
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
            >
              <span>Learn About CORI-Assisted Knee Replacement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S04 — WHO MAY NEED KNEE REPLACEMENT?
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Clinical Indications
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              When Might Knee Replacement Surgery Be Considered?
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Knee replacement may be considered when joint damage causes persistent symptoms and significantly affects daily activities.
              </p>
              <p>
                The decision to recommend surgery is based on the underlying condition, severity of symptoms, examination findings, imaging and response to appropriate non-surgical treatment.
              </p>
            </div>
          </div>

          {/* 5 H3 Indication Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Persistent Knee Pain
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ongoing knee pain may interfere with walking, standing, sleeping or everyday activities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Advanced Knee Osteoarthritis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Osteoarthritis can damage the cartilage and other structures within the knee joint, causing pain, stiffness and reduced movement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Reduced Mobility
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Difficulty walking, climbing stairs or performing routine activities may indicate significant functional limitations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Joint Stiffness or Deformity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Some patients develop restricted knee movement or changes in joint alignment associated with advanced joint disease.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border space-y-2 shadow-sm md:col-span-2 lg:col-span-2">
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Limited Relief from Non-Surgical Treatment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When appropriate non-surgical management does not provide sufficient relief, surgical options may be discussed.
              </p>
            </div>

          </div>

          {/* Patient Guidance Box */}
          <div className="bg-white rounded-2xl p-6 border border-brand-border text-slate-800 mb-8 space-y-2 shadow-sm">
            <div className="font-bold text-sm sm:text-base text-brand-deep">
              Patient Guidance
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Having knee pain does not automatically mean that knee replacement is necessary. A specialist assessment is needed to identify the cause and determine the most appropriate treatment.
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
          S05 — KNEE REPLACEMENT & JOINT RECONSTRUCTION TREATMENTS
          Anchor: knee-replacement-treatments
          ========================================================================= */}
      <section id="knee-replacement-treatments" className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Surgical & Joint Procedures
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Knee Replacement & Joint Reconstruction Treatment Options
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Different knee conditions require different approaches. The choice of treatment depends on the extent of joint damage, symptoms, functional needs and individual clinical circumstances.
              </p>
              <p>
                Prof. Dr. Mumraiz Naqshband provides assessment and treatment planning for the following knee replacement and joint reconstruction services.
              </p>
            </div>
          </div>

          {/* 6 Responsive Treatment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Treatment 1 */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block">
                  Robotic Surgical System
                </span>
                {/* H3 */}
                <h3 className="font-heading font-bold text-xl text-brand-deep group-hover:text-brand-blue transition-colors">
                  1. Robotic-Assisted Knee Replacement
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Robotic-assisted knee replacement uses the CORI Surgical System to support aspects of surgical planning and execution. The technology assists the surgeon during selected stages of the procedure while the surgeon remains responsible for all clinical decisions.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/robotic-assisted-knee-replacement/"
                  className="w-full py-3 px-4 rounded-xl bg-brand-teal hover:bg-brand-tealHover text-white font-semibold text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Robotic-Assisted Knee Replacement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Treatment 2 */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded border border-blue-100 inline-block">
                  Complete Joint Resurfacing
                </span>
                {/* H3 */}
                <h3 className="font-heading font-bold text-xl text-brand-deep group-hover:text-brand-blue transition-colors">
                  2. Total Knee Replacement
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Total knee replacement involves replacing damaged joint surfaces with artificial components. It may be considered for selected patients with advanced knee joint disease affecting multiple areas of the knee.
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

            {/* Treatment 3 */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block">
                  Compartment-Specific Surgery
                </span>
                {/* H3 */}
                <h3 className="font-heading font-bold text-xl text-brand-deep group-hover:text-brand-blue transition-colors">
                  3. Partial Knee Replacement
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Partial knee replacement may be an option when joint damage is limited to a suitable part of the knee and other clinical criteria are met. The procedure replaces the affected joint surfaces while preserving structures that do not require replacement.
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

            {/* Treatment 4 */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200/80 px-2.5 py-1 rounded inline-block">
                  Reconstructive Re-Operation
                </span>
                {/* H3 */}
                <h3 className="font-heading font-bold text-xl text-brand-deep group-hover:text-brand-blue transition-colors">
                  4. Revision Knee Replacement
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Revision knee replacement involves replacing or modifying components of a previous knee replacement when further surgery is clinically indicated. Reasons for revision may include loosening, wear, instability, infection or other complications.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/revision-knee-replacement/"
                  className="w-full py-3 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition flex items-center justify-center gap-2"
                >
                  <span>Revision Knee Replacement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Treatment 5 */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded border border-blue-100 inline-block">
                  Degenerative Cartilage Care
                </span>
                {/* H3 */}
                <h3 className="font-heading font-bold text-xl text-brand-deep group-hover:text-brand-blue transition-colors">
                  5. Knee Osteoarthritis Treatment
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Knee osteoarthritis can cause pain, stiffness, swelling and difficulty with movement. Treatment options range from non-surgical management to joint replacement surgery for selected patients with advanced disease.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/knee-osteoarthritis-treatment/"
                  className="w-full py-3 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition flex items-center justify-center gap-2"
                >
                  <span>Knee Osteoarthritis Treatment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Treatment 6 */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block">
                  Biological Joint Retention
                </span>
                {/* H3 */}
                <h3 className="font-heading font-bold text-xl text-brand-deep group-hover:text-brand-blue transition-colors">
                  6. Joint Preservation Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Joint preservation approaches aim to manage selected joint conditions while retaining the natural joint where clinically appropriate. Suitability depends on the underlying diagnosis, extent of joint damage and individual circumstances.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/joint-preservation-surgery/"
                  className="w-full py-3 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition flex items-center justify-center gap-2"
                >
                  <span>Joint Preservation Surgery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          S06 — ROBOTIC-ASSISTED VS CONVENTIONAL KNEE REPLACEMENT
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Clinical Comparison
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Robotic-Assisted vs Conventional Knee Replacement
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Both robotic-assisted and conventional knee replacement aim to treat damaged joint surfaces using artificial replacement components.
              </p>
              <p>
                The main difference is how the surgeon plans and carries out selected aspects of the procedure.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl border border-brand-border shadow-sm overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-light/80 border-b border-brand-border text-brand-deep text-xs sm:text-sm font-heading font-bold">
                    <th className="py-4 px-5 sm:px-6">Feature</th>
                    <th className="py-4 px-5 sm:px-6 text-brand-teal">Robotic-Assisted Knee Replacement</th>
                    <th className="py-4 px-5 sm:px-6">Conventional Knee Replacement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Surgical Planning</td>
                    <td className="py-4 px-5 sm:px-6">Uses robotic-assisted planning and intraoperative information</td>
                    <td className="py-4 px-5 sm:px-6">Uses conventional surgical planning and instruments</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Technology</td>
                    <td className="py-4 px-5 sm:px-6">CORI system supports selected stages</td>
                    <td className="py-4 px-5 sm:px-6">Standard surgical instruments and techniques</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Surgeon Control</td>
                    <td className="py-4 px-5 sm:px-6">Surgeon remains responsible for the procedure</td>
                    <td className="py-4 px-5 sm:px-6">Surgeon remains responsible for the procedure</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Implant Positioning</td>
                    <td className="py-4 px-5 sm:px-6">Robotic assistance supports the surgeon's positioning plan</td>
                    <td className="py-4 px-5 sm:px-6">Surgeon uses conventional alignment and positioning techniques</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Patient Suitability</td>
                    <td className="py-4 px-5 sm:px-6">Depends on clinical assessment and available technology</td>
                    <td className="py-4 px-5 sm:px-6">Depends on clinical assessment and the patient's condition</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-5 sm:px-6 font-semibold text-brand-deep">Outcomes</td>
                    <td className="py-4 px-5 sm:px-6">Individual outcomes vary; superiority is not guaranteed</td>
                    <td className="py-4 px-5 sm:px-6">Individual outcomes vary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sub-block: H3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border space-y-4">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-deep">
              Which Approach Is Right for You?
            </h3>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                The most appropriate approach depends on the patient's diagnosis, knee anatomy, overall health, surgical requirements and treatment goals.
              </p>
              <p>
                The surgeon should discuss the potential benefits, risks, limitations and alternatives before a procedure is selected.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/923214175761"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Book a Knee Replacement Consultation</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S07 — KNEE REPLACEMENT CONSULTATION & ASSESSMENT
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Clinical Assessment
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              What Happens During a Knee Replacement Consultation?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              A knee replacement consultation helps determine the cause of symptoms and whether surgery or another treatment approach may be appropriate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-teal">Assessment Step 1</div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Medical History and Symptoms
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The surgeon discusses knee pain, stiffness, mobility limitations, previous injuries, existing medical conditions and treatments already attempted.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-teal">Assessment Step 2</div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Physical Examination
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The examination may include assessment of knee movement, alignment, stability and areas of tenderness.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-teal">Assessment Step 3</div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Imaging and Investigations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                X-rays and other investigations may be recommended when clinically appropriate to assess joint damage and support treatment planning.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-teal">Assessment Step 4</div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Discussion of Treatment Options
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Available treatments are discussed according to the patient's condition, including non-surgical care and surgical options where indicated.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2 md:col-span-2 lg:col-span-2">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-teal">Assessment Step 5</div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Individualised Surgical Planning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If surgery is recommended, the surgeon explains the proposed procedure, potential benefits, risks, recovery expectations and alternatives.
              </p>
            </div>

          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/923214175761"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Schedule a Knee Assessment</span>
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S08 — KNEE REPLACEMENT SURGERY & RECOVERY
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Surgical Journey
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Understanding Knee Replacement Surgery and Recovery
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Knee replacement surgery involves preparing damaged joint surfaces and positioning artificial components to replace the affected areas.
              </p>
              <p>
                The surgical technique depends on whether a total or partial knee replacement is performed and whether robotic assistance is used.
              </p>
              <p>
                After surgery, recovery involves pain management, mobilisation, rehabilitation and follow-up care according to the patient's clinical needs.
              </p>
            </div>
          </div>

          {/* 5 H3 Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-2">Phase 1</div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Before Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Preoperative assessment may include medical evaluation, imaging, discussion of medications and planning for postoperative support.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-2">Phase 2</div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  During Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The surgeon performs the selected procedure using the planned surgical approach and appropriate instruments or robotic-assisted technology.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-2">Phase 3</div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  After Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Postoperative care focuses on monitoring recovery, managing pain, reducing complications and beginning appropriate movement and rehabilitation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-2">Phase 4</div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Rehabilitation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Physiotherapy and exercises may help patients work towards improved movement, strength and daily function.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-2">Phase 5</div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Follow-Up Care
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow-up appointments allow the surgical team to assess wound healing, joint function and progress during recovery.
                </p>
              </div>
            </div>

          </div>

          {/* Important Note Box */}
          <div className="bg-white rounded-2xl p-6 border border-brand-border text-slate-800 space-y-1 shadow-sm">
            <div className="font-bold text-sm sm:text-base text-brand-deep">
              Important Note
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Recovery times differ between patients. No specific recovery period, pain reduction or functional outcome should be promised without an individual clinical assessment.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S09 — RISKS, LIMITATIONS & TREATMENT CONSIDERATIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full inline-block">
              Safety & Clinical Considerations
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Understanding the Risks and Limitations of Knee Replacement
            </h2>
            <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Knee replacement is a major surgical procedure and, like other operations, carries potential risks.
              </p>
              <p className="text-slate-600 text-sm sm:text-base font-semibold">
                These may include:
              </p>
            </div>
          </div>

          {/* 9 Risk Bullets */}
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
              <span className="text-slate-700 text-sm font-medium">Bleeding or wound complications</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Stiffness or reduced movement</span>
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
              <span className="text-slate-700 text-sm font-medium">Implant-related complications</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">Anaesthetic complications</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 text-sm font-medium">The possibility of further surgery</span>
            </div>
          </div>

          <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
            <p>
              The likelihood and severity of complications vary according to the patient's health, surgical circumstances and other factors.
            </p>
            <p className="font-semibold text-brand-deep">
              Robotic-assisted technology does not eliminate these risks.
            </p>
            <p>
              A consultation provides an opportunity to discuss the risks and potential benefits relevant to the individual patient.
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
              <span>Discuss Your Treatment Options</span>
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S10 — ABOUT YOUR ROBOTIC KNEE REPLACEMENT SURGEON
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
                Surgeon Profile
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
                Meet Prof. Dr. Mumraiz Naqshband
              </h2>

              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Dr. Mumraiz Salik Naqshband is a Professor and Consultant Orthopaedic Surgeon with international qualifications from New Zealand, Australia and the United Kingdom.
                </p>
                <p>
                  His professional background includes over 20 years of international experience and specialist interests in joint replacement, arthroscopy and orthopaedic trauma.
                </p>
                <p>
                  He performs robotic-assisted knee replacement using the CORI Surgical System as part of his orthopaedic practice.
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

                {/* H3: Specialist Clinical Interests */}
                <div className="bg-white rounded-2xl p-5 border border-brand-border space-y-2 sm:col-span-2">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Activity className="w-4 h-4 text-brand-teal" />
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-brand-deep">
                      Specialist Clinical Interests
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Robotic knee replacement, knee and hip replacement, joint reconstruction, arthroscopy, sports injury surgery and orthopaedic trauma.
                  </p>
                </div>

              </div>

              {/* Clinical Verification Note */}
              <p className="text-xs text-slate-500 pt-1">
                * Clinical Note: Professional distinction regarding robotic knee replacement expertise with the CORI Surgical System in Pakistan is subject to independent verification.
              </p>

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

            {/* Doctor Photo Card */}
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
          S11 — CONSULTATION LOCATIONS IN LAHORE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Clinical Access
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Robotic Knee Replacement Consultation in Lahore
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
              Patients considering knee replacement can enquire about specialist orthopaedic consultations with Prof. Dr. Mumraiz Naqshband in Lahore.
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
                    For clinic location details and consultation availability, please contact the appointment team.
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Address and Hours: Pending confirmation.</span>
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

          {/* Important Distinction Box */}
          <div className="bg-brand-light/70 rounded-2xl p-6 border border-brand-border text-slate-800 mb-8 space-y-1">
            <div className="font-bold text-sm sm:text-base text-brand-deep">
              Important Distinction
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Consultation at a clinic does not necessarily mean robotic surgery is performed at that location. Confirm the actual surgical facility before making hospital-specific claims.
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
          S12 — FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Patient Questions
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Frequently Asked Questions About Robotic Knee Replacement
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What is robotic knee replacement surgery?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Robotic knee replacement is a knee replacement procedure in which the surgeon uses robotic-assisted technology to support aspects of surgical planning and execution. The surgeon remains responsible for the operation.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Does Prof. Dr. Mumraiz Naqshband perform robotic knee replacement in Lahore?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Yes. His services include robotic-assisted knee replacement using the CORI Surgical System. Patients should confirm consultation and surgical arrangements with the appointment team.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What is the CORI Surgical System?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                The CORI Surgical System is a robotic-assisted technology designed to support selected knee replacement procedures. It provides information and tools that assist the surgeon with surgical planning and execution.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Is robotic knee replacement better than conventional knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Robotic assistance offers different planning and surgical tools, but it does not guarantee better results for every patient. The most suitable approach depends on individual clinical circumstances.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Is robotic knee replacement suitable for everyone?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                No. Suitability depends on factors including the condition of the knee joint, the patient's health, the type of procedure required and the surgeon's assessment.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Can robotic assistance be used for total and partial knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Robotic-assisted systems may support selected total and partial knee replacement procedures, depending on the system's supported applications and the patient's clinical requirements. The appropriate procedure must be confirmed by the surgeon.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How long does recovery take after knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Recovery varies between patients. It depends on factors such as the procedure performed, general health, rehabilitation and individual healing. The surgeon can explain expected recovery milestones during consultation.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What are the risks of knee replacement surgery?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Potential risks include infection, blood clots, stiffness, persistent pain, implant-related complications and other surgical or anaesthetic complications. The surgeon will discuss risks relevant to your condition.
              </p>
            </details>

            {/* FAQ 9 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Will I need physiotherapy after knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Rehabilitation and exercises are commonly part of recovery following knee replacement. The recommended programme depends on the patient's condition and the treating team's instructions.
              </p>
            </details>

            {/* FAQ 10 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How can I book a robotic knee replacement consultation?</span>
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
              <span>View More FAQs</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S13 & B5.5 / B5.6 — FINAL APPOINTMENT CTA & ENQUIRY FORM
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-brand-light/60 text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
                Knee Consultation
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold font-heading text-brand-deep leading-[1.2]">
                Book a Robotic Knee Replacement Consultation in Lahore
              </h2>

              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  If knee pain, arthritis or reduced mobility is affecting your daily activities, a specialist orthopaedic assessment can help determine the cause and explain available treatment options.
                </p>
                <p>
                  Consult Prof. Dr. Mumraiz Naqshband to discuss whether non-surgical treatment, conventional knee replacement or robotic-assisted knee replacement may be appropriate for your condition.
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
                Please confirm the consultation location and appointment availability when booking.
              </p>
            </div>

            {/* Right Column: Enquiry Form (B5.6) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-border">
                
                <h3 className="text-xl font-bold font-heading text-brand-deep mb-1">
                  Enquire About Knee Replacement Consultation
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
                        placeholder="Please briefly outline your knee condition, symptoms or enquiry..."
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
