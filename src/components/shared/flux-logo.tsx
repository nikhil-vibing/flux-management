interface FluxLogoProps {
  size?: number;
  className?: string;
}

export function FluxLogo({ size = 32, className = "text-white" }: FluxLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={`${className} flex-shrink-0`}
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <path
          key={angle}
          d="M18 3.5 C 7 5.5, 2 15, 6 21 C 10 27, 20 33, 28 27"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
          transform={`rotate(${angle} 18 18)`}
        />
      ))}
    </svg>
  );
}
