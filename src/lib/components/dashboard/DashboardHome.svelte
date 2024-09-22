<script>
  import { Button } from "../ui/button";
  import * as Table from "../ui/table";
  import * as Card from "../ui/card";
  import * as DropdownMenu from "../ui/dropdown-menu";
  import * as Tabs from "$lib/components/ui/tabs";
  import { Switch } from "$lib/components/ui/switch";
  import { Separator } from "../ui/separator";
  import { Label } from "../ui/label";
  // your script goes here
  let lastPracticed = "Shoot into the Wild Blue";
  let currentWeekNumPractice = "4"
  let streaksEnabled = true;
</script>
{#snippet allStreaks()}
<Tabs.Root value="week">
  <div class="flex items-center">
    <Tabs.List>
      <Tabs.Trigger value="week">Week</Tabs.Trigger>
      <Tabs.Trigger value="month">Month</Tabs.Trigger>
      <Tabs.Trigger value="year">Year</Tabs.Trigger>
    </Tabs.List>
    <div class="ml-auto flex items-center gap-2">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            variant="outline"
            size="sm"
            class="h-7 gap-1 text-sm"
            builders={[builder]}
          >
            <span class="sr-only sm:not-sr-only">Filter</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Label>Filter by</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.CheckboxItem checked>
            Fulfilled
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem>Declined</DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem>Refunded</DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <Button size="sm" variant="outline" class="h-7 gap-1 text-sm">
        <span class="sr-only sm:not-sr-only">Export</span>
      </Button>
    </div>
  </div>
  <Tabs.Content value="week">
    <Card.Root class="whitespace-nowrap">
      <Card.Header class="px-7">
        <Card.Title>Streaks</Card.Title>
        <Card.Description>View your recent streaks</Card.Description>
      </Card.Header>
      <Card.Content>
        <Table.Root>
          <Table.Header class="whitespace-nowrap">
            <Table.Row>
              <Table.Head>Star</Table.Head>
              <Table.Head class="hidden sm:table-cell">
                Streak
              </Table.Head>
              <Table.Head class="hidden md:table-cell">
                Time
              </Table.Head>
              <Table.Head class="text-center">Date</Table.Head>
              <Table.Head class="text-right">Notes</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body class="whitespace-nowrap">
            <Table.Row>
              <Table.Cell>
                <div class="font-medium">Shoot into the Wild Blue</div>
                <div
                  class="text-muted-foreground hidden text-sm md:inline whitespace-nowrap"
                >
                  Whomps Fortress
                </div>
              </Table.Cell>
              <Table.Cell class="hidden sm:table-cell">
                5
              </Table.Cell>
              <Table.Cell class="hidden sm:table-cell">
                9.86
              </Table.Cell>
              <Table.Cell class="hidden md:table-cell">
                2023-06-25
              </Table.Cell>
              <Table.Cell class="text-right">N/A</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Card.Content>
    </Card.Root>
  </Tabs.Content>
</Tabs.Root>
{/snippet}
{#snippet userGreeting()}
<Card.Root class="sm:col-span-2">
  <Card.Header class="pb-3">
    <Card.Title>Autofill Practice</Card.Title>
    <Card.Description class="max-w-lg text-balance leading-relaxed">
      Last time you were practicing {lastPracticed}
    </Card.Description>
  </Card.Header>
  <Card.Footer>
    <Button>Use Previous Practice Data</Button>
  </Card.Footer>
</Card.Root>
<Card.Root>
  <Card.Header class="pb-2">
    <Card.Description>This Week</Card.Description>
    <Card.Title class="text-4xl">+{currentWeekNumPractice}</Card.Title>
  </Card.Header>
  <Card.Content>
    <div class="text-muted-foreground text-xs">+25% from last week</div>
  </Card.Content>
</Card.Root>
<Card.Root>
  <Card.Header class="pb-2">
    <Card.Description>This Month</Card.Description>
    <Card.Title class="text-4xl">+{currentWeekNumPractice}</Card.Title>
  </Card.Header>
  <Card.Content>
    <div class="text-muted-foreground text-xs">+25% from last week</div>
  </Card.Content>
</Card.Root>
{/snippet}
{#snippet quickAdd()}
  <Card.Root class="overflow-hidden w-full">
    <Card.Header class="bg-muted/50 flex flex-row items-center">
      <div class="grid gap-0.5 flex-1">
        <Card.Title class="group flex items-center gap-2 text-lg">
          Quick add
          <Button
            size="icon"
            variant="outline"
            class="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
          >
            <span class="sr-only">Copy Order ID</span>
          </Button>
        </Card.Title>
      </div>
      <div class="flex items-center space-x-2">
        <Switch bind:checked={streaksEnabled}/>
        <Label for="streak-switch">Include Streak</Label>
      </div>
    </Card.Header>
    <Card.Content class="p-6 text-sm">
      <div class="grid gap-3">
        <div> Choose Stage </div>
        <Separator class="my-2" />
        <div> Choose Star </div>
      <Separator class="my-4" />
      <div class="grid grid-cols-2 gap-4 w-max">
        <div>
          Streak
        </div>
        <div>
          Time
        </div>
      </div>
      <Separator class="my-4" />
      <div class="grid gap-3">
        <div class="font-semibold">Practice Info</div>
        <dl class="grid gap-3">
          <div class="flex items-center justify-between">
            <dt class="text-muted-foreground">Stage</dt>
            <dd>Whomps Fortress</dd>
          </div>
          <div class="flex items-center justify-between">
            <dt class="text-muted-foreground">Star</dt>
            <dd>
              <a>Shoot into the wild blue</a>
            </dd>
          </div>
        </dl>
      </div>
    </Card.Content>
    <Card.Footer class="bg-muted/50 flex flex-row items-center border-t px-6 py-3">
      <div class="text-muted-foreground text-xs">
        Last Practice logged: <time dateTime="2023-11-23">November 23, 2023</time>
      </div>
    </Card.Footer>
  </Card.Root>
{/snippet}
<!-- Title -->
<div class="flex items-center">
    <h1 class="text-lg font-semibold md:text-2xl">Poke711's Home</h1>
</div>
<!-- Main content -->
<div class="grid w-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
  <div class="grid w-full auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
    <div class="lg:col-span-2">
      <div class="grid row-start-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {@render userGreeting()}
      </div>
      <!-- all Streaks-->
      <div class="row-start-2 pt-3 lg:col-span-2">
        {@render allStreaks()}
      </div>
    </div>
  </div>
  <!-- right side-->
  <div class="row-start-1 col-start-3 w-full">
    {@render quickAdd()}
  </div>
</div>
<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->