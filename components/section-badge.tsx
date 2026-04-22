import type { ComponentType } from "react";

type SectionBadgeProps = {
  label: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
  className?: string;
  lineClassName?: string;
};

export default function SectionBadge({
  label,
  icon: Icon,
  className = "",
  lineClassName = "",
}: SectionBadgeProps) {
  return (
    <div className={`mb-6 flex items-center justify-center gap-3 sm:gap-6 ${className}`}>
      <div className={`h-px w-10 sm:w-24 bg-border ${lineClassName}`} />
      <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-border-default bg-gradient px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs text-brand-darker">
        {Icon ? <Icon size={12} className="sm:hidden" /> : null}
        {Icon ? <Icon size={14} className="hidden sm:block" /> : null}
        <span className="whitespace-nowrap">{label}</span>
      </div>
      <div className={`h-px w-10 sm:w-24 bg-border ${lineClassName}`} />
    </div>
  );
}
