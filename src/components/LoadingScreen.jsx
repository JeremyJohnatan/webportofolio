import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  const lineVariants = {
    initial: { scaleX: 0, originX: 0 },
    animate: { scaleX: 1, transition: { duration: 1.2, ease: 'easeInOut' } }
  };

  const dotVariants = {
    animate: (i) => ({
      scale: [0.8, 1.3, 0.8],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }
    })
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
  };

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 bg-paper z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="150" fill="none" stroke="#1A1A1A" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#1A1A1A" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <motion.div
          variants={lineVariants}
          initial="initial"
          animate="animate"
          className="w-16 h-1 bg-red-600"
        />

        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-ink mb-2">
            LOADING
          </h2>
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500">
            Preparing something great
          </p>
        </motion.div>

        <div className="flex gap-2 items-center mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={dotVariants}
              animate="animate"
              className="w-2.5 h-2.5 bg-ink rounded-full"
            />
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: [0, 1, 1] }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-transparent"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
