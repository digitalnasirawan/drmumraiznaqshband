import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { GoogleIcon } from './SocialIcons';
import { DOCTOR_INFO, CLINIC_LOCATIONS } from '../data/siteData';

const GOOGLE_REVIEWS = [
  {
    id: 1,
    author: "Tariq Mehmood",
    initial: "T",
    color: "bg-teal-600",
    rating: 5,
    tag: "Robotic Knee Replacement",
    date: "Verified Patient",
    review: "Prof. Dr. Mumraiz Naqshband performed robotic-assisted knee replacement surgery for my mother at BNI Lahore. The precision of the CORI system and the professor's compassionate care made all the difference. She was able to walk with support very quickly. We are immensely grateful for his honest guidance."
  },
  {
    id: 2,
    author: "Dr. Ayesha Siddiqui",
    initial: "A",
    color: "bg-blue-600",
    rating: 5,
    tag: "Knee Arthritis & Joint Assessment",
    date: "Verified Patient",
    review: "Extremely competent, polite, and ethical surgeon. Unlike many clinics that urge you into immediate surgery, Prof. Mumraiz thoroughly examined the joint X-rays and MRI, explaining every non-surgical and surgical option clearly. His international training (FRACS & FRCS) is evident in his patient-first approach."
  },
  {
    id: 3,
    author: "Muhammad Usman",
    initial: "M",
    color: "bg-emerald-600",
    rating: 5,
    tag: "Orthopaedic Evaluation & Recovery",
    date: "Verified Patient",
    review: "Consulted Dr. Mumraiz Naqshband at Bashir NeuroSpine Institute (BNI) Shadman for severe joint stiffness. His diagnosis was spot on and post-consultation rehabilitation plan worked wonders. Highly recommend him for anyone seeking honest and expert orthopaedic evaluation in Lahore."
  },
  {
    id: 4,
    author: "Khawaja Bilal",
    initial: "K",
    color: "bg-indigo-600",
    rating: 5,
    tag: "Joint Reconstruction & Second Opinion",
    date: "Verified Patient",
    review: "Outstanding consultation experience. Prof. Mumraiz Naqshband is one of the most qualified orthopaedic surgeons in Pakistan. He listens patiently, explains everything on the scan monitors, and gives realistic, reassuring advice without any commercial pressure."
  }
];

export default function GoogleReviewsSection() {
  const gmbUrl = CLINIC_LOCATIONS[0]?.googleMapsLink || "https://maps.app.goo.gl/zgCG2fXYSG2sLDAZ9";

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-brand-border text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border shadow-sm text-xs font-semibold text-brand-deep">
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>Google Business Profile Reviews</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-brand-deep leading-[1.25]">
              Patient Reviews & Feedback in Lahore
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-[1.7]">
              Read verified patient experiences from individuals who consulted <strong>Prof. Dr. Mumraiz Naqshband</strong> for robotic knee replacement, knee arthritis assessment, and joint care at <strong>Bashir NeuroSpine Institute (BNI)</strong>.
            </p>
          </div>

          {/* Google Rating Overview Badge */}
          <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-card flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
              <GoogleIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold font-heading text-2xl text-brand-deep">5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Verified Google Business Rating • BNI Clinic
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header: Author & Google Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${item.color} text-white font-bold text-sm flex items-center justify-center shrink-0`}>
                      {item.initial}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-brand-deep leading-tight">
                        {item.author}
                      </h3>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <GoogleIcon className="w-4 h-4 shrink-0" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 pt-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Procedure Tag */}
                <span className="inline-block text-[10px] font-semibold text-brand-teal bg-teal-50 border border-teal-100 px-2 py-0.5 rounded">
                  {item.tag}
                </span>

                {/* Review Text */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Card Footer: Verified Marker */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Google Maps Review</span>
                <span className="text-emerald-600 font-semibold">100% Recommended</span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Action Links */}
        <div className="mt-10 p-5 rounded-2xl bg-brand-light border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
              <MessageSquare className="w-5 h-5 text-brand-teal" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm text-brand-deep">
                Have you consulted Prof. Dr. Mumraiz Naqshband?
              </div>
              <p className="text-xs text-slate-600">
                Share your clinical experience on our official Google Business Profile.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={gmbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-brand-deep font-semibold text-xs border border-brand-border shadow-sm transition"
            >
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>Write a Review</span>
            </a>

            <a
              href={gmbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-brand-tealHover text-white font-semibold text-xs shadow-md transition"
            >
              <span>View All Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
