<script lang="ts">
import "../app.css";
import '../styles.css'

import {ModeWatcher} from 'mode-watcher';
import { invalidate } from '$app/navigation'
import { onMount } from 'svelte'
import Navbar from '$lib/components/Navbar.svelte';
const { data: propsData, children} = $props()

const { supabase, session } = propsData;
let loggedIn = $derived(session);
onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
        if (newSession?.expires_at !== session?.expires_at) {
            invalidate('supabase:auth')
        }
    })
    return () => data.subscription.unsubscribe()
    })
</script><!-- src/routes/+layout.svelte -->


<svelte:head>
	<title>PokeyPrac</title>
</svelte:head>
<div style="relative flex flex-co h-screen w-screen">
    <ModeWatcher defaultMode = {"dark"}/>
	<div class="overflow-hidden">
        <div class="flex-1">
            <Navbar loggedIn={loggedIn}/>
        </div>
        <div class="flex-1 overflow-auto">
            {@render children()}
        </div>
	</div>
</div>


<style>
</style>
