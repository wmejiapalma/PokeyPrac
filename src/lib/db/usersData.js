import { eq } from 'drizzle-orm';
import {db} from './index';
import { desc, asc} from 'drizzle-orm';
import { user_objectives, user_profiles, game_objectives, game_levels } from './schema';
import { getLevelObjectives } from './gameData';

export async function getUserObjectives(userId){
    try {
        const res = await db.select().from(user_objectives).where(eq(user_objectives.user_id, userId)).orderBy(desc(user_objectives.date_created));
        return res;
    } catch (error) {
        console.error('Error fetching user objectives:', error);
        throw error;
    }
}
export async function getUserObjectivesDisplay(userId){
    try {
        const res = await db.select({
            objective_level: game_levels.level_name,
            objective_name: game_objectives.objective_name,
            streak_length: user_objectives.streak_length,
            time: user_objectives.time,
            date_created: user_objectives.date_created,
            user_notes: user_objectives.user_notes,
        }).from(user_objectives)
        .innerJoin(game_objectives, eq(user_objectives.objective_id, game_objectives.id))
        .innerJoin(game_levels, eq(game_objectives.level_id, game_levels.id))
        .where(eq(user_objectives.user_id, userId))
        .orderBy(desc(user_objectives.date_created));
        console.log(res);
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