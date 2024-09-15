import type {PageServerLoad} from '$lib/types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({locals}) => {
    if(!locals.user) {
        redirect(307,'/')
    }
    console.log("hello from server");
  return {
    props: {
        message: "hello from server"
    }
  };
};