<template>
  <q-page padding class="flex flex-center">
    <div class="small">
      <h5>Graph</h5>
      <BarChart :chart-data="datacollection"></BarChart>
      <SelectFirst :selectOptions="options" :fillData="fillData" />
      <button @click="debuger()">Debugger</button>
    </div>
  </q-page>
</template>

<script>
import BarChart from "./BarChart.vue";
import SelectFirst from "./SelectFirst.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BarChart,
    SelectFirst
  },
  data() {
    return {
      datacollection: null,
      options: []
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
            label: this.labelSetFirstGraph,
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
      this.options = this.optionsFirstGraph;
    },
    debuger() {
      this.fillData();
      console.log("debugger", this.optionsFirstGraph);
    }
  },
  computed: {
    ...mapGetters("store", ["labelSetFirstGraph"]),
    ...mapGetters("store", ["optionsFirstGraph"])
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 100px auto;
}
</style>
