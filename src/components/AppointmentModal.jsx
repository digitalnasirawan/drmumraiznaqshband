import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle } from 'lucide-react';
import { DOCTOR_INFO, CLINIC_LOCATIONS } from '../data/siteData';
import { WhatsAppIcon } from './SocialIcons';

export default function AppointmentModal({ isOpen, onClose, initialService = '' }) {
  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-brand-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-deep to-brand-blue p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-xs font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
            Direct Clinic Desk
          </div>
          <h3 className="text-2xl font-bold font-heading text-white">Book Your Consultation</h3>
          <p className="text-white/80 text-sm mt-1">
            Prof. Dr. Mumraiz Naqshband | Consultant Orthopaedic & Robotic Knee Surgeon
          </p>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-brand-deep font-heading">Consultation Request Received</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our clinical coordinator will contact you at <strong>{formData.phone}</strong> shortly to confirm your consultation slot.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppSend}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Confirm Instantly via WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
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
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
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
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                    Select Clinic Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={formData.clinic}
                      onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm bg-white transition"
                    >
                      <option value="bni">BNI - Bashir NeuroSpine Institute (Jail Rd)</option>
                      <option value="bahria">Bahria International Hospitals (Bahria Town)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                    Service / Condition
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm bg-white transition"
                  >
                    <option value="Robotic Knee Replacement (CORI)">Robotic Knee Replacement (CORI)</option>
                    <option value="Total Knee Replacement">Total Knee Replacement</option>
                    <option value="Hip Replacement Surgery">Hip Replacement Surgery</option>
                    <option value="ACL / Sports Injury Surgery">ACL / Sports Injury Surgery</option>
                    <option value="Arthroscopic Surgery">Arthroscopic Surgery</option>
                    <option value="Shoulder & Joint Pain">Shoulder & Joint Pain</option>
                    <option value="Fracture & Trauma Assessment">Fracture & Trauma Assessment</option>
                    <option value="Second Opinion on Surgery">Second Opinion on Joint Surgery</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                  Preferred Consultation Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-deep uppercase tracking-wider mb-1.5">
                  Symptoms or Medical Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe knee/joint pain, prior surgeries, or reports available..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none text-sm transition"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-brand-teal hover:bg-brand-tealHover text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Submit Booking Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Book via WhatsApp
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400 pt-1">
                Your medical inquiry is private & strictly confidential. For immediate emergency care, call {DOCTOR_INFO.phone}.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
