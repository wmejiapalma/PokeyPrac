import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getUserObjectivesDisplay, createUserObjective, getUserObjectivesDisplay } from "$lib/db/usersData";
import { superValidate } from "sveltekit-superforms";
import { objectiveFormSchema} from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { getGameLevels, getGameObjectives } from "$lib/db/gameData";
import { invalidateAll } from "$app/navigation";

export const load: PageServerLoad = async ({locals: {safeGetSession}, cookies }) => {
    let defaultGame = "1";
    
    const getUserSession = async function () {
        return await safeGetSession();
    }    

    //Get who the user is
    //Get the data we need to present before the page is loaded

    async function getUserObjectives (){
        const userSession = await getUserSession();
        const userId = userSession?.session?.user.id;
        return await getUserObjectivesDisplay(userId);
    }
    
    const [userObjectives, gameLevels, gameObjectives] = await Promise.all([
        getUserObjectives(),
        getGameLevels(defaultGame),
        getGameObjectives(defaultGame)
    ]);
    const userSession = await getUserSession();
    const display = await getUserObjectivesDisplay(userSession?.session?.user.id);
    //Get the form the user will interact with
    const form = await superValidate(zod(objectiveFormSchema));
    return {
        game: {
            gameLevels,
            gameObjectives
        },
        userObjectives,
        form
    }
};

export const actions: Actions = {
    GET: async({cookies, request}) =>{

    },
    create: async({locals: {safeGetSession}, cookies, request}) =>{
        const session = await safeGetSession();
        const form = await superValidate(request, zod(objectiveFormSchema));
        console.log(form);
        if(!form.valid){
            return fail(400, {
                form
            });
        }
        const objective = {
            user_id: session.user.id,
            ...form.data
        }
        let res = await createUserObjective(objective);
    },
    update: async({cookies, request}) =>{

    },
    delete: async({cookies, request}) =>{

    }

};