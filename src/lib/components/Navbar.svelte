<script>
    import logo from "$lib/assets/logo.svg";
    import Button from "./ui/button/button.svelte";
    import { toggleMode } from "mode-watcher";
    let is_navbar_closed = true;
    function dropMenu(){is_navbar_closed = !is_navbar_closed}
    export let loggedIn;
</script>

<div class="navbar p-2 bg-muted outline outline-muted-foreground">
    <div class="content">
        <div style="display: flex; width: 100%">
            <img src={logo} alt="Logo" class="logo" />
            <a href="/" style="text-decoration: none">
                <h1 class="text-xl bold">PokeyPrac</h1>
            </a>
        </div>
        <div class="links mr-4" class:closed={is_navbar_closed}>
            <a href="dashboard" data-sveltekit-preload-data> Dashboard </a>
            <a href="practice" data-sveltekit-preload-data> Practice </a>
            <div class = "">
                {#if loggedIn}
                    <a href="auth/logout"> logout </a>
                {:else}
                    <a href="auth/login/twitch"> login </a>
                {/if}
            </div>
        </div>
        <Button class="max-h-" on:click={toggleMode} variant="outline" size="icon">
            <p
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          >
          L
          </p>
          <p
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          >
          D
          </p>
        </Button>
    </div>
</div>

<style>
    .logo{
        max-width: fit-content;
        max-height: 2rem;
    }
    .navbar{
        top: 0;
    }
    .content{
        margin-left: auto;
        margin-right: auto;
        display: flex;
    }
    .links {
        display: flex;
        gap: 1rem;
        margin-left: auto;
    }
    .dropdown {
        margin-left: auto;
        display: none;
    }
	
  
</style>