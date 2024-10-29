import { z } from 'zod';

export const authFormSchema = (type: string) =>
  z.object({
    firstName:
      type === 'sign-in'
        ? z.string().optional()
        : z.string().min(3, { message: 'Invalid first name' }),
    lastName:
      type === 'sign-in'
        ? z.string().optional()
        : z.string().min(3, { message: 'Invalid last name' }),
    address:
      type === 'sign-in'
        ? z.string().optional()
        : z.string().min(3, { message: 'Invalid address' }).max(50),
    city:
      type === 'sign-in'
        ? z.string().optional()
        : z.string().min(3, { message: 'Invalid city' }).max(50),
    state:
      type === 'sign-in'
        ? z.string().optional()
        : z.string().min(2, { message: 'Invalid state' }).max(2),
    postalCode:
      type === 'sign-in'
        ? z.string().optional()
        : z.string().min(3, { message: 'Invalid postal code' }).max(3),
    dateOfBirth:
      type === 'sign-in'
        ? z.string().optional()
        : z.string().refine(
            (date) => {
              const regex = /^\d{4}-\d{2}-\d{2}$/;
              return regex.test(date);
            },
            {
              message: 'Invalid date of birth'
            }
          ),
    ssn:
      type === 'sign-in'
        ? z.string().optional()
        : z.number().min(3, { message: 'Invalid ssn' }),
    // both
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, 'Password must be 8 characters long')
      .max(12, 'Password must not exceed 12 characters')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[A-Z]/, 'Password must contain at least one Uppercase letter')
      .regex(/[@$!%*?&#]/, 'Password must contain at least one Special letter')
  });

// validate password only
const passwordSchema = authFormSchema('sign-in').shape.password;
export const validatePassword = (password: string) => {
  const result = passwordSchema.safeParse(password);
  if (!result.success) {
    console.log(result.error.errors);
    return false;
  }
  return true;
};
