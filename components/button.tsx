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
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#306dbd]/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "brand-gradient text-white shadow-sm hover:opacity-90",
    outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
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