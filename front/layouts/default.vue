<template>
  <div class="bg-slate-50 min-h-screen">
    <div class="bg-white flex p-4 space-x-6 border-b">
      <div class="flex">
        <h1 class="text-xl font-bold my-auto">
          <a href="#">SELLER MONIT</a>
        </h1>
      </div>
      <NavBar>
        <NavButton label="Team" href="/team" :active="route.path == '/team'" />
        <NavButton label="Agenda" href="/agenda" :active="route.path == '/agenda'"/>
        <NavButton label="Roadmap" href="/roadmap" :active="route.path == '/roadmap'"/>
      </NavBar>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>