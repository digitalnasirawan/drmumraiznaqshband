import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from '../utils/navigation';

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-brand-light/70 border-b border-brand-border py-2.5 px-4 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 text-slate-600">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-blue font-medium transition-colors">
          <Home className="w-3.5 h-3.5 text-brand-teal" />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast || !item.url ? (
                <span className="font-semibold text-brand-deep truncate max-w-[260px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.url} className="hover:text-brand-blue font-medium transition-colors">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
