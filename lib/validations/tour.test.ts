import { describe, it, expect } from 'vitest'
import { tourFormSchema } from './tour'
import { addDays, format } from 'date-fns'

describe('tourFormSchema', () => {
  const futureDate = format(addDays(new Date(), 7), 'yyyy-MM-dd')
  const pastDate = format(addDays(new Date(), -7), 'yyyy-MM-dd')

  it('validates correct tour request data', () => {
    const validData = {
      parentName: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      childAge: '3 years old',
      preferredDate: futureDate,
    }

    const result = tourFormSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('requires parentName field', () => {
    const invalidData = {
      email: 'john@example.com',
      phone: '123-456-7890',
      childAge: '3 years old',
      preferredDate: futureDate,
    }

    const result = tourFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('requires email field', () => {
    const invalidData = {
      parentName: 'John Doe',
      phone: '123-456-7890',
      childAge: '3 years old',
      preferredDate: futureDate,
    }

    const result = tourFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('validates email format', () => {
    const invalidData = {
      parentName: 'John Doe',
      email: 'invalid-email',
      phone: '123-456-7890',
      childAge: '3 years old',
      preferredDate: futureDate,
    }

    const result = tourFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('requires preferredDate field', () => {
    const invalidData = {
      parentName: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      childAge: '3 years old',
    }

    const result = tourFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('requires phone field', () => {
    const invalidData = {
      parentName: 'John Doe',
      email: 'john@example.com',
      childAge: '3 years old',
      preferredDate: futureDate,
    }

    const result = tourFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('requires childAge field', () => {
    const invalidData = {
      parentName: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      preferredDate: futureDate,
    }

    const result = tourFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('allows optional notes field', () => {
    const validData = {
      parentName: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      childAge: '3 years old',
      preferredDate: futureDate,
      notes: 'We are interested in the infant program',
    }

    const result = tourFormSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('validates date is not in the past', () => {
    const invalidData = {
      parentName: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      childAge: '3 years old',
      preferredDate: pastDate,
    }

    const result = tourFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('validates parentName format', () => {
    const invalidData = {
      parentName: 'John123',
      email: 'john@example.com',
      phone: '123-456-7890',
      childAge: '3 years old',
      preferredDate: futureDate,
    }

    const result = tourFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('validates phone format', () => {
    const invalidData = {
      parentName: 'John Doe',
      email: 'john@example.com',
      phone: 'abc-def-ghij',
      childAge: '3 years old',
      preferredDate: futureDate,
    }

    const result = tourFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('enforces maximum notes length', () => {
    const longNotes = 'a'.repeat(501)
    const invalidData = {
      parentName: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      childAge: '3 years old',
      preferredDate: futureDate,
      notes: longNotes,
    }

    const result = tourFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })
})
