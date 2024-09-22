<script lang="ts">
    import { ChartColumn, Home, Settings } from 'lucide-svelte';
    export let selectedView = 0;
    export let changeSelectedView;
</script>
<div class="bg-muted/40 hidden border-r md:block pu-4">
    <div class="flex flex-col gap-2">
      <div class="flex-1">
        <nav class="grid items-start px-2 pt-2 text-sm font-medium lg:px-4">
          <button
          onclick={() => changeSelectedView(0)}
            class="text-muted-foreground hover:text-primary pu-2 flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
          >
            <Home class="h-4 w-4" />
            Home
          </button>
          <button
            onclick={() => changeSelectedView(1)}
            class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
          >
            <ChartColumn class="h-4 w-4" />
            Stats
          </button>
          <button
          onclick={() => changeSelectedView(2)}
          class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
        >
          <Settings class="h-4 w-4"/>
          Settings
          </button>
        </nav>
      </div>
    </div>
</div>
<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->