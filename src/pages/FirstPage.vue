<template>
  <q-page padding class="flex flex-center">
    <div class="small">
      <h5>Graph</h5>
      <BarChart :chart-data="datacollection"></BarChart>
      <SelectFirst :option="options" />
    </div>
  </q-page>
</template>

<script>
import BarChart from "./BarChart.vue";
import SelectFirst from "./SelectFirst.vue";

export default {
  components: {
    BarChart,
    SelectFirst
  },
  data() {
    return {
      datacollection: null,
      options: ["EUR", "USD", "AUD", "HRK"]
    };
  },
  created() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          "01-01-2021",
          "02-01-2021",
          "03-01-2021",
          "04-01-2021",
          "05-01-2021",
          "06-01-2021",
          "07-01-2021"
        ],
        datasets: [
          {
            label: "EUR",
            backgroundColor: "#f87979",
            data: [
              7.657876,
              7.333333,
              7.896452,
              7.555555,
              7.4758963,
              7.4578966,
              7.4575896
            ]
          }
        ]
      };
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 100px auto;
}
</style>
