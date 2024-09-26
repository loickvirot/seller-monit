<template>
  <div>
    <div class="p-4">
      <Card>
        <div class="flex justify-between">
          <InputDefaultSelect>
            <InputOption
              v-for="team in teams"
              :value="team.id.toString()"
              :label="team.name"
            ></InputOption>
          </InputDefaultSelect>
          <div class="flex space-x-4">
            <ClientOnly>
              <vue-tailwind-datepicker
                i18n="fr"
                v-model="dateValue"
                :formatter="formater"
                :placeholder="getPlaceholder()"
                as-single
              />
            </ClientOnly>
          </div>
        </div>
        {{ JSON.stringify(visits) }}
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";

const dateValue = ref(dayjs(Date.now()).format("DD MMM YYYY"));
const formater = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});

function getPlaceholder(): string {
  return dateValue.value;
}

interface Team {
  id: number;
  name: string;
}

interface Visit {
  id: number;
  agent: number;
  start: Date;
  end: Date;
  address: string;
  note: string;
}

// const teams: Team[] = [];

const { data: teams } = await useFetch<Team[]>("http://localhost:3001/team");
const { data: visits } = await useFetch<Visit[]>("http://localhost:3001/visit");
</script>
