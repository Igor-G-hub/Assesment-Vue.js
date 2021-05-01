<template>
  <q-page padding class="flex flex-center row">
    <div class="arrow-right row justify-end">
      <router-link to="/by-country">
        <img src="../components/arrow-right.svg" />
      </router-link>
    </div>
    <h5 class="text-center">Exchange Rate Chart</h5>
    <div class="small row flex-center justify-around">
      <BarChart :chart-data="datacollection"></BarChart>
      <SelectFirst
        class="col-xl-4 col-lg-4 col-sm-4 col-xs-6"
        :selectOptions="options"
        :fillData="fillData"
      />
    </div>
  </q-page>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import SelectFirst from "../components/SelectFirst.vue";
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
  margin: 0 auto;
}
.arrow-right {
  width: 100%;
}

.arrow-right img {
  width: 35px;
  height: 35px;
  margin-right: 100px;
}

h5 {
  width: 100%;
}
</style>
