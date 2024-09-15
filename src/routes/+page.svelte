<script>
    const { data } = $props();
    let email = $derived(data.session?.user.email);
    $inspect(data.session?.user.email);
</script>
{#if data.session}
    <p>Hello {data.session.user.email}</p>
    <a href="auth/logout"> logout </a>
{:else}
    <p>Who are you...</p>
{/if}
