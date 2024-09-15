import { redirect } from '@sveltejs/kit';

export const GET = async ({locals: {supabase}, url}) => {
    console.log(url.origin);
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "twitch",
        options: {
          redirectTo: url.origin + "/auth/callback",
        },
    })

    if(data.url){
        redirect(307, data.url);
    }

    redirect(307, '/auth/error');
}