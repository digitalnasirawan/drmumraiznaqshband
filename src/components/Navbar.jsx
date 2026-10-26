import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Clock, MapPin, ChevronDown, ChevronRight, Menu, X, 
  Calendar, Shield, Award, Sparkles, ExternalLink
} from 'lucide-react';
import { Link, useRouter, normalizePath } from '../utils/navigation';
import { DOCTOR_INFO, CLINIC_LOCATIONS, SERVICE_CATEGORIES } from '../data/siteData';
import { WhatsAppIcon, OrthopaedicLogoIcon } from './SocialIcons';

export default function Navbar({ onOpenAppointment }) {
  const { path } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [patientsDropdownOpen, setPatientsDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobilePatientsExpanded, setMobilePatientsExpanded] = useState(false);
  const [mobileLocationsExpanded, setMobileLocationsExpanded] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState(SERVICE_CATEGORIES[0].id);

  const megaMenuRef = useRef(null);
  const patientsRef = useRef(null);
  const locationsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPatientsDropdownOpen(false);
    setLocationsDropdownOpen(false);
  }, [path]);

  // Click outside listener for desktop dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
      if (patientsRef.current && !patientsRef.current.contains(event.target)) {
        setPatientsDropdownOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target)) {
        setLocationsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeCategoryData = SERVICE_CATEGORIES.find(c => c.id === activeMegaCategory) || SERVICE_CATEGORIES[0];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all duration-300">
      {/* Top Utility & Contact Bar */}
      <div className="bg-brand-deep text-white text-xs py-2 px-4 border-b border-brand-deep/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${DOCTOR_INFO.phoneTel}`} 
              className="inline-flex items-center gap-1.5 hover:text-brand-light transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-teal" />
              <span>{DOCTOR_INFO.phoneInternational}</span>
            </a>
            <div className="inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-teal" />
              <span>BNI - 18 Jail Rd, Shadman 1, Lahore</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brand-teal" />
              <span>Mon - Sat: By Prior Consultation</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/70">CORI Robotic Knee Specialist</span>
            <span className="text-white/30">|</span>
            {/* Top Bar Button: Text updated to Book Appointment with official WhatsApp Icon */}
            <a
              href={DOCTOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className={`transition-all duration-200 border-b border-brand-border ${isScrolled ? 'py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity / Doctor Logo */}
          <Link to="/" className="flex items-center gap-3 group text-left shrink-0">
            {/* Orthopaedic Related Icon */}
            <div className="w-11 h-11 rounded-xl bg-brand-light border border-brand-border flex items-center justify-center shadow-sm group-hover:shadow-md transition-all shrink-0">
              <OrthopaedicLogoIcon className="w-7 h-7" />
            </div>
            {/* Logo Text in Single Line + Subheading in Single Line */}
            <div className="flex flex-col justify-center">
              <div className="font-heading font-bold text-base sm:text-lg lg:text-xl text-brand-deep tracking-tight group-hover:text-brand-blue transition-colors whitespace-nowrap">
                Prof. Dr. Mumraiz Naqshband
              </div>
              <div className="text-xs text-brand-blue font-semibold tracking-wide whitespace-nowrap">
                Consultant Orthopedic Surgeon
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-[15px]">
            {/* 1. Home */}
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg transition-colors ${
                path === '/' ? 'text-brand-blue font-semibold bg-brand-light' : 'text-brand-dark hover:text-brand-blue hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* 2. About */}
            <Link 
              to="/about/" 
              className={`px-3 py-2 rounded-lg transition-colors ${
                path === '/about/' ? 'text-brand-blue font-semibold bg-brand-light' : 'text-brand-dark hover:text-brand-blue hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            {/* 3. Services (Mega Menu) */}
            <div 
              ref={megaMenuRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  to="/services/"
                  className={`px-3 py-2 rounded-l-lg transition-colors ${
                    path.startsWith('/services/') || SERVICE_CATEGORIES.some(c => c.slug === path || c.treatments.some(t => t.slug === path))
                      ? 'text-brand-blue font-semibold bg-brand-light'
                      : 'text-brand-dark hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="px-1.5 py-2 rounded-r-lg text-slate-500 hover:text-brand-blue hover:bg-slate-50 transition-colors"
                  aria-expanded={servicesDropdownOpen}
                  aria-label="Toggle Services Menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Mega Menu Dropdown Pane */}
              {servicesDropdownOpen && (
                <div className="absolute top-full -left-28 w-[880px] bg-white rounded-2xl shadow-2xl border border-brand-border mt-1 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-brand-border">
                    <div>
                      <h4 className="font-heading font-bold text-brand-deep text-base">
                        Specialist Orthopaedic & Joint Services
                      </h4>
                      <p className="text-xs text-slate-500">
                        Select a category below or explore individual procedures
                      </p>
                    </div>
                    <Link
                      to="/services/"
                      className="text-xs font-semibold text-brand-blue hover:text-brand-deep inline-flex items-center gap-1"
                    >
                      <span>View All Services Master Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-12 gap-6">
                    {/* Categories Column (Left) */}
                    <div className="col-span-5 space-y-1 pr-2 border-r border-brand-border/70 max-h-[380px] overflow-y-auto">
                      {SERVICE_CATEGORIES.map((cat) => {
                        const isSelected = cat.id === activeMegaCategory;
                        return (
                          <div
                            key={cat.id}
                            onMouseEnter={() => setActiveMegaCategory(cat.id)}
                            className={`p-2.5 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                              isSelected
                                ? 'bg-brand-light border-l-4 border-brand-teal text-brand-deep font-semibold'
                                : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <Link to={cat.slug} className="flex-1 block text-left">
                              <div className="text-xs font-semibold leading-tight">{cat.title}</div>
                              <span className="text-[10px] text-slate-500 font-normal mt-0.5 block">
                                {cat.treatments.length} specialist procedures
                              </span>
                            </Link>
                            <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isSelected ? 'text-brand-teal translate-x-0.5' : 'text-slate-300'}`} />
                          </div>
                        );
                      })}
                    </div>

                    {/* Treatments List (Right) */}
                    <div className="col-span-7 pl-2">
                      <div className="mb-3 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2 py-0.5 rounded">
                            {activeCategoryData.badge}
                          </span>
                          <h5 className="font-heading font-bold text-sm text-brand-deep mt-1">
                            {activeCategoryData.title}
                          </h5>
                        </div>
                        <Link 
                          to={activeCategoryData.slug}
                          className="text-xs font-semibold text-brand-blue hover:underline"
                        >
                          Category Overview →
                        </Link>
                      </div>

                      <div className="grid grid-cols-1 gap-1.5 max-h-[310px] overflow-y-auto pr-1">
                        {activeCategoryData.treatments.map((treatment) => (
                          <Link
                            key={treatment.slug}
                            to={treatment.slug}
                            className="p-2 rounded-lg hover:bg-brand-light/60 transition group flex items-start gap-2 text-left"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-2 group-hover:scale-125 transition-transform"></span>
                            <div>
                              <div className="text-xs font-medium text-brand-deep group-hover:text-brand-blue transition-colors">
                                {treatment.title}
                              </div>
                              <div className="text-[11px] text-slate-500 line-clamp-1">
                                {treatment.lead}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. For Patients Dropdown (Contains Patient Results & FAQs) */}
            <div 
              ref={patientsRef}
              className="relative"
              onMouseEnter={() => setPatientsDropdownOpen(true)}
              onMouseLeave={() => setPatientsDropdownOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  to="/patient-results-before-after-surgery/"
                  className={`px-3 py-2 rounded-l-lg transition-colors ${
                    path === '/patient-results-before-after-surgery/' || path === '/faqs/'
                      ? 'text-brand-blue font-semibold bg-brand-light'
                      : 'text-brand-dark hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  For Patients
                </Link>
                <button
                  type="button"
                  onClick={() => setPatientsDropdownOpen(!patientsDropdownOpen)}
                  className="px-1.5 py-2 rounded-r-lg text-slate-500 hover:text-brand-blue hover:bg-slate-50 transition-colors"
                  aria-expanded={patientsDropdownOpen}
                  aria-label="Toggle For Patients Menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${patientsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {patientsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-brand-border mt-1 p-2 z-50 animate-in fade-in duration-150">
                  <Link
                    to="/patient-results-before-after-surgery/"
                    className="block p-2.5 rounded-lg hover:bg-brand-light text-left transition group border-b border-slate-100"
                  >
                    <div className="text-xs font-bold text-brand-deep group-hover:text-brand-blue">
                      Patient Results
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Before & after surgery recovery milestones
                    </div>
                  </Link>

                  <Link
                    to="/faqs/"
                    className="block p-2.5 rounded-lg hover:bg-brand-light text-left transition group"
                  >
                    <div className="text-xs font-bold text-brand-deep group-hover:text-brand-blue">
                      Frequently Asked Questions (FAQs)
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Answers on robotic knee surgery & recovery
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 5. Locations Dropdown */}
            <div 
              ref={locationsRef}
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  to="/clinic-locations/"
                  className={`px-3 py-2 rounded-l-lg transition-colors ${
                    path === '/clinic-locations/' || CLINIC_LOCATIONS.some(c => c.slug === path)
                      ? 'text-brand-blue font-semibold bg-brand-light'
                      : 'text-brand-dark hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  Locations
                </Link>
                <button
                  type="button"
                  onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
                  className="px-1.5 py-2 rounded-r-lg text-slate-500 hover:text-brand-blue hover:bg-slate-50 transition-colors"
                  aria-expanded={locationsDropdownOpen}
                  aria-label="Toggle Locations Menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-brand-border mt-1 p-2 z-50 animate-in fade-in duration-150">
                  <Link
                    to="/clinic-locations/"
                    className="block p-2.5 rounded-lg hover:bg-brand-light text-left transition group border-b border-slate-100"
                  >
                    <div className="text-xs font-bold text-brand-deep">All Locations</div>
                    <div className="text-[11px] text-slate-500">Overview & consultation scheduling</div>
                  </Link>

                  <Link
                    to="/bashir-neurospine-institute/"
                    className="block p-2.5 rounded-lg hover:bg-brand-light text-left transition group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-brand-deep group-hover:text-brand-blue">
                        BNI - Bashir NeuroSpine
                      </div>
                      <span className="text-[9px] bg-brand-light text-brand-blue font-bold px-1.5 py-0.5 rounded">Primary</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">18 Jail Rd, Shadman 1, Lahore</div>
                  </Link>

                  <Link
                    to="/bahria-international-hospitals/"
                    className="block p-2.5 rounded-lg hover:bg-brand-light text-left transition group"
                  >
                    <div className="text-xs font-semibold text-brand-deep group-hover:text-brand-blue">
                      Bahria International Hospitals
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Sector B, Bahria Town, Lahore</div>
                  </Link>
                </div>
              )}
            </div>

            {/* 7. Contact */}
            <Link 
              to="/contact/" 
              className={`px-3 py-2 rounded-lg transition-colors ${
                path === '/contact/' ? 'text-brand-blue font-semibold bg-brand-light' : 'text-brand-dark hover:text-brand-blue hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA: Call number button removed per instruction; only primary Book Appointment button remains */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenAppointment && onOpenAppointment()}
              className="bg-brand-teal hover:bg-brand-tealHover text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenAppointment && onOpenAppointment()}
              className="bg-brand-teal text-white p-2 rounded-xl text-xs font-semibold flex items-center gap-1"
              aria-label="Book Appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-deep hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white z-50 overflow-y-auto border-t border-brand-border p-4 pb-24 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-2">
            <Link
              to="/"
              className="block p-3 rounded-xl font-medium text-brand-deep hover:bg-brand-light"
            >
              Home
            </Link>

            <Link
              to="/about/"
              className="block p-3 rounded-xl font-medium text-brand-deep hover:bg-brand-light"
            >
              About Doctor
            </Link>

            {/* Expandable Services Group */}
            <div className="border border-brand-border rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-3 bg-slate-50">
                <Link to="/services/" className="font-semibold text-brand-deep text-sm">
                  Services Overview
                </Link>
                <button
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className="p-1 rounded-md text-slate-500 hover:text-brand-blue"
                  aria-label="Expand services"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileServicesExpanded && (
                <div className="p-2 space-y-3 bg-white">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="border-b border-slate-100 pb-2">
                      <Link
                        to={cat.slug}
                        className="font-bold text-xs text-brand-blue block py-1"
                      >
                        {cat.title}
                      </Link>
                      <div className="pl-2 space-y-1 mt-1">
                        {cat.treatments.map((t) => (
                          <Link
                            key={t.slug}
                            to={t.slug}
                            className="block text-xs text-slate-600 hover:text-brand-deep py-0.5"
                          >
                            • {t.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Expandable For Patients Group */}
            <div className="border border-brand-border rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-3 bg-slate-50">
                <span className="font-semibold text-brand-deep text-sm">
                  For Patients
                </span>
                <button
                  onClick={() => setMobilePatientsExpanded(!mobilePatientsExpanded)}
                  className="p-1 rounded-md text-slate-500 hover:text-brand-blue"
                  aria-label="Expand for patients"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobilePatientsExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobilePatientsExpanded && (
                <div className="p-3 space-y-2 bg-white text-xs">
                  <Link
                    to="/patient-results-before-after-surgery/"
                    className="block text-slate-700 font-medium py-1"
                  >
                    • Patient Results (Before & After)
                  </Link>
                  <Link
                    to="/faqs/"
                    className="block text-slate-700 font-medium py-1"
                  >
                    • Frequently Asked Questions (FAQs)
                  </Link>
                </div>
              )}
            </div>

            {/* Expandable Locations Group */}
            <div className="border border-brand-border rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-3 bg-slate-50">
                <Link to="/clinic-locations/" className="font-semibold text-brand-deep text-sm">
                  Locations
                </Link>
                <button
                  onClick={() => setMobileLocationsExpanded(!mobileLocationsExpanded)}
                  className="p-1 rounded-md text-slate-500 hover:text-brand-blue"
                  aria-label="Expand locations"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileLocationsExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileLocationsExpanded && (
                <div className="p-3 space-y-2 bg-white text-xs">
                  <Link to="/clinic-locations/" className="block text-slate-700 font-medium py-1">
                    • All Locations
                  </Link>
                  <Link to="/bashir-neurospine-institute/" className="block text-slate-700 font-medium py-1">
                    • BNI - Bashir NeuroSpine Institute (Jail Rd)
                  </Link>
                  <Link to="/bahria-international-hospitals/" className="block text-slate-700 font-medium py-1">
                    • Bahria International Hospitals (Bahria Town)
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact/"
              className="block p-3 rounded-xl font-medium text-brand-deep hover:bg-brand-light"
            >
              Contact & Inquiries
            </Link>
          </div>

          {/* Quick Contact within Drawer */}
          <div className="mt-6 pt-4 border-t border-brand-border space-y-3">
            <a
              href={`tel:${DOCTOR_INFO.phoneTel}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-brand-light text-brand-deep font-semibold rounded-xl text-sm"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              <span>Call: {DOCTOR_INFO.phone}</span>
            </a>

            {/* WhatsApp with official icon */}
            <a
              href={DOCTOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAppointment) onOpenAppointment();
              }}
              className="w-full py-3 bg-brand-teal text-white font-semibold rounded-xl text-sm shadow-md"
            >
              Book Consultation Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
