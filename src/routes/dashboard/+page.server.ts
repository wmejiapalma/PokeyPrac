import type {PageServerLoad} from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { safeGetSession }, cookies }) => {
    return {
        message: "Hello from server"
    }
};