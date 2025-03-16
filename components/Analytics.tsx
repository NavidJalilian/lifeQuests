'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';
import { Suspense } from 'react';

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && analytics) {
      // Track page view with enhanced parameters
      logEvent(analytics, 'page_view', {
        page_path: pathname,
        page_search: searchParams.toString(),
        page_title: document.title,
        page_location: window.location.href,
        timestamp: new Date().toISOString()
      });

      // Track user engagement
      const handleScroll = () => {
        const scrollDepth = Math.round(
          (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
        );
        
        if (scrollDepth >= 50 && !localStorage.getItem('scrollDepth50')) {
          logEvent(analytics, 'scroll_depth', {
            depth: 50,
            page_path: pathname
          });
          localStorage.setItem('scrollDepth50', 'true');
        }
        
        if (scrollDepth >= 90 && !localStorage.getItem('scrollDepth90')) {
          logEvent(analytics, 'scroll_depth', {
            depth: 90,
            page_path: pathname
          });
          localStorage.setItem('scrollDepth90', 'true');
        }
      };

      // Track time spent
      const startTime = Date.now();
      const trackTimeSpent = () => {
        const timeSpentSeconds = Math.round((Date.now() - startTime) / 1000);
        if (timeSpentSeconds >= 30) {
          logEvent(analytics, 'time_spent', {
            seconds: timeSpentSeconds,
            page_path: pathname
          });
        }
      };

      // Track external link clicks
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        if (link?.href && link.hostname !== window.location.hostname) {
          logEvent(analytics, 'external_link_click', {
            link_url: link.href,
            link_text: link.textContent || '',
            page_path: pathname
          });
        }
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('click', handleClick);
      window.addEventListener('beforeunload', trackTimeSpent);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('click', handleClick);
        window.removeEventListener('beforeunload', trackTimeSpent);
      };
    }
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
}