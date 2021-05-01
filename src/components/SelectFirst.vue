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
      label="Currency"
    />
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "InputSecond",
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
    setCurrency() {
      this.setCurrencyFirstGraph(this.value);
    }
  }
};
</script>

<style></style>
