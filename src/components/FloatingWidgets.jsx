import React, { useState } from 'react';
import { Phone, Calendar, X } from 'lucide-react';
import { DOCTOR_INFO } from '../data/siteData';
import { WhatsAppIcon } from './SocialIcons';

export default function FloatingWidgets({ onOpenAppointment }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Floating Desktop WhatsApp Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {showTooltip && (
          <div className="bg-white rounded-2xl shadow-xl border border-brand-border p-3 max-w-xs text-xs text-brand-dark animate-in fade-in slide-in-from-bottom-2 duration-150 relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="font-bold text-brand-deep flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Clinic Helpline Active
            </div>
            <p className="text-slate-600">
              Need assistance with robotic knee or joint consultation booking? Chat directly with Prof. Dr. Mumraiz Naqshband's clinical team.
            </p>
          </div>
        )}

        <div className="relative group">
          <a
            href={DOCTOR_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-105"
            aria-label="Chat on WhatsApp with Dr. Mumraiz Naqshband's team"
          >
            <WhatsAppIcon className="w-7 h-7" />
          </a>
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white"></span>
        </div>
      </aside>

      {/* Floating Mobile Bottom Action Bar */}
      <aside aria-label="Mobile quick actions" className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-border py-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <a
            href={`tel:${DOCTOR_INFO.phoneTel}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-brand-border bg-brand-light text-brand-deep font-semibold text-xs tracking-tight shadow-sm active:scale-95 transition"
          >
            <Phone className="w-4 h-4 text-brand-blue" />
            <span>Call Clinic</span>
          </a>

          <button
            onClick={() => onOpenAppointment && onOpenAppointment()}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-brand-teal text-white font-semibold text-xs tracking-tight shadow-md active:scale-95 transition"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>
      </aside>
    </>
  );
}
