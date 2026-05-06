import { GraduationCap } from "lucide-react";

type BrandIconProps = {
  className?: string;
};

export default function BrandIcon({ className = "" }: BrandIconProps) {
  return (
    <span className={`brand-icon ${className}`} aria-label="Ed-Circle">
      <GraduationCap aria-hidden="true" strokeWidth={2.2} />
    </span>
  );
}
