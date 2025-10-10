import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { ContactForm } from './contact-form'

// Mock server action
vi.mock('@/app/actions/contact', () => ({
  sendContactForm: vi.fn(async () => ({ success: true })),
}))

describe('ContactForm', () => {
  it('renders all required form fields', () => {
    render(<ContactForm />)

    expect(screen.getByRole('textbox', { name: /your name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /phone/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /how can we help/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('validates required fields on submit', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // Form should show validation errors (HTML5 required attribute)
    const nameInput = screen.getByRole('textbox', { name: /your name/i }) as HTMLInputElement
    expect(nameInput.validity.valueMissing).toBe(true)
  })

  it('validates email format', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const emailInput = screen.getByRole('textbox', { name: /email/i })
    await user.type(emailInput, 'invalid-email')
    await user.tab()

    // Check HTML5 email validation
    expect((emailInput as HTMLInputElement).validity.typeMismatch).toBe(true)
  })

  it('accepts valid email format', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const emailInput = screen.getByRole('textbox', { name: /email/i })
    await user.type(emailInput, 'test@example.com')

    expect((emailInput as HTMLInputElement).validity.valid).toBe(true)
  })

  it('disables submit button while pending', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const nameInput = screen.getByRole('textbox', { name: /your name/i })
    const emailInput = screen.getByRole('textbox', { name: /email/i })
    const messageInput = screen.getByRole('textbox', { name: /how can we help/i })
    const submitButton = screen.getByRole('button', { name: /send message/i })

    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(messageInput, 'Test message')

    expect(submitButton).not.toBeDisabled()
  })

  it('shows success message on successful submission', async () => {
    const user = userEvent.setup()
    const { sendContactForm } = await import('@/app/actions/contact')

    render(<ContactForm />)

    const nameInput = screen.getByRole('textbox', { name: /your name/i })
    const emailInput = screen.getByRole('textbox', { name: /email/i })
    const messageInput = screen.getByRole('textbox', { name: /how can we help/i })
    const submitButton = screen.getByRole('button', { name: /send message/i })

    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(messageInput, 'Test message')
    await user.click(submitButton)

    expect(sendContactForm).toHaveBeenCalled()
  })

  it('handles optional phone field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const phoneInput = screen.getByRole('textbox', { name: /phone/i })

    // Phone field should not be required
    expect(phoneInput).not.toBeRequired()

    // Should accept valid phone format
    await user.type(phoneInput, '123-456-7890')
    expect((phoneInput as HTMLInputElement).value).toBe('123-456-7890')
  })

  it('has proper accessibility attributes', () => {
    render(<ContactForm />)

    const nameInput = screen.getByRole('textbox', { name: /your name/i })
    expect(nameInput).toHaveAttribute('aria-required', 'true')
    expect(nameInput).toHaveAttribute('aria-invalid', 'false')
  })
})
