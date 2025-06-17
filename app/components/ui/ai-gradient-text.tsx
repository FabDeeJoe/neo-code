interface AIGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AIGradientText({ children, className = '' }: AIGradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-[#2d5075] via-[#7f6fea] to-[#dce7fc] bg-clip-text text-transparent font-semibold ${className}`}>
      {children}
    </span>
  );
} 