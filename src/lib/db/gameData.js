import { eq } from 'drizzle-orm';
import {db} from './index';
import { game_objectives, game_levels, games} from './schema';

export async function getGameObjectives(gameId){
    try {
        const res = await db.select().from(game_objectives)
        .innerJoin(game_objectives, eq(game_objectives.level_id, game_levels.id))
        .where(eq(game_levels.game_id, gameId));
        return res;
    } catch (error) {

    }
}

export async function getGameLevels(gameId){

}

export async function getLevelObjectives(levelId){

}

export async function getObjectiveDetails(objectiveId){

}