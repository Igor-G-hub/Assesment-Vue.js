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
      <button @click="debuger()">Debugger</button>
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
            label: "LABEL",
            backgroundColor: "#f87979",
            data: [
              "5.213565",
              "6.245245",
              "7.444456",
              "8.444757",
              "6.8987456",
              "8.523466",
              "7.452654"
            ]
          }
        ]
      };
      this.options = this.optionsSecondGraph;
    },
    debuger() {
      this.fillData();
      console.log("secondPage", this.optionsSecondGraph);
    }
  },
  computed: {
    ...mapGetters("store", ["setGraphsDates", "optionsSecondGraph"])
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 100px auto;
}
</style>
