import { z } from 'zod';

export const objectiveFormSchema = z.object({
    id: z.string().optional(),
    objective_id: z.number(), //Id is a number
    streak_length: z.number().optional(),
    time: z.string().optional(),
    user_notes: z.string().optional()
});

export type objectiveFormSchema = typeof objectiveFormSchema;