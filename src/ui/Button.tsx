import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050C1C] disabled:cursor-not-allowed disabled:opacity-60 shadow-[0_12px_30px_rgba(38,78,164,0.25)]';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-[#3454F0] via-[#3F63F7] to-[#4E77FF] text-white hover:from-[#2E4AE0] hover:to-[#5B86FF]',
  secondary:
    'bg-white/10 text-text hover:bg-white/15 border border-white/10 shadow-[0_8px_24px_rgba(14,31,71,0.4)]',
  ghost: 'bg-transparent text-muted hover:bg-white/5 border border-white/5 shadow-none',
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = [base, variants[variant], className].filter(Boolean).join(' ');
  return <button className={classes} {...props} />;
}

export default Button;
