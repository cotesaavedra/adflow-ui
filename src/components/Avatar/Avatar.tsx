import type { ReactNode } from 'react'

type Size = 'sm' | 'md' | 'lg' | 'xl'
const colors = ['blue', 'green', 'red', 'amber', 'purple', 'neutral']

const getColorFromName = (name: string) => {
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
}

const colorStylesFallback = {
    blue: "bg-blue-50 text-blue-900",
    green: "bg-emerald-50 text-emerald-900",
    red: "bg-red-50 text-red-900",
    amber: "bg-amber-50 text-amber-900",
    purple: "bg-violet-50 text-violet-900",
    neutral: "bg-slate-100 text-slate-600",
}

const baseStyleText = "font-medium uppercase"

const sizeVariant: Record<Size, React.CSSProperties> = {
    sm: { width: '28px', height: '28px', fontSize: '11px' },
    md: { width: '36px', height: '36px', fontSize: '13px' },
    lg: { width: '44px', height: '44px', fontSize: '15px' },
    xl: { width: '56px', height: '56px', fontSize: '18px' },
}

interface AvatarProps {
    name: string,
    lastName: string,
    imagen?: string,
    size: Size,
}

const Avatar = (props: AvatarProps) => {
    const { name, lastName, imagen, size } = props
    const existImagen = Boolean(imagen)

    const fallbackStylesColor = colorStylesFallback[getColorFromName(name)]

    const backgroundAvatar = !existImagen ? fallbackStylesColor : ""

    return (
        <div
            className={`rounded-[50%] flex items-center justify-center ${backgroundAvatar} ${baseStyleText}}`}
            style={sizeVariant[size]}
        >
            {!existImagen
                ? <p>{name.charAt(0)}{lastName.charAt(0)}</p>
                : <img src={imagen} className="w-full h-full object-cover rounded-[50%]" alt={name}></img>
            }
        </div>
    )

}

export default Avatar