import { expect, describe, test, vi} from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button Component', () => {
    const baseStylesExpected = [
        'inline-flex items-center justify-center',
        'w-fit font-medium rounded-lg',
        'transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
    ].join(' ')

    test('renders the button correctly', () => {
        render(<Button>Crear Campaña</Button>)

        expect(screen.getByText('Crear Campaña')).toBeInTheDocument()
    })

    test('renders the button disabled', () => {
        render(<Button disabled>Crear Campaña</Button>)

        expect(screen.getByText('Crear Campaña')).toBeDisabled()
    })

    test('renders the button className with variant primary and size md', () => {
        const varianStylesExpected = "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
        const sizeStylesExpected = "h-9 px-4 text-sm gap-1.5"

        const classNameExpected = `${baseStylesExpected} ${varianStylesExpected} ${sizeStylesExpected}`

        render(<Button variant="primary" size="md">Crear Campaña</Button>)

        expect(screen.getByText('Crear Campaña')).toHaveClass(classNameExpected)
    })

    test('renders the button className with variant ghost and size sm', () => {
        const varianStylesExpected = "bg-transparent text-blue-500 hover:bg-blue-50 active:bg-blue-100"
        const sizeStylesExpected = "h-7 px-3 text-xs gap-1.5"

        const classNameExpected = `${baseStylesExpected} ${varianStylesExpected} ${sizeStylesExpected}`

        render(<Button variant="ghost" size="sm">Crear Campaña</Button>)

        expect(screen.getByText('Crear Campaña')).toHaveClass(classNameExpected)
    })

    test('renders the button className with variant secondary and size lg', () => {
        const varianStylesExpected = "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 active:bg-slate-100"
        const sizeStylesExpected = "h-11 px-5 text-[15px] gap-2"

        const classNameExpected = `${baseStylesExpected} ${varianStylesExpected} ${sizeStylesExpected}`

        render(<Button variant="secondary" size="lg">Crear Campaña</Button>)

        expect(screen.getByText('Crear Campaña')).toHaveClass(classNameExpected)
    })

    test('renders the button className CreateButton with not have variant and size', () => {
        const classNameExpected = "CreateButton"

        render(<Button className="CreateButton">Crear Campaña</Button>)

        expect(screen.getByText('Crear Campaña')).toHaveClass(classNameExpected)
    })

    test('Debería llamarse handleClick 1 vez si Button recibe la props y es presionado', async () => {
        const handleClick = vi.fn()

        render(<Button onClick={handleClick}>Crear Campaña</Button>)

        await userEvent.click(screen.getByRole('button', {name:'Crear Campaña'}))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('Debería estar deshabilitado el Button si disabled prop es true', async () => {
        const handleClick = vi.fn()

        render(<Button onClick={handleClick} disabled>Crear Campaña</Button>)
        const btn = screen.getByRole('button', {name:'Crear Campaña'})

        await userEvent.click(btn)

        expect(btn).toBeDisabled()
        expect(handleClick).not.toHaveBeenCalled()
    })
})