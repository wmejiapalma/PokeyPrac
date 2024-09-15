<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../styles.css'
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
</script>

<svelte:head>
	<title>PokeyPrac</title>
</svelte:head>
<div style="min-h-max">
	<Navbar {loggedIn}/>
	<div class="container" style="padding: 50px 0 100px 0">
	{@render children()}
	</div>
</div>
