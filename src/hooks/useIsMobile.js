import { useState, useEffect } from 'react';

/**
 * Returns true when the viewport is at or below `breakpoint` (px).
 * Uses matchMedia so it reacts to resizes / orientation changes and only
 * re-renders when the boolean actually flips.
 */
export default function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`;

  const getMatch = () =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia(query).matches
      : false;

  const [isMobile, setIsMobile] = useState(getMatch);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    // Sync in case the viewport changed between first render and mount.
    setIsMobile(mql.matches);

    // addEventListener is the modern API; addListener is the Safari fallback.
    if (mql.addEventListener) mql.addEventListener('change', handler);
    else mql.addListener(handler);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', handler);
      else mql.removeListener(handler);
    };
  }, [query]);

  return isMobile;
}
