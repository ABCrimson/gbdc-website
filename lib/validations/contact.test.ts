import { describe, it, expect } from 'vitest'
import { contactFormSchema } from './contact'

describe('contactFormSchema', () => {
  it('validates correct contact data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      message: 'This is a test message with enough characters',
    }

    const result = contactFormSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('requires name field', () => {
    const invalidData = {
      email: 'john@example.com',
      phone: '123-456-7890',
      message: 'Test message with enough characters',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('requires email field', () => {
    const invalidData = {
      name: 'John Doe',
      phone: '123-456-7890',
      message: 'Test message with enough characters',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('validates email format', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      phone: '123-456-7890',
      message: 'Test message',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('requires message field', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('requires phone field', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message with enough characters',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('validates phone format', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: 'abc-def-ghij',
      message: 'Test message with enough characters',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('enforces minimum message length', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      message: 'Short',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('enforces maximum message length', () => {
    const longMessage = 'a'.repeat(1001)
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      message: longMessage,
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('validates name format', () => {
    const invalidData = {
      name: 'John123',
      email: 'john@example.com',
      phone: '123-456-7890',
      message: 'Test message with enough characters',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })
})
