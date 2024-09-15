import { db } from '$lib/db';
export const load = async () => {
    const user_profiles = await db.query.user_profiles.findMany();
    return {
        user_profiles
    }
}