import { useEffect } from 'react';

// Custom hook for smooth scrolling behavior
export const useSmoothScroll = () => {
  useEffect(() => {
    // Set smooth scrolling behavior globally
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return { scrollToElement };
};