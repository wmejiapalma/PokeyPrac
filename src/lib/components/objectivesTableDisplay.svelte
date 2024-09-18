<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js";
    export let objectives: any[];
    export let caption;
    console.log(objectives);
</script>


<Table.Root>
    <Table.Caption>{caption}</Table.Caption>
    <Table.Header>
      <Table.Row >
        <Table.Head class="">Objective</Table.Head>
        <Table.Head>Streak Length</Table.Head>
        <Table.Head>Time</Table.Head>
        <Table.Head class="text-right">Notes</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each objectives.reverse().slice(0,5) as objective}
        <Table.Row>
          <Table.Cell class="font-medium">{objective.objective_id}</Table.Cell>
          <Table.Cell>{objective.streak_length}</Table.Cell>
          <Table.Cell>{objective.time}</Table.Cell>
          <Table.Cell class="text-right">{objective.user_notes}</Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>