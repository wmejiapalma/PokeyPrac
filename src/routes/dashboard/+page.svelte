<script lang="ts">
    import type { PageData } from "../$types";
    const { data } = $props();
    let message = $derived(data.props.message);
    // your script goes here
</script>
<h1>
    Hello!
</h1>

<style>
    /* your styles go here */
</style>
