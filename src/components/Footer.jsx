import React from 'react';
import { 
  Phone, Mail, MapPin, Clock, Shield, Award, Heart, 
  ArrowUp, ExternalLink, CheckCircle2 
} from 'lucide-react';
import { Link } from '../utils/navigation';
import { DOCTOR_INFO, CLINIC_LOCATIONS, SERVICE_CATEGORIES } from '../data/siteData';
import { 
  WhatsAppIcon, InstagramIcon, FacebookIcon, 
  LinkedInIcon, ResearchGateIcon, OrthopaedicLogoIcon 
} from './SocialIcons';

export default function Footer({ onOpenAppointment }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-deep text-white border-t border-brand-deep/80 pt-16 pb-12 font-sans relative">
      {/* Top Pre-Footer Credentials Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">UK & Australia Trained</div>
              <div className="text-xs text-white/60">FRACS & FRCS Certified</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">CORI Robotic Knee System</div>
              <div className="text-xs text-white/60">Sub-millimeter Surgical Fidelity</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-teal flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Professor at KEMU</div>
              <div className="text-xs text-white/60">King Edward Medical University</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <WhatsAppIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">WhatsApp Helpline</div>
              <a 
                href={DOCTOR_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 font-semibold hover:underline"
              >
                {DOCTOR_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Doctor Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                <OrthopaedicLogoIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Prof. Dr. Mumraiz Naqshband
                </h3>
                <p className="text-xs text-brand-light/80">
                  Consultant Orthopaedic & Robotic Knee Surgeon
                </p>
              </div>
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing internationally certified orthopaedic surgery, robotic-assisted joint replacement, arthroscopy, and sports trauma reconstruction in Lahore, Punjab, Pakistan.
            </p>

            <div className="text-xs text-white/60 space-y-1">
              <div><strong>Academic Role:</strong> Professor at King Edward Medical University (KEMU)</div>
              <div><strong>Primary Clinic:</strong> BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore</div>
              <div><strong>Phone:</strong> {DOCTOR_INFO.phoneInternational}</div>
            </div>

            {/* Official Social Media Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={DOCTOR_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-amber-600 hover:via-pink-600 hover:to-purple-600 flex items-center justify-center text-white transition-all duration-300"
                aria-label="Official Instagram Profile"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={DOCTOR_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] flex items-center justify-center text-white transition-all duration-300"
                aria-label="Official Facebook Profile"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={DOCTOR_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center text-white transition-all duration-300"
                aria-label="Official LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={DOCTOR_INFO.socialLinks.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#00CCBB] flex items-center justify-center text-white transition-all duration-300"
                aria-label="ResearchGate Publications"
                title="ResearchGate"
              >
                <ResearchGateIcon className="w-4 h-4" />
              </a>

              <a
                href={DOCTOR_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center text-white transition-all duration-300 shadow-md"
                aria-label="Official WhatsApp"
                title="WhatsApp Direct"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Group 1: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-brand-light transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about/" className="hover:text-brand-light transition-colors">About Doctor</Link>
              </li>
              <li>
                <Link to="/services/" className="hover:text-brand-light transition-colors">Services Overview</Link>
              </li>
              <li>
                <Link to="/patient-results-before-after-surgery/" className="hover:text-brand-light transition-colors">Patient Results</Link>
              </li>
              <li>
                <Link to="/faqs/" className="hover:text-brand-light transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/clinic-locations/" className="hover:text-brand-light transition-colors">Locations</Link>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-brand-light transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Group 2: Our Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <Link to="/robotic-knee-replacement/" className="hover:text-brand-light transition-colors">
                  Robotic Knee Replacement
                </Link>
              </li>
              <li>
                <Link to="/hip-replacement-surgery/" className="hover:text-brand-light transition-colors">
                  Hip Replacement Surgery
                </Link>
              </li>
              <li>
                <Link to="/sports-injury-surgery/" className="hover:text-brand-light transition-colors">
                  Sports Injury Surgery
                </Link>
              </li>
              <li>
                <Link to="/arthroscopic-surgery/" className="hover:text-brand-light transition-colors">
                  Arthroscopic Surgery
                </Link>
              </li>
              <li>
                <Link to="/shoulder-joint-disorders/" className="hover:text-brand-light transition-colors">
                  Shoulder & Joint Disorders
                </Link>
              </li>
              <li>
                <Link to="/fracture-trauma-surgery/" className="hover:text-brand-light transition-colors">
                  Fracture & Trauma Surgery
                </Link>
              </li>
              <li>
                <Link to="/arthritis-joint-pain/" className="hover:text-brand-light transition-colors">
                  Arthritis & Joint Pain
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 3 & 4: Clinics & Legal */}
          <div className="space-y-6">
            <div>
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-3 border-b border-white/10 pb-2">
                Locations
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/70">
                <li>
                  <Link to="/bashir-neurospine-institute/" className="hover:text-brand-light transition-colors">
                    Bashir NeuroSpine Institute
                  </Link>
                </li>
                <li>
                  <Link to="/bahria-international-hospitals/" className="hover:text-brand-light transition-colors">
                    Bahria International Hospitals
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-3 border-b border-white/10 pb-2">
                Legal & Information
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/70">
                <li>
                  <Link to="/privacy-policy/" className="hover:text-brand-light transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions/" className="hover:text-brand-light transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/medical-disclaimer/" className="hover:text-brand-light transition-colors">
                    Medical Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Medical Disclaimer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 border-t border-white/10 text-center">
        <p className="text-[11px] text-white/50 leading-relaxed max-w-4xl mx-auto">
          <strong>Medical Notice:</strong> Information on this website is provided for educational and clinical guidance purposes only and does not constitute formal medical diagnosis or replace personalized consultation with a qualified orthopaedic surgeon. Surgical outcomes vary depending on patient anatomy and adherence to rehabilitation protocols.
        </p>
      </div>

      {/* Bottom Copyright & Credit Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
        <div>
          © {new Date().getFullYear()} Prof. Dr. Mumraiz Naqshband. All rights reserved. • Design and Managed by{' '}
          <a
            href="https://digitalnasirawan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-light transition underline underline-offset-2 font-medium"
          >
            Digital Nasir Awan
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-brand-light hover:text-white transition-colors"
          aria-label="Back to top of page"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
