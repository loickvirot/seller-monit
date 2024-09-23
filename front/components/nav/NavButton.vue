<template>
  <li class="flex">
    <a :class="`transition rounded px-4 py-1 my-auto ${active ? 'bg-blue-100 text-blue-600 border border-blue-300' : 'border border-white text-slate-600 hover:bg-slate-50 hover:border-slate-300'}`" :href="href">{{ label }}</a>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
  label: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})
</script>