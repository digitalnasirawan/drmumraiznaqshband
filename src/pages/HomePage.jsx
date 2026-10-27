import React, { useState } from 'react';
import { 
  Award, Shield, Calendar, Phone, CheckCircle, ChevronRight, 
  MapPin, Clock, ArrowRight, Activity, Cpu, HeartPulse, Crosshair, 
  Layers, Bone, Sparkles, ExternalLink, HelpCircle, FileText, CheckCircle2
} from 'lucide-react';
import { Link } from '../utils/navigation';
import { usePageSeo } from '../utils/seo';
import { DOCTOR_INFO, CLINIC_LOCATIONS, SERVICE_CATEGORIES } from '../data/siteData';
import { WhatsAppIcon, GoogleIcon } from '../components/SocialIcons';
import GoogleReviewsSection from '../components/GoogleReviewsSection';

export default function HomePage({ onOpenAppointment }) {
  // B2. Search, Social and Indexing Metadata
  usePageSeo({
    title: "Prof. Dr. Mumraiz Naqshband | Orthopaedic Surgeon Lahore",
    description: "Consult Prof. Dr. Mumraiz Naqshband, Orthopaedic Surgeon in Lahore, for robotic knee replacement, hip replacement, sports injuries and joint care.",
    canonicalUrl: "/"
  });

  const [activeClinicTab, setActiveClinicTab] = useState('bni');
  
  // B5.5 Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredClinic: 'BNI - Bashir NeuroSpine Institute, Lahore',
    message: '',
    privacyAcknowledged: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyAcknowledged) {
      alert("Please acknowledge the privacy note before submitting.");
      return;
    }
    setFormSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello Prof. Dr. Mumraiz Naqshband's clinic,%0A%0AI would like to book an appointment.%0A*Full Name:* ${encodeURIComponent(formData.fullName || 'Patient')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Provided')}%0A*Preferred Clinic:* ${encodeURIComponent(formData.preferredClinic)}%0A*Enquiry:* ${encodeURIComponent(formData.message || 'Orthopaedic consultation')}`;
    window.open(`https://wa.me/923214175761?text=${text}`, '_blank');
  };

  const selectedClinic = CLINIC_LOCATIONS.find(c => c.id === activeClinicTab) || CLINIC_LOCATIONS[0];

  return (
    <div className="space-y-0 text-brand-dark">
      
      {/* =========================================================================
          S01 — HERO SECTION
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-brand-light/60 via-white to-white py-12 lg:py-20 border-b border-brand-border/60 overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow / Short Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-brand-border text-brand-blue text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>Consultant Orthopaedic Surgeon | Lahore, Pakistan</span>
              </div>

              {/* H1 — Primary Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-brand-deep tracking-tight leading-[1.2]">
                Prof. Dr. Mumraiz Naqshband
              </h1>

              {/* Hero Supporting Copy */}
              <div className="space-y-3 text-slate-600 text-base sm:text-lg leading-[1.6]">
                <p>
                  Prof. Dr. Mumraiz Naqshband is a Consultant Orthopaedic Surgeon and Professor at King Edward Medical University (KEMU), Lahore, with over 20 years of international experience.
                </p>
                <p>
                  He specialises in robotic knee replacement, hip replacement, joint reconstruction, arthroscopic surgery, sports injuries and orthopaedic trauma care. His approach focuses on careful clinical assessment, evidence-based treatment and individualised care for patients with joint pain, injuries and mobility problems.
                </p>
              </div>

              {/* Hero Trust Highlights */}
              <div className="pt-2 pb-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-brand-deep">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Over 20 Years of International Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>MBChB (New Zealand)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>FRACS Orthopaedics (Australia)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>FRCS Trauma & Orthopaedics (UK)</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>Robotic Knee Replacement Using the CORI Surgical System</span>
                  </div>
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
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Column: Approved Doctor Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl shadow-2xl border border-brand-border overflow-hidden">
                <div className="relative h-[380px] sm:h-[430px] w-full overflow-hidden bg-slate-100">
                  <img
                    src={DOCTOR_INFO.images.portrait}
                    alt="Prof. Dr. Mumraiz Naqshband, Consultant Orthopaedic Surgeon in Lahore."
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
                      Consultant Orthopaedic Surgeon
                    </div>
                    <div className="text-xl font-bold font-heading text-white">
                      Prof. Dr. Mumraiz Naqshband
                    </div>
                    <div className="text-xs text-white/80 mt-0.5">
                      Professor of Orthopaedic Surgery at KEMU, Lahore
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-brand-light/90 border-t border-brand-border flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Location</span>
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
          S02 — INTRODUCTION TO THE DOCTOR
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-border bg-slate-100">
                <img
                  src={DOCTOR_INFO.images.clinical}
                  alt="Professional portrait of Prof. Dr. Mumraiz Naqshband."
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-deep via-brand-deep/80 to-transparent p-5 text-white text-left">
                  <div className="text-xs font-semibold text-brand-teal uppercase tracking-wide">
                    Academic & Surgical Leadership
                  </div>
                  <div className="text-sm font-bold mt-1">
                    Professor at King Edward Medical University, Lahore
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-blue text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-brand-teal" />
                <span>Specialist Consultant Background</span>
              </div>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-brand-deep font-heading leading-[1.25]">
                Meet Prof. Dr. Mumraiz Naqshband
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-[1.7]">
                <p>
                  Prof. Dr. Mumraiz Naqshband is a Consultant Orthopaedic Surgeon and Professor at King Edward Medical University, Lahore. With over two decades of international experience, he provides specialist assessment and treatment for patients experiencing joint pain, arthritis, sports injuries, fractures and other orthopaedic conditions.
                </p>
                <p>
                  He holds an MBChB from New Zealand, FRACS Orthopaedics from Australia, and FRCS Trauma & Orthopaedics from the United Kingdom. His professional training includes fellowships in joint replacement, arthroscopy and trauma surgery.
                </p>
                <p>
                  His clinical interests include robotic-assisted knee replacement, hip replacement, joint reconstruction, minimally invasive arthroscopic procedures and complex orthopaedic trauma.
                </p>
                <p>
                  Treatment recommendations are based on each patient's symptoms, examination findings, imaging where appropriate, general health and individual treatment goals.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-deep font-semibold text-sm group"
                >
                  <span>Learn More About the Doctor</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          S03 — ORTHOPAEDIC SERVICES OVERVIEW
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-brand-light/40 text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Surgical & Non-Surgical Care
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Our Orthopaedic Services in Lahore
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-[1.7]">
              Prof. Dr. Mumraiz Naqshband provides specialist orthopaedic consultation and surgical care for a range of joint conditions, injuries and mobility problems. Treatment may involve non-surgical management, minimally invasive procedures or joint replacement surgery, depending on the patient's diagnosis and clinical needs.
            </p>
          </div>

          {/* Seven Responsive Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* Card 1: Robotic Knee Replacement */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-[21px] text-brand-deep mb-2 leading-[1.35]">
                  Robotic Knee Replacement & Joint Reconstruction
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  Robotic-assisted knee replacement uses advanced technology to support surgical planning and the positioning of knee replacement components. Prof. Dr. Mumraiz Naqshband uses the CORI Surgical System as part of his knee replacement practice.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Services include robotic-assisted knee replacement, total knee replacement, partial knee replacement, revision surgery and selected joint preservation procedures.
                </p>
              </div>
              <Link
                to="/robotic-knee-replacement/"
                className="w-full py-2.5 px-3 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 mt-auto"
              >
                <span>Explore Knee Replacement Services</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: Hip Replacement Surgery */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-[21px] text-brand-deep mb-2 leading-[1.35]">
                  Hip Replacement Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  Hip replacement surgery may be considered for patients experiencing significant hip pain, joint damage or reduced mobility when other treatments have not provided sufficient relief.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Services include total hip replacement, revision hip replacement and management of selected hip joint disorders.
                </p>
              </div>
              <Link
                to="/hip-replacement-surgery/"
                className="w-full py-2.5 px-3 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 mt-auto"
              >
                <span>Explore Hip Replacement Services</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: Sports Injury Surgery */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-[21px] text-brand-deep mb-2 leading-[1.35]">
                  Sports Injury Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  Sports injuries can affect the ligaments, cartilage, menisci and other structures that support joint movement and stability.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Specialist assessment and treatment options include ACL reconstruction, PCL reconstruction, meniscus repair and management of complex knee ligament injuries.
                </p>
              </div>
              <Link
                to="/sports-injury-surgery/"
                className="w-full py-2.5 px-3 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 mt-auto"
              >
                <span>Explore Sports Injury Services</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 4: Arthroscopic & Minimally Invasive Surgery */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center mb-4">
                  <Crosshair className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-[21px] text-brand-deep mb-2 leading-[1.35]">
                  Arthroscopic & Minimally Invasive Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  Arthroscopy allows surgeons to examine and treat selected joint conditions using a camera and specialised instruments introduced through small incisions.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Procedures may include knee arthroscopy, shoulder arthroscopy, meniscus surgery and selected ligament reconstruction procedures.
                </p>
              </div>
              <Link
                to="/arthroscopic-surgery/"
                className="w-full py-2.5 px-3 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 mt-auto"
              >
                <span>Explore Arthroscopic Surgery</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 5: Shoulder & Other Joint Disorders */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-[21px] text-brand-deep mb-2 leading-[1.35]">
                  Shoulder & Other Joint Disorders
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  Shoulder pain, instability and soft tissue injuries can affect everyday activities, work and sports participation.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Prof. Dr. Mumraiz Naqshband provides assessment and management of selected shoulder conditions, including rotator cuff injuries, shoulder instability and sports-related injuries.
                </p>
              </div>
              <Link
                to="/shoulder-joint-disorders/"
                className="w-full py-2.5 px-3 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 mt-auto"
              >
                <span>Explore Shoulder & Joint Care</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 6: Orthopaedic Trauma & Fracture Surgery */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center mb-4">
                  <Bone className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-[21px] text-brand-deep mb-2 leading-[1.35]">
                  Orthopaedic Trauma & Fracture Surgery
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  Fractures and traumatic injuries require careful assessment to determine the most appropriate treatment and rehabilitation plan.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Services include fracture management, surgical fixation, complex orthopaedic trauma care and treatment of selected injuries involving joints.
                </p>
              </div>
              <Link
                to="/fracture-trauma-surgery/"
                className="w-full py-2.5 px-3 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 mt-auto"
              >
                <span>Explore Fracture & Trauma Services</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 7: Arthritis & Joint Pain Management */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center mb-4">
                  <HeartPulse className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-[21px] text-brand-deep mb-2 leading-[1.35]">
                  Arthritis & Joint Pain Management
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  Arthritis and degenerative joint conditions may cause pain, stiffness, swelling and difficulty with movement.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Treatment begins with an assessment of the underlying condition. Depending on the findings, management may include non-surgical care, rehabilitation, medication where appropriate or consideration of joint replacement surgery.
                </p>
              </div>
              <Link
                to="/arthritis-joint-pain/"
                className="w-full py-2.5 px-3 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 mt-auto"
              >
                <span>Explore Arthritis & Joint Pain Care</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 8: Services Master Overview */}
            <div className="bg-gradient-to-br from-brand-deep to-brand-blue text-white rounded-2xl p-6 shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-2 py-0.5 rounded">
                  All Procedures
                </span>
                <h3 className="font-heading font-bold text-xl text-white mt-3 mb-2">
                  Complete Clinical Services Directory
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Explore our comprehensive directory of orthopaedic procedures and consultation guidance across all specialties.
                </p>
              </div>
              <Link
                to="/services/"
                className="w-full py-3 px-4 rounded-xl bg-brand-teal hover:bg-brand-tealHover text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>View Full Services Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          S04 — ROBOTIC KNEE REPLACEMENT TECHNOLOGY
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-deep via-[#123B5D] to-[#0D2A42] text-white text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-teal/20 text-emerald-300 text-xs font-bold uppercase tracking-wider inline-block">
                Surgical Planning & Technology
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-white leading-[1.25]">
                Robotic-Assisted Knee Replacement with the CORI Surgical System
              </h2>

              <div className="space-y-4 text-white/80 text-sm sm:text-base leading-[1.7]">
                <p>
                  Robotic-assisted knee replacement combines the surgeon's clinical expertise with technology designed to support surgical planning and execution.
                </p>
                <p>
                  The CORI Surgical System provides information that assists the surgeon in planning the procedure and assessing aspects of knee alignment and implant positioning.
                </p>
                <p>
                  The surgeon remains responsible for the operation and clinical decisions throughout the procedure.
                </p>
                <p>
                  Robotic-assisted surgery is not suitable for every patient. The decision to recommend knee replacement depends on the condition of the joint, symptoms, examination findings, medical history and individual treatment needs.
                </p>
              </div>

              {/* H3 */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <h3 className="font-heading font-semibold text-xl text-white">
                  Understanding Your Treatment Options
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-[1.7]">
                  Patients with advanced knee arthritis or persistent knee pain may benefit from an orthopaedic assessment to discuss available treatment options. These may include non-surgical management, total knee replacement, partial knee replacement or other procedures when clinically appropriate.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/robotic-knee-replacement/"
                  className="inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg transition-all"
                >
                  <span>Learn About Robotic Knee Replacement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/923214175761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>Book a Knee Consultation</span>
                </a>
              </div>
            </div>

            {/* Right Card: Feature Overview */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 text-emerald-300 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">
                  CORI Surgical System
                </h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Used to support surgical planning, real-time bone mapping and precision implant positioning for knee replacement procedures.
                </p>
                <div className="border-t border-white/10 pt-4 space-y-2 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Real-time surgical assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Individualised knee alignment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Surgeon-guided execution</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          S05 — PROFESSIONAL QUALIFICATIONS & EXPERIENCE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Verified Credentials
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              International Qualifications & Specialist Orthopaedic Experience
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-[1.7]">
              Prof. Dr. Mumraiz Naqshband brings international medical education, specialist orthopaedic qualifications and experience in joint replacement, arthroscopy and trauma surgery to his clinical practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* H3: Medical Education & Professional Qualifications */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center">
                <Award className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Medical Education & Qualifications
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 pt-1">
                <div>
                  <div className="font-bold text-brand-deep">MBChB — New Zealand</div>
                  <div className="text-slate-500 text-xs">Medical qualification obtained in New Zealand.</div>
                </div>
                <div>
                  <div className="font-bold text-brand-deep">FRACS Orthopaedics — Australia</div>
                  <div className="text-slate-500 text-xs">Fellowship of the Royal Australasian College of Surgeons in Orthopaedics.</div>
                </div>
                <div>
                  <div className="font-bold text-brand-deep">FRCS Trauma & Orthopaedics — UK</div>
                  <div className="text-slate-500 text-xs">Fellowship of the Royal College of Surgeons in Trauma & Orthopaedics.</div>
                </div>
              </div>
            </div>

            {/* H3: Specialist Training */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Specialist Training
              </h3>
              <p className="text-xs text-slate-500">
                His professional background includes fellowships in:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Joint Replacement Surgery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Arthroscopic Surgery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Orthopaedic Trauma Surgery</span>
                </li>
              </ul>
            </div>

            {/* H3: Academic Role */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center">
                <FileText className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                Academic Role
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 pt-1">
                Professor at King Edward Medical University (KEMU), Lahore.
              </p>
              <p className="text-xs text-slate-500">
                Involved in academic training, surgical education and clinical instruction for future orthopaedic specialists.
              </p>
            </div>

            {/* H3: International Experience */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-blue flex items-center justify-center">
                <Clock className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-deep">
                International Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 pt-1">
                Over 20 years of international experience in orthopaedic surgery.
              </p>
              <p className="text-xs text-slate-500">
                Extensive clinical training and consultant practice across New Zealand, Australia, the UK, and Pakistan.
              </p>
            </div>

          </div>

          <div className="mt-8 text-left">
            <Link
              to="/about/"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-deep font-semibold text-sm group"
            >
              <span>View Full Professional Profile</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          S06 — PATIENT-CENTRED ORTHOPAEDIC CARE
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-brand-light/40 border-t border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Clinical Approach
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Personalised Orthopaedic Care for Your Joint Health
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-[1.7]">
              <p>
                Every patient's orthopaedic condition is different. Understanding the cause of pain, the extent of joint damage and the impact on daily activities is essential when considering treatment options.
              </p>
              <p>
                Prof. Dr. Mumraiz Naqshband focuses on individualised treatment planning, helping patients understand their diagnosis and the options available to them.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* H3: Comprehensive Clinical Assessment */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card">
              <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                Comprehensive Clinical Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A detailed consultation helps identify symptoms, functional limitations and possible causes of joint pain or injury.
              </p>
            </div>

            {/* H3: Clear Treatment Discussions */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card">
              <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                Clear Treatment Discussions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients are provided with information about relevant treatment options, including potential benefits, risks and alternatives.
              </p>
            </div>

            {/* H3: Surgical and Non-Surgical Options */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card">
              <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                Surgical and Non-Surgical Options
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Not every orthopaedic condition requires surgery. Recommendations depend on the diagnosis, severity of symptoms and individual circumstances.
              </p>
            </div>

            {/* H3: Recovery and Follow-Up Planning */}
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card">
              <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                Recovery and Follow-Up Planning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When surgery is recommended, recovery expectations, rehabilitation needs and follow-up arrangements are discussed as part of treatment planning.
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
              <span>Schedule an Orthopaedic Consultation</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          S07 — CONDITIONS WE ASSESS AND TREAT
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Conditions & Symptoms
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Common Orthopaedic Conditions & Joint Problems
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-[1.7]">
              Orthopaedic conditions can affect movement, comfort and the ability to perform everyday activities. Early assessment can help identify the cause of symptoms and guide appropriate treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Condition 1: Knee Pain and Osteoarthritis */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Knee Pain and Osteoarthritis
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Knee osteoarthritis may cause pain, stiffness, swelling and difficulty walking or climbing stairs. Treatment depends on the severity of symptoms and joint changes.
                </p>
              </div>
              <Link
                to="/knee-osteoarthritis-treatment/"
                className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto"
              >
                <span>Knee Osteoarthritis Treatment</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Condition 2: Hip Pain and Joint Degeneration */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Hip Pain and Joint Degeneration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Hip disorders may cause pain around the groin, thigh or buttock and can restrict mobility. Assessment helps determine the underlying cause and suitable management options.
                </p>
              </div>
              <Link
                to="/hip-joint-disorders/"
                className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto"
              >
                <span>Hip Joint Disorders</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Condition 3: Sports-Related Ligament and Meniscus Injuries */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Sports-Related Ligament and Meniscus Injuries
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Ligament and meniscus injuries may occur during sports or physical activity and can lead to pain, swelling, instability or restricted movement.
                </p>
              </div>
              <Link
                to="/sports-injury-surgery/"
                className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto"
              >
                <span>Sports Injury Surgery</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Condition 4: Shoulder Pain and Instability */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Shoulder Pain and Instability
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Shoulder symptoms may arise from rotator cuff injuries, instability or other joint and soft tissue conditions.
                </p>
              </div>
              <Link
                to="/shoulder-joint-disorders/"
                className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto"
              >
                <span>Shoulder & Joint Disorders</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Condition 5: Fractures and Traumatic Injuries */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-brand-border flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-brand-deep mb-2">
                  Fractures and Traumatic Injuries
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Fractures and joint injuries require appropriate assessment to determine whether immobilisation, rehabilitation or surgical management is needed.
                </p>
              </div>
              <Link
                to="/fracture-trauma-surgery/"
                className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1 mt-auto"
              >
                <span>Fracture & Trauma Surgery</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          S08 — PATIENT RESULTS & SURGICAL OUTCOMES
          ========================================================================= */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Educational Case Reviews
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Patient Results — Before & After Surgery
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-[1.7]">
              <p>
                Understanding the experiences of patients who have undergone orthopaedic treatment can help others learn more about the treatment journey.
              </p>
              <p>
                Our patient results section is intended to present selected, appropriately consented cases and educational information about orthopaedic procedures, recovery and follow-up care.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 italic">
                Individual outcomes vary depending on the patient's diagnosis, general health, procedure and rehabilitation.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/patient-results-before-after-surgery/"
              className="inline-flex items-center gap-2 bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors border border-brand-border"
            >
              <span>View Patient Results</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          GOOGLE BUSINESS REVIEWS SECTION
          ========================================================================= */}
      <GoogleReviewsSection />

      {/* =========================================================================
          S09 — CLINIC LOCATIONS & GOOGLE MAP
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Clinic Locations
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Orthopaedic Consultation Locations in Lahore
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-[1.7]">
              Patients can enquire about consultations with Prof. Dr. Mumraiz Naqshband at the following clinic locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: BNI */}
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
                    <span><strong>Appointment Number:</strong> 0321 4175761</span>
                  </div>
                </div>

                {/* Embedded Interactive Google Map for BNI Clinic GMB Listing */}
                <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-brand-border shadow-inner mt-4">
                  <iframe
                    title="Prof. Dr. Mumraiz Naqshband - BNI Clinic Google Map"
                    src={CLINIC_LOCATIONS[0].mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3">
                <Link
                  to="/bashir-neurospine-institute/"
                  className="py-2.5 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition"
                >
                  View Clinic Details
                </Link>
                <a
                  href={CLINIC_LOCATIONS[0].googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-brand-deep border border-brand-border font-semibold text-xs transition flex items-center gap-1.5 shadow-sm"
                >
                  <GoogleIcon className="w-3.5 h-3.5" />
                  <span>Open on Google Maps</span>
                </a>
                <a
                  href="https://wa.me/923214175761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 2: Bahria International Hospitals */}
            <div className="bg-slate-50 rounded-3xl p-7 sm:p-8 border border-brand-border flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-xl text-brand-deep mb-3">
                  Bahria International Hospitals
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <p className="text-slate-600">
                    For appointment availability, clinic address and consultation arrangements, please contact the appointment number.
                  </p>
                  <div className="text-xs text-slate-500">
                    <strong>Address and Hours:</strong> Pending confirmation.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/bahria-international-hospitals/"
                  className="py-2.5 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition"
                >
                  View Clinic Information
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
          S10 — FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-brand-border text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Patient Information
            </span>
            {/* H2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Frequently Asked Questions About Orthopaedic Care
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What conditions does Prof. Dr. Mumraiz Naqshband treat?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Prof. Dr. Mumraiz Naqshband provides specialist assessment and treatment for knee and hip disorders, arthritis, sports injuries, ligament and meniscus injuries, selected shoulder conditions, fractures and other orthopaedic problems.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Does Prof. Dr. Mumraiz Naqshband perform robotic knee replacement surgery?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Yes. His clinical services include robotic-assisted knee replacement using the CORI Surgical System. Whether this procedure is appropriate depends on the patient's clinical condition and individual assessment.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>What is the difference between robotic-assisted and conventional knee replacement?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Both procedures involve replacing damaged joint surfaces with artificial components. Robotic-assisted knee replacement uses technology to support aspects of surgical planning and execution. The surgeon remains in control of the procedure, and the most appropriate approach depends on the patient's needs.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Does every patient with knee arthritis need surgery?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                No. Many patients can be managed using non-surgical approaches. Surgery may be considered when symptoms, joint damage and functional limitations justify it after clinical assessment.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>Where can I consult Prof. Dr. Mumraiz Naqshband in Lahore?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                Consultation information is available for Bashir NeuroSpine Institute on Jail Road, Shadman, Lahore. Patients can also enquire about appointments at Bahria International Hospitals. Please confirm the location and schedule when booking.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white rounded-2xl border border-brand-border p-5 transition-all open:shadow-md">
              <summary className="font-heading font-semibold text-base sm:text-[18px] text-brand-deep cursor-pointer flex items-center justify-between list-none">
                <span>How can I book an appointment?</span>
                <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                  ↓
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-[1.7]">
                You can call 0321 4175761 or contact the appointment team through WhatsApp to enquire about consultation availability.
              </p>
            </details>

          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faqs/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-deep transition"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          S11 — FINAL APPOINTMENT CTA & CONTACT FORM (B5.4, B5.5)
          Layout: Light-blue background, prominent deep-blue heading, near-black
          supporting text and a teal-green appointment button.
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-brand-light text-left border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: CTA Text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white px-3 py-1 rounded-full border border-brand-border">
                Consultation Enquiries
              </span>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
                Book an Orthopaedic Consultation in Lahore
              </h2>

              <div className="space-y-4 text-brand-dark text-sm sm:text-base leading-[1.7]">
                <p>
                  If you are experiencing persistent joint pain, difficulty with movement, a sports-related injury or another orthopaedic concern, a specialist consultation can help you understand your condition and available treatment options.
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
                  className="bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition shadow-md flex items-center justify-center gap-2"
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
                Consultation location and timing should be confirmed when booking.
              </p>
            </div>

            {/* Right Column: Contact Form conforming to B5.5 */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl border border-brand-border">
                
                <h3 className="text-xl font-bold font-heading text-brand-deep mb-1">
                  Enquire About Consultation Arrangements
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
                      Enquiry Submitted
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
                          className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-base sm:text-sm transition"
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
                          className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-base sm:text-sm transition"
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
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-base sm:text-sm bg-white transition"
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
                        Appointment Enquiry / Message *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Please briefly outline your appointment enquiry or condition..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue outline-none text-base sm:text-sm transition"
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
                        <span>Submit Appointment Enquiry</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition text-xs sm:text-sm flex items-center justify-center gap-2"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Enquire on WhatsApp</span>
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
