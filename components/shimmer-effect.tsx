interface ShimmerEffectProps {
  children: React.ReactNode;
  className?: string;
}

const ShimmerEffect = ({
  children,
  className = ''
}: ShimmerEffectProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ShimmerEffect;