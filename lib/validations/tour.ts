import { z } from 'zod'

// Tour form validation schema
export const tourFormSchema = z.object({
  parentName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),

  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^[\d\s()+-]+$/, 'Phone number can only contain digits, spaces, parentheses, plus, and hyphen'),

  childAge: z
    .string()
    .min(1, 'Child age is required')
    .max(50, 'Child age must be less than 50 characters'),

  preferredDate: z
    .string()
    .min(1, 'Preferred date is required')
    .refine((date) => {
      const selectedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return selectedDate >= today
    }, 'Date must be today or in the future'),

  notes: z
    .string()
    .max(500, 'Notes must be less than 500 characters')
    .optional(),
})

export type TourFormData = z.infer<typeof tourFormSchema>
