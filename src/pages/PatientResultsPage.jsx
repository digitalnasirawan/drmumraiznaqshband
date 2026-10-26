import React from 'react';
import { Award, ShieldCheck, Activity, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageSeo } from '../utils/seo';
import { Link } from '../utils/navigation';
import { PATIENT_RESULTS, DOCTOR_INFO } from '../data/siteData';

export default function PatientResultsPage({ onOpenAppointment }) {
  usePageSeo({
    title: "Patient Results — Before & After Surgery | Prof. Dr. Mumraiz Naqshband",
    description: "Verified clinical recovery cases, mobility restoration, and functional milestones achieved following robotic knee replacement and joint reconstruction by Prof. Dr. Mumraiz Naqshband in Lahore.",
    canonicalUrl: "/patient-results-before-after-surgery/"
  });

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: "Patient Results", url: "/patient-results-before-after-surgery/" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-deep to-[#0e2c47] text-white py-14 lg:py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/10 text-brand-teal inline-block">
              Clinical Case Milestones
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Patient Results — Before & After Surgery
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Real functional milestones, clinical alignment corrections, and recovery timelines from patients treated by Prof. Dr. Mumraiz Naqshband in Lahore, Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Integrity Notice */}
      <section className="py-6 bg-brand-light border-b border-brand-border text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
            <div>
              <strong>Ethical Medical Notice:</strong> Surgical outcomes and rehabilitation timelines vary based on age, pre-existing joint deformity, general medical health, and dedication to post-operative physiotherapy. No surgical outcome is universally guaranteed.
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Detailed Cards */}
      <section className="py-16 bg-slate-50 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {PATIENT_RESULTS.map((res, idx) => (
            <div
              key={res.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-brand-border gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                    Clinical Case 0{idx + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-deep mt-2">
                    {res.procedure}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Patient Profile: {res.patientProfile}
                  </p>
                </div>

                <button
                  onClick={() => onOpenAppointment && onOpenAppointment(res.procedure)}
                  className="bg-brand-light hover:bg-brand-blue hover:text-white text-brand-blue px-5 py-2.5 rounded-xl font-semibold text-xs transition self-start md:self-auto shrink-0"
                >
                  Consult for this Condition
                </button>
              </div>

              {/* 3 Step Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Step 1: Pre-Op */}
                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-2">
                  <div className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    1. Pre-Operative Presentation
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {res.preOpCondition}
                  </p>
                </div>

                {/* Step 2: Approach */}
                <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                    2. Surgical Technique & Precision
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {res.surgicalApproach}
                  </p>
                </div>

                {/* Step 3: Post-Op */}
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    3. Functional Outcome & Recovery
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {res.postOpOutcome}
                  </p>
                </div>

              </div>

              {/* Verified Metrics Row */}
              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {res.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="bg-slate-50 p-4 rounded-xl text-center">
                    <div className="text-lg font-bold font-heading text-brand-teal">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-[11px] text-slate-400 italic">
                * Note: {res.verifiedNote}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Box */}
      <section className="py-14 bg-brand-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Discuss Your Treatment Options Today
          </h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto">
            Bring your diagnostic scans and history to our Lahore consultation clinic for an honest, individualized clinical assessment.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => onOpenAppointment && onOpenAppointment()}
              className="bg-brand-teal hover:bg-brand-tealHover text-white px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition shadow-md"
            >
              Book Consultation Slot
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
