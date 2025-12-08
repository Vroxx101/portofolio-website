'use client';

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedDiv = ({
  children,
  className = '',
}: AnimatedDivProps) => {
  return (
    <div className={`animate-fade-in ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedDiv;