<template>
  <div>
    <q-select
      standout="bg-red text-white"
      v-model="value"
      :options="options"
      label=""
    />
    <button @click="debuger()">Debuger</button>
  </div>
</template>
<script>
export default {
  name: "Input",
  data() {
    return {
      value: "",
      options: ["EUR", "USD", "AUD", "HRK"]
    };
  },
  methods: {
    debuger() {
      return console.log(this.value);
    }
  }
};
</script>

<style></style>
