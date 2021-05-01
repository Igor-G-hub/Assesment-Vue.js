<template>
  <q-page padding class="flex flex-center">
    <div class="small">
      <h5>Graph</h5>
      <BarChart :chart-data="datacollection"></BarChart>
      <SelectSecond
        class="uppercase"
        :selectOptions="options"
        :fillData="fillData"
      />
    </div>
  </q-page>
</template>

<script>
import BarChart from "./BarChart.vue";
import SelectSecond from "./SelectSecond.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    BarChart,
    SelectSecond
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
            label: this.labelSetSecondGraph,
            backgroundColor: "#f87979",
            data: this.setExchRatesSecondGraph
          }
        ]
      };
      this.options = this.optionsSecondGraph;
    }
  },
  computed: {
    ...mapGetters("store", [
      "setGraphsDates",
      "optionsSecondGraph",
      "labelSetSecondGraph",
      "setExchRatesSecondGraph"
    ])
  },
  watch: {
    setExchRatesSecondGraph() {
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
