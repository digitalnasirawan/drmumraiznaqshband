import React from 'react';
import { ChevronRight, CheckCircle2, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from '../utils/navigation';
import { usePageSeo } from '../utils/seo';

export default function CategoryPage({ category, onOpenAppointment }) {
  if (!category) return null;

  usePageSeo({
    title: `${category.title} | Prof. Dr. Mumraiz Naqshband`,
    description: `${category.summary} Specialist orthopaedic care in Lahore, Pakistan led by Prof. Dr. Mumraiz Naqshband.`,
    canonicalUrl: category.slug
  });

  return (
    <div className="bg-white">
      <Breadcrumb
        items={[
          { label: "Services", url: "/services/" },
          { label: category.shortTitle || category.title, url: category.slug },
        ]}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-brand-deep to-[#0e2c47] text-white py-14 lg:py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{category.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              {category.title}
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {category.summary}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenAppointment && onOpenAppointment()}
                className="bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation for this Specialty</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments List Grid */}
      <section className="py-16 bg-slate-50 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-white border border-brand-border px-3 py-1 rounded-full">
              Procedures & Treatments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
              Specialist Treatments in {category.shortTitle || category.title}
            </h2>
            <p className="text-slate-600 text-sm">
              Click on any procedure below to review in-depth clinical indications, surgical techniques, and expected recovery outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.treatments.map((treatment, idx) => (
              <div
                key={treatment.slug}
                className="bg-white rounded-3xl p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-2">
                    Procedure 0{idx + 1}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-brand-deep group-hover:text-brand-blue transition-colors mb-2">
                    {treatment.title}
                  </h3>

                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    {treatment.lead}
                  </p>

                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-6">
                    {treatment.overview}
                  </p>

                  {treatment.benefits && (
                    <div className="border-t border-slate-100 pt-3 mb-4 space-y-1">
                      {treatment.benefits.slice(0, 2).map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <Link
                    to={treatment.slug}
                    className="w-full py-3 px-4 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Read Full Treatment Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-brand-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Schedule an Evaluation for {category.shortTitle || category.title}
          </h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto">
            Consult directly with Prof. Dr. Mumraiz Naqshband at BNI - Bashir NeuroSpine Institute, Lahore.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => onOpenAppointment && onOpenAppointment(category.title)}
              className="bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition shadow-md"
            >
              Book Consultation Now
            </button>
            <Link
              to="/services/"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-white/20 transition"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
