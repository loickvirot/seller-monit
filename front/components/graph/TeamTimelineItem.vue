<template>
  <div>
    <div class="flex px-4 font-bold border-b py-1 px-4">
      {{ user }}
    </div>
    <div class="w-full flex divide-x">
      <div class="w-full">
        <client-only>
          <vue-apex-charts
            width="100%"
            height="75%"
            type="rangeBar"
            :options="options"
            :series="getSerie(user)"
          ></vue-apex-charts>
        </client-only>
      </div>
      <div class="flex p-4">
        <div class="m-auto w-64 text-right">11h22</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import colors from "tailwindcss/colors";
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
  user: {
    required: true,
    type: String,
  },
  visits: {
    required: true,
    type: Object as PropType<Visit[]>,
  },
  colors: {
    required: false,
    default: colors.blue[500],
    type: String,
  },
});

const options = {
  chart: {
    id: "vuechart-example",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      rangeBarGroupRows: true,
    },
  },
  fill: {
    type: "solid",
  },
  xaxis: {
    type: "datetime",
    min: new Date("2024-09-26 00:00:00+00").getTime(),
    max: new Date("2024-09-26 23:59:59+00").getTime(),
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
  colors: [props.colors],
};

interface Serie {
  name: string;
  data:
    | {
        x: string;
        y: number[];
      }[]
    | undefined;
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

const getSerie = (username: string): Serie[] => {
  const data = props.visits
    ?.filter((visit: Visit) => visit.agent.name === username)
    .map((visit: Visit) => ({
      x: visit.agent.name,
      y: [new Date(visit.start).getTime(), new Date(visit.end).getTime()],
    }));
  return [
    {
      name: "Visit",
      data,
    },
  ];
};
</script>
