import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Avatar from './Avatar'

describe('Avatar component', () => {
  it('should render initials when no image is provided', () => {
    render(<Avatar name="María" lastName="Saavedra" size="md" />)
    expect(screen.getByText('MS')).toBeInTheDocument()
  })

  it('should render image when imagen prop is provided', () => {
    render(<Avatar name="María" lastName="Saavedra" size="md" imagen="https://i.pravatar.cc/150" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should not render initials when imagen prop is provided', () => {
    render(<Avatar name="María" lastName="Saavedra" size="md" imagen="https://i.pravatar.cc/150" />)
    expect(screen.queryByText('MS')).not.toBeInTheDocument()
  })

  it('should apply correct fallback color class based on name', () => {
    const { container } = render(<Avatar name="María" lastName="Saavedra" size="md" />)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('bg-')
  })
})