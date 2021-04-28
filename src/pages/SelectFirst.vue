<template>
  <div>
    <q-select
      @input="
        setCurrency();
        fillData();
      "
      standout="bg-red text-white"
      v-model="value"
      :options="options"
      label=""
    />
    <button @click="debuger()">Debuger</button>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Input",
  props: ["selectOptions", "fillData"],
  data() {
    return {
      value: "",
      options: this.$props.selectOptions
    };
  },
  methods: {
    ...mapState("store", ["selectedCurrencyFirstGraph"]),
    ...mapMutations("store", ["setCurrencyFirstGraph"]),
    debuger() {
      console.log("select debugger", this.$props.selectOptions);
    },
    setCurrency() {
      this.setCurrencyFirstGraph(this.value);
    },
    mounted() {
      console.log(localStorage);
    }
  }
};
</script>

<style></style>
