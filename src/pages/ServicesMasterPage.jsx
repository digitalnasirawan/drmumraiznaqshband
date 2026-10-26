import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ChevronRight, Phone, Calendar, 
  MapPin, Shield, AlertTriangle, Sparkles, Activity, Cpu, 
  Layers, CheckCircle, HelpCircle, Building2, Clock, Award
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageSeo } from '../utils/seo';
import { Link } from '../utils/navigation';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function ServicesMasterPage({ onOpenAppointment }) {
  // B2. Search, Social and Indexing Metadata
  usePageSeo({
    title: "Orthopaedic Services in Lahore | Dr. Mumraiz Naqshband",
    description: "Explore orthopaedic services in Lahore with Prof. Dr. Mumraiz Naqshband, including robotic knee replacement, hip surgery, arthroscopy and fracture care.",
    canonicalUrl: "/services/"
  });

  // State for Service Enquiry Form (B5.5)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredClinic: 'BNI - Bashir NeuroSpine Institute (18 Jail Rd, Shadman 1, Lahore)',
    reasonForEnquiry: 'Robotic Knee Replacement',
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
      `Hello, I would like to enquire about an orthopaedic consultation with Prof. Dr. Mumraiz Naqshband.\n\n` +
      `Name: ${formData.fullName || 'Not provided'}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Service: ${formData.reasonForEnquiry}\n` +
      `Preferred Clinic: ${formData.preferredClinic}`
    );
    window.open(`https://wa.me/923214175761?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white text-brand-dark">
      {/* Breadcrumb Trail */}
      <Breadcrumb items={[{ label: "Services", url: "/services/" }]} />

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
                <span>Specialist Orthopaedic Care in Lahore</span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-brand-deep tracking-tight leading-[1.2]">
                Orthopaedic Services in Lahore
              </h1>

              {/* Intro / Supporting Copy */}
              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-[1.6]">
                <p>
                  Prof. Dr. Mumraiz Naqshband provides specialist orthopaedic consultation and treatment for patients experiencing joint pain, arthritis, sports injuries, fractures and conditions affecting mobility.
                </p>
                <p>
                  His clinical services include robotic-assisted knee replacement using the CORI Surgical System, hip replacement surgery, arthroscopic procedures, sports injury surgery, joint reconstruction and orthopaedic trauma management.
                </p>
                <p>
                  Treatment recommendations are based on a detailed clinical assessment, the patient's condition and individual treatment needs.
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
                  <span>Book an Appointment</span>
                </a>

                <a
                  href="#orthopaedic-services"
                  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>CORI Robotic Knee</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>20+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>NZ, AU & UK Qualifications</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src="/assets/images/prof-dr-mumraiz-naqshband-clinical-rounds.jpg"
                    alt="Prof. Dr. Mumraiz Naqshband providing specialist orthopaedic care, if accurately shown in the approved photograph."
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white bg-brand-deep/80 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <div className="font-heading font-bold text-base sm:text-lg">
                      Prof. Dr. Mumraiz Naqshband
                    </div>
                    <div className="text-xs text-brand-teal font-medium">
                      Consultant Orthopaedic Surgeon & Robotic Specialist
                    </div>
                    <div className="text-[11px] text-white/80 mt-1">
                      M.B.C.H.B (NZ) | F.R.A.C.S (Ortho) (AU) | F.R.C.S (Trauma & Ortho) (UK)
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S02 — INTRODUCTION TO ORTHOPAEDIC CARE
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
                Clinical Overview
              </span>
              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
                Comprehensive Orthopaedic Assessment & Treatment
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-[1.7]">
              <p>
                Orthopaedic conditions affect the bones, joints, ligaments, cartilage, tendons and other structures involved in movement. These conditions may develop gradually through wear and tear or occur suddenly following an injury.
              </p>
              <p>
                Patients may experience pain, swelling, stiffness, instability or difficulty performing everyday activities. Some conditions respond to non-surgical treatment, while others may require an operation.
              </p>
              <p>
                Prof. Dr. Mumraiz Naqshband provides specialist assessment and treatment planning for a range of orthopaedic conditions. His approach considers the patient's symptoms, examination findings, imaging where appropriate, overall health and personal treatment goals.
              </p>
              <p>
                The aim is to help patients understand their condition and make informed decisions about appropriate care.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about/"
                className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-deep font-semibold text-sm group"
              >
                <span>About Prof. Dr. Mumraiz Naqshband</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S03 — MAIN ORTHOPAEDIC SERVICE CATEGORIES
          Anchor: orthopaedic-services
          ========================================================================= */}
      <section id="orthopaedic-services" className="py-16 lg:py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Clinical Directory
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold font-heading text-brand-deep leading-[1.2]">
              Explore Our Orthopaedic Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From joint replacement surgery to sports injury management and fracture care, our orthopaedic services address a range of conditions affecting movement and joint health.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore the specialist areas below to learn about the conditions assessed, available treatment options and when a consultation may be appropriate.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* -------------------------------------------------------------
                Category 1: Robotic Knee Replacement & Joint Reconstruction
                ------------------------------------------------------------- */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-border shadow-card hover:shadow-card-hover transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Specialist Robotic Knee Surgery</span>
                  </div>
                  
                  {/* H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                    1. Robotic Knee Replacement & Joint Reconstruction
                  </h3>

                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      Knee arthritis, joint damage and persistent knee pain can significantly affect walking, mobility and everyday activities.
                    </p>
                    <p>
                      Prof. Dr. Mumraiz Naqshband provides specialist knee replacement and joint reconstruction services, including robotic-assisted procedures using the CORI Surgical System.
                    </p>
                    <p>
                      Depending on the patient's condition, treatment options may include total knee replacement, partial knee replacement, revision knee replacement or selected joint preservation procedures.
                    </p>
                    <p>
                      Robotic assistance supports aspects of surgical planning and execution while the surgeon remains responsible for clinical decisions and the operation.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/robotic-knee-replacement/"
                      className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
                    >
                      <span>Explore Robotic Knee Replacement</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Treatment Links Box */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-brand-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Treatments Include:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li>
                      <Link 
                        to="/robotic-assisted-knee-replacement/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Robotic-Assisted Knee Replacement (CORI)</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/total-knee-replacement/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Total Knee Replacement</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/partial-knee-replacement/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Partial Knee Replacement</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/revision-knee-replacement/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Revision Knee Replacement</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/knee-osteoarthritis-treatment/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Knee Osteoarthritis Treatment</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/joint-preservation-surgery/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Joint Preservation Surgery</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            {/* -------------------------------------------------------------
                Category 2: Hip Replacement Surgery
                ------------------------------------------------------------- */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-border shadow-card hover:shadow-card-hover transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Joint Reconstruction</span>
                  </div>

                  {/* H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                    2. Hip Replacement Surgery
                  </h3>

                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      Hip joint conditions may cause pain, stiffness and difficulty walking, standing or performing routine activities.
                    </p>
                    <p>
                      Hip replacement surgery may be considered when significant joint damage or persistent symptoms affect quality of life and appropriate non-surgical treatments have not provided sufficient relief.
                    </p>
                    <p>
                      Prof. Dr. Mumraiz Naqshband provides assessment and surgical management of selected hip conditions, including primary and revision hip replacement procedures.
                    </p>
                    <p>
                      The choice of treatment depends on the underlying diagnosis, severity of symptoms, joint condition and individual clinical circumstances.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/hip-replacement-surgery/"
                      className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
                    >
                      <span>Explore Hip Replacement Surgery</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Treatment Links Box */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-brand-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Treatments Include:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li>
                      <Link 
                        to="/total-hip-replacement/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Total Hip Replacement</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/hip-replacement-for-osteoarthritis/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Hip Replacement for Osteoarthritis</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/hip-fracture-replacement/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Hip Fracture-Related Hip Replacement</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/revision-hip-replacement/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Revision Hip Replacement</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/hip-joint-disorders/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Management of Hip Joint Disorders</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            {/* -------------------------------------------------------------
                Category 3: Sports Injury Surgery
                ------------------------------------------------------------- */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-border shadow-card hover:shadow-card-hover transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Ligament & Meniscus Care</span>
                  </div>

                  {/* H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                    3. Sports Injury Surgery
                  </h3>

                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      Sports injuries may involve ligaments, cartilage, menisci, tendons and other structures that support joint stability and movement.
                    </p>
                    <p>
                      These injuries can occur during competitive sports, recreational activities or sudden twisting and impact movements.
                    </p>
                    <p>
                      Prof. Dr. Mumraiz Naqshband provides specialist assessment and management of selected sports-related orthopaedic injuries, including knee ligament injuries and meniscal damage.
                    </p>
                    <p>
                      Treatment may involve rehabilitation, activity modification or surgery, depending on the type and severity of injury.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/sports-injury-surgery/"
                      className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
                    >
                      <span>Explore Sports Injury Surgery</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Treatment Links Box */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-brand-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Treatments Include:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li>
                      <Link 
                        to="/acl-reconstruction/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">ACL Reconstruction</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/pcl-reconstruction/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">PCL Reconstruction</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/meniscus-repair/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Meniscus Repair and Preservation</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/multiligament-knee-reconstruction/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Multiligament Knee Reconstruction</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/sports-knee-injuries/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Sports-Related Knee Injuries</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/cartilage-ligament-injuries/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Cartilage and Ligament Injuries</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/knee-instability-treatment/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Knee Instability Treatment</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            {/* -------------------------------------------------------------
                Category 4: Arthroscopic & Minimally Invasive Surgery
                ------------------------------------------------------------- */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-border shadow-card hover:shadow-card-hover transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Minimally Invasive Procedures</span>
                  </div>

                  {/* H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                    4. Arthroscopic & Minimally Invasive Surgery
                  </h3>

                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      Arthroscopy is a surgical technique that uses a small camera and specialised instruments to examine and treat selected joint conditions through small incisions.
                    </p>
                    <p>
                      It may be used in the management of certain knee and shoulder injuries, including meniscal tears and selected ligament or soft tissue conditions.
                    </p>
                    <p>
                      Prof. Dr. Mumraiz Naqshband provides arthroscopic assessment and surgical treatment for appropriate orthopaedic conditions.
                    </p>
                    <p>
                      Not every joint problem requires arthroscopy, and treatment recommendations depend on the diagnosis and expected benefits of the procedure.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/arthroscopic-surgery/"
                      className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
                    >
                      <span>Explore Arthroscopic Surgery</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Treatment Links Box */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-brand-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Treatments Include:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li>
                      <Link 
                        to="/knee-arthroscopy/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Knee Arthroscopy</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/shoulder-arthroscopy/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Shoulder Arthroscopy</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/arthroscopic-meniscus-surgery/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Arthroscopic Meniscus Surgery</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/arthroscopic-ligament-reconstruction/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Arthroscopic Ligament Reconstruction</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/shoulder-injury-treatment/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Selected Shoulder Injuries</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/minimally-invasive-joint-surgery/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Minimally Invasive Joint Procedures</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            {/* -------------------------------------------------------------
                Category 5: Shoulder & Other Joint Disorders
                ------------------------------------------------------------- */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-border shadow-card hover:shadow-card-hover transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Upper Limb & Joint Health</span>
                  </div>

                  {/* H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                    5. Shoulder & Other Joint Disorders
                  </h3>

                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      Shoulder and upper-limb joint conditions may cause pain, weakness, stiffness, instability or difficulty lifting and moving the arm.
                    </p>
                    <p>
                      These symptoms can arise from injuries, degenerative changes or problems affecting the surrounding muscles, tendons and ligaments.
                    </p>
                    <p>
                      Prof. Dr. Mumraiz Naqshband provides assessment and management of selected shoulder and other joint conditions, including rotator cuff injuries, shoulder instability and sports-related shoulder problems.
                    </p>
                    <p>
                      Treatment may involve physiotherapy, rehabilitation, medication where appropriate or surgical intervention for selected cases.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/shoulder-joint-disorders/"
                      className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
                    >
                      <span>Explore Shoulder & Joint Disorders</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Treatment Links Box */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-brand-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Treatments Include:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li>
                      <Link 
                        to="/shoulder-pain-treatment/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Shoulder Pain Assessment</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/rotator-cuff-injuries/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Rotator Cuff Injuries</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/shoulder-instability/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Shoulder Instability</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/sports-shoulder-injuries/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Sports-Related Shoulder Injuries</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/elbow-wrist-disorders/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Selected Elbow and Wrist Disorders</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            {/* -------------------------------------------------------------
                Category 6: Orthopaedic Trauma & Fracture Surgery
                ------------------------------------------------------------- */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-border shadow-card hover:shadow-card-hover transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Trauma & Bone Fixation</span>
                  </div>

                  {/* H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                    6. Orthopaedic Trauma & Fracture Surgery
                  </h3>

                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      Fractures and traumatic orthopaedic injuries can affect bones, joints and surrounding soft tissues.
                    </p>
                    <p>
                      The appropriate treatment depends on factors such as fracture location, displacement, joint involvement, soft tissue injury and the patient's overall condition.
                    </p>
                    <p>
                      Prof. Dr. Mumraiz Naqshband provides assessment and surgical management of selected fractures and complex orthopaedic trauma cases.
                    </p>
                    <p>
                      Treatment may include immobilisation, surgical fixation, joint reconstruction and rehabilitation, according to clinical requirements.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/fracture-trauma-surgery/"
                      className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
                    >
                      <span>Explore Fracture & Trauma Surgery</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Treatment Links Box */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-brand-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Treatments Include:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li>
                      <Link 
                        to="/fracture-management/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Fracture Management</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/fracture-fixation-surgery/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Surgical Fixation of Fractures</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/complex-orthopaedic-trauma/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Complex Orthopaedic Trauma</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/joint-fracture-treatment/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Fractures Involving Joints</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/post-traumatic-joint-disorders/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Post-Traumatic Joint Disorders</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/trauma-joint-reconstruction/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Trauma-Related Joint Reconstruction</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            {/* -------------------------------------------------------------
                Category 7: Arthritis & Joint Pain Management
                ------------------------------------------------------------- */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-border shadow-card hover:shadow-card-hover transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Non-Surgical & Surgical Joint Care</span>
                  </div>

                  {/* H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
                    7. Arthritis & Joint Pain Management
                  </h3>

                  <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      Arthritis and other degenerative joint conditions may cause persistent pain, stiffness, swelling and reduced mobility.
                    </p>
                    <p>
                      These conditions commonly affect weight-bearing joints such as the knees and hips, although other joints may also be involved.
                    </p>
                    <p>
                      Prof. Dr. Mumraiz Naqshband provides assessment and treatment planning for patients with arthritis and joint pain.
                    </p>
                    <p>
                      Depending on the diagnosis and severity of symptoms, management may include lifestyle advice, rehabilitation, medication where appropriate, injections where clinically indicated or surgical treatment.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/arthritis-joint-pain/"
                      className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
                    >
                      <span>Explore Arthritis & Joint Pain Management</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Treatment Links Box */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-brand-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Treatments Include:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li>
                      <Link 
                        to="/knee-osteoarthritis-treatment/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Knee Osteoarthritis</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/hip-osteoarthritis-treatment/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Hip Osteoarthritis</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/chronic-knee-hip-pain/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Chronic Knee and Hip Pain</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/degenerative-joint-disorders/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Degenerative Joint Disorders</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/non-surgical-joint-treatment/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Non-Surgical Joint Management</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/joint-replacement-assessment/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Joint Replacement Assessment</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/orthopaedic-treatment-planning/"
                        className="text-brand-blue hover:text-brand-deep font-medium flex items-center gap-2 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span className="group-hover:underline">Individualised Orthopaedic Treatment Planning</span>
                      </Link>
                    </li>
                  </ul>
                  
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    * Knee Osteoarthritis Treatment is shared with the robotic knee replacement category.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          S04 — ROBOTIC KNEE REPLACEMENT FEATURE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-deep via-[#0e2c47] to-brand-deep text-white text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-brand-teal/20 text-brand-teal inline-block border border-brand-teal/30">
                Advanced Surgical Technology
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-heading text-white leading-[1.25]">
                Robotic-Assisted Knee Replacement Using the CORI Surgical System
              </h2>

              <div className="space-y-3.5 text-white/85 text-base sm:text-lg leading-relaxed">
                <p>
                  Robotic-assisted knee replacement is one of the specialist services offered by Prof. Dr. Mumraiz Naqshband.
                </p>
                <p>
                  The CORI Surgical System is designed to support the surgeon in planning and performing selected aspects of knee replacement procedures.
                </p>
                <p>
                  It provides information that can assist with the assessment of knee anatomy, surgical planning and implant positioning.
                </p>
                <p>
                  The surgeon remains in control of the operation, and robotic assistance does not replace surgical judgement.
                </p>
                <p>
                  Patients considering knee replacement require a clinical assessment to determine whether surgery is appropriate and which surgical approach may be suitable.
                </p>
              </div>

              {/* Sub-block: H3 */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-teal">
                  Is Robotic Knee Replacement Right for You?
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Robotic-assisted knee replacement may be considered for selected patients with significant knee joint damage or arthritis.
                </p>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  A consultation helps assess the patient's symptoms, joint condition, medical history and treatment goals.
                </p>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  The potential benefits, limitations, risks and alternatives should be discussed before deciding on surgery.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/robotic-knee-replacement/"
                  className="bg-brand-teal hover:bg-brand-tealHover text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg transition flex items-center justify-center gap-2"
                >
                  <span>Learn About Robotic Knee Replacement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/923214175761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/40 hover:border-white text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book a Knee Consultation</span>
                </a>
              </div>

              {/* Clinical Verification Note */}
              <p className="text-xs text-white/50 pt-2">
                * Clinical Note: Professional distinction regarding robotic knee replacement expertise with the CORI Surgical System in Pakistan is subject to independent verification.
              </p>
            </div>

            {/* Visual Feature Card */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                  <Cpu className="w-6 h-6" />
                </div>
                
                <h4 className="text-lg font-bold font-heading text-white">
                  CORI Surgical Platform
                </h4>

                <ul className="space-y-3 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>Real-time patient-specific anatomical mapping</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>Handheld robotic cutting intelligence</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>No pre-operative CT radiation required</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>Surgeon retains complete procedural control</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <a
                    href="https://wa.me/923214175761"
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition flex items-center justify-center gap-2 border border-white/20"
                  >
                    <span>Enquire About CORI Surgery</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          S05 — HOW ORTHOPAEDIC TREATMENT IS PLANNED
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Structured Clinical Pathway
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              How Orthopaedic Treatment Is Planned
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Choosing an appropriate orthopaedic treatment begins with understanding the patient's symptoms, diagnosis and individual needs.
            </p>
          </div>

          {/* Five Numbered Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue font-bold font-heading text-sm flex items-center justify-center mb-4">
                  01
                </div>
                {/* H3 */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Step 1 — Specialist Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The surgeon discusses the patient's symptoms, medical history, previous treatment and the effect of the condition on daily activities.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue font-bold font-heading text-sm flex items-center justify-center mb-4">
                  02
                </div>
                {/* H3 */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Step 2 — Clinical Examination & Investigations
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A physical examination and relevant investigations, such as X-rays or other imaging where appropriate, may help establish the diagnosis.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue font-bold font-heading text-sm flex items-center justify-center mb-4">
                  03
                </div>
                {/* H3 */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Step 3 — Treatment Options
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Available treatments are discussed based on the clinical findings. These may include non-surgical management, rehabilitation, injections where indicated or surgical procedures.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue font-bold font-heading text-sm flex items-center justify-center mb-4">
                  04
                </div>
                {/* H3 */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Step 4 — Individualised Treatment Planning
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The proposed plan considers the patient's condition, general health, treatment preferences and realistic expectations.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue font-bold font-heading text-sm flex items-center justify-center mb-4">
                  05
                </div>
                {/* H3 */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-deep mb-2">
                  Step 5 — Follow-Up & Recovery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When treatment is provided, follow-up and rehabilitation arrangements depend on the procedure, diagnosis and individual recovery needs.
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 text-center sm:text-left">
            <a
              href="https://wa.me/923214175761"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Book an Orthopaedic Consultation</span>
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S06 — CONDITIONS THAT MAY REQUIRE ORTHOPAEDIC ASSESSMENT
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Symptom Evaluation
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              When Should You Consult an Orthopaedic Surgeon?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              An orthopaedic consultation may be appropriate when pain, injury or reduced joint function affects everyday activities or persists despite initial treatment.
            </p>
            <p className="text-slate-600 text-sm sm:text-base font-semibold pt-1">
              Common reasons for seeking assessment include:
            </p>
          </div>

          {/* 9 Symptom Bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Persistent knee or hip pain</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Joint stiffness or reduced mobility</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Difficulty walking or climbing stairs</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Knee instability following injury</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Sports-related ligament or meniscus injuries</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Shoulder pain or restricted movement</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Arthritis affecting daily activities</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Fractures or traumatic joint injuries</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">Persistent symptoms following previous orthopaedic surgery</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base mb-8">
            The need for specialist treatment depends on the cause and severity of symptoms.
          </p>

          {/* Important Safety Information Box */}
          <div className="bg-amber-50/90 rounded-2xl p-6 border border-amber-200 text-amber-900 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-sm sm:text-base">Important Safety Information</div>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                Suspected fractures with deformity, open wounds, loss of circulation or sensation, severe trauma, or a hot swollen joint accompanied by fever require urgent medical assessment rather than routine appointment booking.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/arthritis-joint-pain/"
              className="bg-brand-blue hover:bg-brand-deep text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Explore Joint Pain Management</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/923214175761"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Book an Appointment</span>
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S07 — WHY CONSULT PROF. DR. MUMRAIZ NAQSHBAND?
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
                Surgical Qualifications
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
                Specialist Orthopaedic Expertise & International Qualifications
              </h2>

              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Dr. Mumraiz Salik Naqshband is a Professor and Consultant Orthopaedic Surgeon with specialist qualifications from New Zealand, Australia and the United Kingdom.
                </p>
                <p>
                  His professional background includes more than 20 years of international experience, with clinical interests in joint replacement, robotic-assisted knee replacement, arthroscopy, sports injuries and orthopaedic trauma.
                </p>
              </div>

              {/* H3 Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* H3: Professional Qualifications */}
                <div className="bg-white rounded-2xl p-5 border border-brand-border space-y-2">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Award className="w-4 h-4 text-brand-teal" />
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-brand-deep">
                      Professional Qualifications
                    </h3>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li className="font-semibold text-brand-deep">M.B.C.H.B (New Zealand)</li>
                    <li className="font-semibold text-brand-deep">F.R.A.C.S (Ortho) (Australia)</li>
                    <li className="font-semibold text-brand-deep">F.R.C.S (Trauma & Ortho) (UK)</li>
                  </ul>
                </div>

                {/* H3: Specialist Surgical Interests */}
                <div className="bg-white rounded-2xl p-5 border border-brand-border space-y-2">
                  <div className="flex items-center gap-2 text-brand-blue">
                    <Activity className="w-4 h-4 text-brand-teal" />
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-brand-deep">
                      Specialist Surgical Interests
                    </h3>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• Robotic-Assisted Knee Replacement</li>
                    <li>• Knee and Hip Replacement</li>
                    <li>• Joint Reconstruction</li>
                    <li>• Arthroscopic Surgery</li>
                    <li>• Sports Injury Surgery</li>
                    <li>• Orthopaedic Trauma</li>
                  </ul>
                </div>

              </div>

              {/* H3: Academic Background */}
              <div className="bg-white rounded-2xl p-5 border border-brand-border space-y-1.5">
                <div className="flex items-center gap-2 text-brand-blue">
                  <Building2 className="w-4 h-4 text-brand-teal" />
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-brand-deep">
                    Academic Background
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Professor at King Edward Medical University, Lahore, subject to current institutional verification.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-deep text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition"
                >
                  <span>Learn More About the Doctor</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Doctor Photo */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/images/prof-dr-mumraiz-naqshband-portrait.jpg"
                  alt="Prof. Dr. Mumraiz Naqshband, Consultant Orthopaedic Surgeon in Lahore."
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
          S08 — CONSULTATION LOCATIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-light border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
              Clinic Appointments
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Orthopaedic Consultation Locations in Lahore
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Patients can enquire about specialist orthopaedic consultations with Prof. Dr. Mumraiz Naqshband at the following locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: BNI */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-brand-border flex flex-col justify-between shadow-card hover:shadow-card-hover transition-all">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2.5 py-1 rounded border border-teal-100">
                  Primary Orthopaedic Clinic
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
                    <span>Appointment Phone: 0321 4175761</span>
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
                    Consultation information and appointment availability can be confirmed through the appointment team.
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Clinic Address: Pending verification.</span>
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

          <div className="mt-8 text-left">
            <Link
              to="/clinic-locations/"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-deep font-semibold text-sm group"
            >
              <span>View All Clinic Locations</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          S09 — FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-brand-border text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Patient Information
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Frequently Asked Questions About Orthopaedic Services
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What orthopaedic services does Prof. Dr. Mumraiz Naqshband provide?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                His clinical services include robotic-assisted knee replacement, knee and hip replacement, arthroscopic surgery, sports injury management, selected shoulder conditions, fracture surgery and arthritis-related joint care.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Does every patient with knee or hip pain need surgery?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                No. Many patients can be managed without surgery. The appropriate treatment depends on the diagnosis, severity of symptoms, functional limitations and response to previous treatment.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What is robotic-assisted knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Robotic-assisted knee replacement uses technology to support aspects of surgical planning and execution. The surgeon remains responsible for the procedure and clinical decisions.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Can sports injuries be treated without surgery?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Some sports injuries can be managed with rehabilitation, activity modification and other non-surgical approaches. Surgery may be considered for selected injuries depending on their severity and functional impact.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What is arthroscopic surgery?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Arthroscopy is a surgical technique that uses a small camera and specialised instruments to examine and treat certain joint conditions through small incisions.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How do I know which orthopaedic service I need?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                A specialist consultation can help establish the cause of your symptoms and identify appropriate treatment options. You do not need to choose a surgical procedure before seeking assessment.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Where can I book an orthopaedic consultation in Lahore?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                You can enquire about appointments at Bashir NeuroSpine Institute on Jail Road, Shadman, Lahore, and Bahria International Hospitals. Confirm the location and consultation schedule when booking.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How can I book an appointment?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Call 0321 4175761 or use WhatsApp at https://wa.me/923214175761 to enquire about appointment availability.
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
          S10 & B5.4 / B5.5 — FINAL APPOINTMENT CTA & SERVICE ENQUIRY FORM
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-brand-light/60 text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3.5 py-1.5 rounded-full inline-block">
                Consultation Enquiries
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold font-heading text-brand-deep leading-[1.2]">
                Book a Specialist Orthopaedic Consultation in Lahore
              </h2>

              <div className="space-y-3.5 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Whether you are experiencing persistent joint pain, recovering from an injury or considering joint replacement surgery, an orthopaedic consultation can help you understand your condition and available treatment options.
                </p>
                <p>
                  Contact the appointment team to enquire about consultation availability with Prof. Dr. Mumraiz Naqshband.
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
                Please confirm the clinic location and appointment schedule when booking.
              </p>
            </div>

            {/* Right Column: Service Enquiry Form (B5.5) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-border">
                
                <h3 className="text-xl font-bold font-heading text-brand-deep mb-1">
                  Enquire About Orthopaedic Services
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                          Preferred Clinic *
                        </label>
                        <select
                          value={formData.preferredClinic}
                          onChange={(e) => setFormData({ ...formData, preferredClinic: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-sm bg-white transition"
                        >
                          <option value="BNI - Bashir NeuroSpine Institute, Lahore">
                            BNI - Bashir NeuroSpine Institute (Jail Rd, Shadman 1)
                          </option>
                          <option value="Bahria International Hospitals, Lahore">
                            Bahria International Hospitals (Sector B, Bahria Town)
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                          Reason for Enquiry *
                        </label>
                        <select
                          value={formData.reasonForEnquiry}
                          onChange={(e) => setFormData({ ...formData, reasonForEnquiry: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-sm bg-white transition"
                        >
                          <option value="Robotic Knee Replacement">Robotic Knee Replacement</option>
                          <option value="Hip Replacement Surgery">Hip Replacement Surgery</option>
                          <option value="Sports Injury Surgery">Sports Injury Surgery</option>
                          <option value="Arthroscopic Surgery">Arthroscopic Surgery</option>
                          <option value="Shoulder & Joint Disorders">Shoulder & Joint Disorders</option>
                          <option value="Fracture & Trauma Surgery">Fracture & Trauma Surgery</option>
                          <option value="Arthritis & Joint Pain">Arthritis & Joint Pain</option>
                          <option value="General Consultation / Second Opinion">General Consultation / Second Opinion</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                        Enquiry Details / Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Please briefly outline your appointment enquiry or condition..."
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
                      Please avoid submitting detailed medical records or sensitive health information through the general enquiry form. Information submitted will be handled according to the website's{' '}
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
