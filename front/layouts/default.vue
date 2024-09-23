<template>
  <div class="bg-slate-50 min-h-screen">
    <div class="bg-white flex p-4 space-x-6 border-b">
      <div class="flex">
        <h1 class="text-xl font-bold my-auto">
          <a href="#">SELLER MONIT</a>
        </h1>
      </div>
      <NavBar>
        <NavButton label="Team" href="#" :active="true" />
        <NavButton label="Agenda" href="#" />
        <NavButton label="Roadmap" href="#" />
      </NavBar>
    </div>
    <slot></slot>
  </div>
</template>