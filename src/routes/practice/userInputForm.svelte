<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import * as Select from "$lib/components/ui/select";
    import * as Card from "$lib/components/ui/card";
    import SuperDebug from "sveltekit-superforms";
    import { Input } from "$lib/components/ui/input";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { type SuperValidated, type Infer, superForm} from "sveltekit-superforms";
    import { objectiveFormSchema, type ObjectiveFormSchema } from "./schema";
    import { object } from "zod";
    import { Textarea } from "$lib/components/ui/textarea";
    

    let props = $props();
    let data: SuperValidated<Infer<ObjectiveFormSchema>> = props.data;
    let {gameLevels, gameObjectives} = props.gameData;
    
    const form = superForm(data, {
        validators: zodClient(objectiveFormSchema),
    });
    const {form: formData, enhance} = form;    

    let selectedLevel = $state(null);
    let selectedObjective = $derived($formData.objective_id? null: null);

    /* Other functions*/

    function getSelectedLevel(){
        return selectedLevel;
    }
    function updateSelectedLevel(value){
        selectedLevel = value;
    }
    function filterObjectivesByLevel(levelId){
        let filtered = gameObjectives.filter((objective) => objective.level_id == levelId);
        return filtered;
    }
</script>

{#snippet selectLevelElement(getState, setState, selectList, placeholder)}
<Select.Root
onSelectedChange={(v) => {
    v && (setState(v.value));
  }}>
    <Select.Trigger>
        <Select.Value placeholder="{placeholder}"/>
    </Select.Trigger>
    <Select.Content>
        {#each selectList as item}
            <Select.Item value={item.id}>{item.level_name}</Select.Item>
        {/each}
    </Select.Content>
</Select.Root>
{/snippet}
<Card.Root class="drop-shadow-lg p-2 m-4 size-1/2">
    <Card.Header>
        <Card.Title> Track your Practice </Card.Title>
        <Card.Description> Choose to add a Streak, Time or both </Card.Description>
    </Card.Header>
    <Card.Content>
        <form method="POST" action="?/create" class="justify-center items-center">
            <div class="tems-center">
                <!-- Selecting the level of the game (ex: Whomps fortress)-->
                <Form.Field {form} name="game_level" class="max-w-full">
                    <Form.Control let:attrs>
                        <Form.Label> Select your Stage </Form.Label>
                        {@render selectLevelElement(getSelectedLevel, updateSelectedLevel, gameLevels, "Select a Stage")}
                    </Form.Control>
                    <Form.FieldErrors/>
                </Form.Field>
                <!-- Selecting objective-->
                <Form.Field {form} name="objective_id" class="max-w-full">
                    <Form.Control let:attrs>
                        <Form.Label> Select your star </Form.Label>
                        <Select.Root disabled={!getSelectedLevel()} selected={selectedObjective}
                        onSelectedChange={(v) => {
                            v && ($formData.objective_id = v.value);
                            
                        }}>
                            <Select.Trigger>
                                <Select.Value placeholder="Select a Star"/>
                            </Select.Trigger>
                            <Select.Content>
                                {#each filterObjectivesByLevel(getSelectedLevel()) as item}
                                    <Select.Item value={item.id}>{item.objective_name}</Select.Item>
                                {/each}
                            </Select.Content>
                        </Select.Root>
                        <input hidden bind:value={$formData.objective_id} name={attrs.name} />
                    </Form.Control>
                    <Form.FieldErrors/>
                </Form.Field>
            </div>
            <!-- streak and time input -->
            <div class="flex justify-center items-center">
                <div class="flex">
                    <div class="mr-3 min-w-fit">
                        <Form.Field {form} name="streak_length" class="">
                            <Form.Control let:attrs>
                                <Form.Label> Streak Length </Form.Label>
                                <Input type="number" inputmode="numeric" pattern="[0-9]*" min="0" max="100" disabled={!$formData.objective_id}  placeholder="Streak length" {...attrs} bind:value={$formData.streak_length} />
                            </Form.Control>
                            <Form.FieldErrors/>
                        </Form.Field>
                    </div>
                    <div class="">
                        <Form.Field {form} name="time">
                            <Form.Control let:attrs>
                                <Form.Label> Time </Form.Label>
                                <Input disabled={!$formData.objective_id} placeholder="Time" {...attrs} bind:value={$formData.time} />
                            </Form.Control>
                            <Form.FieldErrors/>
                        </Form.Field>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <div class="min-w-full">
                    <Form.Field {form} name="user_notes">
                        <Form.Control let:attrs>
                            <Form.Label> How did it go? </Form.Label>
                            <Textarea disabled={!$formData.time || !$formData.streak_length} placeholder="User Notes" {...attrs} bind:value={$formData.user_notes} />
                        </Form.Control>
                        <Form.Description> Insert any notes you want to remember </Form.Description>
                        <Form.FieldErrors/>
                    </Form.Field>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <Form.Button> Submit </Form.Button>
            </div>
        </form>
    </Card.Content>
</Card.Root>
<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->