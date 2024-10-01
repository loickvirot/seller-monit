<template>
  <div>
    <div class="p-4">
      <Card>
        <div class="flex justify-between p-4">
          <InputDefaultSelect v-model="selectedTeam">
            <InputOption
              v-for="team in teams"
              :value="team.id.toString()"
              :label="team.name"
            ></InputOption>
          </InputDefaultSelect>
          <div class="flex space-x-4">
            <client-only>
              <vue-tailwind-datepicker
                i18n="fr"
                v-model="dateValue"
                :formatter="formater"
                :placeholder="getPlaceholder()"
                as-single
              />
            </client-only>
          </div>
        </div>
        <div class="border-b"></div>
        <div class="divide-y">
          <TeamTimelineItem
            v-for="user in getUsersVisits()"
            :key="user.name"
            :user="user.name"
            :visits="visits ?? []"
            :colors="user.color"
          />
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";
import TeamTimelineItem from "~/components/graph/TeamTimelineItem.vue";
import colors from "tailwindcss/colors";

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
  agent: {
    id: number;
    name: string;
  };
  start: Date;
  end: Date;
  address: string;
  note: string;
}

const { data: teams } = await useFetch<Team[]>("http://localhost:3001/team");

const selectedTeam = ref(teams.value ? teams.value[0].id.toString() : "");
watch(selectedTeam, (v: string) => {
  console.log(v);
});

const { data: visits } = await useAsyncData<Visit[]>(
  "cafes",
  () =>
    $fetch(`/visit/team/${selectedTeam.value}`, {
      method: "GET",
      baseURL: "http://localhost:3001",
    }),
  {
    watch: [selectedTeam],
  }
);

const graphColors = [
  colors.blue[500],
  colors.purple[500],
  colors.amber[500],
  colors.green[700],
];

function getUsersVisits() {
  return [
    ...new Set(
      visits.value?.map((visit: Visit) => visit.agent.name)
    ),
  ].map((username: string, index: number) => ({
    name: username,
    color: graphColors[index],
  }));
}
</script>
