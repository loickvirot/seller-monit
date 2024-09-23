<template>
  <button :class="`rounded-md py-2 px-3 bg-white cursor-pointer h-11 border`">
    <font-awesome v-if="icon" :icon="icon" />
  </button>
</template>

<script lang=ts setup>
import { type PropType, defineProps } from 'vue';

defineProps({
  icon: {
    required: false,
    type: Array as PropType<String[]>
  }
})

</script>