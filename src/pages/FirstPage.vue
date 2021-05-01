<template>
  <q-page padding class="flex flex-center column">
    <div class="arrow-right">
      <img src="../components/arrow-right.svg" class="self-end arrow right" />
    </div>
    <div class="small row flex-center justify-around">
      <h5>Graph</h5>
      <BarChart :chart-data="datacollection"></BarChart>
      <SelectFirst
        class="select"
        :selectOptions="options"
        :fillData="fillData"
      />
    </div>
  </q-page>
</template>

<script>
import BarChart from "./BarChart.vue";
import SelectFirst from "./SelectFirst.vue";
import { mapGetters, mapMutations } from "vuex";
import arrowRight from "../components/arrow-right.svg";

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
    ...mapMutations("store", ["storageCurrencyFirstGraph"])
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
  width: 80%;
  margin: 70px auto;
}
.arrow-right {
  background-color: blue;
}

.arrow-right img {
  width: 40px;
  height: 40px;
}
.flex.flex-center {
}
.select {
  width: 30%;
}
</style>
