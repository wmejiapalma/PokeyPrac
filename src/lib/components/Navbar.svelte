<script>
    import { toggleMode } from 'mode-watcher';
    import Button from "./ui/button/button.svelte";

    export let loggedIn;
</script>

<div>
    <!-- Left side -->
    <div class="flex">
        <div> PokeyPrac </div>
        {#if loggedIn}
            <a href="dashboard" data-sveltekit-preload-data> dashboard </a>
            <a href="practice" data-sveltekit-preload-data> practice </a>
        {/if}
    </div>
    <!-- Right side -->
    <div class = "flex flex-1">
        {#if loggedIn}
            <a href="auth/logout"> logout </a>
        {:else}
            <a href="auth/login/twitch"> login </a>
        {/if}
    </div>
    <Button onclick={toggleMode} />
</div>
