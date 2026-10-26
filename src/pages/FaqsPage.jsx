import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, Calendar, Phone } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { usePageSeo } from '../utils/seo';
import { FAQS, DOCTOR_INFO } from '../data/siteData';
import { WhatsAppIcon } from '../components/SocialIcons';

export default function FaqsPage({ onOpenAppointment }) {
  usePageSeo({
    title: "Frequently Asked Questions (FAQs) | Prof. Dr. Mumraiz Naqshband",
    description: "Get answers to common questions about robotic knee replacement (CORI system), hip surgery, recovery timelines, and consultation bookings with Prof. Dr. Mumraiz Naqshband in Lahore.",
    canonicalUrl: "/faqs/"
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...FAQS.map(f => f.category)];

  const filteredFaqs = FAQS.map(catGroup => {
    if (activeCategory !== 'All' && catGroup.category !== activeCategory) {
      return null;
    }
    const matchingItems = catGroup.items.filter(item => 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchingItems.length === 0) return null;
    return {
      category: catGroup.category,
      items: matchingItems
    };
  }).filter(Boolean);

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: "FAQs", url: "/faqs/" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-deep to-[#0e2c47] text-white py-14 lg:py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/10 text-brand-teal inline-block">
              Patient Guidance & Information
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Find answers to common questions regarding robotic-assisted knee replacement, surgical indications, hospital stays, and booking your consultation in Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Category Filter */}
      <section className="py-8 bg-brand-light border-b border-brand-border text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search by symptom, procedure or question (e.g. CORI, recovery, walking)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-brand-border bg-white focus:ring-2 focus:ring-brand-blue outline-none text-sm shadow-sm transition"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition ${
                  activeCategory === c
                    ? 'bg-brand-deep text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-brand-deep border border-brand-border'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Accordion Questions List */}
      <section className="py-14 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p className="text-base font-semibold">No questions matched your search query "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-3 text-xs font-bold text-brand-blue underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((group, gIdx) => (
              <div key={gIdx} className="space-y-4">
                <h2 className="text-xl font-bold font-heading text-brand-deep border-b border-brand-border pb-2">
                  {group.category}
                </h2>

                <div className="space-y-3">
                  {group.items.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-2xl border border-brand-border p-5 transition-all open:bg-white open:shadow-md"
                    >
                      <summary className="font-heading font-bold text-sm sm:text-base text-brand-deep cursor-pointer flex items-center justify-between list-none">
                        <span>{faq.q}</span>
                        <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-open:rotate-180 transition-transform shrink-0 ml-3">
                          ↓
                        </span>
                      </summary>
                      <div className="text-xs sm:text-sm text-slate-600 mt-3 pt-3 border-t border-slate-200 leading-relaxed space-y-2">
                        <p>{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))
          )}

        </div>
      </section>

      {/* Inquire directly CTA */}
      <section className="py-14 bg-slate-50 border-t border-brand-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl font-bold font-heading text-brand-deep">
            Have a Question Not Answered Here?
          </h2>
          <p className="text-slate-600 text-sm">
            Contact Prof. Dr. Mumraiz Naqshband's clinical coordination team directly for guidance on your specific diagnosis.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onOpenAppointment && onOpenAppointment()}
              className="bg-brand-teal hover:bg-brand-tealHover text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={DOCTOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
