import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

  // Wait for the real page load (images included) before completing the bar
  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    if (document.readyState === 'complete') {
      setLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Ease the bar towards its target: 92% while loading, 100% once ready
  useEffect(() => {
    const target = loaded ? 100 : 92;
    const id = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= target) return prev;
        return Math.min(target, prev + Math.max((target - prev) * 0.12, 1));
      });
    }, 45);
    return () => window.clearInterval(id);
  }, [loaded]);

  // Keep the page still behind the overlay
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Hand over to the site once the bar is full
  useEffect(() => {
    if (progress < 100) return;
    const timeout = window.setTimeout(() => setVisible(false), 450);
    return () => window.clearTimeout(timeout);
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Loading"
          role="status"
        >
          {/* Ambient wash so the loader matches the site background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-blue-50" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-extrabold tracking-[0.14em] text-blue-700 sm:text-3xl"
            >
              Pacifique
            </motion.span>

            <div className="mt-5 h-1.5 w-56 overflow-hidden rounded-full bg-blue-100 sm:w-64">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />
            </div>

            <span className="mt-3 text-[11px] font-semibold tracking-[0.2em] text-slate-400">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
