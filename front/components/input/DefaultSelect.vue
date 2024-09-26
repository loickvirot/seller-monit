<template>
  <div>
    <select
      name=""
      id=""
      class="rounded-md px-3 py-2 bg-white cursor-pointer h-11 border focus:border-blue-500 focus:ring focus:ring-blue-100"
      v-model="value"
    >
      <slot></slot>
    </select>
  </div>
</template>

<script setup lang="ts">
const value = defineModel();
</script>
