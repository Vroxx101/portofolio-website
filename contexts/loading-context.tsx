'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useRef } from 'react';
import LoadingScreen from '@/components/loading-screen';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  finishLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const hasFinished = useRef(false);

  const finishLoading = () => {
    if (!hasFinished.current) {
      hasFinished.current = true;
      setIsLoading(false);
      // Hide loader after animation completes
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }
  };

  // Handle loading completion after initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 2500); // 2.5 seconds minimum load time

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, finishLoading }}>
      <LoadingScreen shouldShow={showLoader} />
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};