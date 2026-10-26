import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext({
  path: '/',
  navigate: () => {},
});

export function normalizePath(path) {
  if (!path) return '/';
  // Strip protocol/host if full URL is passed
  let clean = path.replace(/^(?:https?:\/\/[^/]+)?/, '');
  // Remove hash if starting with hash
  if (clean.startsWith('#')) {
    clean = clean.slice(1);
  }
  // Ensure starts with /
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }
  // Remove search queries
  clean = clean.split('?')[0];
  // Ensure trailing slash for non-root paths according to SEO guidelines
  if (clean !== '/' && !clean.endsWith('/')) {
    clean = clean + '/';
  }
  return clean;
}

export function RouterProvider({ children }) {
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    // If there is a hash like #/about/, use it
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      return normalizePath(window.location.hash.slice(1));
    }
    return normalizePath(window.location.pathname);
  };

  const [path, setPath] = useState(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        setPath(normalizePath(window.location.hash.slice(1)));
      } else {
        setPath(normalizePath(window.location.pathname));
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (to) => {
    const target = normalizePath(to);
    if (target === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    try {
      window.history.pushState({}, '', target);
    } catch {
      // Fallback for file:// or restricted environments
      window.location.hash = target;
    }
    setPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { navigate, path } = useRouter();
  const normalizedTarget = normalizePath(to);
  const isActive = path === normalizedTarget;

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      navigate(normalizedTarget);
    }
  };

  return (
    <a
      href={normalizedTarget}
      onClick={handleClick}
      className={`${className} ${isActive ? 'active-link' : ''}`}
      {...props}
    >
      {children}
    </a>
  );
}
