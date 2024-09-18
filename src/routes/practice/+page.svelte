<script lang='ts'>
    import ObjectivesTableDisplay from "$lib/components/objectivesTableDisplay.svelte";
import type { PageData } from "../$types";
    import UserInputForm from "./userInputForm.svelte";
    let props: PageData = $props();
    let data = props.data;
    let {game, userObjectives, form } = data;
</script>

<div class="max-w-screen-sm items-center justify-center flex flex-col mx-auto">
    <UserInputForm gameData={game} data={form}/>
    <ObjectivesTableDisplay objectives={userObjectives} caption="Recent Streaks"/>
</div>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->