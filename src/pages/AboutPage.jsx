import React from 'react';
import { 
  Award, Shield, CheckCircle, GraduationCap, Building2, 
  Clock, ArrowRight, Sparkles, MapPin, Phone, ExternalLink,
  Cpu, Activity, Crosshair, Layers, Bone, HeartPulse, ChevronRight
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageSeo } from '../utils/seo';
import { Link } from '../utils/navigation';
import { DOCTOR_INFO } from '../data/siteData';
import { 
  WhatsAppIcon, LinkedInIcon, ResearchGateIcon 
} from '../components/SocialIcons';

export default function AboutPage({ onOpenAppointment }) {
  // B2. Search, Social and Indexing Metadata
  usePageSeo({
    title: "About Prof. Dr. Mumraiz Naqshband | Orthopaedic Surgeon",
    description: "Learn about Prof. Dr. Mumraiz Naqshband's qualifications, international experience and expertise in robotic knee replacement and orthopaedic surgery in Lahore.",
    canonicalUrl: "/about/"
  });

  return (
    <div className="bg-white text-brand-dark">
      <Breadcrumb items={[{ label: "About", url: "/about/" }]} />

      {/* =========================================================================
          S01 — HERO SECTION
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-brand-light/60 via-white to-white py-12 lg:py-20 border-b border-brand-border/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-border text-brand-blue text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>Meet Your Orthopaedic Surgeon</span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-brand-deep tracking-tight leading-[1.2]">
                About Prof. Dr. Mumraiz Naqshband
              </h1>

              {/* Hero Supporting Copy */}
              <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-[1.6]">
                <p>
                  Dr. Mumraiz Salik Naqshband is a Professor and Consultant Orthopaedic Surgeon with international qualifications from New Zealand, Australia and the United Kingdom.
                </p>
                <p>
                  With over 20 years of international experience, he provides specialist orthopaedic care, including robotic-assisted knee replacement using the CORI Surgical System, hip replacement, arthroscopy, sports injury surgery and orthopaedic trauma management.
                </p>
                <p>
                  His professional approach combines specialist surgical training, modern orthopaedic techniques and individualised patient assessment.
                </p>
              </div>

              {/* Professional Credentials */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Professional Credentials
                </div>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-semibold text-brand-deep">
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-brand-border shadow-sm">
                    Professor
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-brand-border shadow-sm">
                    Consultant Orthopaedic Surgeon
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-brand-border shadow-sm">
                    M.B.C.H.B (New Zealand)
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-brand-border shadow-sm">
                    F.R.A.C.S (Ortho) (Australia)
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-brand-border shadow-sm">
                    F.R.C.S (Trauma & Ortho) (UK)
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/923214175761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-teal hover:bg-brand-tealHover text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </a>

                <Link
                  to="/services/"
                  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Orthopaedic Services</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl shadow-2xl border border-brand-border overflow-hidden">
                <div className="relative h-[380px] sm:h-[430px] w-full overflow-hidden bg-slate-100">
                  <img
                    src={DOCTOR_INFO.images.portrait}
                    alt="Prof. Dr. Mumraiz Salik Naqshband, Professor and Consultant Orthopaedic Surgeon."
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent opacity-75"></div>
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3.5 py-1.5 shadow-md flex items-center gap-2 border border-brand-border">
                    <Award className="w-4 h-4 text-brand-teal" />
                    <span className="text-xs font-bold text-brand-deep">20+ Years Experience</span>
                  </div>

                  <div className="absolute bottom-4 inset-x-4 text-white text-left">
                    <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1">
                      Professor & Consultant Surgeon
                    </div>
                    <div className="text-xl font-bold font-heading text-white">
                      Dr. Mumraiz Salik Naqshband
                    </div>
                    <div className="text-xs text-white/80 mt-0.5">
                      King Edward Medical University (KEMU), Lahore
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-brand-light/90 border-t border-brand-border flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Clinic Location</span>
                    <span className="text-xs font-bold text-brand-deep">BNI - 18 Jail Rd, Shadman 1, Lahore</span>
                  </div>
                  <a
                    href="https://wa.me/923214175761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-brand-teal hover:bg-brand-tealHover text-white text-xs font-semibold px-3 py-2 rounded-xl transition shadow-sm"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          S02 — PROFESSIONAL INTRODUCTION
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-border bg-slate-100">
                <img
                  src={DOCTOR_INFO.images.clinical}
                  alt="Professional photograph of Dr. Mumraiz Salik Naqshband."
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-deep via-brand-deep/80 to-transparent p-5 text-white text-left">
                  <div className="text-xs font-semibold text-brand-teal uppercase tracking-wide">
                    Clinical Instruction & Care
                  </div>
                  <div className="text-sm font-bold mt-1">
                    Professor of Orthopaedic Surgery at KEMU, Lahore
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-blue text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-brand-teal" />
                <span>Professional Biography</span>
              </div>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-brand-deep font-heading leading-[1.25]">
                Meet Dr. Mumraiz Salik Naqshband
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-[1.7]">
                <p>
                  Dr. Mumraiz Salik Naqshband is a Professor and Consultant Orthopaedic Surgeon practising in Lahore, Pakistan. His professional background includes international medical education, specialist surgical qualifications and experience in orthopaedic surgery.
                </p>
                <p>
                  His clinical interests include joint replacement surgery, robotic-assisted knee replacement, arthroscopic procedures, sports injury management and the treatment of fractures and traumatic orthopaedic conditions.
                </p>
                <p>
                  With over two decades of international experience, he provides assessment and treatment for patients with arthritis, joint pain, injuries and conditions affecting movement and mobility.
                </p>
                <p>
                  He is associated with King Edward Medical University, Lahore, in a professorial role.
                </p>
                <p>
                  His practice focuses on evaluating each patient's condition and discussing appropriate treatment options based on clinical findings, individual needs and available evidence.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/"
                  className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-deep font-semibold text-sm group"
                >
                  <span>Explore Orthopaedic Services</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          S03 — MEDICAL QUALIFICATIONS
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-brand-light/40 border-t border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Formal Qualifications
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Medical Education & International Qualifications
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-[1.7]">
              Dr. Mumraiz Salik Naqshband holds medical and specialist surgical qualifications from New Zealand, Australia and the United Kingdom.
            </p>
          </div>

          {/* Three Qualification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: M.B.C.H.B */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                  New Zealand
                </span>
                <h3 className="font-heading font-semibold text-xl text-brand-deep mt-3 mb-2">
                  M.B.C.H.B — New Zealand
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Bachelor of Medicine and Bachelor of Surgery, obtained in New Zealand.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-400">
                Primary Medical Qualification
              </div>
            </div>

            {/* Card 2: F.R.A.C.S */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Australia
                </span>
                <h3 className="font-heading font-semibold text-xl text-brand-deep mt-3 mb-2">
                  F.R.A.C.S (Ortho) — Australia
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Fellowship of the Royal Australasian College of Surgeons in Orthopaedics.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-400">
                Specialist Surgical Fellowship
              </div>
            </div>

            {/* Card 3: F.R.C.S */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-deep bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  United Kingdom
                </span>
                <h3 className="font-heading font-semibold text-xl text-brand-deep mt-3 mb-2">
                  F.R.C.S (Trauma & Ortho) — United Kingdom
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Fellowship of the Royal College of Surgeons in Trauma and Orthopaedics.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-400">
                Specialist Surgical Fellowship
              </div>
            </div>

          </div>

          <p className="text-xs sm:text-sm text-slate-600 mt-8">
            These qualifications form part of his professional background in orthopaedic surgery and specialist surgical care.
          </p>

        </div>
      </section>

      {/* =========================================================================
          S04 — ACADEMIC ROLE & INTERNATIONAL EXPERIENCE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Professional Background
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Professor & Experienced Orthopaedic Surgeon
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-[1.7]">
              <p>
                Dr. Mumraiz Salik Naqshband holds the professional title of Professor and is associated with King Edward Medical University in Lahore.
              </p>
              <p>
                His professional background includes more than 20 years of international experience in orthopaedic surgery.
              </p>
              <p>
                This experience encompasses the assessment and management of joint disorders, reconstructive procedures, arthroscopic surgery and orthopaedic trauma.
              </p>
              <p>
                His academic and clinical background contributes to his approach to patient assessment, treatment planning and surgical decision-making.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* H3: Academic Appointment */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Academic Appointment
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Professor — King Edward Medical University, Lahore.
              </p>
            </div>

            {/* H3: International Surgical Experience */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                International Surgical Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Over 20 years of international experience.
              </p>
            </div>

            {/* H3: Areas of Specialist Training */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Areas of Specialist Training
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span>Joint Replacement Surgery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span>Arthroscopic Surgery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                  <span>Orthopaedic Trauma Surgery</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          S05 — ROBOTIC KNEE REPLACEMENT EXPERTISE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-deep via-[#123B5D] to-[#0D2A42] text-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-teal/20 text-emerald-300 text-xs font-bold uppercase tracking-wider inline-block">
                Specialist Clinical Interest
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-white leading-[1.25]">
                Expertise in Robotic-Assisted Knee Replacement Surgery
              </h2>

              <div className="space-y-4 text-white/80 text-sm sm:text-base leading-[1.7]">
                <p>
                  Robotic-assisted knee replacement is an area of specialist interest in Dr. Mumraiz Salik Naqshband's orthopaedic practice.
                </p>
                <p>
                  He performs robotic-assisted knee replacement using the CORI Surgical System, which provides technology to support surgical planning and aspects of the procedure.
                </p>
                <p>
                  The system assists the surgeon in assessing knee anatomy and planning component positioning. The surgeon remains responsible for clinical decisions and the operation.
                </p>
                <p>
                  Robotic-assisted knee replacement may be considered for selected patients with knee joint damage or advanced arthritis. Suitability depends on a detailed assessment of symptoms, examination findings, imaging and individual circumstances.
                </p>
              </div>

              {/* H3 */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <h3 className="font-heading font-semibold text-xl text-white">
                  The CORI Surgical System
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-[1.7]">
                  The CORI Surgical System is a robotic-assisted technology used in knee replacement procedures. It supports the surgeon during planning and execution of selected aspects of the operation.
                </p>
                <p className="text-white/80 text-sm sm:text-base leading-[1.7]">
                  The use of robotic assistance does not guarantee a particular surgical result, and patients should discuss the potential benefits, limitations and risks of the proposed procedure with their surgeon.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/robotic-knee-replacement/"
                  className="inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg transition-all"
                >
                  <span>Robotic Knee Replacement Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/robotic-assisted-knee-replacement/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
                >
                  <span>Robotic-Assisted Knee Replacement</span>
                </Link>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 text-emerald-300 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">
                  CORI Surgical System
                </h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Robotic-assisted surgical planning and intraoperative assessment for knee joint replacement.
                </p>
                <div className="text-[11px] text-white/50 pt-2 border-t border-white/10 italic">
                  * Clinical decisions and execution remain entirely under the specialist surgeon's control.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          S06 — AREAS OF ORTHOPAEDIC EXPERTISE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Clinical Specialities
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Specialist Areas of Orthopaedic Practice
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-[1.7]">
              Dr. Mumraiz Salik Naqshband provides orthopaedic assessment and treatment across several areas of joint and musculoskeletal care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Robotic Knee Replacement & Joint Reconstruction
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Assessment and surgical treatment of selected knee joint conditions, including robotic-assisted knee replacement and other joint reconstruction procedures.
                </p>
              </div>
              <Link to="/robotic-knee-replacement/" className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Hip Replacement Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Assessment and surgical management of selected hip joint conditions, including total hip replacement and revision procedures.
                </p>
              </div>
              <Link to="/hip-replacement-surgery/" className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Sports Injury Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Management of selected ligament, meniscus and joint injuries associated with sports and physical activity.
                </p>
              </div>
              <Link to="/sports-injury-surgery/" className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Arthroscopic & Minimally Invasive Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Arthroscopic assessment and treatment of selected knee and shoulder conditions using specialised instruments and minimally invasive techniques.
                </p>
              </div>
              <Link to="/arthroscopic-surgery/" className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 5 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Shoulder & Other Joint Disorders
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Assessment and treatment of selected shoulder and joint conditions affecting movement, stability and daily activities.
                </p>
              </div>
              <Link to="/shoulder-joint-disorders/" className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 6 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Orthopaedic Trauma & Fracture Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Management of fractures, traumatic joint injuries and selected complex orthopaedic trauma cases.
                </p>
              </div>
              <Link to="/fracture-trauma-surgery/" className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 7 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Arthritis & Joint Pain Management
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Assessment of arthritis, degenerative joint conditions and chronic joint pain, with discussion of surgical and non-surgical treatment options.
                </p>
              </div>
              <Link to="/arthritis-joint-pain/" className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Overview Card */}
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  All Orthopaedic Services
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  View our complete directory of specialist surgical and non-surgical services.
                </p>
              </div>
              <Link
                to="/services/"
                className="w-full py-2.5 px-3 rounded-xl bg-brand-deep hover:bg-brand-blue text-white font-semibold text-xs transition flex items-center justify-center gap-1.5 mt-auto"
              >
                <span>View All Orthopaedic Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          S07 — APPROACH TO PATIENT CARE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-brand-light/40 text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Clinical Philosophy
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              A Personalised Approach to Orthopaedic Treatment
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-[1.7]">
              <p>
                Orthopaedic conditions can affect patients in different ways. The cause of symptoms, severity of joint damage, overall health and personal goals all influence treatment decisions.
              </p>
              <p>
                Dr. Mumraiz Salik Naqshband's approach focuses on careful assessment, clear communication and individualised treatment planning.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1 */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card">
              <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                Detailed Clinical Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Understanding the patient's symptoms, medical history and functional limitations helps guide the diagnostic process.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card">
              <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                Appropriate Treatment Selection
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Treatment recommendations may include non-surgical care, rehabilitation, arthroscopic procedures or joint replacement surgery, depending on clinical findings.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card">
              <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                Discussion of Risks and Alternatives
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients should have the opportunity to understand the potential benefits, risks, limitations and alternatives of a proposed treatment before making decisions.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card">
              <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                Recovery and Rehabilitation Planning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When surgery is required, recovery expectations, rehabilitation and follow-up care form part of the overall treatment discussion.
              </p>
            </div>

          </div>

          <div className="mt-10 text-left">
            <a
              href="https://wa.me/923214175761"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Book an Orthopaedic Consultation</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          S08 — CONSULTATION LOCATIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Clinic Locations
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Consult Dr. Mumraiz Naqshband in Lahore
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-[1.7]">
              Patients seeking specialist orthopaedic assessment can enquire about appointments at the following consultation locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Location 1: BNI */}
            <div className="bg-slate-50 rounded-3xl p-7 sm:p-8 border border-brand-border flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-xl text-brand-deep mb-3">
                  Bashir NeuroSpine Institute (BNI)
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1 Shadman, Lahore, 54000, Pakistan.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                    <span><strong>Phone:</strong> 0321 4175761</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/bashir-neurospine-institute/"
                  className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition"
                >
                  <span>Bashir NeuroSpine Institute Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Location 2: Bahria Hospital */}
            <div className="bg-slate-50 rounded-3xl p-7 sm:p-8 border border-brand-border flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-xl text-brand-deep mb-3">
                  Bahria International Hospitals
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <p className="text-slate-600">
                    Patients can contact the appointment team to confirm consultation availability, address and scheduling information.
                  </p>
                  <div className="text-xs text-slate-500">
                    <strong>Address:</strong> Pending verification.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/bahria-international-hospitals/"
                  className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition"
                >
                  <span>Bahria International Hospitals Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          <div className="mt-8 text-left">
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
          S09 — PROFESSIONAL PROFILES & RESEARCH
          ========================================================================= */}
      <section className="py-16 bg-slate-50 text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Academic & Directory Resources
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Professional Information & Academic Profiles
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-[1.7]">
              <p>
                Additional professional information about Dr. Mumraiz Salik Naqshband may be available through institutional profiles, medical directories and academic platforms.
              </p>
              <p>
                The following resources can help patients and professional colleagues review publicly available information.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <a
              href="https://bni.com.pk/dr-mumraiz-naqshband/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-brand-border hover:shadow-md transition flex items-center justify-between group"
            >
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Institutional Profile</div>
                <div className="text-sm font-bold text-brand-deep group-hover:text-brand-blue transition">BNI Profile</div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-blue" />
            </a>

            <a
              href="https://www.researchgate.net/profile/Mumraiz-Naqshband"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-brand-border hover:shadow-md transition flex items-center justify-between group"
            >
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Publications</div>
                <div className="text-sm font-bold text-brand-deep group-hover:text-brand-blue transition">ResearchGate</div>
              </div>
              <ResearchGateIcon className="w-4 h-4 text-slate-400 group-hover:text-brand-blue" />
            </a>

            <a
              href="https://pk.linkedin.com/in/mumraiz-naqshband-4b337b342"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-brand-border hover:shadow-md transition flex items-center justify-between group"
            >
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Professional Network</div>
                <div className="text-sm font-bold text-brand-deep group-hover:text-brand-blue transition">LinkedIn</div>
              </div>
              <LinkedInIcon className="w-4 h-4 text-slate-400 group-hover:text-brand-blue" />
            </a>

            <a
              href="https://mayoortho.com/our-doctors/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-brand-border hover:shadow-md transition flex items-center justify-between group"
            >
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Hospital Faculty</div>
                <div className="text-sm font-bold text-brand-deep group-hover:text-brand-blue transition">Mayo Ortho</div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-blue" />
            </a>

          </div>

        </div>
      </section>

      {/* =========================================================================
          B5.1 — FREQUENTLY ASKED QUESTIONS ABOUT THE DOCTOR
          ========================================================================= */}
      <section className="py-16 bg-white text-left border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Doctor FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <details className="group bg-slate-50 rounded-2xl border border-brand-border p-5 transition-all open:bg-white open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Who is Dr. Mumraiz Salik Naqshband?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-200 leading-[1.7]">
                Dr. Mumraiz Salik Naqshband is a Professor and Consultant Orthopaedic Surgeon in Lahore with international medical and specialist surgical qualifications from New Zealand, Australia and the United Kingdom.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-slate-50 rounded-2xl border border-brand-border p-5 transition-all open:bg-white open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What are Dr. Mumraiz Naqshband's qualifications?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-200 leading-[1.7]">
                His qualifications include M.B.C.H.B (New Zealand), F.R.A.C.S (Ortho) (Australia), and F.R.C.S (Trauma & Ortho) (UK).
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-slate-50 rounded-2xl border border-brand-border p-5 transition-all open:bg-white open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Does Dr. Mumraiz Naqshband perform robotic knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-200 leading-[1.7]">
                Yes. His orthopaedic practice includes robotic-assisted knee replacement using the CORI Surgical System. The suitability of this procedure depends on the patient's clinical condition.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-slate-50 rounded-2xl border border-brand-border p-5 transition-all open:bg-white open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What orthopaedic conditions does he treat?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-200 leading-[1.7]">
                His areas of practice include knee and hip disorders, arthritis, sports injuries, selected shoulder conditions, fractures and orthopaedic trauma.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-slate-50 rounded-2xl border border-brand-border p-5 transition-all open:bg-white open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Where can I consult Dr. Mumraiz Naqshband?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-200 leading-[1.7]">
                Consultation enquiries can be made for Bashir NeuroSpine Institute on Jail Road, Shadman, Lahore, and Bahria International Hospitals. Patients should confirm the clinic location and appointment availability when booking.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-slate-50 rounded-2xl border border-brand-border p-5 transition-all open:bg-white open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How can I book an appointment?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-200 leading-[1.7]">
                Call 0321 4175761 or use WhatsApp at https://wa.me/923214175761 to enquire about appointments.
              </p>
            </details>

          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faqs/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-deep transition"
            >
              <span>Frequently Asked Questions Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          S10 — FINAL APPOINTMENT SECTION & CONVERSION (B5.3)
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-brand-light text-left border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white px-3 py-1 rounded-full border border-brand-border">
              Appointment Booking
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Book an Appointment with Prof. Dr. Mumraiz Naqshband
            </h2>
            <div className="space-y-3 text-brand-dark text-sm sm:text-base leading-[1.7]">
              <p>
                If you are experiencing knee pain, hip pain, arthritis, a sports-related injury or another orthopaedic condition, a specialist consultation can help you understand your diagnosis and treatment options.
              </p>
              <p>
                Contact the appointment team to enquire about available consultation appointments in Lahore.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/923214175761"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-teal hover:bg-brand-tealHover text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition shadow-md flex items-center justify-center gap-2"
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

          <div className="pt-2 text-xs text-slate-500 space-y-1">
            <p>
              Please confirm the consultation location and appointment time when booking.
            </p>
            <p>
              Information submitted will be handled in accordance with our{' '}
              <Link to="/privacy-policy/" className="text-brand-blue underline hover:text-brand-deep">
                Privacy Policy
              </Link>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
