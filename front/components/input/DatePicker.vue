<template>
  <client-only>
    <vue-tailwind-datepicker
      i18n="fr"
      v-model="value"
      :formatter="formater"
      as-single
    />
  </client-only>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = defineModel();

const formater = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});
</script>
