<template>
  <div>
    <q-select
      @input="setCurrency()"
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
  props: ["option"],
  data() {
    return {
      value: "",
      options: this.$props.option
    };
  },
  methods: {
    ...mapState("store", ["selectedCurrencyFirstGraph"]),
    ...mapMutations("store", ["setCurrencyFirstGraph"]),
    debuger() {
      localStorage.setItem("test local storage", 1);
      console.log(localStorage);
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
