import { z } from 'zod';

export const objectiveFormSchema = z.object({
    objective_id: z.string(),
    streak_length: z.number().optional(),
    time: z.string().optional(),
    user_notes: z.string().optional()
});

export type objectiveFormSchema = typeof objectiveFormSchema;