import Button from "../Button/Button"
import { createPortal } from 'react-dom'

interface ModalProps {
    title: string,
    description: string,
    isOpen: boolean,
    onClose: () => void,
    onConfirm: () => void,
    variant?: "default" | "destructive",
    confirmLabel?: string,
    cancelLabel?: string,
}

const Modal = ({
    variant = "default",
    title,
    description,
    isOpen,
    onClose,
    onConfirm,
    confirmLabel = "confirmar",
    cancelLabel = "Cancelar",
}: ModalProps) => {
    if (!isOpen) return null

    return createPortal(
        <div
            style={{ backgroundColor: "rgba(15, 23, 42, 0.5)"}}
            className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md flex flex-col gap-4" style={{ borderRadius: "12px", maxWidth: "360px", width: "100%", padding: "20px" }}>
                <div>
                    <h2 className="text-base font-medium text-slate-900 mb-2">{title}</h2>
                    <p className="text-sm text-slate-500 leading-relaxed"> {description}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                    <Button variant="secondary" onClick={onClose}>{cancelLabel}</Button>
                    <Button variant={variant === "destructive" ? "destructive" : "primary"} onClick={onConfirm}>{confirmLabel}</Button>
                </div>
            </div>
        </div>,
        document.body
    )
};

export default Modal 