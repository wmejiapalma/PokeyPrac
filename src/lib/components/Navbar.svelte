<script>
    export let loggedIn;
</script>

<div>
    <!-- Left side -->
    <div class="flex">
        <div> PokeyPrac </div>
        {#if loggedIn}
            <a href="dashboard"> dashboard </a>
        {/if}
    </div>
    <!-- Right side -->
    <div class = "flex flex-1">
        {#if loggedIn}
            <a href="auth/logout"> logout </a>
        {:else}
            <a href="auth/login"> login </a>
        {/if}
    </div>
</div>
