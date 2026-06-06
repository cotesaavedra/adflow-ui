import { CheckCircle, XCircle, AlertTriangle, Info, Bell, X } from 'lucide-react'

type Variant = "success" | "error" | "warning" | "info" | "neutral";

const variantToast = {
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
    error: "bg-red-50 border-red-200 text-red-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    info: "bg-blue-50 border-blue-200 text-blue-900",
    neutral: "bg-slate-50 border-slate-200 text-slate-900",
}

interface ToastProps {
    title: string,
    variant: Variant,
    onClose: () => void,
    message?: string,
};

const iconVariant = {
    success: <CheckCircle size={18}/>,
    error: <XCircle size={18}/>,
    warning: <AlertTriangle size={18}/>,
    info: <Info size={18}/>,
    neutral: <Bell size={18}/>,
}

const Toast = ({
    title, variant = "success", onClose, message
}: ToastProps) => {

    return (
        <div className={`flex items-start justify-between gap-3 p-3 px-4 rounded-[10px] border w-[320px] ${variantToast[variant]}`}>
            <div className="w-[18px] h-[18px] flex-shrink-0 mt-0.5">
                {iconVariant[variant]}
            </div>
            <div className="flex-1">
                <h2 className="text-[13px] font-medium">{title}</h2>
                {message &&
                    <p className="text-[12px] font-normal opacity-80">{message}</p>
                }
            </div>
            <button className="opacity-50 hover:opacity-100 flex-shrink-0 cursor-pointer flex-shrink-0 mt-0.5" onClick={onClose}>
                <X size={16}/>
            </button>
        </div>
    )

}

export default Toast