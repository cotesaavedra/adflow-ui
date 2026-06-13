import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import Modal from "./Modal"

const defaultProps = {
    title: "Eliminar campaña",
    description: "Esta acción no se puede deshacer.",
    isOpen: true,
    onClose: vi.fn(),
    onConfirm: vi.fn(),
}

describe("Modal", () => {
    it("renderiza el título y la descripción cuando isOpen es true", () => {
        render(<Modal {...defaultProps} />)
        expect(screen.getByText("Eliminar campaña")).toBeInTheDocument()
        expect(screen.getByText("Esta acción no se puede deshacer.")).toBeInTheDocument()
    })

    it("no renderiza nada cuando isOpen es false", () => {
        render(<Modal {...defaultProps} isOpen={false} />)
        expect(screen.queryByText("Eliminar campaña")).not.toBeInTheDocument()
    })

    it("llama a onClose al hacer click en Cancelar", async () => {
        const onClose = vi.fn()
        render(<Modal {...defaultProps} onClose={onClose} />)
        await userEvent.click(screen.getByText("Cancelar"))
        expect(onClose).toHaveBeenCalledTimes(1)
    })

    it("llama a onConfirm al hacer click en Confirmar", async () => {
        const onConfirm = vi.fn()
        render(<Modal {...defaultProps} onConfirm={onConfirm} />)
        await userEvent.click(screen.getByText("confirmar"))
        expect(onConfirm).toHaveBeenCalledTimes(1)
    })

    it("muestra el label personalizado en los botones", () => {
        render(<Modal {...defaultProps} confirmLabel="Eliminar" cancelLabel="Volver" />)
        expect(screen.getByText("Eliminar")).toBeInTheDocument()
        expect(screen.getByText("Volver")).toBeInTheDocument()
    })

    it("usa variant destructive por defecto en el botón de confirmar cuando se pasa variant destructive", () => {
        render(<Modal {...defaultProps} variant="destructive" confirmLabel="Eliminar" />)
        const button = screen.getByText("Eliminar")
        expect(button).toBeInTheDocument()
    })
})