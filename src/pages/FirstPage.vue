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
import { mapGetters, mapMutations } from "vuex";

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
        labels: this.setGraphsDates,
        datasets: [
          {
            label: this.labelSetFirstGraph,
            backgroundColor: "#f87979",
            data: this.setExchRatesFirstGraph
          }
        ]
      };
      this.options = this.optionsFirstGraph;
    },
    ...mapMutations("store", ["storageCurrencyFirstGraph"]),
    debuger() {
      this.fillData();
    }
  },
  computed: {
    ...mapGetters("store", [
      "labelSetFirstGraph",
      "optionsFirstGraph",
      "setGraphsDates",
      "setExchRatesFirstGraph"
    ])
  },
  watch: {
    setExchRatesFirstGraph() {
      this.fillData();
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
