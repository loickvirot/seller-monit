<template>
  <NuxtLink :to="href" :class="`
    transition rounded py-0 px-2 bg-white cursor-pointer h-11 border
    hover:bg-blue-100 hover:border-blue-300 hover:text-blue-500
    active:bg-blue-500 active:text-white
    ${small ? 'text-xs' : ''}
  `">
    <span v-if="label">{{ label }}</span>
    <font-awesome v-if="icon" :icon="icon" />
  </NuxtLink>
</template>

<script lang=ts setup>
import { type PropType, defineProps } from 'vue';

defineProps({
  label: {
    required: false, 
    type: String
  },
  href: {
    required: false, 
    type: String
  },
  small: {
    required: false,
    type: Boolean,
    defaut: false
  },
  icon: {
    required: false,
    type: Array as PropType<String[]>
  }
})
</script>