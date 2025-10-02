import { useEffect, useState } from 'react';

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          setMetrics(prev => ({
            ...prev,
            loadTime: Math.round(entry.loadEventEnd - entry.loadEventStart),
            domContentLoaded: Math.round(entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart)
          }));
        }
      }
    });

    if ('PerformanceObserver' in window) {
      observer.observe({ entryTypes: ['navigation'] });
    }

    // Get paint metrics
    const paintEntries = performance.getEntriesByType('paint');
    if (paintEntries.length > 0) {
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        setMetrics(prev => ({
          ...prev,
          firstContentfulPaint: Math.round(fcp.startTime)
        }));
      }
    }

    return () => {
      if ('PerformanceObserver' in window) {
        observer.disconnect();
      }
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white text-xs p-3 rounded-lg backdrop-blur-sm">
      <div className="space-y-1">
        <div>FCP: {metrics.firstContentfulPaint}ms</div>
        <div>Load: {metrics.loadTime}ms</div>
        <div>DCL: {metrics.domContentLoaded}ms</div>
      </div>
    </div>
  );
}
