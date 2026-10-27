import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle } from 'lucide-react';
import { DOCTOR_INFO, CLINIC_LOCATIONS } from '../data/siteData';
import { WhatsAppIcon } from './SocialIcons';

export default function AppointmentModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    clinic: 'bni',
    service: initialService || 'Robotic Knee Replacement (CORI)',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const selectedClinic = CLINIC_LOCATIONS.find(c => c.id === formData.clinic)?.name || 'BNI - Bashir NeuroSpine Institute';
    const message = `Hello Prof. Dr. Mumraiz Naqshband's clinic, I would like to book a consultation.%0A%0A*Patient Name:* ${encodeURIComponent(formData.name || 'Patient')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Provided')}%0A*Clinic:* ${encodeURIComponent(selectedClinic)}%0A*Service / Condition:* ${encodeURIComponent(formData.service)}%0A*Preferred Date:* ${encodeURIComponent(formData.preferredDate || 'Earliest Available')}%0A*Notes:* ${encodeURIComponent(formData.notes || 'None')}`;
    window.open(`https://wa.me/923214175761?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-brand-border flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden my-auto sm:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-deep to-brand-blue p-4 sm:p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/15 rounded-full text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
            Direct Clinic Desk
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white pr-8 sm:pr-0">
            Book Your Consultation
          </h3>
          <p className="text-white/80 text-xs sm:text-sm mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-none">
            Prof. Dr. Mumraiz Naqshband | Consultant Orthopaedic & Robotic Knee Surgeon
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 overscroll-contain">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-brand-deep font-heading">
                Consultation Request Received
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our clinical coordinator will contact you at <strong>{formData.phone}</strong> shortly to confirm your consultation slot.
              </p>
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                <button
                  onClick={handleWhatsAppSend}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Confirm Instantly via WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 font-semibold text-xs sm:text-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-base sm:text-sm transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="0321 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-base sm:text-sm transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1">
                    Select Clinic Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={formData.clinic}
                      onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-base sm:text-sm bg-white transition"
                    >
                      <option value="bni">BNI - Bashir NeuroSpine Institute (Jail Rd)</option>
                      <option value="bahria">Bahria International Hospitals (Bahria Town)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1">
                    Service / Condition
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-base sm:text-sm bg-white transition"
                  >
                    <option value="Robotic Knee Replacement (CORI)">Robotic Knee Replacement (CORI)</option>
                    <option value="Total Knee Replacement">Total Knee Replacement</option>
                    <option value="Partial Knee Replacement">Partial Knee Replacement</option>
                    <option value="Revision Knee Replacement">Revision Knee Replacement</option>
                    <option value="Knee Osteoarthritis Treatment">Knee Osteoarthritis Treatment</option>
                    <option value="Hip Replacement Surgery">Hip Replacement Surgery</option>
                    <option value="ACL / Sports Injury Surgery">ACL / Sports Injury Surgery</option>
                    <option value="Arthroscopic Surgery">Arthroscopic Surgery</option>
                    <option value="Shoulder & Joint Pain">Shoulder & Joint Pain</option>
                    <option value="Fracture & Trauma Assessment">Fracture & Trauma Assessment</option>
                    <option value="Second Opinion on Surgery">Second Opinion on Surgery</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1">
                  Preferred Consultation Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-base sm:text-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1">
                  Symptoms or Medical Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe knee/joint pain, prior surgeries, or reports available..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-base sm:text-sm transition"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-brand-teal hover:bg-brand-tealHover active:bg-brand-deep text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Submit Booking Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Book via WhatsApp
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400 pt-1">
                Your medical inquiry is private & strictly confidential. For immediate assistance, call {DOCTOR_INFO.phone}.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
