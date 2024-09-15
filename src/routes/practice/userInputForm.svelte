<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { Select } from "$lib/components/ui/select";
    import SuperDebug from "sveltekit-superforms";
    import { Input } from "$lib/components/ui/input";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { type SuperValidated, type Infer, superForm} from "sveltekit-superforms";
    import { objectiveFormSchema, type ObjectiveFormSchema } from "./schema";
    let props = $props();
    let data: SuperValidated<Infer<ObjectiveFormSchema>> = props.data;
    let gameLevels = props.gameLevels;
    const form = superForm(data, {
        validators: zodClient(objectiveFormSchema),
    });
    const {form: formData, enhance} = form;
    $inspect(gameLevels);
</script>

<form method="POST" action="?/create" use:enhance>
    <Form.Field {form} name="game_id">
        <Form.Control let:attrs>
            <Form.Label> Select your star </Form.Label>
            <Select />
        </Form.Control>
        <Form.Description> Select the stage you want to </Form.Description>
        <Form.FieldErrors/>
    </Form.Field>

    <Form.Field {form} name="objective_id">
        <Form.Control let:attrs>
            <Form.Label> Select your star </Form.Label>
            <Input {...attrs} bind:value={$formData.objective_id} />
        </Form.Control>
        <Form.Description> Select the stage you want to </Form.Description>
        <Form.FieldErrors/>
    </Form.Field>
    <Form.Button> Submit </Form.Button>
</form>
<SuperDebug data={$formData} />

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->