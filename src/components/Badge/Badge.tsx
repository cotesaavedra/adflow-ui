import type { ReactNode } from 'react'

type Variant = 'success' | 'warning' | 'danger' | 'info' | 'neutral'
type Size = 'sm' | 'md' | 'lg'

const BaseStyles = "w-fit inline-flex items-center font-medium rounded-full border-[1.5px]"

const variantStyles = {
    success: "border-emerald-500 text-emerald-900",
    warning: "border-amber-400 text-amber-900",
    danger: "border-red-400 text-red-900",
    info: "border-blue-500 text-blue-900",
    neutral: "border-slate-400 text-slate-600",
}

const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] gap-1",
    md: "px-2.5 py-0.5 text-xs gap-1.5",
    lg: "px-3 py-1 text-[13px] gap-2",
}

const dotStyles = {
    success: "bg-emerald-500",
    warning: "bg-amber-400",
    danger: "bg-red-400",
    info: "bg-blue-500",
    neutral: "bg-slate-400",
}

interface BadgeProps {
    variant?: Variant,
    size?: Size,
    dot?: boolean,
    children: ReactNode,
}

const Badge = ({
    variant = "success",
    size = "md",
    dot = false,
    children,
}: BadgeProps) => {
    return (
        <div
            className={`${BaseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
            data-testid="badge-contain"
        >
            {dot && (
                <span
                    className={`rounded-full flex-shrink-0 ${dotStyles[variant]}`}
                    data-testid="badge-dot"
                    style={{ width: '6px', height: '6px' }}
                />
            )}
            {children}
        </div>
    )

}

export default Badge