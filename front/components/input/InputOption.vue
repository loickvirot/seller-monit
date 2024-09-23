<template>
  <option :value="value">{{ label }}</option>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

defineProps({
  value: {
    required: true,
    type: String
  },
  label: {
    required: true,
    type: String
  }
})

</script>