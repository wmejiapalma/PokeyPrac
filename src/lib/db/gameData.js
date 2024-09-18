import { eq } from 'drizzle-orm';
import {db} from './index';
import { game_objectives, game_levels, games} from './schema';

export async function getGameObjectives(gameId){
    try {
        const res = await db.select(game_objectives).from(game_objectives)
        .rightJoin(game_levels, eq(game_objectives.level_id, game_levels.id))
        .where(eq(game_levels.game_id, gameId));
        return res;
    } catch (error) {

    }
}

export async function getGameLevels(gameId){
    try {
        const res = await db.select().from(game_levels).where(eq(game_levels.game_id, gameId));
        return res;
    } catch (error) {
        console.error('Error fetching game levels:', error);
        throw error;
    }
}

export async function getLevelObjectives(levelId){
    try {
        const res = await db.select().from(game_objectives).where(eq(game_objectives.level_id, levelId));
        return res;
    } catch (error) {
        console.error('Error fetching level objectives:', error);
        throw error;
    }
}

export async function getObjectiveDetails(objectiveId){

}