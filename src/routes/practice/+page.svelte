<script lang='ts'>
    import type { PageData } from "../$types";
    import UserInputForm from "./userInputForm.svelte";
    let props: PageData = $props();
    let data = props.data;
    let { gameLevels, userObjectives, form } = data;
</script>

<h1>
    Hello from practice! looks pretty empty to me....
    <UserInputForm gameLevels={gameLevels} data={form}/>
</h1>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->