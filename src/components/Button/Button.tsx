import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant,
  size?: Size,
  children: ReactNode
}

const baseStyles = [
  'inline-flex items-center justify-center',
  'w-fit font-medium rounded-lg',
  'transition-colors duration-150',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed',
].join(' ')

const variantStyles: Record<Variant, string> = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
  secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 active:bg-slate-100',
  ghost: 'bg-transparent text-blue-500 hover:bg-blue-50 active:bg-blue-100',
  destructive: 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 active:bg-red-200',
}

const sizeStyles: Record<Size, string> = {
  sm: 'h-7 px-3 text-xs gap-1.5',
  md: 'h-9 px-4 text-sm gap-1.5',
  lg: 'h-11 px-5 text-[15px] gap-2',
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button