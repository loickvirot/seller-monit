<template>
  <div>
    <div class="p-4">
      <Card>
        <div class="flex justify-between">
          <InputDefaultSelect>
            <InputOption value="1" label="Team 1"></InputOption>
            <InputOption value="2" label="Team 2"></InputOption>
            <InputOption value="3" label="Team 3"></InputOption>
          </InputDefaultSelect>
          <div class="flex space-x-4">
            <ClientOnly>
              <vue-tailwind-datepicker i18n="fr" v-model="dateValue" :formatter="formater" :placeholder="getPlaceholder()" as-single />
            </ClientOnly>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';

const dateValue = ref(dayjs(Date.now()).format("DD MMM YYYY"));
const formater = ref({
  date: 'DD MMM YYYY',
  month: 'MMM'
})

function getPlaceholder(): string {
  return dateValue.value
}
</script>