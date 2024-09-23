<template>
  <li class="flex">
    <a :class="`transition rounded px-4 py-1 my-auto ${active ? 'bg-blue-100 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`" :href="href">{{ label }}</a>
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