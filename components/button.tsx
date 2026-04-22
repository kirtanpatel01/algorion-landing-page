import type { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

function buttonClasses(variant: ButtonVariant) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-base/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

  const variants = {
    primary: "brand-gradient text-surface shadow-sm hover:opacity-90",
    outline: "border border-border-strong bg-surface text-text-secondary hover:bg-surface-subtle",
  };

  return twMerge(clsx(base, variants[variant]));
}

export default function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button 
      type={type} 
      className={twMerge(buttonClasses(variant), className)} 
      {...props}
    >
      {children}
    </button>
  );
}