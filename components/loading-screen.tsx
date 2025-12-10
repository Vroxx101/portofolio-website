'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  shouldShow: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ shouldShow }) => {
  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="flex flex-col items-center justify-center">
            {/* Animated Logo/Brand */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              <div className="relative w-20 h-20">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-primary"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-secondary border-t-transparent"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="absolute inset-4 flex items-center justify-center">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-primary"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Animation */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.h2
                className="text-2xl font-semibold text-foreground mb-2"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
              >
                Loading Portfolio
              </motion.h2>
              <motion.p
                className="text-muted-foreground"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
              >
                Preparing your experience...
              </motion.p>
            </motion.div>

            {/* Animated Progress Dots */}
            <div className="flex space-x-2 mt-8">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Circular Progress Indicator */}
            <div className="relative w-32 h-32 mt-8">
              <motion.div
                className="absolute inset-0 border-4 border-muted rounded-full"
              />
              <motion.div
                className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-4 border-4 border-secondary border-b-transparent rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;