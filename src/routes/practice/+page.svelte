<script lang='ts'>
    import ObjectivesTableDisplay from "$lib/components/objectivesTableDisplay.svelte";
import type { PageData } from "../$types";
    import UserInputForm from "./userInputForm.svelte";
    let props: PageData = $props();
    let data = props.data;
    let {game, userObjectives, form } = data;
</script>

<div class=" items-center justify-center mx-auto grid grid-cols-2">
    <div class = "col-start-1">
        <UserInputForm class="shrink" gameData={game} data={form}/>
    </div>
    <div class="col-start-2">
        <ObjectivesTableDisplay objectives={userObjectives} caption="Recent Streaks"/>
    </div>
</div>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->