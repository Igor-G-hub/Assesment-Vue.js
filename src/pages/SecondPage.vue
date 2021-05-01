<template>
  <q-page padding class="flex flex-center row">
    <div class="arrow-left row justify-start">
      <router-link to="/">
        <img src="../components/arrow-left.svg" />
      </router-link>
    </div>
    <h5 class="text-center">Exchange Rate Chart</h5>
    <div class="small row flex-center justify-around">
      <BarChart :chart-data="datacollection"></BarChart>
      <SelectSecond
        class="col-xl-4 col-lg-4 col-sm-4 col-xs-6"
        :selectOptions="options"
        :fillData="fillData"
      />
    </div>
  </q-page>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import SelectSecond from "../components/SelectSecond.vue";
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
  width: 80%;
  margin: 0 auto;
}
.arrow-left {
  width: 100%;
}

.arrow-left img {
  width: 35px;
  height: 35px;
  margin-left: 100px;
}

h5 {
  width: 100%;
}
</style>
