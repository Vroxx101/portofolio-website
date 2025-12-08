'use client';

interface HoverAnimationProps {
  children: React.ReactNode;
  scale?: number;
  className?: string;
}

const HoverAnimation = ({
  children,
  scale = 1.05,
  className = '',
}: HoverAnimationProps) => {
  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ transform: 'scale(1)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `scale(${scale})`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {children}
    </div>
  );
};

export default HoverAnimation;