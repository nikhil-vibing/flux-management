interface FluxLogoProps {
  size?: number;
  className?: string;
}

export function FluxLogo({ size = 32, className = "text-white" }: FluxLogoProps) {
  return (
    <div
      className={`${className} flex-shrink-0`}
      style={{
        width: size,
        height: size,
        backgroundColor: "currentColor",
        WebkitMaskImage: "url(/logo.png)",
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage: "url(/logo.png)",
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}
