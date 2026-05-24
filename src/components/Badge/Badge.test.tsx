import { expect, describe, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Badge from './Badge'

describe('Badge component', () => {
    it('Dshould render correctly with all props', () => {
        render(<Badge variant="warning" size="sm" dot>En Pausa</Badge>)

        const badgeContain = screen.getByTestId("badge-contain")
        const badgeDot = screen.getByTestId("badge-dot")
        const badgeText = screen.getByText("En Pausa")
        const classNameExpectedBC = "w-fit inline-flex items-center font-medium rounded-full border-[1.5px] border-amber-400 text-amber-900 px-2 py-0.5 text-[11px] gap-1"
        const classNameExpectedBD = "rounded-full flex-shrink-0 bg-amber-400"
        
        expect(badgeDot).toBeInTheDocument()
        expect(badgeText).toBeInTheDocument()
        expect(badgeContain).toHaveClass(classNameExpectedBC)
        expect(badgeDot).toHaveClass(classNameExpectedBD)
    })

    it('should render with default values when no props are provided', () => {
        render(<Badge>Activado</Badge>)

        const badgeContain = screen.getByTestId("badge-contain")
        const badgeText = screen.getByText("Activado")
        const classNameExpectedBC = "w-fit inline-flex items-center font-medium rounded-full border-[1.5px] border-emerald-500 text-emerald-900 px-2.5 py-0.5 text-xs gap-1.5"

        expect(badgeText).toBeInTheDocument()
        expect(screen.queryByTestId("badge-dot")).not.toBeInTheDocument()
        expect(badgeContain).toHaveClass(classNameExpectedBC)
    })
})