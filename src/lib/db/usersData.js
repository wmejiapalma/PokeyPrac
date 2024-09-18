import { eq } from 'drizzle-orm';
import {db} from './index';
import { user_objectives, user_profiles } from './schema';

export async function getUserObjectives(userId){
    try {
        const res = await db.select().from(user_objectives).where(eq(user_objectives.user_id, userId));
        return res;
    } catch (error) {
        console.error('Error fetching user objectives:', error);
        throw error;
    }
}

export async function createUserObjective(objective){
    const res = await db.insert(user_objectives).values(objective);
    return res;
}