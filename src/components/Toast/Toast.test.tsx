import { expect, describe, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Toast from './Toast'

describe('Toast component', () => {
  it('should render title correctly', () => {
    render(<Toast variant="success" title="Campaña publicada" onClose={vi.fn()} />)
    expect(screen.getByText('Campaña publicada')).toBeInTheDocument()
  })

  it('should render message when provided', () => {
    render(<Toast variant="success" title="Campaña publicada" message="Está activa." onClose={vi.fn()} />)
    expect(screen.getByText('Está activa.')).toBeInTheDocument()
  })

  it('should not render message when not provided', () => {
    render(<Toast variant="success" title="Campaña publicada" onClose={vi.fn()} />)
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument()
  })

  it('should call onClose when X button is clicked', async () => {
    const handleClose = vi.fn()
    render(<Toast variant="success" title="Campaña publicada" onClose={handleClose} />)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('should apply correct variant styles', () => {
    render(<Toast variant="error" title="Error" onClose={vi.fn()} />)
    const toast = screen.getByText('Error').closest('div')?.parentElement
    expect(toast).toHaveClass('bg-red-50')
  })
})