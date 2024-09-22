<script lang="ts"> 
    import { ChartColumn, Home, Settings } from 'lucide-svelte';

    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import type { PageData } from "../$types";
    import { Badge } from "$lib/components/ui/badge";
    import DashboardHome from "$lib/components/dashboard/DashboardHome.svelte";
    import DashboardStats from "$lib/components/dashboard/DashboardStats.svelte";
    import DashboardOptions from "$lib/components/dashboard/DashboardOptions.svelte";
    import Sidebar from "$lib/components/dashboard/Sidebar.svelte";
    const { data } = $props();
    let selected = $state(0);
    function changeSelectedView(index: number){
        selected = index;
    }
</script>
<div class="h-screen grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <!-- Sidebar -->
    <Sidebar bind:selectedView={selected} changeSelectedView={changeSelectedView} />
    <!-- Main content -->
    <main class="w-full flex flex-1 overflow-auto flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      {#if selected === 0}
        <DashboardHome />
      {:else if selected === 1}
        <DashboardStats />
      {:else if selected === 2}
        <DashboardOptions />
      {/if}
    </main>
</div>
<style>
    /* your styles go here */
</style>
