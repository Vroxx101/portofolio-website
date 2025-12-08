'use client';

interface ParallaxElementProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxElement = ({
  children,
  className = ''
}: ParallaxElementProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ParallaxElement;