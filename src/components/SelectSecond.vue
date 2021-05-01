<template>
  <div>
    <q-select
      @input="
        setCountry();
        fillData();
      "
      class="select-second"
      standout="bg-red text-white"
      v-model="value"
      :options="options"
      label="Countries"
    />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
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
    ...mapMutations("store", ["setCountrySecondGraph"]),
    setCountry() {
      this.setCountrySecondGraph(this.value);
    }
  }
};
</script>

<style></style>
