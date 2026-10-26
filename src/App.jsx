import React, { useState } from 'react';
import { useRouter } from './utils/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import AppointmentModal from './components/AppointmentModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesMasterPage from './pages/ServicesMasterPage';
import RoboticKneeCategoryPage from './pages/RoboticKneeCategoryPage';
import CoriRoboticKneePage from './pages/CoriRoboticKneePage';
import TotalKneeReplacementPage from './pages/TotalKneeReplacementPage';
import CategoryPage from './pages/CategoryPage';
import TreatmentPage from './pages/TreatmentPage';
import PatientResultsPage from './pages/PatientResultsPage';
import FaqsPage from './pages/FaqsPage';
import ClinicLocationsPage from './pages/ClinicLocationsPage';
import BashirClinicPage from './pages/BashirClinicPage';
import BahriaClinicPage from './pages/BahriaClinicPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

import { SERVICE_CATEGORIES } from './data/siteData';

export default function App() {
  const { path } = useRouter();
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [initialBookingService, setInitialBookingService] = useState('');

  const handleOpenAppointment = (serviceName = '') => {
    setInitialBookingService(typeof serviceName === 'string' ? serviceName : '');
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setAppointmentModalOpen(false);
  };

  // Determine which page component to render based on strict flat URL path
  const renderCurrentPage = () => {
    // 1. Static Root Pages
    if (path === '/') {
      return <HomePage onOpenAppointment={handleOpenAppointment} />;
    }
    if (path === '/about/') {
      return <AboutPage onOpenAppointment={handleOpenAppointment} />;
    }
    if (path === '/services/') {
      return <ServicesMasterPage onOpenAppointment={handleOpenAppointment} />;
    }
    if (path === '/patient-results-before-after-surgery/') {
      return <PatientResultsPage onOpenAppointment={handleOpenAppointment} />;
    }
    if (path === '/faqs/') {
      return <FaqsPage onOpenAppointment={handleOpenAppointment} />;
    }
    if (path === '/clinic-locations/') {
      return <ClinicLocationsPage onOpenAppointment={handleOpenAppointment} />;
    }
    if (path === '/bashir-neurospine-institute/') {
      return <BashirClinicPage onOpenAppointment={handleOpenAppointment} />;
    }
    if (path === '/bahria-international-hospitals/') {
      return <BahriaClinicPage onOpenAppointment={handleOpenAppointment} />;
    }
    if (path === '/contact/') {
      return <ContactPage onOpenAppointment={handleOpenAppointment} />;
    }

    // 2. Legal Pages
    if (path === '/privacy-policy/') {
      return <LegalPage type="privacy" />;
    }
    if (path === '/terms-and-conditions/') {
      return <LegalPage type="terms" />;
    }
    if (path === '/medical-disclaimer/') {
      return <LegalPage type="disclaimer" />;
    }

    // 3. Service Category Pages (Root-Level Slugs)
    if (path === '/robotic-knee-replacement/') {
      return <RoboticKneeCategoryPage onOpenAppointment={handleOpenAppointment} />;
    }

    const matchedCategory = SERVICE_CATEGORIES.find((cat) => cat.slug === path);
    if (matchedCategory) {
      return <CategoryPage category={matchedCategory} onOpenAppointment={handleOpenAppointment} />;
    }

    // 4. Individual Treatment Pages (Root-Level Slugs)
    if (path === '/robotic-assisted-knee-replacement/') {
      return <CoriRoboticKneePage onOpenAppointment={handleOpenAppointment} />;
    }
    if (path === '/total-knee-replacement/') {
      return <TotalKneeReplacementPage onOpenAppointment={handleOpenAppointment} />;
    }

    for (const cat of SERVICE_CATEGORIES) {
      const matchedTreatment = cat.treatments.find((t) => t.slug === path);
      if (matchedTreatment) {
        return (
          <TreatmentPage
            treatment={matchedTreatment}
            category={cat}
            onOpenAppointment={handleOpenAppointment}
          />
        );
      }
    }

    // 5. Fallback 404
    return <NotFoundPage onOpenAppointment={handleOpenAppointment} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-dark font-sans selection:bg-brand-teal selection:text-white">
      {/* Global Header & Navigation with Mega Menu */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      {/* Main Routed Page View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer onOpenAppointment={handleOpenAppointment} />

      {/* Floating Direct Channels (WhatsApp & Mobile Bar) */}
      <FloatingWidgets onOpenAppointment={handleOpenAppointment} />

      {/* Fast Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointment}
        initialService={initialBookingService}
      />
    </div>
  );
}
