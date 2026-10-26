import React from 'react';
import { Home, ArrowLeft, Search, Calendar, Phone } from 'lucide-react';
import { Link } from '../utils/navigation';
import { usePageSeo } from '../utils/seo';
import { DOCTOR_INFO } from '../data/siteData';

export default function NotFoundPage({ onOpenAppointment }) {
  usePageSeo({
    title: "Page Not Found | Prof. Dr. Mumraiz Naqshband",
    description: "The requested medical page could not be located on the website of Prof. Dr. Mumraiz Naqshband. Please explore our services directory or contact our clinic.",
    canonicalUrl: "/"
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-16 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-xl text-center space-y-6">
        <div className="w-16 h-16 bg-brand-light text-brand-blue rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold font-heading">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The page or clinical treatment resource you are looking for may have been updated or moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-deep hover:bg-brand-blue text-white font-semibold text-xs transition"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-xs transition"
          >
            <span>Explore All Services</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          Need immediate assistance? Call our clinic directly at <a href={`tel:${DOCTOR_INFO.phoneTel}`} className="text-brand-blue font-bold">{DOCTOR_INFO.phone}</a>.
        </div>
      </div>
    </div>
  );
}
